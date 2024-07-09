const Header = ({ course }) => {

  console.log('Props from Header: ')
  console.log({ course })

  return (
    <>
      <h1>{ course }</h1>
    </>
  )
}

export default Header

