// MapNavigation 组件的文案常量
export const MAP_NAVIGATION_CONSTANTS = {
  sectionTitle: '地图导航',
  
  // 地点信息
  location: {
    name: '阜宁嘉隆国际大酒店',
    address: '江苏省盐城市阜宁县北门街88号', // 33.783994,119.80249
    lat: 33.783994,
    lng: 119.80249,
  },
  
  // 腾讯地图静态图（真实地图，直接可用）
  // 参数说明：
  // - center: 地图中心点坐标（纬度,经度）
  // - zoom: 缩放级别（1-18，16适合显示周边环境）
  // - size: 图片尺寸（宽*高）800*350 保持良好比例
  // - markers: 标记点（红色标记在酒店位置）
  mapPlaceholder: `https://apis.map.qq.com/ws/staticmap/v2/?center=33.783994,119.80249&zoom=16&size=800*350&markers=color:red|label:A|33.783994,119.80249&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77`,
  
  mapAlt: '阜宁嘉隆国际大酒店地图',
  
  // 导航按钮
  buttons: {
    wechat: {
      icon: '🗺️',
      text: '微信地图',
    },
    amap: {
      icon: '🧭',
      text: '高德地图',
    },
  },
  
  locationIcon: '📍',
};
