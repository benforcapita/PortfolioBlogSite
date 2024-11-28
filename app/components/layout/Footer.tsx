"use client";

import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className="text-sm">&copy; {new Date().getFullYear()} Ben Blum. All rights reserved.</div>
        <div className={styles.socialLinks}>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
        <form className={styles.subscribeForm}>
          <input type="email" placeholder="Subscribe to our newsletter" className={styles.subscribeInput} />
          <button type="submit" className={styles.subscribeButton}>Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;