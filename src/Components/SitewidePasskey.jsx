import React, { useEffect } from 'react'
import axios from "axios";

const SitewidePasskey=()=>{

return(
    <div>
        <form method="POST">
        <h2> Private Site</h2>
        <input type="text" placeholder="Enter Your Passkey"></input>
        <button className="SubmitButton">Submit</button>
        </form>
        <p className="Disclamer">A password is required to view this site</p>
    </div>
)
}
export default SitewidePasskey
