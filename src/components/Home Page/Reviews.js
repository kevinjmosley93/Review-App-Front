import moment from 'moment'
import React from 'react'
import {
  Divider,
  Header,
  Grid,
  Card,
  Button,
  Image,
  Icon
} from 'semantic-ui-react'

const Reviews = () => {
  return (
    <div>
      <Header as='h4' floated='right'>
        Leave Us a Review
      </Header>
      <br />
      <Divider />
      <Grid.Row>
        {' '}
        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            />
            <Card.Header>Reviewer Name</Card.Header>
            <Card.Meta>{moment().format('LLL')}</Card.Meta>
            <Card.Description>
              Sausage beef ribs pork loin leberkas doner tail strip steak flank
              ham hock kevin chuck t-bone buffalo.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                <Icon name='thumbs up' />
              </Button>
              <Button basic color='red'>
                <Icon name='thumbs down' />
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Row>
    </div>
  )
}

export default Reviews
