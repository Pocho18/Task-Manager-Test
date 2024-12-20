import { Filters } from "./components/Filters"
import { Input } from "./components/Input"
import { TaskMgr } from "./components/TaskMgr"

export function App() {
  return (
    <>
      <header>
        <div className="app-title">
          <h1>Task Manager</h1>
        </div>
        <Input />
      </header>
      <main> 
        <TaskMgr />
      </main>
      <footer>
        <Filters />
      </footer>
    </>
  )
}

export default App