import React from "react";
import {Route,Routes} from "react-router-dom";
import About from "./Components/About";
import Admin_analytics from "./Components/AdminPanel/Admin_analytics";
import Admin_massages from "./Components/AdminPanel/Admin_Massages";
import Admin_profile from "./Components/AdminPanel/Admin_profile";
import Admin_projects from "./Components/AdminPanel/Admin_projects";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Portfolio from "./Components/Portfolio";

const App = () => {
  return (
    <> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/admin" element={<Login/>}/>
      <Route path="/admin/profile" element={<Admin_profile/>}/>
      <Route path="/admin/massages" element={<Admin_massages/>}/>
      <Route path="/admin/projects" element={<Admin_projects/>}/>
      <Route path="/admin/analytics" element={<Admin_analytics/>}/>
    </Routes>
    </>
  );
}
export default App;