import React from 'react'
import { createContext } from 'use-context-selector'
import { useSetState, usePersistFn } from 'ahooks'

// * ----- initialState --------
const initialState = {
  counter: 1,
}

type Action = {
  insCounter?: () => void
  desCounter?: () => void
}

// * ----- ctx and TicketProvider --------
export const ctx = createContext<[typeof initialState, Action]>([
  initialState,
  {},
])

export const TicketProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useSetState<typeof initialState>({
    ...initialState,
  })

  const insCounter = usePersistFn(() => {
    setState((prev) => ({
      counter: prev.counter + 1,
    }))
  })

  const desCounter = usePersistFn(() => {
    setState((prev) => ({
      counter: prev.counter - 1,
    }))
  })

  return (
    <ctx.Provider value={[state, { insCounter, desCounter }]}>
      {children}
    </ctx.Provider>
  )
}
