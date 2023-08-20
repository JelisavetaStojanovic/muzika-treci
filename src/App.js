import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigacija from "./komponente/Navigacija";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Plejlista from "./stranice/Plejlista";
import OMeni from "./stranice/OMeni";


function App() {
  return (
   <>
    <Navigacija />
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Plejlista />} />
               <Route path="/about" element={<OMeni />} />
           </Routes>
       </BrowserRouter>
   </>
  );
}

export default App;
