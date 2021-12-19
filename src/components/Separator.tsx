import { Divider } from '@chakra-ui/react';

export function Separator() {
  return (
    <Divider
      borderBottomWidth={2}
      width="90px"
      borderColor="gray.700"
      my={['9', '20']}
      mx="auto"
    />
  );
}
