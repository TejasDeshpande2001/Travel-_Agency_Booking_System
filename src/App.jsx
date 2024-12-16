// import React, { useState } from "react";
// // import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";
// import Bookingpage from "./components/Bookingpage";
// import HotelCard from "./components/HotelCard";

// const App = () => {
//   return (
//     <>
//     <Navbar/>
//       <Bookingpage />
//       <HotelCard />
//     </>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HotelCard from "./components/HotelCard";
import Bookingpage from "./components/Bookingpage";
import RoomCard from "./components/RoomCard";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bookingpage />} />
        <Route path="/booknow" element={<HotelCard />} />
        <Route path="/roomcard" element={<RoomCard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
