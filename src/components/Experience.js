import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, type: 'spring' },
    },
  };

  return (
    <section className="experience" id="experience">
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div 
          className="section-header" 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="timeline">
          {/* Work Experience */}
          <motion.div 
            className="timeline-item" 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <span className="timeline-date">March 2026 - Present</span>
              <h3 className="timeline-title">Full Stack Developer Intern (Laravel)</h3>
              <h4 className="timeline-subtitle">Quick Man</h4>
              <ul className="timeline-details">
                <li>Developed full-stack web features using Laravel (PHP) and Blade/Tailwind CSS for responsive frontend interfaces.</li>
                <li>Designed and built RESTful APIs with JWT authentication and role-based access control.</li>
                <li>Performed schema migrations and MySQL query optimization to ensure performance.</li>
                <li>Collaborated in an Agile workflow, managing source code using Git/GitHub for version control.</li>
              </ul>
            </div>
          </motion.div>

          {/* Education 1 */}
          <motion.div 
            className="timeline-item" 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2022 - 2026</span>
              <h3 className="timeline-title">BEng (Hons) in Software Engineering — First Class</h3>
              <h4 className="timeline-subtitle">Asia Pacific Institute of Information Technology (APIIT), Sri Lanka</h4>
            </div>
          </motion.div>

          {/* Education 2 */}
          <motion.div 
            className="timeline-item" 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2019 - 2021</span>
              <h3 className="timeline-title">GCE Advanced Level — Physical Science Stream</h3>
              <h4 className="timeline-subtitle">Government Science College, Matale</h4>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
