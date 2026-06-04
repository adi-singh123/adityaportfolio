
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

type GroupedExperience = {
  company: string;
  roles: ExperienceItem[];
};

export const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const experiences: ExperienceItem[] = [

            {
      title: "Software Developer",
      company: "Phoenix Advanced Softwares Private Limited",
      period: "April 2025 - Present",
      description:
          "Working on the V3Cars project, developing a car rental application using  Next.js, Node.js, SQL,  and Redux. Responsible for implementing new features, optimizing performance, and ensuring a seamless user experience.",
   
      skills: ["React", "TypeScript", "Next.js", "Redux" , "GitHub Copilot"],
    },



        {
      title: "Full Stack Developer",
      company: "Bilvaleaf Private limited",
      period: "July 2025 - january 2026",
      description:
          "Developing scalable full-stack solutions using React.js, Next.js, Node.js, SQL , Express.js , Redux ",
   
      skills: ["React", "TypeScript", "Next.js", "Redux", "Prompt engineering" , "GPT"],
    },
    // {
    //   title: "Augmented Developer ",
    //   company: "Mindcraft Labs",
    //   period: "Jan 2025 - May 2025",
    //   description:
    //     "Design, develop, and deploy end-to-end AI solutions, including AI chatbots, callers, and data analytics tools.",
    //   skills: ["React", "TypeScript", "Next.js", "Redux", "Prompt engineering", "Firebase", "Telegram Bot"],
    // },
    {
      title: "Frontend Developer",
      company: "EasySoft Services",
      period: "March 2025 - july 2025",
      description:
        "Developed and maintained Frontend applications using React and improved application performance by 40%. Also worked on an admin dashboard and Tourist application by Next.js.",
      skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    },
    // {
    //   title: "Web Developer",
    //   company: "Jagruti Rehabilitation Centre",
    //   period: "Oct 2024 - Dec 2024",
    //   description:
    //     "Developed and maintained frontend applications using React and Node for HMS (Labs, Pharmacy, OPD, Account, Doctor), focusing on accessibility and user experience.",
    //   skills: ["Shadcn", "React", "Node", "Tailwind CSS", "Express.js", "Google Translate", "Google Speech API"],
    // },
    // {
    //   title: "Full Stack Developer",
    //   company: "CCA Techno Private Limited",
    //   period: "Jun 2024 - Sep 2024",
    //   description:
    //     "Worked on HMS (Labs, Pharmacy, OPD, Account, Doctor) using React and Node, with a focus on UI accessibility and smooth user experience.",
    //   skills: ["Shadcn", "React", "Node", "Tailwind CSS", "Express.js", "Google Translate", "Google Speech API"],
    // },
  ];

  // Group experiences by company
  const groupedExperiences = experiences.reduce<GroupedExperience[]>((acc, exp) => {
    const existingCompany = acc.find(item => item.company === exp.company);
    if (existingCompany) {
      existingCompany.roles.push(exp);
    } else {
      acc.push({
        company: exp.company,
        roles: [exp]
      });
    }
    return acc;
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">My journey in tech</p>
        </motion.div>

        <div className="space-y-8">
          {groupedExperiences.map((companyExp, index) => (
            <ExperienceCard key={index} companyExperience={companyExp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard: React.FC<{ companyExperience: GroupedExperience; index: number }> = ({ companyExperience, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getBorderGradient = (
    startColor = '#8B5CF6',
    endColor = '#EC4899'
  ) => {
    return `linear-gradient(${angle}deg, ${startColor}, ${endColor}, ${startColor})`;
  };

  const { company, roles } = companyExperience;
  const isMultipleRoles = roles.length > 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative p-0.5 rounded-xl overflow-hidden"
      style={{ background: getBorderGradient(), backgroundSize: "400% 400%" }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">{company}</h3>
            
            {isMultipleRoles ? (
              <div className="space-y-0">
                {roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative flex min-h-[120px]">
                    <div className="flex items-start gap-4 w-full">
                      <div className="flex flex-col items-center pt-1 h-full">
                        <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full flex-shrink-0"></div>
                        {roleIndex < roles.length - 1 && (
                          <div className="w-0.5 bg-purple-300 dark:bg-purple-600 mt-2 flex-1"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{role.title}</h4>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{role.period}</span>
                        </div>
                        <p className="mt-3 text-gray-600 dark:text-gray-300">{role.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {role.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{roles[0].title}</h4>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>{roles[0].period}</span>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{roles[0].description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {roles[0].skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};