
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate computer engineering student with a focus on cutting-edge technologies
            that shape the future of autonomous systems and artificial intelligence.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg"
                alt="Hazem Abuelanin"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated computer engineering student with a passion for pushing the boundaries
                of what's possible with autonomous systems and artificial intelligence. My journey in
                technology is driven by a desire to create solutions that make a real impact.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With hands-on experience in robotics, machine learning, and embedded systems, I'm
                constantly exploring new technologies and methodologies to solve complex problems
                in the field of autonomous systems.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-400">10+</h3>
                  <p className="text-gray-300">Projects Completed</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-purple-400">3+</h3>
                  <p className="text-gray-300">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
