import renderer from 'react-test-renderer'

import ColorModeButton from './ColorModeButton'

it('renders ColorModeButton component correctly - snapshot', () => {
  const tree = renderer
    .create(<ColorModeButton />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
