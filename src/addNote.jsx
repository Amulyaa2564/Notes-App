export default function AddNote({title,setTitle,content,setContent}){
    return (
        <div className= "h-screen w-full md:w-1/2 p-2  md:border-r-white md:border-r-2"> 
            <div className="w-full max-w-md p-5">
                <h1 className="mb-2">Add Notes</h1>
                <input type="text" placeholder="Enter Notes Heading" className="border p-2 w-full mb-2 " value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
                <textarea placeholder="Write Details Here" className="border p-2  w-full  h-50 mb-2 " value={content} onChange={(e)=>{
                    setContent(e.target.value)
                }}></textarea>
                <button type="submit" className="w-full bg-white text-black rounded">Add Note</button>
            </div>
        </div>
    )
}