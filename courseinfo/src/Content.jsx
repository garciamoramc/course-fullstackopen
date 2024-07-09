const Content = ({ parts }) => {

  console.log('Props from Content: ')
  console.log({ parts })

  return (
    <>
      <p>{ parts[0].name } { parts[0].exercises }</p>
      <p>{ parts[1].name } { parts[1].exercises }</p>
      <p>{ parts[2].name } { parts[2].exercises }</p>
    </>
  )
}

export default Content

/*
  "NB at this point you can assume that there are always three items, so there is no need to go through the arrays using loops."
  I understand from this comment that we should not use map. But just in case I attach here the code I would use in such a case: 

  { parts.map ( part => (
    <p key = { part.name }>
      { part.name } { part.exercises }
    </p>
  ))}
*/