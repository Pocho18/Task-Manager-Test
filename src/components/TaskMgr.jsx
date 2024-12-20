import { useContext } from 'react'
import { TaskItem } from './TaskItem.jsx'
import { TaskContext } from '../context/TaskContext.jsx'
import { useTask } from '../hooks/useTask.js'
import { ButtonsSelected } from './ButtonsSelected.jsx'
import { useEffect } from 'react'

export function TaskMgr(){
    const { selected, filteredTasks } = useContext(TaskContext)
    const { removeSpTask, completeSpTask, selectTask } = useTask()
    
    useEffect(()=>{
        const items = document.querySelectorAll('.app-taskmgr-item')

        if (selected.length>0) {
            document.querySelector('.app-taskmgrContent').children[items.length-1].style.marginBottom = '92px'
        }else if (filteredTasks.length>0) {
            document.querySelector('.app-taskmgrContent').children[items.length-1].style.marginBottom = '0px'
        }
    }, [selected])
    
    return (
        <section className="app-taskmgr">
            <div className='app-taskmgrContent'>
                {filteredTasks.length>0 ? filteredTasks.map((item, index)=>{
                    return <TaskItem key={item[1]} title={item[0]} id={item[1]} index={index} status={item[2]} removeSpTask={removeSpTask} completeTask={completeSpTask} selectTask={selectTask} />
                }):<p style={{marginTop: '30px', color: '#777'}}>All Tasks Completed!</p>}
            </div>
            {selected.length>0 && <ButtonsSelected />}
        </section>
    )
}