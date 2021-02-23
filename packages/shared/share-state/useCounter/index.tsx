import { useContextSelector } from 'use-context-selector'
import { ctx } from './CounterProvider'

export function useCounterStore() {
  const counter = useContextSelector(ctx, (v) => v[0]?.counter)
  const insCounter = useContextSelector(ctx, (v) => v[1]?.insCounter)
  const desCounter = useContextSelector(ctx, (v) => v[1]?.desCounter)

  return {
    counter,
    insCounter,
    desCounter,
  }
}
