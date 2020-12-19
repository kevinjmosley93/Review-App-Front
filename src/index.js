import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'semantic-ui-css/semantic.min.css'

import App from './App'
import { HashRouter } from 'react-router-dom'

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
