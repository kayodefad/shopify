import "./App.css";
import Shoppies from "./components/shoppies";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="App container">
        <ToastContainer hideProgressBar />
        <h3 className="font-weight-bold mb-3">The Shoppies</h3>
        <h6 className="text-primary font-italic">Search for your favorite movies and make 5 nominations</h6>
        <Shoppies />
      </div>
      <Footer />
    </>
  );
}

export default App;
