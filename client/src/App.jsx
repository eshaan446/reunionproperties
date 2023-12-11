import Website from "./Pages/Website";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Properties from "./components/Properties/Properties";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import AddProperty from "./components/AddProperty/AddProperty";
import ViewProperty from "./components/ViewProperty/ViewProperty";
import UpdateProperty from "./components/UpdateProperty/UpdateProperty";
import Contact from "./components/Contact/Contact";
import Chatbot from "./components/Chatbot";



function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Website/>}/>
    <Route path=':propertyId' element={<ViewProperty/>}/>
    <Route path='/properties' element={<Properties/>}/>
    <Route path='/properties/update/:propertyid' element={<UpdateProperty/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/addProperty' element={<AddProperty/>}/>
    <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    <Chatbot/>
    </>
  );
}

export default App;
