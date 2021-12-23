import { Flex } from '@chakra-ui/react';
import router from 'next/router';

import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';

export default function Continent() {
  //const { slug } = router.query;

  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />
    </Flex>
  );
}
