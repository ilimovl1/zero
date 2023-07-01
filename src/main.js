import "./style.css" 
import vector from "./img/Vector.svg"
import man from "./img/man.svg"

function Main() {
    
    return (

        <>
            <div className = "main_div">

                <div className="mini-div">
                    
                    <h1 className="text-1">I design products</h1>
                    <h1 className="text-2">that delight and inspire people.</h1>
                    <h2>Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</h2>
                        
                    <div className="div4">
                   
                        <div className="div3">

                            <h3>Book a call</h3>

                        </div>

                        <div className="div5">

                            <h3>Download CV</h3>
                        
                            <img src={vector} alt="wwe"/>

                        </div>
                    
                    </div>

                </div>

                <img className="f" src={man} alt="wwe"/>

            </div>        
        </>

    )

}

export default Main