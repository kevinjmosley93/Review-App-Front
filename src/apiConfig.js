let apiUrl
const apiUrls = {
  production: 'https://review-me-app.herokuapp.com',
  development: 'https://library-express-api.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
