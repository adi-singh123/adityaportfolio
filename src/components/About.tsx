

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Database, Globe, Users, Trophy, CheckCircle2, Zap, Target } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // For animated border colors
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getBorderGradient = (startColor = "#8B5CF6", endColor = "#EC4899") => {
    return `linear-gradient(${angle}deg, ${startColor}, ${endColor}, ${startColor})`;
  };

  const stats = [
    { icon: <Code2 />, value: "1+", label: "Year Experience" },
    { icon: <Users />, label: "Happy Clients", value: "2+" },
    { icon: <Trophy />, label: "Awards Won", value: "0" },
    { icon: <Globe />, label: "Countries", value: "1" },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Javascript", "Tailwind CSS", "Redux"],
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      category: "Language",
      items: ["C++", "JavaScript",],
      icon: <Palette className="w-6 h-6" />,
    },
    {
      category: "Backend / Database",
      items: ["Node.js", "Python", "MongoDB", "Express Js", "REST APIs", "SQL" , "Sequlizer"],
      icon: <Database className="w-6 h-6" />,
    },
  ];

  const achievements = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Successfully delivered 2+ complex projects on time "
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Team Work",
      description: "Work in Team and complete and work on both frontend and backend in Bilvaleaf Private limited"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Quality Focused",
      description: "Maintained 98% test coverage across all projects"
    }
  ];

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Passionate full-stack developer and Problem Solving with a proven track record of 
            creating beautiful, functional, and user-centered digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-1 rounded-xl"
            style={{
              background: getBorderGradient(),
              backgroundSize: "400% 400%",
            }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  With over 6 Months of experience in web development, I specialize in building 
                  scalable applications that solve real business problems. My approach combines 
                  technical expertise with creative problem-solving.
                </p>
                <p>
                  I've had the privilege of working with diverse clients across multiple industries, 
                  from startups to enterprise solutions, delivering high-quality solutions that exceed 
                  expectations.
                </p>
                {/* <p>
                  I'm passionate about staying current with emerging technologies and best practices, 
                  regularly contributing to open-source projects and sharing knowledge with the 
                  developer community.
                </p> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                transition={{ delay: 0.1 * index }}
                // className="relative rounded-xl overflow-hidden"
                // style={{
                //   border: '4px solid',
                //   borderImage: 'linear-gradient(45deg, #f3ec78, #af4261) 1'
                // }}
                // className=" rounded-xl transform transition-all duration-200 hover:shadow-lg"
                // style={{
                //   border: '4px solid',
                //   borderImage: 'linear-gradient(45deg, #f3ec78, #af4261) 1',
                //   borderRadius: '0.75rem'
                // }}
                className="relative p-0.5 rounded-xl overflow-hidden"

                style={{
                  background: getBorderGradient("#3B82F6", "#10B981"),
                  backgroundSize: "400% 400%",
                }}
              >
                
                <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-xl text-center h-full">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.2 + 0.1 * index }}
                    className="text-purple-600 dark:text-purple-400 mb-2"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                transition={{ delay: 0.2 * index }}
                className="relative p-0.5 rounded-xl"
                style={{
                  background: getBorderGradient("#EC4899", "#8B5CF6"),
                  backgroundSize: "400% 400%",
                }}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl h-full">
                  <motion.div
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 2, delay: 1 + index * 0.3, repeat: 0 }}
                    className="text-purple-600 dark:text-purple-400 mb-4"
                  >
                    {achievement.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              className="relative p-0.5 rounded-xl overflow-hidden"
              style={{
                background: getBorderGradient("#3B82F6", "#10B981"),
                backgroundSize: "400% 400%",
              }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl h-full">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    color: ["#8B5CF6", "#EC4899", "#8B5CF6"] 
                  }}
                  transition={{ duration: 3, delay: index * 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="text-purple-600 dark:text-purple-400 mb-4"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skill.category}</h3>
                {/* <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + (0.05 * i) + (0.2 * index) }}
                      whileHover={{ scale: 1.1, backgroundColor: "#a78bfa" }}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div> */}
                              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

