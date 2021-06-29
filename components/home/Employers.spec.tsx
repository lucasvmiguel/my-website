import renderer from 'react-test-renderer'

import Employers from './Employers'

import { employers } from '../../lib/employer'

it('renders Employers component correctly - snapshot', () => {
  const tree = renderer
    .create(<Employers items={employers} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
