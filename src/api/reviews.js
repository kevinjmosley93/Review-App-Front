import apiUrl from '../apiConfig'
import axios from 'axios'

export const createReviews = (user, review) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/reviews',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { review }
  })
}

export const indexReviews = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/reviews'
  })
}
