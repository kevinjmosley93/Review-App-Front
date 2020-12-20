import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Grid,
  Header,
  Image,
  Rating,
  Divider,
  Button,
  Icon,
  Modal,
  Form
} from 'semantic-ui-react'
import Reviews from './Reviews'
import reviews from '../../data/reviewData'

const reviewAverage = reviews.reduce((sum, review) => {
  return sum + review.rating / 5
}, 0)

const Product = ({ user }) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ margin: '3rem' }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image
              alt='Image of sony ps5'
              src='https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg'
              size='medium'
            />
          </Grid.Column>
          <Grid.Column width={11}>
            <div>
              <Header as='h1'>Sony PS5</Header>
              <Header as='h2'>$500</Header>
              <Rating
                style={{ marginRight: '.5rem' }}
                icon='star'
                disabled={true}
                defaultRating={reviewAverage}
                maxRating={5}
              />
              ({reviews.length})
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              Bacon ipsum dolor amet strip steak ham cow pork burgdoggen
              capicola. Short loin filet mignon pork belly, bacon tongue beef
              ribs tenderloin bresaola shank boudin turkey salami burgdoggen
              prosciutto. Chislic pancetta filet mignon t-bone prosciutto
              picanha, brisket sausage pork belly. Ham hock tenderloin brisket
              fatback ground round porchetta hamburger bresaola shankle pancetta
              filet mignon pig biltong corned beef. Jerky alcatra short loin
              turkey shankle meatloaf pork loin, boudin picanha venison filet
              mignon beef.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {user ? (
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
            <Form>
              <Form.Field>
                <label>Name</label>
                <input required placeholder='First Name & Last Initial' />
              </Form.Field>
              <Form.Field>
                <label>Review Title</label>
                <input required placeholder='Review title' />
              </Form.Field>
              <Form.Field>
                <label>Review Content</label>
                <textarea required placeholder='Review text' />
              </Form.Field>
              <Form.Field>
                <label>Rating</label>
                <input required placeholder='1 - 5' />
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
      ) : (
        <Button floated='right'>
          <Link style={{ color: 'black' }} to='/sign-in'>
            Sign in to Leave Us a Review
          </Link>
        </Button>
      )}
      <br />
      <Divider />
      <Grid.Row style={{ margin: '0 auto' }}>
        {reviews.map(review => (
          <Reviews user={user} key={review.name} review={review} />
        ))}
      </Grid.Row>
    </div>
  )
}

export default Product
