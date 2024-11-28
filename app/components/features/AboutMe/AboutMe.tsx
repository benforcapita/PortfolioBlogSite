"use client";

import React from 'react';
import styles from './AboutMe.module.scss';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutMeSection}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>
        I am a passionate developer with 7 years of experience in building interactive and dynamic web applications. My journey in the tech world has been a fulfilling adventure, filled with learning and innovation.
      </p>
    </section>
  );
};

export default AboutMe;
