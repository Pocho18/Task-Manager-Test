import { useContext, useCallback } from "react"
import { TaskContext } from "../context/TaskContext"

export function useTask(){
    const { setTasks, tasks, setSelected, selected, setCompletedTask, setFilteredTasks } = useContext(TaskContext)

    const addTask = ({ title, id })=>setTasks(prevState=>[...prevState, [title, id, false]])
    const removeSpTask = ({ id })=>setTasks(prevState=>prevState.filter(task=>task[1]!==id))
   
    const removeTask = ()=>{
        setTasks(prevState=>prevState.filter(task=> !selected.includes(task[1])))
        setSelected([])
    }
    const completeTask = ()=>{
        const newTasks = [...tasks]
        newTasks.forEach(task=>{
            if(selected.includes(task[1])) task[2] = true
        })
        setTasks(newTasks)
        setSelected([])
    }
    
    const selectTask = ({ id })=>{
        if(selected.includes(id)){
            setSelected(prevState=>prevState.filter(task=>task!==id))
        }else setSelected(prevState=>[...prevState, id])
    }

    const completeSpTask = ({ id, index })=>{
        setCompletedTask(prevState=>[...prevState, id])
        const newTasks = [...tasks]
        newTasks[index][2] = true
        setTasks(newTasks)
    }

    const filterTasks = useCallback(({ filter }) => {
        if(filter === 'all'){
            setFilteredTasks([...tasks].sort((a, b)=>a[2]-b[2]))
        }else if(filter === 'completed'){
            setFilteredTasks([...tasks].filter(task => task[2]))
        }else {
            setFilteredTasks([...tasks].filter(task => !task[2]))
        }
    }, [tasks])

    
    return { addTask, removeTask, selectTask, removeSpTask, completeSpTask, completeTask, filterTasks }
}