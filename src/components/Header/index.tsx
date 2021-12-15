import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex as="header" w="100%" p="7" justifyContent="center" mx="auto">
      <Image src="/images/Logo.png" />
    </Flex>
  );
}
