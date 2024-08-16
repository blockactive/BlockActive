import React, { useState, useEffect } from 'react';
import styles from '/app/styles/home.module.css'; // Import the CSS module

interface LogoAnimationProps {
  onAnimationComplete?: () => void;
}

const LogoAnimation: React.FC<LogoAnimationProps> = ({ onAnimationComplete }) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationFinished(true);
      if (onAnimationComplete) onAnimationComplete(); // Notify parent when animation completes
    }, 3000); // Adjust duration to match your animation

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className={`${styles.logoContainer} ${animationFinished ? styles.showContent : ''}`}>
      <div className={`${styles.logo} ${styles.left}`}></div>
      <div className={`${styles.logo} ${styles.right}`}></div>
      {animationFinished && <div className={styles.content}>Content here</div>}
    </div>
  );
};

export default LogoAnimation;
