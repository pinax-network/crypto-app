"use client"
import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const footerClassName = isExpanded ? styles.footerExpanded : styles.footer;

  return (
    <footer
      className={footerClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hello
    </footer>
  );
};

export default Footer;
