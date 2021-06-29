import { IconType } from 'react-icons'
import { BiRun, BiCodeBlock } from 'react-icons/bi'
import { FaLuggageCart } from 'react-icons/fa'

export interface Hobby {
  title: string;
  description: string;
  icon: IconType;
}

export const hobbies: Array<Hobby> = [
  {
    title: 'Running',
    description: 'While I\'m listening music or a podcast is such a wonderful experience.',
    icon: BiRun
  },
  {
    title: 'Travel',
    description: 'Exploring the world and all its culture is something that always up to. My next destines are Egypt, Italy and Spain.',
    icon: FaLuggageCart
  },
  {
    title: 'Coding',
    description: 'Well, as you can see, I didn\'t need to have this website at all. However, I love coding in my free time.',
    icon: BiCodeBlock
  }
]
