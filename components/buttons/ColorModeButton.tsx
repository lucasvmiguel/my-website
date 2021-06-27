import { Button, useColorMode } from '@chakra-ui/react'
import { BiSun, BiMoon } from 'react-icons/bi'

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      data-testid="color-mode-button"
      onClick={toggleColorMode}
      variant={'link'}>
      {colorMode === 'light'
        ? <BiSun size={20} data-testid="color-mode-button-icon-sun" />
        : <BiMoon size={20} data-testid="color-mode-button-icon-moon" />}
    </Button>
  )
}

export default ColorModeButton
