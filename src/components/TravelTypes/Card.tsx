import { Image, Text, VStack } from '@chakra-ui/react';

interface CardsProps {
  image: string;
  text: string;
}

export function Card({ image, text }: CardsProps) {
  return (
    <VStack spacing="6" px="5">
      <Image src={image} />
      <Text fontSize="2xl" fontWeight="semibold">
        {text}
      </Text>
    </VStack>
  );
}
