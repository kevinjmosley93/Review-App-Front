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
