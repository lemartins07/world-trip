import { Avatar, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Card() {
  return (
    <Flex
      minH="279px"
      minW="259px"
      w="100%"
      h="100%"
      direction="column"
      borderColor="yellow.300"
      borderWidth="1px"
      borderRadius="4px"
    >
      <Image
        src="/images/africa.jpg"
        minHeight="173px"
        h="100%"
        w="100%"
        minWidth="256px"
      />
      <Flex justify="space-between" p="6" align="center">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500" mb="3">
            Roma
          </Heading>
          <Text fontSize="md" fontWeight="500" color="gray.500">
            Itália
          </Text>
        </Flex>
        <Avatar src="/images/italia.png" height="30px" width="30px" />
      </Flex>
    </Flex>
  );
}
