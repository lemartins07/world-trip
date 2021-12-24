import { RiInformationLine } from 'react-icons/ri';

import {
  Flex,
  Grid,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
export function Bio() {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={['8', '20']}
    >
      <Text
        fontSize={['lg', 'xl', 'xl', '2xl']}
        lineHeight="9"
        align="justify"
        maxWidth="600px"
        px="4"
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Flex align="center" justify="space-between">
        <Flex direction="column" justify="center" align="center">
          <Heading
            fontSize={['2xl', '5xl']}
            color="yellow.400"
            fontWeight="500"
          >
            50
          </Heading>
          <Text fontSize="2xl" color="gray.700" fontWeight="600">
            países
          </Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Heading
            fontSize={['2xl', '5xl']}
            color="yellow.400"
            fontWeight="500"
          >
            60
          </Heading>
          <Text fontSize="2xl" color="gray.700" fontWeight="600">
            línguas
          </Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Heading
            fontSize={['2xl', '5xl']}
            color="yellow.400"
            fontWeight="500"
          >
            27
          </Heading>
          <Text fontSize="2xl" color="gray.700" fontWeight="600">
            cidades +100
            <Popover>
              <PopoverTrigger>
                <span>
                  <Icon
                    cursor="pointer"
                    as={RiInformationLine}
                    ml="1"
                    color="gray.400"
                    w={['10px', '16px']}
                    h={['10px', '16px']}
                  />
                </span>
              </PopoverTrigger>
              <PopoverContent bg="gray.700" color="yellow.400">
                <PopoverArrow bg="gray.700" />
                <PopoverCloseButton />
                <PopoverBody fontWeight="400" fontSize="lg">
                  Paris, Londres, Lisboa, Praga, Amsterdã, Roma, Budapeste,
                  Berlim, Veneza, Madrid, Barcelona, Viena
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
}
