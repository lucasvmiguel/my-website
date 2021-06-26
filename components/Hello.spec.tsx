import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import Hello from './Hello'

it('renders Hello component correctly - snapshot', () => {
  const tree = renderer
    .create(<Hello name="Lucas"></Hello>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Hello component correctly - dom test', () => {
  const { getByTestId } = render(<Hello name="Lucas"></Hello>)
  const { textContent } = getByTestId('hello-title')

  expect(textContent).toBe('Hello Lucas')
})
