import { Flex, Heading, Text, Box, Image } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      bgImage="url(/images/Background.png)"
      backgroundPosition="center"
      backgroundSize="cover"
      bgSize="no-repeat"
    >
      <Flex
        w="100%"
        justifyContent={['center', 'space-between']}
        align="center"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <Box>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>

          <Text
            color="gray.300"
            mt="5"
            fontSize={['0.8rem', 'xl']}
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          src="/images/Airplane.svg"
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
