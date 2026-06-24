import React from 'react'

const Card = (props) => {

  console.log(props.name, props.age);
  
  return (
    <div className='card'>
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile photo" />
      <h1>{props.name}, {props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, omnis.</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
