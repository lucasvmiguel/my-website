import { IconType } from 'react-icons'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

export interface SocialItem {
  label: string;
  icon: IconType;
  href: string;
}

export const socialItems: Array<SocialItem> = [
  {
    label: 'Github',
    icon: AiFillGithub,
    href: 'https://github.com/lucasvmiguel/'
  },
  {
    label: 'Linkedin',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/lucasvieiramiguel/'
  },
  {
    label: 'Twitter',
    icon: FaTwitter,
    href: 'https://twitter.com/LucasVieiraDev'
  }
]
