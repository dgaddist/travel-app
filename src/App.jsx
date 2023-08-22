import Message from "./Message";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import "./App.css";

export default function App() {
  return (
    <div>
      {" "}
      <Message />
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
