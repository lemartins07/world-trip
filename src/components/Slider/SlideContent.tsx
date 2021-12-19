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
      bgImage={`url(${image})`}
      backgroundPosition="center"
      backgroundSize="cover"
      maxHeight="450px"
      height="450px"
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
        <Heading color="gray.100" fontSize="5xl">
          {title}
        </Heading>
        <Heading as="h2" fontSize="2xl" color="gray.300">
          {subtitle}
        </Heading>
      </VStack>
    </Flex>
  );
}
