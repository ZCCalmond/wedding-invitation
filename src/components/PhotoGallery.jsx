import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { PHOTO_GALLERY_CONSTANTS } from '../constants/photoGallery';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const { sectionTitle, photos } = PHOTO_GALLERY_CONSTANTS;

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
        {sectionTitle}
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
