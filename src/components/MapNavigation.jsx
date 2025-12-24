import { motion } from 'framer-motion';
import './MapNavigation.css';

const MapNavigation = () => {
  const location = {
    name: 'XX大酒店',
    address: 'XX市XX区XX路123号',
    lat: 39.9042, // 示例坐标（北京）
    lng: 116.4074,
  };

  const openWechatMap = () => {
    // 微信内置地图导航
    const url = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${location.lat},${location.lng};title:${location.name};addr:${location.address}`;
    window.location.href = url;
  };

  const openAmapNavigation = () => {
    // 高德地图导航
    const url = `https://uri.amap.com/marker?position=${location.lng},${location.lat}&name=${location.name}&coordinate=gaode&callnative=1`;
    window.location.href = url;
  };

  return (
    <motion.section
      className="map-navigation"
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
        地图导航
      </motion.h2>
      
      <motion.div
        className="map-content"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="map-container">
          <img
            src="https://via.placeholder.com/800x400/fff5e6/c89b7b?text=Map+Placeholder"
            alt="地图"
            className="map-image"
          />
        </div>
        
        <div className="location-info">
          <div className="location-icon">📍</div>
          <h3 className="location-name">{location.name}</h3>
          <p className="location-address">{location.address}</p>
        </div>
        
        <div className="navigation-buttons">
          <motion.button
            className="nav-button wechat-button"
            onClick={openWechatMap}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-icon">🗺️</span>
            <span>微信地图</span>
          </motion.button>
          
          <motion.button
            className="nav-button amap-button"
            onClick={openAmapNavigation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-icon">🧭</span>
            <span>高德地图</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default MapNavigation;
