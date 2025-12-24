import { motion } from 'framer-motion';
import { WEDDING_INFO_CONSTANTS } from '../constants/weddingInfo';
import './WeddingInfo.css';

const WeddingInfo = () => {
  const { sectionTitle, dateCard, locationCard, timelineCard } = WEDDING_INFO_CONSTANTS;

  return (
    <motion.section
      className="wedding-info"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {sectionTitle}
      </motion.h2>
      
      <div className="info-content">
        <motion.div
          className="info-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="info-icon">{dateCard.icon}</div>
          <h3>{dateCard.title}</h3>
          <p className="info-detail">{dateCard.date}</p>
          <p className="info-detail">{dateCard.weekday}</p>
          <p className="info-detail">{dateCard.lunarDate}</p>
        </motion.div>
        
        <motion.div
          className="info-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="info-icon">{locationCard.icon}</div>
          <h3>{locationCard.title}</h3>
          <p className="info-detail">{locationCard.venue}</p>
          <p className="info-detail">{locationCard.floor}</p>
          <p className="info-detail">{locationCard.address}</p>
        </motion.div>
        
        <motion.div
          className="info-card timeline-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="info-icon">{timelineCard.icon}</div>
          <h3>{timelineCard.title}</h3>
          <div className="timeline">
            {timelineCard.items.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="timeline-icon">{item.icon}</span>
                <span className="timeline-time">{item.time}</span>
                <span className="timeline-event">{item.event}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WeddingInfo;
