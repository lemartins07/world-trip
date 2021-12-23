import { Flex, Heading, VStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface SlideContentProps {
  title: string;
  subtitle: string;
  image: string;
  url: string;
}

export function SlideContent({
  title,
  subtitle,
  image,
  url,
}: SlideContentProps) {
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
        <NextLink href={`/continent/${url}`} passHref>
          <Link align="center" _hover={{ textDecoration: 'none' }}>
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
          </Link>
        </NextLink>
      </VStack>
    </Flex>
  );
}
