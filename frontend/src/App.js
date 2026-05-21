import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slideshow from "./pages/Slideshow";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Slideshow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
