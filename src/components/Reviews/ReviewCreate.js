import React, { useState } from 'react'
import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react'
import { createReviews } from '../../api/reviews'

const ReviewCreate = ({ user }) => {
  const [open, setOpen] = useState(false)
  const [review, setReview] = useState({
    review: {
      name: '',
      title: '',
      content: '',
      rating: 0
    }
  })
  const handleChange = (e) => {
    console.log('changing')
    const updatedField = { [e.target.name]: e.target.value }
    setReview(currState => {
      const updatedReview = { ...currState.review, ...updatedField }
      return { review: updatedReview }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createReviews(user, review.review)
      .then(res => {
        console.log('this is api respone', res)
      }).then(
        setOpen(false)
      )
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <Modal
      closeIcon
      className='modal'
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button floated='right'>Write a Review</Button>}>
      <Header as='h1'>Write Your Review Below</Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input value={review.name} onChange={handleChange} name='name' required placeholder='First Name & Last Initial' />
          </Form.Field>
          <Form.Field>
            <label>Review Title</label>
            <input value={review.title} onChange={handleChange} name='title' required placeholder='Review title' />
          </Form.Field>
          <Form.Field>
            <label>Review Content</label>
            <textarea value={review.content} onChange={handleChange} name='content' required placeholder='Review text' />
          </Form.Field>
          <Form.Field>
            <label>Rating</label>
            <input value={review.rating} onChange={handleChange} name='rating' required placeholder='1 - 5' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ReviewCreate
