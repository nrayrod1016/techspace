import React, { useState } from 'react'


const CommentForm = (props) => {
  const [formData, setFormData] = useState({
    content: '',
    blogId: props.blogId
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
      props.handleAddComment(formData)
      setFormData({content: '', blogId: props.blogId})
    } catch (err) {
      console.log(err)
    }
  }
  const { content } = formData

  const isFormInvalid = () => {
    return !(content)
  }

  return (
    <>
      <form 
          class="m-3"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <textarea
          name="content" 
          class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
          value={content}
          onChange={handleChange} 
        /><br/>
        <button 
          class="   
                p-2   
                bg-green-500 
                rounded 
                text-white 
                hover:bg-green-300" 
          disabled={isFormInvalid()}>
          Comment
        </button>
      </form>
    </>
  );
}
 
export default CommentForm;