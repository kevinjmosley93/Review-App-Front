import React from 'react'
import { Grid, Header, Image, Rating } from 'semantic-ui-react'
import Reviews from './Reviews'

const Product = () => {
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
              <Rating icon='star' defaultRating={3} maxRating={5} />
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
      <Reviews />
    </div>
  )
}

export default Product
