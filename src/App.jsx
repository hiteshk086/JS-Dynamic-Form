import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./screen/form/Form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Form} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
