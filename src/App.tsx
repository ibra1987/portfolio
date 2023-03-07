import { useState } from "react";
import { Route ,Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home"
 



function App() {
  const [darkMode,setDarkMode]=useState<Boolean>(localStorage.getItem("theme") === "true" ? true  :  false)



  return (
    <Routes>
     <Route element={<Layout setDarkMode={setDarkMode} darkMode={darkMode} />}>
         <Route path="/" element={<Home darkMode={darkMode} />}  />
         <Route path="/about" element={<About darkMode={darkMode}   />} />
      </Route>
      
    </Routes>
  );
}

export default App;
