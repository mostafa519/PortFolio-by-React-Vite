import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/HomePage/Home"
import NotFound from "./Pages/NotFound/NotFound"
import About from "./Pages/About/About"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index  element={<Home/>}/>
      <Route path ='*' element={<NotFound/>}/> 
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
