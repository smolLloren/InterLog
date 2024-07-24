import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Pages/home";
import Community from "./Pages/Community";
import SetupProfile from "./Pages/SetupProfile";
import MyProfile from "./Pages/MyProfile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<MyProfile />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/community" element={<Community />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
