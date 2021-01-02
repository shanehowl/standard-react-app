import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

// Pages
import Home from './pages/home'
import Crud from './pages/crud'

// Styles
import './styles/index.less'

// Utilities
import { ReduxProvider } from './utilities/redux/redux'

ReactDOM.render(
  <ReduxProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/crud" component={Crud} />
      </Switch>
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
