import React from 'react'
import Container from '../container/Container.jsx'
import PostCard from '../post-form/PostForm.jsx'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost