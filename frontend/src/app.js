import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
import { AppContainer as ReactHotContainer } from 'react-hot-loader'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <ReactHotContainer>
      <AppContainer store={store} routes={routes} />
    </ReactHotContainer>,
    MOUNT_NODE
  )
}

// GO
render()

if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    const NextApp = require('./containers/AppContainer').defaultl;
    ReactDOM.render(
      <ReactHotContainer>
        <NextApp/>
      </ReactHotContainer>,
      MOUNT_NODE
    )
  })
}
