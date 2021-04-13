import './App.css';
import { Header } from './components/Header'
import { BodyOne } from './components/BodyOne'
import { About } from './components/About'
import { BodyTwo } from './components/BodyTwo'
import { OurServices } from './components/OurServices'
import { Gallery } from './components/Gallery'
import { ThingsToDo } from './components/ThingsToDo'
import { BodyThree } from './components/BodyThree'
import { Contact } from './components/Contact'
import { Sidebar } from './components/Sidebar'
import { Map } from './components/Map'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <BodyOne/>
      <About/>
      <BodyTwo/>
      <OurServices/>
      <Gallery/>
      <ThingsToDo/>
      <BodyThree/>
      <Contact/>
      <Sidebar/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
