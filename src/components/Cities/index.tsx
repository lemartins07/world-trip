import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';

import { Card } from './Card';

export function Cities() {
  return (
    <Flex px="1rem" direction="column">
      <Heading fontSize="4xl" color="gray.700" fontWeight="500">
        Cidades +100
      </Heading>
      <Grid
        my="10"
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={5}
      >
        <GridItem>
          <Card />
        </GridItem>
        <GridItem>
          <Card />
        </GridItem>
        <GridItem>
          <Card />
        </GridItem>
        <GridItem>
          <Card />
        </GridItem>
        <GridItem>
          <Card />
        </GridItem>
        <GridItem>
          <Card />
        </GridItem>
        <GridItem>
          <Card />
        </GridItem>
        <GridItem>
          <Card />
        </GridItem>
      </Grid>
    </Flex>
  );
}
