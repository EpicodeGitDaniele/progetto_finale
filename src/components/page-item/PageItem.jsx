export default function PageItem(props) {

    return (
        <div className="text-center mt-3">
            <div className="card" style={{width: "100%"}}>
                {/*<img src={props.post.media} className="card-img-top" alt="..." style={{ width: "100%" }}/>*/}
                    <div className="card-body">
                        <h5 className="card-title">{ props.page.title.rendered}</h5>
                        <p className="card-text" dangerouslySetInnerHTML={{__html:props.page.content.rendered}}></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}