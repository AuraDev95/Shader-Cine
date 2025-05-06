import ShaderCanvas from '@/components/ShaderCanvas'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
}

const projects: Project[] = [
  {
    id: 'blob-shader',
    title: 'Metaball Shader',
    description: 'Interactive 3D metaball animation using ray marching techniques',
    tags: ['GLSL', 'Three.js', 'Ray Marching'],
    image: '/projects/blob.jpg'
  },
  {
    id: 'particle-system',
    title: 'Particle Physics',
    description: 'GPU-accelerated particle system with realistic physics interactions',
    tags: ['WebGL', 'Compute Shaders', 'Physics'],
    image: '/projects/particles.jpg'
  },
  {
    id: 'procedural-terrain',
    title: 'Procedural Landscape',
    description: 'Procedurally generated terrain with dynamic lighting and atmospheric effects',
    tags: ['GLSL', 'Noise Functions', 'Procedural Generation'],
    image: '/projects/terrain.jpg'
  },
  {
    id: 'fluid-simulation',
    title: 'Fluid Dynamics',
    description: 'Real-time fluid simulation running entirely on the GPU',
    tags: ['WebGL', 'Fluid Dynamics', 'Compute Shaders'],
    image: '/projects/fluid.jpg'
  }
]

export default function Projects() {
  return (
    <main className="relative">
      <div className="absolute inset-0 z-0">
        <ShaderCanvas />
      </div>
      <div className="relative z-10">
        <Navigation />
        <div className="min-h-screen p-8 pt-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-white">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id}>
                  <div className="backdrop-blur-sm bg-black/40 rounded-lg overflow-hidden transition-transform hover:scale-105">
                    <div className="h-48 bg-gray-800 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                        {/* Image placeholder */}
                        <span className="text-sm">Image: {project.title}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
                      <p className="text-gray-300 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 