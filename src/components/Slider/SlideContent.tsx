import { Flex, Heading, VStack } from '@chakra-ui/react';

interface SlideContentProps {
  title: string;
  subtitle: string;
  image: string;
}

export function SlideContent({ title, subtitle, image }: SlideContentProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      bgImage={`url(${image})`}
      backgroundPosition="center"
      backgroundSize="cover"
      direction="column"
    >
      <VStack
        spacing="4"
        backgroundColor="black.200"
        w="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          color="gray.100"
          fontSize={['3xl', '4xl', '5xl']}
          fontWeight="bold"
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          fontSize={['0.8rem', '1xl', '2xl']}
          mt={['2', '4']}
          color="gray.300"
          fontWeight="bold"
        >
          {subtitle}
        </Heading>
      </VStack>
    </Flex>
  );
}
