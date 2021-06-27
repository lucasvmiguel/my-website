import renderer from 'react-test-renderer'

import Footer from './Footer'

import { navItems } from '../../lib/navbar'
import { socialItems } from '../../lib/social'

it('renders Footer component correctly - snapshot', () => {
  const tree = renderer
    .create(<Footer items={navItems} socialItems={socialItems} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
