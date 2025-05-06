import ShaderCanvas from '@/components/ShaderCanvas'
import Navigation from '@/components/Navigation'

export default function About() {
  return (
    <main className="relative">
      <div className="absolute inset-0 z-0">
        <ShaderCanvas />
      </div>
      <div className="relative z-10">
        <Navigation />
        <div className="flex min-h-screen flex-col items-center justify-center p-8">
          <div className="max-w-3xl backdrop-blur-sm bg-black/40 p-8 rounded-lg">
            <h1 className="text-4xl font-bold mb-6 text-white">About Me</h1>
            <div className="text-gray-200 space-y-4">
              <p>
                I&apos;m a creative developer passionate about blending code and art to create immersive digital experiences.
                With a background in both traditional design and programming, I specialize in creating custom shader-based
                visuals that push the boundaries of web technology.
              </p>
              <p>
                My work focuses on interactive experiences that respond to user input, creating dynamic and engaging
                interfaces that go beyond traditional web design. I&apos;m particularly interested in procedural animation,
                generative art, and real-time graphics.
              </p>
              <p>
                When I&apos;m not coding, I enjoy exploring new creative techniques, collaborating with artists and designers,
                and contributing to the open-source community.
              </p>
              <h2 className="text-2xl font-bold mt-6 mb-3 text-white">Skills</h2>
              <ul className="grid grid-cols-2 gap-2">
                <li>• GLSL / Shader Programming</li>
                <li>• Three.js / WebGL</li>
                <li>• React / Next.js</li>
                <li>• JavaScript / TypeScript</li>
                <li>• Creative Coding</li>
                <li>• Interactive Design</li>
                <li>• 3D Modeling</li>
                <li>• UI/UX Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 