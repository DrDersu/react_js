import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


function Footer() {
  return(
      <div className='bg-dark p-4 text-muted mt-auto'>
        <div className='container'>
          <div className='row'>
              <div className='col-5'>
                  <h5>E-shopping</h5>
                  <p>E-shop site, easy to buy and cheap</p>
              </div>
              <div className='col-3'>
                  <h5>Contacts</h5>
                  <p>Tel: +87473442299</p>
                  <p>Fax: 354376</p>
                  <p>Almaty, Almanova, Office 306</p>
              </div>
              <div className='col'>
                  <h5>FAQ</h5>
                  <a href="#" className='row text-decoration-none text-muted'><p>Feedback</p></a>
                  <a href="#" className='row text-decoration-none text-muted'><p>About Creators</p></a>
                  <a href="#" className='row text-decoration-none text-muted'><p>Developers</p></a>
              </div>
          </div>
        </div>
      </div>
  )
}
  export default Footer;