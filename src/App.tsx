import Landing from "./pages/Landing"
import Nav from "./components/Nav"
import CreateAccount from "./components/CreateAccount"

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen dark:bg-zinc-900">
      <CreateAccount />
    </div>
  )
}

export default App
