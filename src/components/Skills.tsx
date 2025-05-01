import React, { useEffect, useRef } from 'react';

const skills = [
  { name: "UI/UX Design", percentage: 95 },
  { name: "React Development", percentage: 90 },
  { name: "TypeScript", percentage: 85 },
  { name: "Node.js", percentage: 80 },
  { name: "React Native", percentage: 75 },
  { name: "Python", percentage: 70 }
];

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progressBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (progressBarsRef.current) {
              const bars = progressBarsRef.current.querySelectorAll('.progress-bar');
              bars.forEach((bar, index) => {
                setTimeout(() => {
                  (bar as HTMLElement).style.width = `${skills[index].percentage}%`;
                  bar.classList.add('opacity-100');
                }, index * 150);
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
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
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
            <div ref={progressBarsRef} className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="progress-bar h-full rounded-full transition-all duration-1000 ease-out opacity-0"
                      style={{ 
                        width: "0%",
                        backgroundColor: 
                          skill.percentage > 90 ? "#4CAF50" : 
                          skill.percentage > 80 ? "#8BC34A" : 
                          skill.percentage > 70 ? "#CDDC39" : 
                          skill.percentage > 60 ? "#FFC107" : "#FF9800"
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-8">Education & Certifications</h3>
            <div className="space-y-6">
              <div className="education-item">
                <h4 className="text-lg font-semibold">Bachelor of Technology in Computer Science</h4>
                <p className="text-gray-600">Top-tier University, Graduated with Honors</p>
                <p className="text-gray-500 text-sm mt-1">2020 - 2024</p>
              </div>
              
              <div className="education-item">
                <h4 className="text-lg font-semibold">Advanced UI/UX Design Certification</h4>
                <p className="text-gray-600">Design Institute of Technology</p>
                <p className="text-gray-500 text-sm mt-1">2023</p>
              </div>
              
              <div className="education-item">
                <h4 className="text-lg font-semibold">Full Stack Web Development Bootcamp</h4>
                <p className="text-gray-600">Tech Academy</p>
                <p className="text-gray-500 text-sm mt-1">2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};