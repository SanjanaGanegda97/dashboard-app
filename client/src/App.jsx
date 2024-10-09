import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {

  const [users, setUsers] = useState([])
  const [name, setName] = useState()
  const [age, setAge] = useState()

  useEffect(()=> {
    axios.get('http://localhost:3001/getUsers')
    .then((users) => {
      setUsers(users.data)
    }).catch(err => console.log(err))
  })

  const Submit = () => {
    axios.post('http://localhost:3001/createUser', {name, age})
    .then((users) => {
      console.log(users)
    }).catch(err => console.log(err))
  }

  return (
    <div>
      <h3>First App</h3>

      {
        users.map(user => {
          return <div>
              <h3>{user.name}</h3>
              <h3>{user.age}</h3>
            </div>
        })
      }
      <br/>

      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <input type="text" onChange={(e) => setAge(e.target.value)}/>
      <button onClick={Submit}>Submit</button>
    </div>
  )
}

export default App
