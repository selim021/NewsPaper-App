import React,{useState} from "react";
import  UpdateNews  from "./UpdateNews.jsx";
const News = ({ data, deleteNews, getAllNews,setView,view}) => {
  const[input,setInput]=useState(false)

  return (
    <div>
      <h2>NewsPaper</h2>
      
   {data.length > 0 ? (
        <div>
{data.map((ele) => (
<div key={ele.id}>
<h3>{ele.title}</h3>
   {ele.image && <img src={ele.image} alt={ele.title} style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />}
  <p>{ele.description}</p>
    {<button onClick={() => deleteNews(ele.idnews) }>Delete</button>}
    <button  onClick={()=>setInput(!input)} >UPDATE</button>
    


    {input ? <UpdateNews id={ele.idnews}  getAllNews={getAllNews} setView={setView} view={view}/> :""}
    </div>
   ))
    }
        </div>
      ) : (
        <p>Share with us same News</p>
      )}
      
    </div>
  );
};

export default News;
