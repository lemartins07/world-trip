import { Image } from '@chakra-ui/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SlideContent } from './SlideContent';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function SwiperSlider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideContent
            image="/images/europe.jpg"
            title="Europe"
            subtitle="o continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            image="/images/europe.jpg"
            title="Europe"
            subtitle="o continente mais antigo"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
