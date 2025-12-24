import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './PhotoGallery.css';

const PhotoGallery = () => {
  // 使用占位图片
  const photos = [
    { id: 1, url: 'https://via.placeholder.com/800x600/ffeef8/c89b7b?text=Photo+1', caption: '我们的第一张合照' },
    { id: 2, url: 'https://via.placeholder.com/800x600/fff5e6/d4a574?text=Photo+2', caption: '美好的时光' },
    { id: 3, url: 'https://via.placeholder.com/800x600/ffeef8/c89b7b?text=Photo+3', caption: '甜蜜的瞬间' },
    { id: 4, url: 'https://via.placeholder.com/800x600/fff5e6/d4a574?text=Photo+4', caption: '幸福的笑容' },
    { id: 5, url: 'https://via.placeholder.com/800x600/ffeef8/c89b7b?text=Photo+5', caption: '永恒的记忆' },
  ];

  return (
    <motion.section
      className="photo-gallery"
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
        我们的故事
      </motion.h2>
      
      <div className="gallery-container">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="photo-swiper"
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className="photo-slide">
                <img src={photo.url} alt={photo.caption} />
                <p className="photo-caption">{photo.caption}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default PhotoGallery;
