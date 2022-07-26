import style from "../styles/slider.module.css"
import"bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head"
import Image from "next/image"
 
function Slider(props){
    return(
        <div className={style.slider}>
            <Head>
                <title>slider</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </Head>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                <button className={style.button} onClick={props.show}>X</button>
                <div className={ style.inner}>

                    <div className="carousel-item active">
                    <Image src={props.images[0]} width={"700px"} height={"500px"} className="d-block w-100" alt="one" />
                    </div>
                    <div className="carousel-item">
                    <Image src={props.images[1]} width={"700px"} height={"500px"} className="d-block w-100" alt="two" />
                    </div>
                    <div className="carousel-item">
                    <Image src={props.images[2]} width={"700px"} height={"500px"} className="d-block w-100" alt="three" />
                    </div>
                </div>

                 <button  style={{left:"-150px"}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button style={{right:"-150px"}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> 
            </div>

        </div>
        
    )
}

export default Slider;