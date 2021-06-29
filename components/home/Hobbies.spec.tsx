import renderer from 'react-test-renderer'

import Hobbies from './Hobbies'

import { hobbies } from '../../lib/hobby'

it('renders Hobbies component correctly - snapshot', () => {
  const tree = renderer
    .create(<Hobbies items={hobbies} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
