interface HelloProps {
  name: string
}

const Hello = ({ name }: HelloProps) => {
  return <span>Hello {name}</span>
}

export default Hello
