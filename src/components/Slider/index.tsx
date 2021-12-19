import { Divider, Flex, Heading, Image } from '@chakra-ui/react';

import { SwiperSlider } from './SwiperSlider';

export function Slider() {
  return (
    <Flex
      direction="column"
      maxWidth="1240px"
      mx="auto"
      py="10"
      alignItems="center"
    >
      <Divider
        borderBottomWidth={2}
        width="90px"
        borderColor="gray.700"
        my="6"
      />
      <Heading
        fontWeight="normal"
        textAlign="center"
        lineHeight="3.75rem"
        my="6"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <SwiperSlider />
    </Flex>
  );
}
