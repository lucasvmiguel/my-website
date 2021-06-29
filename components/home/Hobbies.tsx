import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Container } from '@chakra-ui/react'
import { Hobby } from '../../lib/hobby'

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

interface HobbiesProps {
  items: Hobby[];
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

const Hobbies = ({ items }: HobbiesProps) => {
  return (
    <Box p={4}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Hobbies</Heading>
          <Text>Things that I like to do</Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {items.map((item, i) => (
            <Feature
              key={i}
              icon={<Icon as={item.icon} w={10} h={10} color="green" />}
              title={item.title}
              text={
                item.description
              }
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Hobbies
