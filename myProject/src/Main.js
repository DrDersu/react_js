import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './Header';
import Search from './Search';
import Article from './Article';

function Main() {
    return (
        <div>
            <Header />
            <Search />
            <Article />
        </div>
    );
}

export default Main;