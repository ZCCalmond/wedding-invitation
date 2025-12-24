import { motion } from 'framer-motion';
import { COVER_CONSTANTS } from '../constants/cover';
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
          <span className="groom-name">{COVER_CONSTANTS.groomName}</span>
          <span className="and">&</span>
          <span className="bride-name">{COVER_CONSTANTS.brideName}</span>
        </h1>
        <p className="cover-date">{COVER_CONSTANTS.weddingDate}</p>
        <p className="cover-subtitle">{COVER_CONSTANTS.subtitle}</p>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="scroll-arrow">↓</div>
        <p>{COVER_CONSTANTS.scrollHint}</p>
      </motion.div>
    </motion.section>
  );
};

export default Cover;
