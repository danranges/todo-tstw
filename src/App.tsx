import Landing from "./pages/Landing"
import Nav from "./components/Nav"
import CreateAccount from "./components/CreateAccount"
import LogIn from "./components/LogIn"

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen dark:bg-zinc-900">
      <LogIn />
    </div>
  )
}

export default App
