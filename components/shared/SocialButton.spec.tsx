import renderer from 'react-test-renderer'

import { AiFillGithub } from 'react-icons/ai'

import SocialButton from './SocialButton'

it('renders SocialButton  component correctly - snapshot', () => {
  const tree = renderer
    .create(<SocialButton href={'#'} label="foo"><AiFillGithub /></SocialButton>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
