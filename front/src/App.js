import Homepage from "./comp/Homepage/Homepage";
import Header from "./comp/header/Header";
import Side from "./comp/Sidemenu/Side";
import "./App.css";
import Footer from "./comp/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Advantages from "./comp/Advantages/Advantages";
import Services from "./comp/Services/Services";
import Quote from "./comp/Quote/Quote";
import NA from "./comp/Services/NorthAmerica/NA";
import Contact from "./comp/contact/Contact";
import Network from "./comp/Network/Network";
import Customer from "./comp/Network/Customer/Customer";
import Agent from "./comp/Network/Agent/Agent";
import Owner from "./comp/Network/Owner/Owner";
import Carrier from "./comp/Network/Carrier/Carrier";
import Dispatch from "./comp/Services/Dispatch/Dispatch";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="alignment">
        <div className="adjust-side">
          <Side />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/Advantages" element={<Advantages />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/Quote" element={<Quote />}></Route>
            <Route path="/NA" element={<NA />}></Route>
            <Route path="/Dispatch" element={<Dispatch />}></Route>
            <Route path="/Network" element={<Network />}></Route>
            <Route path="/Customer" element={<Customer />}></Route>
            <Route path="/Agent" element={<Agent />}></Route>
            <Route path="/Owner" element={<Owner />}></Route>
            <Route path="/Carrier" element={<Carrier />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
