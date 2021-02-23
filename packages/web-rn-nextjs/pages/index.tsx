import React from 'react'
import { RootContextProvider } from 'shared/share-state'
import { App } from 'shared/components/App'

const AppRoot = () => {
  return (
    <>
      <RootContextProvider>
        <App />
      </RootContextProvider>
    </>
  )
}

export default AppRoot
