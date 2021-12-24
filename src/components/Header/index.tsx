import { RiArrowLeftSLine } from 'react-icons/ri';

import { Flex, Image, Grid, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';

  return (
    <Flex
      bg="white"
      as="header"
      w="100%"
      mx="auto"
      px="1rem"
      justifyContent="center"
      align="center"
      h={['50px', '100px']}
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
        <Image
          src="/images/Logo.png"
          w={['81px', '184px']}
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
