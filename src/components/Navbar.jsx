// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header class="lg:px-16 px-6 bg-black justify-center flex flex-wrap items-center lg:py-0 py-2">
//       <div class="flex-1 flex justify-between items-center ">
//         <a href="#">
//           <svg
//             height="32"
//             aria-hidden="true"
//             viewBox="0 0 24 24"
//             version="1.1"
//             width="32"
//             data-view-component="true"
//             class="octicon octicon-mark-github bg-white"
//           >
//             <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
//           </svg>
//         </a>
//       </div>

//       <div class="hidden lg:flex lg:items-center lg:w-auto w-full " id="menu">
//         <nav>
//           <ul class="lg:flex items-center justify-end text-base text-gray-700  pt-4 lg:pt-0">
//             <li>

//               <a
//                 class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-white"
//                 href="../HotelCard"
//               >
//                 Find Flight
//               </a>
//             </li>
//             <li>
//               <a
//                 class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-white"
//                 href="#"
//               >
//                 Find Hotel
//               </a>
//             </li>
//             <li>
//               <a
//                 class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-white"
//                 href="#"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2 text-white"
//                 href="#"
//               >
//                 Login
//               </a>
//             </li>
//           </ul>
//         </nav>
//         <a
//           href="#"
//           class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
//         >
//           <img
//             class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
//             src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
//             alt="Andy Leverenz"
//           />
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Navbar;































// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md py-4 px-6">
//       <div className="flex justify-between items-center max-w-6xl mx-auto">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-3">
//           <img
//             src="https://via.placeholder.com/40"
//             alt="Logo"
//             className="w-10 h-10 object-contain"
//           />
//           <h1 className="text-xl font-semibold text-gray-800">HotelFinder</h1>
//         </div>

//         {/* Menu Items */}
//         <ul className="hidden md:flex space-x-6 items-center">
//           <li>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-gray-900 transition"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-gray-900 transition"
//             >
//               Rooms
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-gray-900 transition"
//             >
//               About Us
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-gray-900 transition"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>

//         {/* Call-to-Action Button */}
//         <div className="hidden md:flex">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//             Book Now
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             className="text-gray-600 focus:outline-none"
//             aria-label="Open Menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




























import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1478359900967-91ec0c6edc60?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-semibold text-gray-800">
            <Link to="/">HotelFinder</Link>
          </h1>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/booknow"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Book Now
            </Link>
          </li>
          <li>
            <Link
              to="/roomcard"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Popular places
            </Link>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <div className="hidden md:flex">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
