import renderer from 'react-test-renderer'

import Navbar from './Navbar'

it('renders Navbar component correctly - snapshot', () => {
  const tree = renderer
    .create(<Navbar items={[]} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
