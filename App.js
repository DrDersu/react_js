import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Article />
    </div>
  );
}
function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark w-100 text-left">
      <a className="navbar-brand offset-1" href="#">News <span className="ml-2 navbar-brand text-danger">PORTAL</span></a>
      <div className="row w-75">
        <a className="col-1 offset-1 text-light nav-link" href="#">Home</a>
        <a className="col-1 offset-1 text-light nav-link" href="#">Contact</a>
        <a className="col-2 offset-1 text-light nav-link" href="#">Archive</a>
        <a className="col-2 offset-1 text-light nav-link" href="#">Log in</a>
      </div>
    </nav>
  )
}
function Search() {
  return (
    <form method="get">
      <div className="form-group row mt-3 offset-1">
        <input className="form-control w-50" placeholder="Type here..." name="q"></input>
        <button className="btn btn-success col-3 mx-5">Search</button>
      </div>
    </form>
  )
}

const first_article = {
  title: 'First first_article in our NewsPortal',
  author: 'Article_KZ',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  date: '27.01.2021',
  image_url: 'https://habrastorage.org/getpro/habr/upload_files/5b2/cb7/723/5b2cb772307293bdb4c4b073b8276a36.png'
}

function Article() {
  return (
    <div className="bg-light mt-3 offset-1 w-75">
      <a href="#" className="h4 text-dark">{first_article.title}</a>
      <p className="text-muted"> {first_article.date} by {first_article.author} </p>
      <img src={first_article.image_url} className="w-100"></img>
      <p> {first_article.text} </p>
    </div>
  )
}

export default App;
