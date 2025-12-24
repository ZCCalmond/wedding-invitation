import { motion } from 'framer-motion';
import './WeddingInfo.css';

const WeddingInfo = () => {
  const timeline = [
    { time: '11:30', event: '新娘出门', icon: '🏠' },
    { time: '12:30', event: '婚礼仪式', icon: '💒' },
    { time: '13:30', event: '午宴开始', icon: '🍽️' },
    { time: '15:00', event: '敬酒环节', icon: '🥂' },
  ];

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
        婚礼信息
      </motion.h2>
      
      <div className="info-content">
        <motion.div
          className="info-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="info-icon">📅</div>
          <h3>婚礼时间</h3>
          <p className="info-detail">2024年12月24日</p>
          <p className="info-detail">星期二</p>
          <p className="info-detail">农历十一月廿四</p>
        </motion.div>
        
        <motion.div
          className="info-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="info-icon">📍</div>
          <h3>婚礼地点</h3>
          <p className="info-detail">XX大酒店</p>
          <p className="info-detail">宴会厅二楼</p>
          <p className="info-detail">XX市XX区XX路123号</p>
        </motion.div>
        
        <motion.div
          className="info-card timeline-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="info-icon">⏰</div>
          <h3>婚礼流程</h3>
          <div className="timeline">
            {timeline.map((item, index) => (
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
