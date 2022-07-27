import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddEvent from "./AddEvent";
import Events from "./components/Event/Events";
import About from "./About";
import EventDetail from "./components/Event/EventDetail";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddEvent />} exact />
          <Route path="/events" element={<Events />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/events/:id" element={<EventDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;