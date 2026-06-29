import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaReact, FaNodeJs, FaDatabase, FaAws } from 'react-icons/fa';
import { SiCsharp, SiFlutter, SiLaravel, SiTailwindcss } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Background Glows to fill space */}
          <div className="hero-glow-1"></div>
          <div className="hero-glow-2"></div>
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot"></span> Open to Work
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            <span className="greeting-small text-accent">Hi, I'm</span>
            Fathima Asra Suhair
          </motion.h1>

          <motion.h2 className="hero-title" variants={itemVariants}>
            <img
              src="https://readme-typing-svg.demolab.com?font=Outfit&weight=600&size=32&pause=1000&color=d946ef&center=false&vCenter=false&width=435&lines=Software+Engineer;Full-Stack+Developer;Tech+Enthusiast"
              alt="Typing SVG"
            />
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            Passionate about building scalable, secure, and user-focused applications
            using modern technologies. I love creating beautiful and functional web experiences.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href={process.env.PUBLIC_URL + "/Azra_Suhair_Resume.pdf"} download="Azra_Suhair_Resume.pdf" className="btn btn-secondary">
              <FaDownload /> Download CV
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <a href="https://github.com/aarasuhair1221" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/azra-suhair-093b94294/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:suhairazra@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
        >
          <div className="image-wrapper">
            <div className="loading-curve"></div>
            <img
              src={process.env.PUBLIC_URL + "/Profile.png"}
              alt="Fathima Asra Suhair"
              className="profile-image"
            />
            <div className="image-glow"></div>

            <div className="tech-orbit">
              <div className="orbit-icon icon-1"><FaReact /></div>
              <div className="orbit-icon icon-2"><SiLaravel /></div>
              <div className="orbit-icon icon-3"><SiCsharp /></div>
              <div className="orbit-icon icon-4"><FaDatabase /></div>
              <div className="orbit-icon icon-5"><FaNodeJs /></div>
              <div className="orbit-icon icon-6"><SiTailwindcss /></div>
              <div className="orbit-icon icon-7"><SiFlutter /></div>
              <div className="orbit-icon icon-8"><FaAws /></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
