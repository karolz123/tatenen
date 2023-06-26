import 'bootstrap/dist/css/bootstrap.css'

function Footer(props) {


  return (
    <>
      
      <footer className="bg-color">
        <div className="container py-5">
            <p className="text-white text-center width d-flex">
                {props.mensaje}
            </p>

            <div className="row justify-content-center mt-4">
                <div
                    className="col-2 bg-white d-flex justify-content-center p-2 align-items-self-end m-3 border-radius resp">
                    <img src={props.url} alt=""/>
                    <p className="mx-3">
                        <a href="mailto:Tatenen23@gmail.com" target="_blank">
                            Tatenen23@gmail.com
                        </a>

                    </p>
                </div>

                <div
                    className="col-2 bg-white d-flex justify-content-center p-2 align-items-self-end m-3 border-radius resp">
                    <img src={props.telefono }alt="" />
                    <p className="mx-3">
                        <a href=" tel://6044926378" target="_blank">
                            (604) 492 63 78
                        </a>

                    </p>
                </div>

                <div
                    className="col-2 bg-white d-flex justify-content-center p-2 align-items-self-end m-3 border-radius resp">
                    <img src={props.what} alt=""/>
                    <p className="mx-3">
                        <a href="https://wa.me/+573012497450" target="_blank">

                        </a>
                        {props.nu}

                    </p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div
                    className="col-2 bg-white d-flex justify-content-center p-2 align-items-self-end m-3 border-radius resp">
                    <img src= {props.insta} alt=""/>
                    <p className="mx-3">
                        <a href="https://www.instagram.com/tatenen023/" target="_blank">
                            @Tatenen023
                        </a>

                    </p>
                </div>

                <div
                    className="col-2 bg-white d-flex justify-content-center p-2 align-items-self-end m-3 border-radius resp">
                    <img src={props.face} alt=""/>
                    <p className="mx-3">
                        <a href="https://www.facebook.com/profile.php?id=100092714514076" target="_blank">
                            Tatenen Medellin
                        </a>

                    </p>
                </div>
            </div>
        </div>
    </footer>

    <div className="bg-color Copyright mt-1">
        <p>
            @Copyright - Tatenen 2023
        </p>
    </div>
        
    </>
  )
}

export default Footer