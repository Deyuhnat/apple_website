import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Feature from "./components/Feature";
import { HowItWork } from "./components/HowItWork";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Feature />
      <HowItWork />
    </main>
  );
};

export default App;
