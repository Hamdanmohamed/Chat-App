
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import ProfilePage from "./pages/ProfilePage"
import Settingpage from "./pages/Settingpage"
import LoginPage from "./pages/LoginPage"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/signup" element={<SignUpPage/>}/>
       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/settings" element={<Settingpage/>}/>
       <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
