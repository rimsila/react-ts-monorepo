import React from 'react'
import useCounter from 'share-state/src/useCouter'

export const App = () => {
  const { count, increaseCount, decreaseCount } = useCounter()

  return (
    <div style={{ margin: '80px auto', width: 400 }}>
        {/* <h1>Web app Cra</h1> */}
      <button
        type="button"
        style={{ backgroundColor: 'orange', width: 100 }}
        onClick={decreaseCount}
      >
        -
      </button>
      <span style={{ padding: '0 10px' }}> {count}</span>
      <button
        type="button"
        style={{ backgroundColor: 'red', width: 100 }}
        onClick={increaseCount}
      >
        ++
      </button>
    </div>
  )
}
