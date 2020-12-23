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

export const updateReviews = (user, review, id) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/reviews/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { review }
  })
}

export const showReviews = (user, id) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/reviews/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteReviews = (user, id) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/reviews/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
