import { motion } from 'framer-motion';
import './Ending.css';

const Ending = () => {
  const hearts = Array.from({ length: 12 }, (_, i) => i);

  return (
    <motion.section
      className="ending"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="hearts-container">
        {hearts.map((i) => (
          <motion.div
            key={i}
            className="heart"
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: -100,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              fontSize: `${1 + Math.random() * 1.5}rem`,
            }}
          >
            ❤️
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
        <h2 className="ending-title">感谢您的祝福</h2>
        
        <motion.p
          className="ending-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
        >
          因为有你们的见证<br />
          这份幸福才更加完整<br />
          期待在婚礼当天与您相见
        </motion.p>
        
        <motion.div
          className="signature"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="signature-names">新郎 & 新娘</p>
          <p className="signature-date">2024.12.24</p>
        </motion.div>
        
        <motion.div
          className="share-hint"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <p>💌 点击右上角分享给更多朋友</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Ending;
