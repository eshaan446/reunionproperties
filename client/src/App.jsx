import Website from "./Pages/Website";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Properties from "./components/Properties/Properties";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import AddProperty from "./components/AddProperty/AddProperty";
import ViewProperty from "./components/ViewProperty/ViewProperty";

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Website/>}/>
    <Route path=':propertyId' element={<ViewProperty/>}/>
    <Route path='/properties' element={<Properties/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/addProperty' element={<AddProperty/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
