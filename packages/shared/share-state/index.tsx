import React from 'react'
import { TicketProvider } from './useCounter/CounterProvider'

/**
 * more context here don't for get use
 * @RootContextProvider wrap all context here
 */

export const RootContextProvider = ({ children }) => {
  return (
    <>
      <TicketProvider>{children}</TicketProvider>
    </>
  )
}
