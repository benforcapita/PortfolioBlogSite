"use client";

import React from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <span>Ben Blum</span>
        </div>
        <nav>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.name} className={styles.navItem}>
                <Link href={item.href} className={styles.navLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;