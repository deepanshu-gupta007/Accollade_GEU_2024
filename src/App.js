import styled from "styled-components";
import Navbar from "./components/NavBar";
import './App.css';
import TheatreCard from './components/Events/TheatreCard.jsx'
import CodeCard from './components/Events/CodeCard.jsx'
import ArtCard from './components/Events/ArtCard.jsx'
import SingleCard from "./components/Events/SingleCard.jsx";
import WorkshopCard from './components/Events/WorkshopCard.jsx'
import GroundCard from './components/Events/GroundCard.jsx'
import events from './data/constants.js'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Events from "./components/Events/index.js";
import Logo from "./components/Logo/index.js";
import Contact from "./components/ContactUs/index.js"

const Body = styled.div`
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: radial-gradient(circle at 2% 2%, #14213d 0.5%, transparent 20%),radial-gradient(circle at 98% 35%, #14213d 1%, transparent 16%),radial-gradient(circle at 0% 80%, #14213d 1%, transparent 14%),radial-gradient(circle at 98% 98%, #14213d 0.5%, transparent 20%),#0d1216;
  width: 100%;
  @media (max-width: 600px) {
    background: radial-gradient(circle at 2% 2%, #14213d 0.5%, transparent 10%),radial-gradient(circle at 98% 42%, #14213d 1%, transparent 10%),radial-gradient(circle at 0% 85%, #14213d 1%, transparent 7%), radial-gradient(circle at 98% 98%, #14213d 0.5%, transparent 5%),#0d1216;
  }
`
function App() { 
  return (
    <Router >
      <Body>
        <Wrapper>
          <Routes>
            <Route path="/" element={<> <Navbar/> <HeroSection/> <Events/> <Logo/> <Footer/> </>} />
            <Route path="/events" element={<> <Navbar/> <HeroSection/> <Events/> <Logo/> <Footer/> </>} />
            <Route path="/help" element={<> <Navbar/> <HeroSection/> <Events/> <Logo/> <Footer/> </>} />
            <Route path="/contact" element={<> <Navbar/> <Contact/> <Logo/> <Footer/> </>} />
            {events.map((event, index) => {
              if (event.id === 1) {
                return(
                  <Route key={event.id} path={`/event_info/${event.id}`} element={<> <Navbar/> <TheatreCard event={event}/> <Logo/> <Footer/> </>} />
                );
              }
              else if (event.id === 2) {
                return(
                  <Route key={event.id} path={`/event_info/${event.id}`} element={<> <Navbar/> <CodeCard event={event}/> <Logo/> <Footer/> </>} />
                );
              }
              else if (event.id === 3) {
                return(
                  <Route key={event.id} path={`/event_info/${event.id}`} element={<> <Navbar/> <ArtCard event={event}/> <Logo/> <Footer/> </>} />
                );
              }
              else if (event.id === 4) {
                return(
                  <Route key={event.id} path={`/event_info/${event.id}`} element={<> <Navbar/> <WorkshopCard event={event}/> <Logo/> <Footer/> </>} />
                );
              }
              else if (event.id === 5) {
                return(
                  <Route key={event.id} path={`/event_info/${event.id}`} element={<> <Navbar/> <GroundCard event={event}/> <Logo/> <Footer/> </>} />
                );
              }
              else {return null;}
            })}
            {events.map((event, index) => {
              if ([1, 3, 4, 5].includes(event.id)) {
                return event.events.map((singleEvent) => (
                  <Route
                    key={singleEvent.eid}
                    path={`/event_info/${event.id}/${singleEvent.eid}`}
                    element={<> <Navbar/> <br/> <SingleCard event={singleEvent}/> <br/> <Logo/> <Footer/> </>}
                  />
                ));
              }
            })}
          </Routes>
        </Wrapper>
      </Body>
    </Router>
  );
}

export default App;