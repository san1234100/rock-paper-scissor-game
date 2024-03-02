
import TheHeader from "./components/TheHeader";
import './index.css'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <TheHeader/>
      
      <Outlet/>
    </>
  )
}

export default App
