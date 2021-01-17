import "./App.css";
import Shoppies from "./components/shoppies";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container">
      <ToastContainer />
      <h3 className="font-weight-bold mb-3">The Shoppies</h3>
      <Shoppies />
    </div>
  );
}

export default App;
