/* eslint-disable react-native/no-inline-styles */
import { App as ComApp } from 'components/src/App'
import useCounter from 'share-state/src/useCouter'
import React from 'react'

const App = () => {
  const { count, increaseCount, decreaseCount } = useCounter()
  console.log('count', count)

  return (
    <>
      <ComApp />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          type="button"
          style={{ backgroundColor: 'orange' }}
          onClick={decreaseCount}
        >
          -
        </button>
        <span style={{ padding: '0 10px' }}> {count}</span>
        <button
          type="button"
          style={{ backgroundColor: 'red' }}
          onClick={increaseCount}
        >
          +
        </button>
      </div>
    </>
  )
}
export default App
