export default function RecentNote({task,setTask}){
    const deleteNote=function(idx){
        const copyTask=[...task];
        copyTask.splice(idx,1)

        setTask(copyTask)
        
    }
    return (
        <div className="h-screen w-full md:w-1/2 p-2">
            <h1>Recent Notes</h1>
            <div>
                <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
                {task.map(function(elem,idx){
                    return (
                    <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black px-4 pt-9 pb-5 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                        <div>
                        <h4 className="leading-tight text-xl font-bold">{elem.title}</h4>
                        <p className="leading-tight mt-4 font-medium text-gray-500">{elem.content}</p>
                        </div>
                        <button type="button" onClick={()=>{
                            deleteNote(idx)
                        }} className="w-full bg-red-400 text-white text-xs py-1 rounded font-bold cursor-pointer active:scale-95 border-none">Delete </button>
                    </div>
                    
                            
                    )    
                })}
                </div>
            </div>
        </div>
    )
}