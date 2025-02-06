import Hero from "./Components/Hero";

import DressStyle from "./Components/DressStyle";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import NewArrivals from "./Components/NewArrivals";
import TopSellings from "./Components/TopSellings";

export default function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Hero />
      <NewArrivals />
      <TopSellings />
      <DressStyle />
      <Reviews />
      <Contact />
    </div>
  );
}
