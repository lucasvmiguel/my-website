interface HelloProps {
  name: string
}

const Hello = ({ name }: HelloProps) => {
  return (
    <>
      <p data-testid="hello-title">Hello {name}</p>
      <span>another nice message</span>
    </>
  )
}

export default Hello
