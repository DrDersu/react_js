import React, {useEffect, useState} from 'react'

import './bootstrap-5.0.0-beta1-dist/css/bootstrap.css'
import './bootstrap-5.0.0-beta1-dist/css/bootstrap.min.css'
import './App.css';

import {
  BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
} from "react-router-dom";
import {render} from "@testing-library/react";



function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{background:'darkslateblue'}}>
        <div className="container">
          <a className="navbar-brand text-white" href="#"  style={{fontSize:'20px' , fontWeight:'bold'}}>My Tasks</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" d-flex" >
              <ul className="navbar-nav text-white">
                <li className="nav-item me-3">
                  <a>All Cards</a>
                </li>
                <li className="nav-item me-3">
                  <a >Register</a>
                </li>
                <li className="nav-item me-3">
                  <a>Login</a>
                </li>
              </ul>
          </div>
        </div>
      </nav>
  )
}


function ListCard(){

  const [date,setDate]= useState([])

  async function loadDate(){
    let response= await fetch("http://localhost:8000/api/allcards")
    let tableDate= await response.json()
    setDate(tableDate);
  }

    useEffect(() => {
        loadDate();
    }, []);


  return(
      <div className="container m-auto " >
          <div className="row  row-cols-lg-3 mt-5 mb-5 ">
        {date?.map(card=>(
            <div className="col mt-2 mb-5 ">
            <div className="card border-0 shadow-lg" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <input type="hidden" value={card.id} name="id" />
                    <Link to={'/alltask/'+card.id}  className="card-link text-decoration-none">DETAILS</Link>
                    <br/>
                    <h6 className="card-subtitle pt-3 text-black-50">{card.addedDate}</h6>
                </div>
            </div>
            </div>
        ))}
          </div>
      </div>
  )
}


function SearchCard(){
    const [string_s, setString ] = useState("");
    const [date,setDate]= useState([])

    const handleNameChange = event =>{
        setString(event.target.value);
    }


    const handleSubmit = event =>{
        if (string_s!="") {
            const inputData = {string_s}
        }
        else{
            alert("error input is empty");
        }
        setString("");
        event.preventDefault();


    }



    return (
        <div className = "container">
            <form onSubmit = {handleSubmit} className="m-auto mt-2 pb-3 w-50 shadow-lg bg-white rounded-3">
                <label htmlFor="ADD CARD" style={{fontWeight:'bold', fontSize:'24px',color:'gray',paddingLeft: '9px'}}>Search CARD</label>
                <div className = "form-group m-2">
                    <label>
                        Search :
                    </label>
                    <input type = "text" className = "form-control" value = {string_s} onChange = {handleNameChange}/>
                </div>
                <div className = "form-group m-2">

                    <Link to={'/search/'+string_s}  className = "btn btn-success">Search</Link>
                </div>
            </form>
        </div>
    )
}


function SearchPage(){
    let {search_s}= useParams();
    const [string_s2, setString ] = useState("");
    const [date,setDate]= useState([])

    useEffect(() => {
        searchCard(search_s);
    }, []);

    async function searchCard(data){
        let response = await fetch("http://localhost:8000/api/search/"+data);
        if(response.status==200){
            let data = await response.json();
            setDate(data);
        }
        else{
            alert("Error not card is data!")
        }
    }

    if (date.length>0) {

        return (

            <div className="container m-auto ">
                <div className="row  row-cols-lg-3 mt-5 mb-5 ">
                    {date?.map(card => (
                        <div className="col mt-2 mb-5 ">
                            <div className="card border-0 shadow-lg" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{card.name}</h5>
                                    <input type="hidden" value={card.id} name="id"/>
                                    <Link to={'/alltask/' + card.id}
                                          className="card-link text-decoration-none">DETAILS</Link>
                                    <br/>
                                    <h6 className="card-subtitle pt-3 text-black-50">{card.addedDate}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
    else{
        return (
            <div className="container m-auto ">
                <h2>Not card is our site!!!</h2>
            </div>
        )
    }
}


function AddCard(){

    const [name, setName] = useState("");

    const [message, setMessage] = useState("");

    const handleNameChange = event =>{
        setName(event.target.value);
    }





    const handleSubmit = event =>{
        if (name!="") {
            const inputData = {name}
            addCard(inputData);
        }
        else{
            alert("error input is empty");
        }
        setName("");
        event.preventDefault();
        window.location.href='http://localhost:3000'

    }

    async function addCard(data){
        const response = await fetch("http://localhost:8000/api/addcard", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        });
        let messData = await response.json();
        setMessage(messData.id? "Data Added" : "Error");
        alert("added");
    }

    return (
        <div className = "container">
            <form onSubmit = {handleSubmit} className="m-auto mt-2 pb-3 w-50 shadow-lg bg-white rounded-3">
                <label htmlFor="ADD CARD" style={{fontWeight:'bold', fontSize:'24px',color:'gray',paddingLeft: '9px'}}>ADD CARD</label>
                <div className = "form-group m-2">
                    <label>
                        NAME :
                    </label>
                    <input type = "text" className = "form-control" value = {name} onChange = {handleNameChange}/>
                </div>
                <div className = "form-group m-2">
                    <button className = "btn btn-success">ADD Card</button>
                </div>
            </form>
        </div>
    )

}


function ListTask(){
    let {id}= useParams();
    const [date,setDate]= useState([])
    let someTask = date.filter(task => task.card == id);


    async function loadDate(){
        const response = await fetch("http://localhost:8000/api/alltasks");
        let tableDate= await response.json()
        setDate(tableDate);

    }


    useEffect(() => {
        loadDate();
    }, []);

    return(
        <div className="container  " >

                {someTask?.map(card=>(

                    <form  className="m-auto mt-2 mb-2 p-3 w-75 shadow-lg bg-light rounded-3">

                                <h6 className="card-title">{card.taskText} </h6>
                                <br/>
                                <h6 className="card-subtitle pt-3 text-black-50">{card.added_date}</h6>
                                <hr/>
                                <a href="#" className="card-link text-decoration-none">Done</a>
                                <div className="center mt-2">
                                    <input type="checkbox" className="cbx" style={{display:"none"}}/>
                                    <label htmlFor="cbx" className="toggle"><span></span></label>
                                </div>

                    </form>

                ))}

        </div>
    )
}

function AddTask(){
    let {id}= useParams();
    const [card, setName] = useState(id);
    const [task, setTask] = useState("");
    const [done, setDone] = useState(true);



    const [message, setMessage] = useState("");


    const handleTaskChange = event =>{
        setTask(event.target.value);
    }





    const handleSubmit = event =>{

        if (task!="") {
            const inputData = {taskText:task,card:card,done:done};
            addCard(inputData);
        }
        else{
            alert("error input is empty");
        }
        setName(1);
        setTask("");
        event.preventDefault();

    }

    async function addCard(data){
        const response = await fetch("http://localhost:8000/api/addtask", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        });
        let messData = await response.json();
        setMessage(messData.id? "Data Added" : "Error");
        alert("task added")
    }

    return (
        <div className = "container">
            <form onSubmit = {handleSubmit} className="m-auto mt-2 pb-3 w-75 shadow-lg bg-white rounded-3">
                <label htmlFor="ADD CARD" style={{fontWeight:'bold', fontSize:'24px',color:'gray',paddingLeft: '9px'}}>ADD TASK</label>
                <div className = "form-group m-2">
                    <label>
                        Task Text :
                    </label>
                    <input type = "text" className = "form-control" value = {task} onChange = {handleTaskChange}/>
                </div>
                <input type="hidden" value={done}/>
                <input type="hidden"/>
                <input type="hidden"/>
                <div className = "form-group m-2">
                    <button className = "btn btn-success">ADD Task</button>
                </div>
            </form>
        </div>
    )

}

function Card(){
    let {id}= useParams();

    const [date,setDate]= useState([])
    let card = date.filter(card => card.id == id);

    async function loadDate(){
        const response = await fetch("http://localhost:8000/api/allcards");
        let tableDate= await response.json()
        setDate(tableDate);

    }


    useEffect(() => {
        loadDate();
    }, []);

    return(
        <div className = "container">
            <form  className="m-auto mt-2 mb-lg-5 p-3 w-75 shadow-lg bg-dark rounded-3">
                {card?.map(cardd=>(
                <div className="p-4 rounded-3" style={{ border: '1px solid gray '}}>
                    <h3 className="card-title text-white"> {cardd.name} </h3>
                    <h5 className="card-subtitle mb-2  text-white">{cardd.addedDate}</h5>

                    <Link to={"/editcard/"+cardd.id} className=" btn btn-outline-light text-decoration-none text-white me-3">Edit</Link>
                </div>
                ))}
            </form>
        </div>
    )

}


function  EditCard(){
    let {cardId} = useParams();

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [time_add, setTime] = useState("2021-02-02 15:59");
    const [message, setMessage] = useState("");

    useEffect(()=>{
        getItem(cardId);
    },[]);

    const handleNameChange = event =>{
        setName(event.target.value);
    }



    const handleSubmit = event =>{
        const inputData = {id, name,time_add};
        saveItem(inputData);
        event.preventDefault();
        window.location.href='http://localhost:3000'

    }

    async function setData(data) {
        setId(data.id);
        setName(data.name);
        setTime(data.addedDate)
    }

    async function saveItem(data){
        const response = await fetch("http://localhost:8000/api/saveitem", {
            method: "PUT",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        });
        let messData = await response.json();
        setMessage(messData.id? "Data Saved" : "Error");
    }

    async function getItem(cardId) {
        let response = await fetch("http://localhost:8000/api/getitem/"+cardId);
        if(response.status==200){
            let data = await response.json();
            setData(data);
        }else{
            setMessage("404 ITEM NOT FOUND");
        }
    }

    async function toDeleteItem() {
        const inputData = {id, name,time_add};
        deleteItem(inputData);
        window.location.href='http://localhost:3000'
    }

    async function deleteItem(data){
        const response = await fetch("http://localhost:8000/api/deleteitem", {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        });
        let messData = await response.json();
        setMessage(messData.id? "Data Deleted" : "Error");
    }

    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-6 mx-auto">
                    <h1>{message}</h1>
                    <form onSubmit = {handleSubmit}>
                        <div className = "form-group">
                            <label>
                                NAME :
                            </label>
                            <input type = "text" className = "form-control" value = {name} onChange = {handleNameChange} required/>
                        </div>

                        <div className = "form-group">
                            <button className = "btn btn-success">SAVE</button>
                            <button type = "button" className = "btn btn-danger ml-2" onClick = {toDeleteItem}>DELETE </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

function App() {
  return (
  <div style={{background:'ghostwhite'}} >

      <Router>
          <Navbar/>
          <Switch>
              <Route path="/alltask/:id" component={ListCard} exact>
                  <Card/>
                  <AddTask></AddTask>
                  <ListTask></ListTask>
              </Route>
              <Route path="/editcard/:cardId" component={Card} exact>
                  <EditCard/>
              </Route>
              <Route path="/search/:search_s" component={SearchCard} exact>
                  <SearchCard/>
                  <SearchPage/>
              </Route>
              <Route path = '/' exact>
                  <SearchCard/>
                  <AddCard/>
                  <ListCard/>
              </Route>
          </Switch>
      </Router>


  </div>
  );
}



export default App;
