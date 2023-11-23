import Website from "./Pages/Website";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Properties from "./components/Properties/Properties";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Website/>}/>
    <Route path='/properties' element={<Properties/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;