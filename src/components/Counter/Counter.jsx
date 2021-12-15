import { useEffect, useState, useReducer } from 'react'

const pinkRGB = `rgb(236, 72, 153)`

const initialState = { count: 0 }

function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 }
    } 
    case 'decrement': {
      return { count: state.count - 1}
    }
    case 'reset': {
      return { count: 0 }
    }
    default: {
      throw Error(`Unknown action: ${action.type}`)
    }
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, initialState)
  // const [count, setCount] = useState(0)
  const [currentColor, setCurrentColor] = useState(pinkRGB)

  useEffect(() => {
    if (state.count === 0) {
      setCurrentColor(pinkRGB)
    }

    if (state.count > 0) {
      setCurrentColor(`rgb(52, 211, 153)`)
    }

    if (state.count < 0) {
      setCurrentColor(`rgb(239, 68, 68)`)
    }
  }, [state.count])

  const increment = () => {
    // setCount((prevState) => prevState + 1)
    dispatch({
      type: 'increment'
    })
  }

  const decrement = () => {
    // setCount((prevState) => prevState - 1)
    dispatch({
      type: 'decrement'
    })
  }

  const reset = () => {
    // setCount(0)
    dispatch({
      type: 'reset'
    })
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: currentColor }}>
        {state.count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
