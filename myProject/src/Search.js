import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
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
  export default Search;