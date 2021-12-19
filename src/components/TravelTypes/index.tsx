import { Grid, GridItem } from '@chakra-ui/react';

import { Card } from './Card';

export const TravelTypes: React.FC = () => {
  return (
    <Grid
      templateColumns={['1fr, 1fr', '1fr, 1fr', '1fr, 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justify="space-between"
      align="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <Card image="/images/cocktail.svg" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Card image="/images/surf.svg" text="praia" />
      </GridItem>
      <GridItem>
        <Card image="/images/building.svg" text="moderno" />
      </GridItem>
      <GridItem>
        <Card image="/images/museum.svg" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Card image="/images/earth.svg" text="e mais..." />
      </GridItem>
    </Grid>
  );
};
