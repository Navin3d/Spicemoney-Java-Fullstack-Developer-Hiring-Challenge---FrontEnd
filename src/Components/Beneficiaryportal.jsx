import React, { useEffect } from 'react'
import axios from "axios";

const Beneficiaryportal=()=>{
    useEffect(async () => {
        const response = await axios.get("https://spicemoney-java-fullstack-dev.herokuapp.com/account/1/show");
    }, []);
return(
    <div>
        <h3>Beneficiary Portal!!</h3>
    <div className="Beneficiary">
        
        <span className="sender"> Name : Kaushik</span><br/>
        <span className="Message"> Message : Diwali Special</span><br/>
        <span className="AccNo"> Acc.No : 4300372398761234</span><br/>
        <span className="Amount">  Amount : 5000</span><br/>
        <span className="Time"> Time : 18:00</span><br/>
    </div>
    </div>
)
}
export default Beneficiaryportal
