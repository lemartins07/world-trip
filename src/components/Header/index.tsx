import { Flex, Image, Grid } from '@chakra-ui/react';

export function Header() {
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
