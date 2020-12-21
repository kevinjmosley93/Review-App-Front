import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header, Image, Rating, Divider, Button } from 'semantic-ui-react'
import Reviews from './Reviews'
// import reviews from '../../data/reviewData'
import ReviewCreate from '../Reviews/ReviewCreate'
import { indexReviews } from '../../api/reviews'

const Product = ({ user }) => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    indexReviews(user)
      .then(res => {
        setReviews(res.data.review)
        console.log('this is the res', res)
      })
      .catch(err => console.log(err))
  }, [])
  const reviewAverage = reviews.reduce((sum, review) => {
    return sum + review.rating / reviews.length
  }, 0)
  console.log('res from api in product component', reviewAverage)
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
              {reviews.length !== 0 && (
                <Rating
                  style={{ marginRight: '.5rem' }}
                  icon='star'
                  disabled={true}
                  defaultRating={reviewAverage}
                  maxRating={5}
                />
              )}
              ({reviews.length === 0 ? 'Add a review below' : reviews.length})
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
        <ReviewCreate user={user} />
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
        {reviews.map(review => {
          console.log('this is id', review._id)
          return (
            <Reviews
              setReview={setReviews}
              user={user}
              key={review._id}
              reviewId={review._id}
              review={review}
            />
          )
        })}
      </Grid.Row>
    </div>
  )
}

export default Product
