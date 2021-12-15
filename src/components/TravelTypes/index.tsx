import { Flex } from '@chakra-ui/react';

import { Card } from './Card';

export const TravelTypes: React.FC = () => {
  return (
    <Flex
      width="100%"
      maxWidth="1160px"
      mx="auto"
      paddingTop="28"
      paddingBottom="20px"
      justifyContent="space-between"
    >
      <Card image="/images/cocktail.svg" text="vida noturna" />
      <Card image="/images/surf.svg" text="praia" />
      <Card image="/images/building.svg" text="moderno" />
      <Card image="/images/museum.svg" text="clássico" />
      <Card image="/images/earth.svg" text="e mais..." />
    </Flex>
  );
};
