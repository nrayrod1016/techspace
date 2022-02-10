import { useLocation, Link } from 'react-router-dom'
import CommentForm from '../../components/CommentForm/CommentForm';

const BlogDetails = (props) => {
  const location = useLocation()

  return (
  <>
      <h1>Blog Details</h1>

<section class=" min-h-0 mb-20"> 
  <h1 class="text-center text-white text-xl m-5">Blog DETAIL PAGE </h1> 
 
  <div class="container text-gray-800 font-semibold mx-auto w-max bg-white  rounded-lg p-3 shadow-2xl  ">
    <div class="row">
      <div class="card-body text-center lg:m-5">
        <h1 class="text-xl text-center">{location.state.title}</h1>
   
        <p class="card-text mt-3 mb-3 flex-wrap overflow-y-auto lg:overflow-y-auto md:overflow-y-auto sm:overflow-y-auto">{location.state.content}</p>
        <p class=" ">Written By: {location.state.author.name} </p> 
        <p class=" text-sm"> Created On: </p>

      </div>
      <div class="text-black text-center m-5">
        {props.user.profile === location.state.author._id && <>
      <Link className="py-2 px-4 mr-2 bg-white text-black hover:bg-red-100 focus:ring-red-500 focus:ring-offset-indigo-200 text-red-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" state={location.state} to="/editBlog">Edit</Link></>}
  
        </div> 
        </div>
    </div>
</section>




  <section class=" m-2 p-3 border ">
    <h2>Add a comment:</h2>
    <CommentForm handleAddComment={props.handleAddComment} blogId={location.state._id}/>
  </section>

  <section class="
              bg-gray-100">
    {location.state.comments.length ? 
      <>
         
          {location.state.comments.map(comment =>
           <div class="bg-white ">
        <section class="card-container mx-auto px20 ml-5 flex flex-col  ">
           <div class="comments flex flex-wrap items-center justify-center">
             <div class="container mx-auto  px-20 transform  hover:scale-105 transition duration-300 ">
           
               <div class=" mb-5 p-8 bg-white rounded-lg shadow-lg relative hover:shadow-3xl transition-shadow duration-600">
                 <h1 class="text-2xl text-gray-800 font-semibold mb-3"></h1>
                  <p class="text-gray-600 leading-6 tracking-normal flex flex-wrap overflow-ellipsis">{comment.content} </p> 
                  <p class="text-gray-600 leading-6 tracking-normal">
                   Comment was created at .</p>
             <p class="py-2 px-4 mt-8 text-gray-700 font-">- {comment.author.name}</p>
             
                
             </div>
             </div>
             </div>
          </section>
             </div>
             )}
             
             </>
             :
             <h2>Add a comment:</h2>
            }
            </section>  
      
      
     

      
  </>
  );
}
 
export default BlogDetails;