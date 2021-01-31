import react from 'react';

const LandingBanner=(props)=>{
    return (
        <>
        <section id="Banner" className="d-flex align-items-center">
            <div className="container-fluid mt-50">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div class="row">
                            <div class="col-md-7 d-flex justify-content-center align-items-center">
                                <div>
                                    <h2>{props.heading}</h2>
                                     <p> {props.paragraph} </p>
                                     <button> Click Me</button>
                                 </div>
                             </div>
                            <div class="col-md-5" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <img src={props.image} style={{background:'cover',}}/>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
    
        </section>
        </>
    )
}
export default LandingBanner;