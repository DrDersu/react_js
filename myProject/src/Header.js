import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


function Header(props){
    return (
        <nav className="navbar navbar-dark bg-success w-100 text-left">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">e-shopping</a>
                <a className="text-light nav-link ms-auto" href="#">{props.state.onlineStatus?props.state.name:"Register"}</a>
                <a className="text-light nav-link" href="#">RUS</a>
                <a className="text-light nav-link" href="#">ENG</a>
            </div>
        </nav>
    )
}

export default Header;