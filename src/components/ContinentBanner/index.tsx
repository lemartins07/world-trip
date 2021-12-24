import { Flex, Heading } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={['150px', '300px', '500px']}
      bgImage="url(/images/africa.jpg)"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Flex
        align={['center', 'center', 'center', 'flex-end']}
        justifyContent={['center', 'center', 'center', 'flex-start']}
        py={['', '14']}
        maxW="1160px"
        w="100%"
        mx="auto"
        px="4"
      >
        <Heading
          color="gray.100"
          fontWeight="semibold"
          fontSize={['3xl', '5xl']}
        >
          Banner
        </Heading>
      </Flex>
    </Flex>
  );
}
