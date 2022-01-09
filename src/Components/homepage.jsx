import React, { useEffect } from 'react';
import axios from "axios";
// import "./homepage.css";
const homepage = ()=>{

    useEffect(async () => {
        const response = await axios.get("https://spicemoney-java-fullstack-dev.herokuapp.com/account/1/show");
    }, []);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                
            <div className="box">
            <div className="Bank-Logo">
                <h1>ABCD Bank</h1>
                <div className="Logo-dot"></div>
            </div>
            <form className="Acc-balance" method="POST">
                <div className="Acc-number">
                <label >Enter Your Bank account Number</label><br/>
                <input type="text" placeholder="12-digit number"></input>
                </div>
                <div className="Pin-Number">
                <label>Enter Your Pin Number</label><br/>
                <input type="number"placeholder="4-digit number"></input><br></br>
                <button className="SubmitButton">Submit</button>
                </div>
               
            </form>
            </div>
            </div>
            <div className="col-md-4"></div>
            </div>
            <div className="Bank-Balance">
                <h3></h3>
            </div>
        </div>
    );
}
export default homepage