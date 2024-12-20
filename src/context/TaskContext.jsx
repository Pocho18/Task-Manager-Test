import { createContext , useState} from "react"

export const TaskContext = createContext()

// eslint-disable-next-line react/prop-types
export function TaskProvider({ children }){
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredTasks] = useState([])
    const [selected, setSelected] = useState([])
    const [completedTask, setCompletedTask] = useState([])

    

    return (
        <TaskContext.Provider value={{ 
            tasks, setTasks,
            selected, setSelected,
            completedTask, setCompletedTask,
            filteredTasks, setFilteredTasks,
         }}>
            {children}
        </TaskContext.Provider>
    )
}