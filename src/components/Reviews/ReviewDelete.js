import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import { deleteReviews } from '../../api/reviews'

const ReviewDelete = ({ user, review, reviewId, setReview }) => {
  const [deleted, setDeleted] = useState(false)
  const handleDelete = () => {
    deleteReviews(user, reviewId)
      .then(res => {
        setDeleted(true)
        console.log('this is the delete res', res)
      })
      .then(() => {
        if (deleted) {
          return <Redirect to={`/reviews/${reviewId}`} />
        }
      })
      .catch(err => {
        console.log(err)
        // msgAlert({
        //   heading: 'Deletion Failed',
        //   message: 'Something went wrong: ' + err.message,
        //   variant: 'danger'
        // })
      })
  }
  return (
    <Fragment>
      <Button onClick={handleDelete} size='small' basic>
        <Icon name='delete' />
        Delete Review
      </Button>
    </Fragment>
  )
}

export default ReviewDelete
