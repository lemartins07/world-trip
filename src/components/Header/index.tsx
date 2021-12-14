import { Flex, Image } from "@chakra-ui/react";


export function Header() {
  return (
    <Flex as="header" w="100%" maxWidth={1440} p="7" justifyContent="center">
      <Image src='/images/Logo.png' />
    </Flex>
  )
}
