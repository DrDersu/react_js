import s1 from "./images/sample1.png";
import {Link} from "react-router-dom";
import s2 from "./images/sample2.jpg";
import Footer from "./Footer";

function Home() {
    return (
        <div id="home">
             {/*<iframe width="853" title="sfsd" height="480" src="https://web.microsoftstream.com/embed/video/374e745c-75bf-4567-ba47-f0f94b3472cb?autoplay=false&amp;showinfo=true" allowfullscreen ></iframe>*/}
            <div className='row mx-auto p-4 mb-4'>
                <div className='col-6 display-3'>
                    <p id='text1' className='col-10 ml-auto text-right font-weight-bold'>Your brand has a life outside
                        of the slide deck.</p></div>
                <div className='col-6 mt-3'>
                    <p className='w-75 h3 p-3'><span className='text-danger'>S-GEN </span>helps you build the reputation
                        it deserves.
                        Whether you’re a seasoned designer or you can’t be trusted with a box of crayons,
                        S-GEN <strong>marries capability with ease of use </strong>to create a platform
                        that allows everyone to do their best work.</p>
                </div>
            </div>
            <div className='row mx-auto p-4 align-items-center'>
                <div className='col-6 display-4'>
                    Boardroom Ready Presentations
                    <p className='h4 font-weight-normal w-75'>Whether you’re in an investor meeting or a parent/teacher
                        conference, the key is more show, less tell. S-Gen helps
                        you package your expertise into highly engaging, highly impactful presentations.</p>
                </div>
                <div className='col-6 mt-3 pl-4'>
                    <img src={s1} alt=""></img>
                </div>
            </div>
            <div className='text-center bg-white w-100'>
                <h1 className='display-3 font-weight-bold pt-5'>Every Brand, Every Dream, Every Day</h1>
                <h1 className='display-3 font-weight-bold pt-2 text-info'>Built on S-GEN</h1>
                <Link to='/register' className='btn col-4 btn-info py-3 my-3'><h2>Sign up. It's free!</h2></Link>
                <img src={s2} alt='' className='w-100 mt-4'></img>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;