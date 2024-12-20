// eslint-disable-next-line
export function TaskItem({ title, id, index, status, removeSpTask, completeTask, selectTask }){
    return (
        <div className={`app-taskmgr-item ${status && 'completed'}`}>
            <div className="taskmgr-item-check">
                <input className="item-check" type="checkbox" id={id} onChange={()=>selectTask({ id })}/>
                <label htmlFor={id}></label>
            </div>
            <div className="taskmgr-item-title">
                <label htmlFor={id}>{title}</label>
            </div>
            <div className="taskmgr-item-func">
                <button title="Task completed" onClick={()=>completeTask({ id, index })}><img src="./src/assets/check.png" alt="Complete task" /></button>
                <button title="Delete task" onClick={()=>removeSpTask({ id })}><img src="./src/assets/trash.png" alt="Delete task" /></button>
            </div>
        </div>
    )
}