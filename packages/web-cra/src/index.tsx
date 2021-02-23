import React from 'react'
import ReactDOM from 'react-dom'
import { RootContextProvider } from 'shared/share-state'
import { App } from './app'

ReactDOM.render(
  <React.StrictMode>
    <RootContextProvider>
      <App />
    </RootContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
