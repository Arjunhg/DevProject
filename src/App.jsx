import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Text/Notes";
import Notes1 from "./components/Text/Notes1";
import Notes2 from "./components/Text/Notes2";
import Notes3 from "./components/Text/Notes3";
import Notes4 from "./components/Text/Notes4";
const react = require("react");

function App() {
  return (
    <div>
      <Header />
      <Notes />
      <Notes1 />
      <Notes2 />
      <Notes3 />
      <Notes4 />
      <Footer />
    </div>
  );
}

export default App;
