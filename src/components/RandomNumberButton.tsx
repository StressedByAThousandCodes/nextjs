import React, { useRef, useState } from "react";
import styles from '@/styles/Home.module.css'


const RandomNumberButton = () => {

  const [randomNumber, setRandomNumber] = useState(0);
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio('./drum-roll-please-6921.mp3') : undefined
  );

  const generateRandomNumber = () => {
    
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 100) + 1;
      musicPlayers.current?.play();
      setRandomNumber(newRandomNumber);
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
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