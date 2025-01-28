import { useEffect, useState } from "react"
import "../index.css"
import List from "./List"

let nextId=0;
function ToDoHeader() {
    
    const [list ,setList]=useState([]);
    const [value,setValue]=useState('');


    list.length>0 && localStorage.setItem("Todolist",JSON.stringify(list))

    let non_json_local_Todolist=localStorage.getItem("Todolist")

    let local_Todolist
    
    non_json_local_Todolist?local_Todolist=JSON.parse(non_json_local_Todolist):"";


   useEffect(()=>{
    local_Todolist&& setList(local_Todolist)
   },[])

    
   
  return (
    <>
    <div className="flex flex-col items-center  mt-10">
        <div className="w-80 bg-cyan-100 text-center  rounded-md pb-3 -mb-2">
            <form action="#">
            <label htmlFor="ToDo" className="text-4xl font-bold ">ToDoList</label>

                <input id="ToDo" value={value?value:""} className=" border-1 rounded-l-lg w-60 pl-1" onChange={(e)=>{
                    setValue(e.target.value)
                }}/>

                <button className=" bg-white rounded-r-md ml-3 h-6.5 w-14 hover:bg-blue-400 hover:text-white" onClick={()=>{
                    if(!value.length==0){
                        setList([ ...list, value])
                    }
                    
                }}>+ Add</button>
            </form>
            {list.length>0 && <List lists={list}  setLists={setList}/>}
        </div>
        
    </div>
    </>
  )
}

export default ToDoHeader
 