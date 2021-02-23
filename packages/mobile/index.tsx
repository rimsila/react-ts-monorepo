import { AppRegistry } from 'react-native'
import React from 'react'
import { RootContextProvider } from 'shared/share-state'
import { App } from 'components/src/App'
import { name as appName } from './app.json'

function AppRoot() {
  return (
    <RootContextProvider>
      <App />
    </RootContextProvider>
  )
}

AppRegistry.registerComponent(appName, () => AppRoot)
