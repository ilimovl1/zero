import "./style.scss" 
import logo5 from "./img/logo5.svg"
import logo6 from "./img/logo6.svg"
import logo7 from "./img/logo7.svg"

function Main3() {
    
    return (

        <>
        
            <div className = "main3_div">

                <div>

                    <img src={logo5} alt="wwe" />
                    <h1>What I can do for you</h1>
                    <h3>Faster, better products that your users love. Here's all the services I provide:</h3>
                    
                    <div className="div-li">

                        <li>Design Strategy</li>
                        <li>Web and Mobile App Design</li>
                        <li>Front-end Development</li>

                    </div>
                
                </div>
                <div>

                    <img src={logo6} alt="wwe" />
                    <h1>Applications I'm fluent in</h1>
                    <h3>Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.</h3>
                    
                    <div className="div-li">
                       
                        <li>Design Strategy</li>
                        <li>Web and Mobile App Design</li>
                        <li>Front-end Development</li>
                    
                    </div>
               
                </div>
                <div>

                    <img src={logo7} alt="wwe" />
                    <h1>What you can expect</h1>
                    <h3>I design products that are more than pretty. I make them shippable and usable.</h3>
                    
                    <div className="div-li">
                    
                        <li>Design Strategy</li>
                        <li>Web and Mobile App Design</li>
                        <li>Front-end Development</li>

                    </div>
                    
                </div>

            </div>        
            
        </>

    )

}

export default Main3