import renderer from 'react-test-renderer'

import TopSection from './TopSection'

it('renders TopSection component correctly - snapshot', () => {
  const tree = renderer
    .create(<TopSection />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
