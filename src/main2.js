import "./style.scss" 
import logo1 from "./img/logo1.svg"
import logo2 from "./img/logo2.svg"
import logo3 from "./img/logo3.svg"
import logo4 from "./img/logo4.svg"

function Main2() {
    
    return (

        <>
            <div className = "main2_div">

                <h2>Trusted by</h2>
                
                <div>

                    <img src={logo1} alt="wwe" />
                    <img src={logo2} alt="wwe" />
                    <img src={logo3} alt="wwe" />
                    <img src={logo4} alt="wwe" />

                </div>

                <h1>Services</h1>
                <h1 className="text-1">Design that solves problems, one product at a time.</h1>

            </div>        
        </>

    )

}

export default Main2