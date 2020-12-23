import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Rating } from 'semantic-ui-react'
import ReviewDelete from '../Reviews/ReviewDelete'
import ReviewUpdate from '../Reviews/ReviewUpdate'

const Reviews = ({ review, setReview, user }) => {
  console.log('this is review', review)
  // console.log('this is user', user)
  return (
    <div style={{ margin: '1.5rem' }} className='reviewCard'>
      <Card>
        <Card.Content>
          <Card.Header>{review.title}</Card.Header>
          <Card.Meta>{review.name}</Card.Meta>
          <Card.Meta>
            <Rating
              icon='star'
              disabled={true}
              defaultRating={review.rating}
              maxRating={5}
            />
          </Card.Meta>
          <Card.Description>{review.content}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {user !== null ? (
            <div className='ui two buttons'>
              <ReviewUpdate
                user={user}
                setReview={setReview}
                review={review}
                reviewId={review._id}
              />
              <ReviewDelete
                user={user}
                setReview={setReview}
                review={review}
                reviewId={review._id}
              />
            </div>
          ) : (
            <Link to='/sign-in'>
              <span className='text-center'>
                We would love to hear from you!
              </span>
            </Link>
          )}
        </Card.Content>
      </Card>
    </div>
  )
}

export default Reviews
