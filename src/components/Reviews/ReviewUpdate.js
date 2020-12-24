import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react'
import { updateReviews, showReviews } from '../../api/reviews'

const ReviewUpdate = ({ user, reviewId }) => {
  const [open, setOpen] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [reviewList, setReviewList] = useState({
    name: '',
    title: '',
    content: '',
    rating: 0
  })

  useEffect(() => {
    // show request
    showReviews(user, reviewId)
      .then(res => setReviewList(res.data.review))
      .catch(err => {
        return err
        // console.log(err)
      })
  }, [])

  const handleChange = e => {
    // console.log('changing')
    const updatedField = { [e.target.name]: e.target.value }
    setReviewList(currState => {
      const updatedReview = { ...currState, ...updatedField }
      return updatedReview
    })
  }
  // console.log('this is id', reviewId)

  const handleSubmit = e => {
    e.preventDefault()

    updateReviews(user, reviewList, reviewId)
      .then(() => {
        setUpdated(true)
        // console.log('updated is', updated)
      })
      .then(setOpen(false))
      .catch(err => {
        return err
        // console.log(err)
      })
  }
  if (updated) {
    return <Redirect to={`/reviews/${reviewId}`} />
  }

  return (
    <Modal
      closeIcon
      className='modal'
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={
        <Button size='small' basic>
          <Icon name='edit' />
          Update Review
        </Button>
      }>
      <Header as='h1'>Update Your Review Below</Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              value={reviewList.name}
              onChange={handleChange}
              name='name'
              placeholder='First Name & Last Initial'
            />
          </Form.Field>
          <Form.Field>
            <label>Review Title</label>
            <input
              value={reviewList.title}
              onChange={handleChange}
              name='title'
              placeholder='Review title'
            />
          </Form.Field>
          <Form.Field>
            <label>Review Content</label>
            <textarea
              value={reviewList.content}
              onChange={handleChange}
              name='content'
              placeholder='Review text'
            />
          </Form.Field>
          <Form.Field>
            <label>Rating</label>
            <input
              type='number'
              min={1}
              max={5}
              value={reviewList.rating}
              onChange={handleChange}
              name='rating'
              placeholder='1 - 5'
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        <Button
          floated='left'
          // inverted
          // color='green'
          onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Content>
    </Modal>
  )
}

export default ReviewUpdate
