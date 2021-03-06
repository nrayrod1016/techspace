import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar';

const Blogs = (props) => {
  return (
    <>
    <section class="grid grid-cols-3
      sm:grid-cols-3
      md: grid grid-cols-3
      lg: grid grid-cols-3">
      <article class="border col-span-2">
      <h1 class="text-2xl text-center hover:scale-105 transition duration-300 ">The Feed</h1>
        {props.blogs.map(blog =>
      <div className="mt-3  ">
          <div key={blog._id} className="bg-white  mb-2 p-8 rounded-lg shadow-2xl relative transform  hover:scale-105 transition duration-300 col-span-12 md:mx-10">
            <div className="flex items-center justify-between">
              <div className="">
                <h5 className="text-2xl font-bold text-gray-700 hover:underline">{blog.title}</h5>
                <p className="mt-2 text-gray-600">{blog.content.substring(0,100)}...</p>

                <div class="flex items-left justify-between mt-4">
                  <button className='bg-yellow-500 p-2 rounded-md '>
                    <Link to='/blogDetails'  state={blog}>Details</Link>
                  </button> 
                  {(props.user.profile === blog.author._id) && <button onClick={()=> props.handleDeleteBlog(blog._id)} className="bg-red-500 p-2 rounded-md ">Delete</button>}
                </div>
              </div>

              <div><a href="#" class="flex items-center">
                <h1 class="font-bold text-gray-700 hover:underline">   - {blog.author.name}</h1>
            </a></div>
            </div>
          </div>
      </div>
        )}
        </article>
   

<article class=" px-6 mx-auto rounded-lg shadow-md border col-start-3">
<Sidebar  />
</article> 
      
      </section>

    </>
  );
}
 
export default Blogs;