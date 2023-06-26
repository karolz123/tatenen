import 'bootstrap/dist/css/bootstrap.css'

function Comentarios(props) {


  return (
    <>
      <div className="container">
      <section className="container pitchbook mb-5" id="Contactanos">
        <div className="row justify-content-center gap-5">
            <div className="col-4">

                <h2 className="my-5">
                    {props.titulo}
                </h2>
                
                <iframe className="scribd_iframe_embed" title="Pitchbook Tatenen"
                    src="https://www.scribd.com/embeds/642323038/content?start_page=1&view_mode=slideshow&access_key=key-zU12YDl7msZRVCFTJDRQ"
                    tabindex="0" data-auto-height="false" data-aspect-ratio="0.7333333333333333" scrolling="no"
                    width="100%" height="800" frameborder="0"></iframe>
            </div>

            <div className="col-4">
                <h2 className="my-5">
                    CONTÁCTANOS
                </h2>

                <form action="">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Dirección de email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"/>
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput2" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="exampleFormControlInput2"/>
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Dejános tu opinión.</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>

            </div>
        </div>
    </section>
      </div>
        
    </>
  )
}

export default Comentarios
