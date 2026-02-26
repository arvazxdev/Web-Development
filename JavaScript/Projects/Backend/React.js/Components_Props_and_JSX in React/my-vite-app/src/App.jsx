import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

function App() {

  return (
    <>
      <Navbar />
      <main className="div">
      <Card title="Card 1" content="This is the card description 1"/>
      <Card title="Card 2"/>
      <Card title="Card 3" content="This is the card description 3"/>
      <Card content="This is the card description 4"/>
      <Card/>
      </main>
      <Footer />
    </>
  )
}

export default App
