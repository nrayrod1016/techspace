import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    userService.getAllUsers()
    .then(users => setUsers(users))
  }, [])

  return (
    <>
      <h1 class="text-center text-xl">Hello.  This is a list of all the users.</h1>
      {users.length ? 
      <div class="grid grid-cols-3  ">
        {users.map(user=>
          <p class="text-center m-5 border p-5 shadow-xl rounded-xl " key={user._id}> 
            {user.name} 
            <br/>   
            <h3 class="text-sm text-gray-300">{user.email}</h3>
            <h3 class="p-2 m-2 bg-indigo-500 rounded-xl text-white">User profile</h3>
          </p>
          
        )}
      </div>
      :
        <p>An error occured</p>
      }
    </>
  );
}
 
export default Users;