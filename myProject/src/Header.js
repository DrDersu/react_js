import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
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
  export default Header;