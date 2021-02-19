import { useCallback, useState } from 'react'
import { createModel } from 'hox'

const useCounter = () => {
  const [count, setCount] = useState<number>(0)

  const increaseCount = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const decreaseCount = () => {
    setCount(count - 1)
  }

  return {
    count,
    decreaseCount,
    increaseCount,
  }
}

export default createModel(useCounter)
