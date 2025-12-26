import { motion } from 'framer-motion';
import { MAP_NAVIGATION_CONSTANTS } from '../constants/mapNavigation';
import './MapNavigation.css';

const MapNavigation = () => {
  const { sectionTitle, location, mapPlaceholder, mapAlt, buttons, locationIcon } = MAP_NAVIGATION_CONSTANTS;

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
        {sectionTitle}
      </motion.h2>
      
      <motion.div
        className="map-content"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* 地图 */}
        <div className="map-container">
          <img
            src={mapPlaceholder}
            alt={mapAlt}
            className="map-image"
          />
        </div>
        
        {/* 地址信息紧挨地图，分两行 */}
        <div className="location-info-compact">
          <h3 className="location-name">{location.name}</h3>
          <p className="location-address">
            <span className="location-icon">{locationIcon}</span>
            <span>{location.address}</span>
          </p>
        </div>
        
        <div className="navigation-buttons">
          <motion.button
            className="nav-button wechat-button"
            onClick={openWechatMap}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-icon">{buttons.wechat.icon}</span>
            <span>{buttons.wechat.text}</span>
          </motion.button>
          
          <motion.button
            className="nav-button amap-button"
            onClick={openAmapNavigation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-icon">{buttons.amap.icon}</span>
            <span>{buttons.amap.text}</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default MapNavigation;
