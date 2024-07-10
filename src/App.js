import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Signup from "./Components/Signup";
import Home from "./Pages/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
