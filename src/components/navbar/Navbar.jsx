import { useState } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../../functions/Categories";
import { getPages } from "../../functions/Pages";


export default function Header() {
    const [categories, setCategories] = useState([]);
    const [staticPage, setStaticPage] =useState([]);

    if (!categories.length) {
        getCategory().then(categories => {setCategories(categories) } );
    }
    if(!staticPage.length){
      getPages().then(pages => {setStaticPage(pages)});
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>All Posts</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              { 
                categories.map(category => (
                    <li key={category.id} className="nav-item">
                        <Link className="px-3 btn border border-1 bg " to={`${category.id}`}>{ category.name }</Link>
                    </li>
                ))
            }
            {
              staticPage.map(staticPages => (
                  <li key={staticPages.id} className="nav-item">
                    <Link className="px-3 btn border border-1 bg " to={`/page/${staticPages.title.rendered}`}>{staticPages.title.rendered}</Link>
                  </li>
                ))
            }
            </ul>
          </div>
        </div>
      </nav>
    );
}