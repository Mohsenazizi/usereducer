import { useCounter, ACTIONS } from './useCounter'


function App() {
  
  const { state, dispatch } = useCounter();
  console.log(state)
  return (
    <div className="App">
      {state.counter}
      <button onClick={()=>dispatch({type:ACTIONS.ADD})}>+</button>
    </div>
  )
}

export default App
