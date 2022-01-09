import { useLocation, Link } from 'react-router-dom'
import React, { useState } from 'react';

const EditBlog = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    title: location.state.title,
    content: location.state.content,
    id: location.state._id
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleUpdateBlog(formData)
    } catch (err) {
      console.log(err)
    }
  }

  const { title, content } = formData

  const isFormInvalid = () => {
    return !(title && content)
  }

  return (
    <>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    > 
    <div class="mb-3">
      <label class="form-label">Blog Title</label>
      <input
        type="text"
        value={title}
        name="title"
        onChange={handleChange}
        class="form-control"
        
      />
      </div>
      <div class="mb-3">
      <label class="form-label">Blog Content</label>
      <textarea
        value={content}
        name="content"
        onChange={handleChange}
        class="form-control"
      />
      </div>
    
      <div>
      <button 
        class="btn btn-primary m-1"
        disabled={isFormInvalid()}> Update Post</button>
      <Link to="/">
        <button class="btn btn-danger m-1">Cancel</button>
      </Link>
      </div>
    </form>
    </>
  );
}
 
export default EditBlog;