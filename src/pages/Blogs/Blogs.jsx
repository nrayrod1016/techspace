import { Link } from 'react-router-dom'


const Blogs = (props) => {
  return (
    <>
      <h1>Blogs</h1>
      <div className="row">
        {props.blogs.map(blog =>
          <div key={blog._id} className="col-sm-3">
            <div className="card">
              <div className="card-header">
                - {blog.author.name}
              </div>
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content.substring(0,30)}...</p>
                {(props.user.profile === blog.author._id) && <button onClick={()=> props.handleDeleteBlog(blog._id)} className="btn btn-danger">Delete</button>}
                <Link to='/blogDetails' className='btn btn-warning' state={blog}>Details</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
 
export default Blogs;