import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Pages/home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
