import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPages } from "../../functions/Pages";
import PageItem from "../page-item/PageItem";

export default function StaticPages(props){


    const {pageId} = useParams();

    const [page, setPage] = useState([]);

    useEffect(() => {
        /*getPages()
        .then(page =>
            {setPage(page);
            console.log(page);
            })*/
        getPages(pageId)
        .then(page => 
            {setPage(page);
            //console.log("VISUALIZZA PAGINA");
            //console.log(page);
            //console.log("valore pageId: "+pageId);
            } );
    }, [pageId]);

    /*const postCard = posts.map(post => 
        <PostItem 
            key={post.id} 
            post ={post}/>) */
    const postCat = page.map(pages=>
        <PageItem
            key={pages.id} 
            page ={pages}
            className="text-center"/>)
    

    

    return(
        <div className="container">
            <h1 className="text-dark text-center">{pageId}</h1>
            <br />
            {postCat}
        </div>
    )
}