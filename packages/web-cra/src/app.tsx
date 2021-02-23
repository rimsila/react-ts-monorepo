import React from 'react'
import { useCounterStore } from 'shared/share-state/useCounter'

export const App = () => {
  const { counter, desCounter, insCounter } = useCounterStore()

  return (
    <div style={{ margin: '80px auto', width: 400 }}>
      {/* <h1>Web app Cra</h1> */}
      <button
        type="button"
        style={{ backgroundColor: 'orange', width: 100 }}
        onClick={desCounter}
      >
        -
      </button>
      <span style={{ padding: '0 10px' }}> {counter}</span>
      <button
        type="button"
        style={{ backgroundColor: 'red', width: 100 }}
        onClick={insCounter}
      >
        +
      </button>
    </div>
  )
}
