import { useLocation, Link } from 'react-router-dom'
import CommentForm from '../../components/CommentForm/CommentForm';

const BlogDetails = (props) => {
  const location = useLocation()

  return (
    <>
      <h1>Blog Details</h1>
      <h2>{location.state.title}</h2>
      <h3>Written by:  {location.state.author.name}</h3>
      <p>{location.state.content}</p>
      {props.user.profile === location.state.author._id && <><Link className="btn btn-warning" state={location.state} to="/editBlog">Edit</Link><br/><br/></>}
      {location.state.comments.length ? 
        <>
          <h2>Comments:</h2>
          {location.state.comments.map(comment =>
            <div class='card' key={comment._id}>
              <div class="card header">
                Enter Message/Comment Symbol
              </div>
              <blockquote class='blockquote mb-1'>
              <p class="card-body">{comment.content} </p>
              <footer class="bockquote footer"> Author<cite class="Source Title"> - {comment.author.name}</cite></footer>
              </blockquote>
              
            </div>  
          )}
          <h2>Add a comment:</h2>
        </>
        :
        <h2>Add a comment:</h2>
      }
      
      
      <CommentForm handleAddComment={props.handleAddComment} blogId={location.state._id}/>

      
    </>
  );
}
 
export default BlogDetails;