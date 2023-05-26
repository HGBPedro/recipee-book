import { useState } from 'react'

const useDebounce = (callback: Function, delay: number) => {
  const [timeoutId, setTimeoutId] = useState<number | undefined>()

  const debounceCallback = (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    const id = setTimeout(() => {
      callback(...args)
    }, delay)

    setTimeoutId(id)
  }

  return debounceCallback
}

export { useDebounce }
