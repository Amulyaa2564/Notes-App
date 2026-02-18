import { useState } from "react";
import AddNote from "./addNote";
import RecentNote from "./recentNote";

function App(){
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');

  const[task,setTask]=useState([])

  

    const submitHandler=(e)=>{
      e.preventDefault()
      const copyTask=[...task]
      copyTask.push({title,content})
      setTask(copyTask)
      setTitle('')
      setContent('')

    }
    return(
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex flex-col md:flex-row h-screen w-screen">
        <AddNote title={title} setTitle={setTitle} content={content} setContent={setContent}/>
        <RecentNote task={task} setTask={setTask}/>
      </form>
    )
}

export default App