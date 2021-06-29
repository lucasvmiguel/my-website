import renderer from 'react-test-renderer'

import { UserProvider } from '@auth0/nextjs-auth0'

import Navbar from './Navbar'

it('renders Navbar component correctly - snapshot', () => {
  const tree = renderer
    .create(
      <UserProvider>
        <Navbar items={[]} />
      </UserProvider>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
