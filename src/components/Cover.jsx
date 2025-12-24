import { motion } from 'framer-motion';
import './Cover.css';

const Cover = () => {
  return (
    <motion.section
      className="cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="cover-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="cover-title">
          <span className="bride-name">新娘姓名</span>
          <span className="and">&</span>
          <span className="groom-name">新郎姓名</span>
        </h1>
        <p className="cover-date">2024.12.24</p>
        <p className="cover-subtitle">我们结婚了</p>
      </motion.div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="scroll-arrow">↓</div>
        <p>向下滑动</p>
      </motion.div>
    </motion.section>
  );
};

export default Cover;
