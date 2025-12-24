import { useState } from 'react';
import { motion } from 'framer-motion';
import { ENDING_CONSTANTS } from '../constants/ending';
import './Ending.css';

const Ending = () => {
  const { title, message, signature, shareHint, heartEmoji, heartsCount } = ENDING_CONSTANTS;

  // Generate stable random values for hearts animation only once
  const [hearts] = useState(() => 
    Array.from({ length: heartsCount }, (_, i) => ({
      id: i,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
      left: 10 + Math.random() * 80,
      fontSize: 1 + Math.random() * 1.5,
    }))
  );

  return (
    <motion.section
      className="ending"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="hearts-container">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="heart"
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: -100,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "easeInOut",
            }}
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.fontSize}rem`,
            }}
          >
            {heartEmoji}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="ending-content"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="ending-title">{title}</h2>
        
        <motion.p
          className="ending-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
        >
          {message.map((line, index) => (
            <span key={index}>
              {line}
              {index < message.length - 1 && <br />}
            </span>
          ))}
        </motion.p>
        
        <motion.div
          className="signature"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="signature-names">{signature.names}</p>
          <p className="signature-date">{signature.date}</p>
        </motion.div>
        
        <motion.div
          className="share-hint"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <p>{shareHint}</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Ending;
