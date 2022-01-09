import Beneficiaryportal from "./Components/Beneficiaryportal";
import Homepage from "./Components/homepage";
import Paymentportal from "./Components/Paymentportal";
import SiteWidePasskey from "./Components/SitewidePasskey"

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Paymentportal/>
      <Beneficiaryportal/>  
      <SiteWidePasskey/>
    </div>
  );
}

export default App;
