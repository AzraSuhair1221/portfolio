import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-text-content">
            <p className="about-lead">
              I am a <span className="text-accent">Software Engineering undergraduate</span> with 
              a strong passion for building scalable, secure, and user-focused applications. 
            </p>
            <p>
              I am fluent in <span className="text-accent">ASP.NET and C#</span>, and have 
              hands-on experience in full-stack development using Laravel, React.js, 
              Node.js, and Flutter, along with cloud deployment using AWS.
            </p>
            <p>
              My projects include developing an OCR-based Online 
              Traffic Fine Payment System and full-stack e-commerce applications, 
              where I focused on clean architecture, secure authentication, and efficient 
              database design.
            </p>
          </div>

          <div className="about-stats">
            <motion.div className="stat-item" whileHover={{ x: 10 }}>
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </motion.div>
            <motion.div className="stat-item" whileHover={{ x: 10 }}>
              <div className="stat-number">3+</div>
              <div className="stat-label">Major Projects</div>
            </motion.div>
            <motion.div className="stat-item" whileHover={{ x: 10 }}>
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedication</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
