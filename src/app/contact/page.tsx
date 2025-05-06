import ShaderCanvas from '@/components/ShaderCanvas'
import Navigation from '@/components/Navigation'

export default function Contact() {
  return (
    <main className="relative">
      <div className="absolute inset-0 z-0">
        <ShaderCanvas />
      </div>
      <div className="relative z-10">
        <Navigation />
        <div className="flex min-h-screen flex-col items-center justify-center p-8">
          <div className="max-w-3xl w-full backdrop-blur-sm bg-black/40 p-8 rounded-lg">
            <h1 className="text-4xl font-bold mb-6 text-white">Contact Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-gray-200 space-y-4">
                <p>
                  I&apos;m always interested in new projects and collaborations. 
                  Feel free to reach out if you have a project in mind or just want to say hello.
                </p>
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-3">Connect</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      hello@example.com
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
                      </svg>
                      github.com/username
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.186 8.672L18.743 2.115a.5.5 0 01.707.707l-6.557 6.557a1 1 0 01-1.414 0L4.922 2.822a.5.5 0 01.707-.707l6.557 6.557z" clipRule="evenodd"></path>
                        <path fillRule="evenodd" d="M.5 1.5A.5.5 0 011 1h18a.5.5 0 01.5.5v16a.5.5 0 01-.5.5H1a.5.5 0 01-.5-.5v-16z" clipRule="evenodd"></path>
                      </svg>
                      linkedin.com/in/username
                    </li>
                  </ul>
                </div>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 bg-black/30 border border-gray-700 rounded text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 bg-black/30 border border-gray-700 rounded text-white"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 bg-black/30 border border-gray-700 rounded text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 rounded transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 