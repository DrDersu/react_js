import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

let list = [
    { id: 1, title: 'first', author: 'author1', date: '01.01.2021', text: 'Text1'},
    { id: 2, title: 'second', author: 'author2', date: '01.01.2021', text: 'Text2'},
    { id: 3, title: 'third', author: 'author3', date: '01.01.2021', text: 'Text3'}
]

function Article() {
      const articles = list.map((a, index)=> {
          return(
          <div className="bg-light mt-3 offset-1 w-75 p-3" key={index}>
              <a href="#" className="h4 text-dark">{a.title}</a>
              <p className="text-muted"> {a.date} by {a.author} </p>
              <p> {a.text} </p>
              <a className="btn btn-primary" href="#" role="button">Read More</a>
          </div>
          )
      });
      return {articles};
}
  export default Article;