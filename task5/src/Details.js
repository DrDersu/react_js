import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import React, { useEffect, useState } from 'react';
  import { event } from "jquery";
  import {useCookies} from 'react-cookie';


function Details() {
    const [name,setName]=useState("");
    const [addedDate,setDate]=useState("");
    const[id,setId]=useState(0);
    const[tasks,setTasks] = useState([]);
    let {idCard} = useParams();
    const[nameTask,setTaskes] = useState("");
    const[name1,setName1] = useState("");
    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);
  
    
    async function setData(data) {
      setName(data.name);
      setDate(data.addedDate);
      setId(data.id);
      setTasks(data.tasks);
      
    }
  
    useEffect(() => {
      GetCard(idCard);
    }, []);
    
    const changeName = event=> {
      setName(event.target.value);
  }
  
  
  
  
    const change = event=> {
      document.getElementById("23").style.display="none";
      document.getElementById("24").style.display="block";
      document.getElementById("25").style.display="none";
      document.getElementById("26").style.display="block";
      document.getElementById("27").style.display="block";
      document.getElementById("28").style.display="none";
      document.getElementById("29").style.display="none";
  
  
  
  }
  const change1 = event=> {
    document.getElementById("23").style.display="block";
    document.getElementById("24").style.display="none";
    document.getElementById("25").style.display="block";
    document.getElementById("26").style.display="none";
    document.getElementById("27").style.display="none"
    document.getElementById("28").style.display="block";
    document.getElementById("29").style.display="block";
  
  
  }
  
  
  
  
  
  
  
    async function GetCard(id) {
      
    const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;
  
      const response = await fetch("http://localhost:8000/api/getOneCard/"+id,{
        method:"GET",
        headers:{
            "Content-Type" : "application/json",
            "Authorization": bearer
        }
      })
        
      let respo =await response.json();
  
      setData(respo);
      
      
      
    }
    const edit = event=> {
      const inputData = {id,name,addedDate,tasks};
      editCard(inputData);
      alert("Edited!!!");
      
    
  }
  
  async function delet() {
    const inputData = id;
    del(inputData);
    window.location.href="http://localhost:3000/all"
  }
  
  
  async function del(data) {
    const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;

    const response = await fetch("http://localhost:8000/api/delCard",{
      method : "DELETE",
      mode:"cors",
      cache:"no-cache",
      credentials:"same-origin",
      headers:{
          "Content-Type" : "application/json",
          "Authorization" :bearer
      },
      redirect:"follow",
      referrerPolicy:"no-referrer",
      body:JSON.stringify(data)
    })
    
  
  }
  
  const setTask = event => {
    setTaskes(event.target.value);
    
    
  }
  
  const handleSubmit = event => {
  
    const inputData = {id,name:nameTask,addedDate,tasks}
    addTask(inputData);
    setTaskes("");
    window.location.href="http://localhost:3000/editItem/"+id
    
    
  }
  
  
  
  
  
  async function addTask(data) {
    const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;
    alert("bearer");
    const response = await fetch("http://localhost:8000/api/addTask",{
      method : "PUT",
      mode:"cors",
      cache:"no-cache",
      credentials:"same-origin",
      headers:{
          "Content-Type" : "application/json",
          "Authorization": bearer
      },
      redirect:"follow",
      referrerPolicy:"no-referrer",
      body:JSON.stringify(data)
    })
   
  }
  
    async function editCard(data) {
        const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;

      const response = await fetch("http://localhost:8000/api/editCard",{
        method : "PUT",
        mode:"cors",
        cache:"no-cache",
        credentials:"same-origin",
        headers:{
            "Content-Type" : "application/json",
            "Authorization":bearer
        },
        redirect:"follow",
        referrerPolicy:"no-referrer",
        body:JSON.stringify(data)
      })
      
      
  }
  
   
    return (
      <div className="container" style={{background:"DarkSlateGray",height:"200px"}}>
        <div className="w-100 mt-5" >
            <div className="ml-4 text-white" style={{marginTop:"50px",position:"absolute"}}>
              <h3 id="23" style={{display:"block"}}>{name}</h3>
              <input  id="24" value={name} onChange={changeName} style={{display:"none",width:"500px",height:"50px"}}/>
              <p id="29" style={{marginTop:"10px"}}>{addedDate}</p>
              <div className="row ml-1 text-white mt-5">
                <a type="button" id="28" onClick={change}>EDIT</a>
                <a type="button" onClick={edit} id="27" style={{color:"steelblue",display:"none"}}>SAVE</a>
                <a type="button" onClick={delet} id="25" style={{color:"red",marginLeft:"50px",display:"block"}}>DELETE</a>
                <a type="button" onClick={change1} id="26" style={{color:"silver",marginLeft:"50px",display:"none"}}>CANCEL</a>
              </div>
            </div>
        </div>
        <div className="text-center" style={{border:"solid silver 1px",width:"1150px",marginTop:"250px",position:'absolute',marginLeft:"-20px"}}>
          
          <input type="text"  value={nameTask} onChange={setTask}   placeholder="Add new task" className="mt-3" style={{marginLeft:"-700px",width:"350px",height:"50px",border:"solid white 1px"}}/><br/>
          <hr/>
          <button onClick={handleSubmit} className="btn btn-info mb-2" style={{marginLeft:"-950px"}}>Add task++</button>
          
        </div>
        <div style={{marginTop:"410px",position:"absolute",width:"1150px",marginLeft:"-20px"}}>
        {tasks?.map(task=>(
          <div className="w-100 mt-3 p-4" style={{border:"solid silver 1px",width:"1150px"}}>
            <h4>{task.cardText}</h4>
            <p>{task.addedDate}</p>
            <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
    <label class="form-check-label" for="flexSwitchCheckDefault">Done</label>
  </div>
          </div>
        ))}
        </div>
  </div>
    )
  }


  export default Details;