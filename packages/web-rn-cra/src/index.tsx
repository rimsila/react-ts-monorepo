import { AppRegistry } from 'react-native'

import { App } from 'shared/components/App'
import React from 'react'
import { RootContextProvider } from 'shared/share-state'
function AppRoot() {
  return (
    <RootContextProvider>
      <App />
    </RootContextProvider>
  )
}

AppRegistry.registerComponent('myprojectname', () => AppRoot)
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
})
