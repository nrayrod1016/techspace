


const UserProfile = ({ user, blogs, profile  }) => {

  return (
    <section >
    
<h1 class="text-center text-xl underline">
   {user.name}
   </h1> 
   <h1 class="text-center m-2"> {user.email} </h1>
  <h1 class="text-center m-2 "> {user.profile} </h1>
  <h1> {user.createdAt} </h1>

  
    </section>
    );
}
 
export default UserProfile;