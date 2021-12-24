import { Flex } from '@chakra-ui/react';
import router from 'next/router';

import { Bio } from '../../components/Bio';
import { Cities } from '../../components/Cities';
import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';

export default function Continent() {
  //const { slug } = router.query;

  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Bio />
        <Cities />
      </Flex>
    </Flex>
  );
}
