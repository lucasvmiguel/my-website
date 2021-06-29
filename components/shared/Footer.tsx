import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import { NavItem } from '../../lib/navbar'
import { SocialItem, socialItems } from '../../lib/social'

import SocialButton from './SocialButton'
import Logo from './Logo'

interface FooterProps {
  items: NavItem[]
  socialItems: SocialItem[]
}

const Footer = ({ items }: FooterProps) => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Logo />
        <Stack direction={'row'} spacing={6}>

          {items.map((item, i) => <Link key={i} href={item.href}>{item.label}</Link>)}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2021 Lucas Vieira. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            {socialItems.map((item, i) => (
              <SocialButton key={i} label={item.label} href={item.href}>
                <item.icon />
              </SocialButton>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
