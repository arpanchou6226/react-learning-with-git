import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <>
      <div className='container'>
        <h1>This is the App Heading</h1>
        <p>This is the Paragraph of the app : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consectetur error suscipit nam, omnis recusandae ipsa minus officiis quisquam eos itaque at, dolorum assumenda corporis quos labore sapiente placeat voluptatum.</p>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <div className='container'>
        <h1>This is the App Heading</h1>
        <p>This is the Paragraph of the app : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consectetur error suscipit nam, omnis recusandae ipsa minus officiis quisquam eos itaque at, dolorum assumenda corporis quos labore sapiente placeat voluptatum.</p>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  )
}

export default App
