import React, { useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    description: "A responsive online store with seamless checkout experience",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1600",
    delay: 100
  },
  {
    id: 2,
    title: "Financial Dashboard",
    description: "Interactive data visualization for financial analytics",
    image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1600",
    delay: 200
  },
  {
    id: 3,
    title: "Social Networking App",
    description: "A community platform with real-time messaging and content sharing",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600",
    delay: 300
  }
];

export const Showcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.project-card');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('show');
              }, projects[i].delay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of my most impactful work across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card opacity-0 transform translate-y-8 transition-all duration-700 group cursor-pointer"
              style={{transitionDelay: `${project.delay}ms`}}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-800 transition-colors">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="px-8 py-3 rounded-full bg-transparent text-gray-900 font-medium border border-gray-300 hover:bg-gray-100 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};