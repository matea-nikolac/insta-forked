import { useState } from 'react'
import ImageUploadField from './ImageUploadField'



const CreatePost = () => {

  const [ formFields, setFormFields ] = useState({
    caption: '',
    image: '',
    owner: '',
  })

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formFields)
  }

  return (
    <div className='form-container'>
      <div className="form-border">
        <form action="" onSubmit={handleSubmit}>
          <h1>Create Post Page</h1>

          <label htmlFor="caption"></label>
          <input type="text" name="caption" placeholder="write caption" value={formFields.caption} onChange={handleChange} />
          
          {/* <label htmlFor="image"></label>
          <input type="text" name="image" placeholder="image upload will go here" value={formFields.image} onChange={handleChange} /> */}

          < ImageUploadField
            setFormFields={setFormFields}
            formFields={formFields}
          />
          
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost