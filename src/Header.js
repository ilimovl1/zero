import "./style.css" 
import vector from "./img/Vector.svg"
function Header() {
    
    return (

        <>
            <div className = "div">

                <div className="head">
                    <div className="d1">
                        <h1 className="first-text">Portfollio Creator</h1>
                    </div>
                    <div className="d3">
                        <h2>About</h2>
                        <h2>Services</h2>
                        <h2>Projects</h2>
                        <h2>Blog</h2>
                    </div>
                    <div className="d2">
                        <h2>Book a Call</h2>
                        <img className="vector" src={vector} alt="wwe"/>  
                    </div>
                </div>
            
            </div>        
        </>

    )

}

export default Header