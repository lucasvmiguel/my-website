export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const navItems: Array<NavItem> = [
  {
    label: 'About me',
    href: '#'
  },
  {
    label: 'Articles',
    children: [
      {
        label: 'Article title 1',
        subLabel: 'Article description 1',
        href: '#'
      },
      {
        label: 'Article title 2',
        subLabel: 'Article description 2',
        href: '#'
      }
    ]
  }
]
