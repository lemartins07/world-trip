import { Flex } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SlideContent } from './SlideContent';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export function Slider() {
  return (
    <Flex
      w="100%"
      h={['250px', '450px']}
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
    >
      <Swiper navigation={true} pagination={true} className="mySwiper">
        <SwiperSlide>
          <SlideContent
            image="/images/africa.jpg"
            title="África"
            subtitle="o continente mais quente"
            url="africa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            image="/images/asia.jpg"
            title="Ásia"
            subtitle="o maior continente"
            url="asia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            image="/images/europe.jpg"
            title="Europa"
            subtitle="o continente mais antigo"
            url="europe"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
