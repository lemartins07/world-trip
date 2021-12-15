import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export function Banner() {
  return (
    <Flex
      w="100%"
      h={335}
      justifyContent="space-between"
      bgImage="url(/images/Background.png)"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Flex w="100%" justifyContent="space-evenly">
        <VStack paddingTop="20" paddingLeft="36" align="flex-start" spacing="5">
          <Heading color="#F5F8FA">5 Continentes,</Heading>
          <Heading color="#F5F8FA">infinitas possibilidades.</Heading>

          <Text color="#DADADA" maxWidth={524} w="100%" fontSize="xl">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
        <Flex
          paddingTop="20"
          paddingRight="36"
          align="flex-end"
          marginBottom={-33}
        >
          <Image src="/images/Airplane.svg" height={270} width={417} />
        </Flex>
      </Flex>
    </Flex>
  );
}
