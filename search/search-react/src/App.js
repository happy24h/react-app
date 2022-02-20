import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";


function App() {
    const [searchUser, setSearchUser] = useState("")
    const [users, setUsers] = useState([])
    console.log(users)
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(user => {
                setUsers(user)
            })
    },[])
  return (
    <div className="App">
      <input
          type="text"
          placeholder="Search..."
          // value={searchUser}
          onChange={(e) => {setSearchUser(e.target.value)}}
      />
        <ul>
            {users.filter(user => {
                if (searchUser == "") {
                    return user
                } else if (user.name.toLowerCase().includes(searchUser.toLowerCase())) {
                    return user
                }
            }).map((user,index) => (<li key={index}>{user.name}</li>))}
        </ul>
    </div>
  );
}

export default App;
