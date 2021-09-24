import React, { Component } from 'react';
    
class ContactUsComponent extends Component {
    render() {
        return (
            
            <div>
                <section id="contact text-center" style={{alignContent:"center"}}>
       <div class="container p-5  " style={{alignContent:"center"}}>
           <h3 class="text-center text-uppercase">contact us</h3>
           <p class="text-center w-75 m-auto">Here you will find out the information of all the nearby stores along with their locations, numbers and much,</p>
           <div class="row" style={{marginLeft:"200px"}} >
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                   
                    <h4 class="text-uppercase mb-2">Call Us</h4>
                    <img src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png" style={{ width: "60px" }}/>
                   <br></br>
                    <p class="text-uppercase mt-2">+8801683615582,+8801750603409</p>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                  
                    <h4 class="text-uppercase mb-2">Office Location</h4>
                    <img src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png" style={{ width: "60px" }}/>
                   <br></br>
                   <address class="text-uppercase mt-2"> Suite 02, Level 12, Sahera Tropical Center </address>
                  </div>
                </div>
             </div>

             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                  
                    <h4 class="text-uppercase mb-2">Email</h4>
                    <img src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png" style={{ width: "60px" }}/>
                   <br></br>
                    <p class="text-uppercase mt-2">support@kyn.com</p>
                  </div>
                </div>
             </div>
           </div>
       </div>
    </section>
            </div>
        );
    }
}

export default ContactUsComponent;