"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ShaderCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const scene = new THREE.Scene();

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3(window.innerWidth, window.innerHeight, 1) },
      iMouse: { value: new THREE.Vector2(0, 0) }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec3 iResolution;
        uniform vec2 iMouse;
        varying vec2 vUv;

        float opSmoothUnion(float d1, float d2, float k) {
          float h = clamp(0.5 + 0.5*(d2-d1)/k, 0.0, 1.0);
          return mix(d2, d1, h) - k*h*(1.0-h);
        }

        float sdSphere(vec3 p, float s) {
          return length(p)-s;
        } 

        float map(vec3 p, vec2 mouse) {
          float d = 2.0;
          // Mouse normalized to [-1, 1]
          vec2 m = (mouse / iResolution.xy) * 2.0 - 1.0;
          for (int i = 0; i < 8; i++) { // Fewer spheres for better performance
            float fi = float(i);
            float time = iTime * (fract(fi * 412.531 + 0.513) - 0.5) * 2.0;
            // Center the blobs around the mouse
            vec3 center = vec3(m * 3.0, 0.0) + sin(time + fi * vec3(52.5126, 64.62744, 632.25)) * vec3(2.0, 2.0, 0.8);
            d = opSmoothUnion(
              sdSphere(p - center, mix(0.5, 1.0, fract(fi * 412.531 + 0.5124))),
              d,
              0.4
            );
          }
          return d;
        }

        vec3 calcNormal(in vec3 p, vec2 mouse) {
          const float h = 1e-5;
          const vec2 k = vec2(1,-1);
          return normalize(k.xyy*map(p + k.xyy*h, mouse) + 
                            k.yyx*map(p + k.yyx*h, mouse) + 
                            k.yxy*map(p + k.yxy*h, mouse) + 
                            k.xxx*map(p + k.xxx*h, mouse));
        }

        void main() {
          vec2 fragCoord = vUv * iResolution.xy;
          vec2 uv = fragCoord/iResolution.xy;
          vec2 mouse = iMouse;

          vec3 rayOri = vec3((uv - 0.5) * vec2(iResolution.x/iResolution.y, 1.0) * 6.0, 3.0);
          vec3 rayDir = vec3(0.0, 0.0, -1.0);

          float depth = 0.0;
          vec3 p;

          for(int i = 0; i < 48; i++) { // Fewer steps for better performance
            p = rayOri + rayDir * depth;
            float dist = map(p, mouse);
            depth += dist;
            if (dist < 1e-6) {
              break;
            }
          }

          depth = min(6.0, depth);
          vec3 n = calcNormal(p, mouse);
          float b = max(0.0, dot(n, vec3(0.577)));
          vec3 col = (0.5 + 0.5 * cos((b + iTime * 3.0) + uv.xyx * 2.0 + vec3(0,2,4))) * (0.85 + b * 0.35);
          col *= exp(-depth * 0.15);

          gl_FragColor = vec4(col, 1.0 - (depth - 0.5) / 2.0);
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.iResolution.value.set(window.innerWidth, window.innerHeight, 1);
    }

    function onMouseMove(e: MouseEvent) {
      uniforms.iMouse.value.set(e.clientX, window.innerHeight - e.clientY);
    }

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousemove', onMouseMove, false);

    let animationId: number;
    function animate() {
      uniforms.iTime.value = performance.now() / 1000;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }} />;
};

export default ShaderCanvas;