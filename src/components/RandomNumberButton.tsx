import React, { useState } from "react";
import styles from '@/styles/Home.module.css'


const RandomNumberButton = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const interval = setInterval(() => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(newRandomNumber);
    },50);
    setTimeout(() => {
        clearInterval(interval);
    }, 500);
  };

  return (
    <div className={styles.description}>
      <div className={styles.description}>
        {randomNumber}
      </div>
      <div className={styles.button}>
        <button onClick={generateRandomNumber} className={styles.button}>Generate Lucky Number</button>
      </div>
    </div>
  );
};

export default RandomNumberButton;