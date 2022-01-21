import { useState, useEffect } from 'react'
import * as userService from '../../services/userService.js'

const Sidebar = () => {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    userService.getAllUsers()
    .then(users => setUsers(users))
  }, [])
  
  return ( 
    <>
    
       <h1 class=" m-3 text-xl font-bold text-gray-700 ">Authors</h1> 
        {users.map(user=>
        <>
        <div class=" p-1">
        <div class="p-3 shadow-lg w-full ">
          <ul class="flex items-center p-2 text-lg mx-1 font-bold text-gray-700 hover:underline " key={user._id}>{user.name}
          </ul> 
          <button class="text-sm text-center p-1 bg-green-400 rounded">Profile</button>
        </div>
        </div>
         </>
          
        )}
     

    
    </>

   );
}
 
export default Sidebar;