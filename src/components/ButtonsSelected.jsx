import { useTask } from "../hooks/useTask"

export function ButtonsSelected() {
    const { removeTask, completeTask } = useTask()

    const handleComplete = ()=>{
        document.querySelectorAll('.item-check').forEach(item=>{
            if(item.checked) item.checked = false
        })
        completeTask()
    }

    return (
        <div className="app-buttonSelected">
            <div className="btn-check">
                <button onClick={handleComplete}>Complete Tasks Selected</button>
            </div>
            <div className="btn-delete">
                <button onClick={removeTask}>Delete Tasks Selected</button>
            </div>
        </div>
    )
}