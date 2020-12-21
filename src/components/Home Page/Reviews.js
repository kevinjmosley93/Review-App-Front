import React from 'react'
import { Card, Button, Icon, Rating } from 'semantic-ui-react'

const Reviews = ({ review, user }) => {
  console.log('this is review', review)
  // console.log('this is user', user)
  return (
    <div style={{ margin: '1.5rem' }} className='card'>
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
          <div className='ui two buttons'>
            <Button size='small' basic>
              <Icon name='edit' />
              Update Review
            </Button>
            <Button size='small' basic>
              <Icon name='delete' />
              Delete Review
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Reviews
