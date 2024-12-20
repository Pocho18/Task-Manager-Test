import { useState } from "react"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import { useEffect } from "react"
import { useTask } from "../hooks/useTask"

export function Filters(){
    const [filter, setFilter] = useState('all')
    const { tasks } = useContext(TaskContext)
    const { filterTasks } = useTask()

    useEffect(() => filterTasks({ filter: filter }), [tasks, filterTasks, filter])

    return (
        <section className="app-filters">
            <div className="app-filters-completed">
                <select onChange={(e)=>setFilter(e.target.value)}>
                    <option value="all">All Tasks</option>
                    <option value="completed">Completed Tasks</option>
                    <option value="uncompleted">Uncompleted Tasks</option>
                </select>
            </div>
        </section>
    )
}