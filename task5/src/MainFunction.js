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


function MainFunction() {
    let match = useRouteMatch();
    const [data, setData] = useState([]);
    const [name,setName] = useState("");
    const[nameSearch,setSearch] = useState("");
    const[result,setResult] = useState([]);
    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);
  
  
    const handleChange = event => {
      setName(event.target.value);
    }
  
    const handleSubmit = event => {
      const inputData = {name}
      addCard(inputData);
      setName("");
      window.location.href="http://localhost:3000/all";
      
    }
  
    
  
  
  
    async function addCard(data) {
      const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;
     alert(bearer);
      const response = await fetch("http://localhost:8000/api/addCard",{
          method : "POST",
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
    
  
  
    async function loadData() {
        const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;
        const response = await fetch("http://localhost:8000/api/getCard", {
           method:'GET',
            headers: {
              "Content-Type": "application/json",
              "Authorization": bearer
              }
        });  
      let cards =await response.json();
      setData(cards);
      
      
    }
    const handleSearch = event => {
        setSearch(event.target.value);
    }
  
    const clickOn = event => {
      document.getElementById("66").style.display="none";
      document.getElementById("55").style.display="block";
      document.getElementById("67").style.display="block";
      document.getElementById("68").style.display="block";
  
    }
    const ClickOn = event => {
      document.getElementById("66").style.display="block";
      document.getElementById("55").style.display="none";
      document.getElementById("67").style.display="none";
      document.getElementById("68").style.display="none";
      document.getElementById("777").style.display="none";
      document.getElementById("888").style.display="block";
      document.getElementById("999").style.display="block";
      setSearch("");
  
    }
    async function handleS() {
      getSearch(nameSearch);
      document.getElementById("777").style.display="block";
      document.getElementById("888").style.display="none";
      document.getElementById("999").style.display="none";
    }
  
    async function getSearch(nam) {
        const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;
      const response = await fetch("http://localhost:8000/api/getByName/"+nam,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": bearer
        }
      })
      let cardes =await response.json();
      setResult(cardes);
    }
  
    
    
    useEffect(() => {
      loadData();
    }, []);
  
    return (
      
      <div className="container">
        <Router>
        <div className="mt-4">
     <div  id="66" style={{background:"steelblue",height:"50px",width:"950px",display:"block"}}>
      <button style={{background:"steelblue",border:"solid steelblue 1px",marginTop:"7px",marginLeft:"7px"}} onClick={clickOn}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg></button>
      </div>
      <button  id="67" style={{background:"white",border:"solid white 1px",marginTop:"7px",marginLeft:"7px",display:"none",position:"absolute"}} onClick={handleS} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg></button>
      <input value={nameSearch} onChange={handleSearch} id="55" type="text" style={{background:"white",height:"50px",width:"930px",display:"none",marginLeft:"40px"}}/>
      <button  id="68"  style={{background:"white",border:"solid white 1px",marginTop:"-40px",marginLeft:"925px",display:"none",position:"absolute"}} onClick={ClickOn}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg></button>
     </div>
  
     <div className="container" style={{display:"none"}} id="777">
          <h3 style={{marginTop:"30px",marginLeft:"32px"}}>Result of searching:{nameSearch}</h3>
          <div  className="row">
             {result?.map(card=> (
               <div className="col-4 mt-3" style={{border:"solid silver 1px",maxWidth:"300px",marginLeft:"50px"}}>
                <div>
                  <p style={{fontSize:"30px"}}>{card.name}</p>
                  <a href={`/editItem/${card.id}`}  style={{fontSize:"20px",color:"steelblue"}}>Details</a>
                  <h6 style={{color:"silver"}}>{card.addedDate}</h6>
                </div>
              </div>
              
  
            ))}</div>
  
        </div>
        <div id="888" className="text-center mt-4" style={{border:"solid silver 1px",maxWidth:"400px",marginLeft:"320px",display:"block"}}>
          
          <input type="text" value={name} onChange={handleChange} placeholder="Create new card" className="mt-3" style={{marginLeft:"0px",width:"350px",height:"50px",border:"solid white 1px"}}/><br/>
          <hr/>
          <button  onClick={handleSubmit} className="btn btn-info mb-2" style={{marginLeft:"-150px"}}>Add card++</button>
          
        </div>
        <div id="999" style={{display:"block"}}>
          <div  className="row" >
             {data.map(card=> (
               
              <div className="col-4 mt-3" style={{border:"solid silver 1px",maxWidth:"300px",marginLeft:"50px"}}>
                <div>
                  <p style={{fontSize:"30px"}}>{card.name}</p>
                  <a href={`/editItem/${card.id}`}  style={{fontSize:"20px",color:"steelblue"}}>Details</a>
                  <h6 style={{color:"silver"}}>{card.addedDate}</h6>
                </div>
              </div>
              
  
            ))}</div>
            </div>
            </Router>
  </div>
  
  
    );
  
  
  }

  export default MainFunction;