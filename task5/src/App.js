


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
import Login from './Login';
import Details from './Details';
import MainFunction from './MainFunction';
import Register from './register';


function MainPage() {
  async function getRegister() {
    document.location.href="http://localhost:3000/register";
  }
  async function getLogin() {
    document.location.href="http://localhost:3000/login";
  }
  return(
    <div>
    <div className="container mt-3">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style={{width:"1100px"}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"300px"}} src="https://images.ctfassets.net/lzny33ho1g45/task-management-strategies-p-img/54a243478a4edf18e97007de27373fb6/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3 style={{background:"steelblue",width:"400px",marginLeft:"200px",marginTop:"-100px",position:"absolute"}}>Manage with your tasks</h3>
        <button style={{background:"white",color:"black",border:"solid white 3px"}} onClick={getRegister}>Register now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img style={{height:"300px"}} src="https://images.ctfassets.net/lzny33ho1g45/task-management-strategies-p-img/54a243478a4edf18e97007de27373fb6/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h3 style={{background:"steelblue",width:"400px",marginLeft:"200px",marginTop:"-100px",position:"absolute"}}>Manage with your tasks</h3>
      <button style={{background:"white",color:"black",border:"solid white 3px"}} onClick={getLogin}>Login</button>
      </div>
    </div>
    <div class="carousel-item">
      <img style={{height:"300px"}} src="https://images.ctfassets.net/lzny33ho1g45/task-management-strategies-p-img/54a243478a4edf18e97007de27373fb6/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h3 style={{background:"steelblue",width:"400px",marginLeft:"200px",marginTop:"-100px",position:"absolute"}}>Manage with your tasks</h3>
      <button style={{background:"white",color:"black",border:"solid white 3px"}} onClick={getRegister}>Register now</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div className="container mt-5">
    <div className="row" style={{border:"solid silver 1px",height:"100px"}}>
      <img className="col-1 mt-1" src="https://img.icons8.com/ios/452/watch.png" style={{width:"70px",height:"70px"}}/>
      <p className="col-3 mt-1">Quick Access<br/>Fast and easy</p>
      <b className="col-7"></b>
      <img className="col-1 mt-4" style={{width:"50px",height:"50px"}} src="https://i.pinimg.com/474x/fd/09/89/fd09897134195c623ac1d99b5c19ae00.jpg"/>
    </div>
    <div className="row" style={{border:"solid silver 1px",height:"100px"}}>
      <img className="col-1 mt-1" src="https://www.pngitem.com/pimgs/m/145-1455073_png-file-svg-aesthetic-file-icon-png-transparent.png" style={{width:"70px",height:"70px"}}/>
      <p className="col-3 mt-1">Great Managment<br/>Grouping your tasks</p>
      <b className="col-7"></b>
      <img className="col-1 mt-4" style={{width:"50px",height:"50px"}} src="https://i.pinimg.com/474x/fd/09/89/fd09897134195c623ac1d99b5c19ae00.jpg"/>
    </div>
    <div className="row" style={{border:"solid silver 1px",height:"100px"}}>
      <img className="col-1 mt-1" src="https://icons-for-free.com/iconfiles/png/512/STATISTICS-131994911363180250.png" style={{width:"70px",height:"70px"}}/>
      <p className="col-3 mt-1">Statistics<br/>Monitoring with your syccess</p>
      <b className="col-7"></b>
      <img className="col-1 mt-4" style={{width:"50px",height:"50px"}} src="https://i.pinimg.com/474x/fd/09/89/fd09897134195c623ac1d99b5c19ae00.jpg"/>
    </div>
    <div className="row" style={{border:"solid silver 1px",height:"100px"}}>
      <img className="col-1 mt-1" src="https://www.kindpng.com/picc/m/10-100579_cloud-icon-png-oracle-cloud-services-logo-transparent.png" style={{width:"70px",height:"70px"}}/>
      <p className="col-3 mt-1">Cloud Service<br/>Store you data cloud</p>
      <b className="col-7"></b>
      <img className="col-1 mt-4" style={{width:"50px",height:"50px"}} src="https://i.pinimg.com/474x/fd/09/89/fd09897134195c623ac1d99b5c19ae00.jpg"/>
    </div>
    </div>
    </div>
  );
}



function App() {
  const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);
 
  return (
<Router>
   <div className="p-4" style={{background:"SteelBlue"}}>
     <div className="container" >
        <div className="row">
          <Link className="text-white col-3" style={{fontSize:"30px"}} to="/">ITrello</Link>
          <div className="col-7"></div>
          <div className="col-2  mt-2">
          {cookieJWT['jwt']?<Link className="ml-5 text-white" to="/all">All Cards</Link>:""}
          {!cookieJWT['jwt']?<Link className="ml-4 text-white" to="/register">Register</Link>:""}
          {!cookieJWT['jwt']?<Link className="ml-4 text-white" to="/login">Login</Link>:""}
          </div>
        </div>
     </div>
   </div>
   
   
   <Switch>
        <Route path={`/editItem/:idCard`}>
          <Details />
        </Route>
        <Route path="/login">
        <Login />
      </Route>
      <Route path="/all">
        <MainFunction />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/">
        <MainPage/>
      </Route>
   </Switch>
   <div className="bg-dark mt-5" style={{height:"250px"}}>
      <div className="container text-white">
        <div className="row"> 
        <div className="col-3 mt-3">
          <h3>ITrello</h3><br/>
          <p>ITrello site.Manage with your task.</p>
        </div>
        <div className="col-3"></div>
        <div className="col-3 mt-3">
          <h3>Contacts</h3><br/>
          <p>Tel:+34544545</p><br/>
          <p>Fax:+34544545</p><br/>
          <p>Almaty,Aimanova 126,Office 606</p>
        </div>
        <div className="col-1"></div>
        <div className="col-2 mt-3">
          <h3>FAQ</h3><br/>
          <p>Feedback</p><br/>
          <p>About Creators</p><br/>
          <p>Developers</p>
        </div>
        </div>
      </div>
   </div>
</Router>

  );
}

export default App;
