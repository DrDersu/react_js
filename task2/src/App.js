import './bootstrap/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

let users = {
    0: {
        name: 'Erlan',
        email: 'erlan@gmail.com',
        password: 'admin'
    },
    1: {
        name: 'Almas',
        email: 'almas@mail.ru',
        password: 'almas123'
    }
}

let news = {
    0: {
        title: "Elon Musk's Tesla buys $1.5bn Bitcoin",
        text: "Elon Musk's car firm Tesla has said it bought about $1.5bn of the cryptocurrency Bitcoin and expects to ....",
        src: '/images/musk.jpg',
        date: '12.01.2021',
        type: 'business'
    },
    1: {
        title: "Elon Musk's Tesla buys $1.5bn Bitcoin",
        text: "Elon Musk's car firm Tesla has said it bought about $1.5bn of the cryptocurrency Bitcoin and expects to ....",
        src: '/images/bitok.jpg',
        date: '12.01.2021',
        type: 'politics'
    },
    2: {
        title: "Elon Musk's Tesla buys $1.5bn Bitcoin",
        text: "Elon Musk's car firm Tesla has said it bought about $1.5bn of the cryptocurrency Bitcoin and expects to ....",
        src: '/images/sport.jpg',
        date: '12.01.2021',
        type: 'sport'
    },
    3: {
        title: "Elon Musk's Tesla buys $1.5bn Bitcoin",
        text: "Elon Musk's car firm Tesla has said it bought about $1.5bn of the cryptocurrency Bitcoin and expects to ....",
        src: '/images/sport.jpg',
        date: '12.01.2021',
        type: 'politics'
    },
    4: {
        title: "Elon Musk's Tesla buys $1.5bn Bitcoin",
        text: "Elon Musk's car firm Tesla has said it bought about $1.5bn of the cryptocurrency Bitcoin and expects to ....",
        src: '/images/tech.jpg',
        date: '12.01.2021',
        type: 'technology'
    }
}

const blogs = {
    0: {
        title: "Madina Almassova",
        text: "For the last 30 years Spanish underwater filmmaker, diving instructor and marine",
        src: '/images/madina.jpg',
        date: '12.01.2021',
        type: 'business'
    },
    1: {
        title: "Ilyas Zhuanyshev",
        text: "Сan Magzhan get 100 points?",
        src: '/images/ilyas.jpg',
        date: '12.01.2021',
        type: 'business'
    },
    2: {
        title: "Elon Musk's Tesla buys $1.5bn Bitcoin",
        text: "Elon Musk's car firm Tesla has said it bought about $1.5bn of the cryptocurrency Bitcoin and expects to ....",
        src: '/images/musk.jpg',
        date: '12.01.2021',
        type: 'business'
    }
}

class Navbar extends React.Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/"><b>HABAR.COM</b></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className={this.props.loc === 'all' ? "nav-link active" : "nav-link"} id='all' onClick={this.props.func} to="/all/1">All
                                    News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={this.props.loc === 'sport' ? "nav-link active" : "nav-link"} to="/sport/1">Sport</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={this.props.loc === 'politics' ? "nav-link active" : "nav-link"} to="/politics/1">Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={this.props.loc === 'technology' ? "nav-link active" : "nav-link"} to="/technology/1">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={this.props.loc === 'business' ? "nav-link active" : "nav-link"} to="/business/1">Business</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={this.props.loc === 'signin' ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle"}
                                   to="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.props.online ? this.props.name : "Sign In"}
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {this.props.online ? <Link className="dropdown-item" to="/add">Add News</Link> :
                                        <Link className="dropdown-item" to="/login">Log in</Link>}
                                    {this.props.online ? <div className="dropdown-divider"></div> : ""}
                                    {this.props.online ? <Link className="dropdown-item" to="/logout">Log Out</Link> :
                                        <Link className="dropdown-item" to="/register">Register</Link>}
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

class Carousel extends React.Component{
    render() {
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{height:"300px"}}>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={'/images/' + this.props.first + '.jpg'} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={'/images/' + this.props.second + '.jpg'} className="d-block w-100" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
class Card extends React.Component{
    render() {
        return (
            <div className="card mb-3" style={{maxWidth: "540px", height: "180px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.src} style={{width:"180px", height: "180px"}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h6 className="card-title">{this.props.title}</h6>
                            <p className="card-text">{this.props.text}</p>
                            <p className="card-text"><small className="text-muted">{this.props.date}</small></p>
                        </div>
                    </div>
                </div>
            </div>        );
    }
}

class Blog extends React.Component{
    render() {
        return (
            <div className="card mb-3" style={{maxWidth: "540px", height: "140px", background: '#8a8ab1'}}>
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <img src={this.props.src} className='mt-3 ml-3' style={{width:"50px", height: "50px"}}/>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h6 className="card-title" style={{color: 'white'}}>{this.props.title}</h6>
                            <p className="card-text" style={{color: 'white'}}>{this.props.text}</p>
                            <p className="card-text float-right"><small style={{color: 'white'}}>{this.props.date}</small></p>
                        </div>
                    </div>
                </div>
            </div>        );
    }
}

function News(props){
    let content = []
    let {k} = useParams()
    let start = (k-1) * 3
    let end = start + 3
    if(end > Object.keys(props.news).length){
        end = Object.keys(props.news).length
    }
    if(props.type === 'all') {
        for (let i = start; i < end; i++) {
            content.push(
                <Card src={props.news[i].src} title={props.news[i].title} text={props.news[i].text} date={props.news[i].date}/>
            )
        }
    } else {
        for (let i = start; i < Object.keys(props.news).length; i++) {
            if(props.type===props.news[i].type) {
                content.push(
                    <Card src={props.news[i].src} title={props.news[i].title} text={props.news[i].text} date={props.news[i].date}/>
                )
            }
            if(content.length === 3){
                break
            }
        }
    }
    let news_num = 0
    if(props.type === 'all'){
        news_num = Object.keys(props.news).length
    } else{
        for(let i = 0; i < Object.keys(props.news).length; i++){
            news_num++;
        }
    }
    let count = (news_num / 3) + 1
    let pags = []
    for(let i = 1; i <= count; i++){
        pags.push(i)
    }
    const p = pags.map((pag) => <li className="page-item active"><Link className="page-link" to={props.url+"/"+pag}>{pag}</Link></li>)
    content.push(
        <nav>
            <ul className="pagination pagination-sm">
                {p}
            </ul>
        </nav>
    )
    return content
}

function Blogs(){
    let content = []
    let {k} = useParams()
    let start = (k-1) * 3
    let end = start + 3
    if(end > Object.keys(blogs).length){
        end = Object.keys(blogs).length
    }
    for(let i = start; i < end; i++){
        content.push(
            <Blog src={blogs[i].src} title={blogs[i].title} text={blogs[i].text} date={blogs[i].date}/>
        )
    }
    return content
}

function All(){
    let { path, url } = useRouteMatch();
    const [data, setNews] = useState(news)
    function update(){
        setNews(news)
    }
    return(
        <div>
            <Navbar loc="all" online={document.cookie[3]!=='-'&&document.cookie} name={(document.cookie[3]!=='-'&&document.cookie)?users[document.cookie[3]].name:""}/>
            {path==='/'?document.location='/all/1':""}
            <Switch>
                <Route path={`${path}/:k`}>
                    <div className='container mt-5'>
                        <Carousel first='all1' second='all2'/>
                        <div className='row mt-5'>
                            <div className='col'>
                                <News type='all' url={url} news={data} func={update}/>
                            </div>
                            <div className='col'>
                                <Blogs/>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

function Sport(){
    let {path, url} = useRouteMatch()
    const [data, setNews] = useState(news)
    function update(){
        setNews(news)
    }
    return(
        <div>
            <Navbar loc="sport" online={document.cookie[3]!=='-'&&document.cookie} name={(document.cookie[3]!=='-'&&document.cookie)?users[document.cookie[3]].name:""}/>
            <Switch>
                <Route path={`${path}/:k`}>
                    <div className='container mt-5'>
                        <Carousel first='sport1' second='sport2'/>
                        <div className='row mt-5'>
                            <div className='col'>
                                <News type='sport' url={url} news={data}/>
                            </div>
                            <div className='col'>
                                <Blogs/>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>

    )
}

function Politics(){
    let {path, url} = useRouteMatch()
    const [data, setNews] = useState(news)
    function update(){
        setNews(news)
    }
    return(
        <div>
            <Navbar loc="politics" online={document.cookie[3]!=='-'&&document.cookie} name={(document.cookie[3]!=='-'&&document.cookie)?users[document.cookie[3]].name:""}/>
            <Switch>
                <Route path={`${path}/:k`}>
                    <div className='container mt-5'>
                        <Carousel first='politics1' second='politics2'/>
                        <div className='row mt-5'>
                            <div className='col'>
                                <News type='politics' url={url} news={data}/>
                            </div>
                            <div className='col'>
                                <Blogs/>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

function Technology(){
    let {path, url} = useRouteMatch()
    const [data, setNews] = useState(news)
    function update(){
        setNews(news)
    }
    return(
        <div>
            <Navbar loc="technology" online={document.cookie[3]!=='-'&&document.cookie} name={(document.cookie[3]!=='-'&&document.cookie)?users[document.cookie[3]].name:""}/>
            <Switch>
                <Route path={`${path}/:k`}>
                    <div className='container mt-5'>
                        <Carousel first='technology1' second='technology2'/>
                        <div className='row mt-5'>
                            <div className='col'>
                                <News type='technology' url={url} news={data}/>
                            </div>
                            <div className='col'>
                                <Blogs/>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>


    )
}

function Business(){
    let {path, url} = useRouteMatch()
    const [data, setNews] = useState(news)
    function update(){
        setNews(news)
    }
    return(
        <div>
            <Navbar loc="business" online={document.cookie[3]!=='-'&&document.cookie} name={(document.cookie[3]!=='-'&&document.cookie)?users[document.cookie[3]].name:""}/>
            <Switch>
                <Route path={`${path}/:k`}>
                    <div className='container mt-5'>
                        <Carousel first='business1' second='business2'/>
                        <div className='row mt-5'>
                            <div className='col'>
                                <News type='business' url={url} news={data}/>
                            </div>
                            <div className='col'>
                                <Blogs/>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

function Login(){
    const [error, setErr] = useState(false);
    function login(){
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        for(let i = 0; i < Object.keys(users).length; i++){
            if(users[i].email === email && users[i].password === password){
                document.cookie = 'id=' + i
                document.location = '/'
            } else {
                document.getElementById('password').value = ''
                setErr(true)
            }

        }

    }
    return(
        <div>
            <Navbar loc="signin"/>
            <div className='container col-3' style={{marginTop: '180px', borderColor: 'black'}}>
                <h3 className='offset-4'><b>Sign In</b></h3>
                {error? <div className="alert alert-danger" role="alert">
                    Invalid Email or Password.
                </div>:""}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-dark float-right" onClick={login}>Log In</button>
            </div>
        </div>
    )
}

function Register(){
    let match = useRouteMatch()
    function register(){
        let name = document.getElementById('r_name').value
        let email = document.getElementById('r_email').value
        let password = document.getElementById('r_password').value
        users[Object.keys(users).length] = {
            name: name,
            email: email,
            password: password
        }
        document.location = '/login'
    }
    return(
        <div>
            <Navbar loc="register"/>
            <Link to={`${match.url}/1`}>qwe</Link>
            <div className="container col-3" style={{marginTop: '150px'}}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="name" className="form-control" id="r_name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="r_email" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input type="password" className="form-control" id="r_password" />
                </div>
                <button type="submit" className="btn btn-dark float-right" onClick={register}>Register</button>
            </div>
            <Switch>
                <Route path={`${match.path}/:n`}>
                    <All/>
                </Route>
            </Switch>
        </div>
    )
}

function Add(){
    function add(){
        let title = document.getElementById('title').value
        let text = document.getElementById('text').value
        let src = document.getElementById('src').value
        let type = document.getElementById('type').value
        news[Object.keys(news).length] = {
            title: title,
            text: text,
            src: src,
            date: '12.02.2021',
            type: type
        }
        document.getElementById('all').click()
    }
    return (
        <div>
            <Navbar />
            <div className='container mt-5 col-3'>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' className='form-control' id='title'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' className='form-control' id='text'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='src'>Image</label>
                    <input type='text' className='form-control' id='src'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='type'>Type</label>
                    <select className='form-control' id='type'>
                        <option value='sport'>Sport</option>
                        <option value='politics'>Politics</option>
                        <option value='technology'>Technology</option>
                        <option value='business'>Business</option>
                    </select>
                </div>
                <button className='btn btn-dark float-right' onClick={add}>Add</button>
            </div>
        </div>
    )
}

function Logout(){
    document.cookie = "id=-";
    document.location = '/'
    return ''
}

function App() {
  return (
      <Router>
          <Switch>
              <Route path='/' exact>
                  <All/>
              </Route>
              <Route path='/all'>
                  <All/>
              </Route>
              <Route path='/sport'>
                  <Sport/>
              </Route>
              <Route path='/politics'>
                  <Politics/>
              </Route>
              <Route path='/technology'>
                  <Technology/>
              </Route>
              <Route path='/business'>
                  <Business/>
              </Route>
              <Route path='/login' exact>
                  <Login/>
              </Route>
              <Route path='/register' exact>
                  <Register/>
              </Route>
              <Route path='/add'>
                  <Add />
              </Route>
              <Route path='/logout'>
                  <Logout />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
