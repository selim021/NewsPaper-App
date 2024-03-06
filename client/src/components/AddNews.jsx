import React, { useState } from "react";

const AddNews=({createNews})=>{
 const[title,setTitle]=useState("")
 const[image,setImage]=useState("")
  const[description,setDescription]=useState("")  


  
    return(
        <div>
<input   type="text"  placeholder="title" value={title} onChange={e => setTitle(e.target.value)}/>
<input   type="text" placeholder="image" value={image} onChange={e=>setImage(e.target.value)}/>
<input   type="text" placeholder="description" value={description} onChange={e=>setDescription(e.target.value)}/>
<input type="button" value="add" onClick={()=>{createNews(title,image,description)}} />
        </div>
    )
}

export default AddNews