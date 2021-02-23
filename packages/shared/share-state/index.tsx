import React from 'react'
import { TicketProvider } from 'shared/share-state/useCounter/CounterProvider'

/**
 * more context here don't for get use
 * @RootContextProvider wrap all context here
 */

export const RootContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <TicketProvider>{children}</TicketProvider>
    </>
  )
}
