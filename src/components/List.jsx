import {useEffect, useState } from "react"
import "../index.css"

function List({lists}) {
    const [newlist,setNewlist]=useState(lists)
    useEffect(()=>{
        setNewlist(lists)
    },[lists])

    const deletedlist = i =>{
        setNewlist(oldList=>{
            return oldList.filter((_,index) => index !==i)
        })
    }
    newlist.length>0 && localStorage.setItem("Todolist",JSON.stringify(newlist))

    return(
        newlist.map((list,i)=>(
            <div key={i} className="w-80 text-center rounded-md flex justify-end mt-3.5 bg-gray-200 -mb-3 items-center">
                <p className=" mb-2 w-60 mr-2 break-words">{list}</p>
                <button className=" bg-red-600 rounded-r-md mr-1.5 h-6.5 w-14 hover:bg-red-400 " onClick={()=> {deletedlist(i)
                //
                    newlist.length===1 && localStorage.removeItem("Todolist");}
                }>-Delete</button>
            </div>
  
        ))
  )
}

export default List
 