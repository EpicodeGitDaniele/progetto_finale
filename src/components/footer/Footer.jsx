export default function Footer(){ 
    return(
<section className="">
  {/*Footer*/}
  <footer className="text-center text-white bg bg-dark py-5 my-3">
    {/* Grid container*/}
    <div className="container p-4 pb-0 mt-4">
      {/*Section: CTA*/}
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <button type="button" className="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
    </div>

    <div className="text-center p-3  bg bg-dark" >
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>
</section>
    )
}

