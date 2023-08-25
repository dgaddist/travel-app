import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
