import React from "react";
import { Link } from "react-router-dom";
const Bookingpage = () => {
  return (
    <div>
      <div class="h-[90vh]  w-full ">
        <img
          class="h-full w-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* <div>First design</div> */}
      <div class="mx-3 my-3 grid overflow-hidden rounded bg-blue-300 transition-all sm:grid-cols-12 sm:rounded-2xl">
        <div class="sm:col-span-6">
          <img
            class="h-[21rem] w-full object-cover"
            src="https://images.unsplash.com/photo-1499678329028-101435549a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-between font-serif sm:col-span-6 sm:p-2">
          <div class="p-2 text-3xl sm:text-4xl sm:text-start text-center">
            The Maldives
          </div>
          <div class="p-2 sm:text-2xl text-xl line-clamp-5">
            The Maldives is a popular destination for a romantic getaway with
            clear blue waters, white sand beaches, and a variety of activities.
            Here are some things to consider when planning a trip to the
            Maldives
          </div>
          <div class="flex flex-col justify-evenly gap-1 sm:flex-row sm:gap-5">
            <button class="w-50 min-h-10 rounded bg-blue-400 hover:bg-blue-500  sm:h-fit sm:min-h-12 sm:w-full sm:text-xl">
              Visit
            </button>
            <button class="w-50 min-h-10 rounded bg-blue-400 hover:bg-blue-500 sm:h-full sm:min-h-12 sm:w-full sm:text-xl">
              <Link
                to="/booknow"
                className="text-White hover:text-gray-900 transition"
              >
                Cost
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* <div>second design</div> */}
      <h1 class="text-center text-gray-800 text-3xl md:text-4xl font-semibold mb-8">
        Know More About Different Cultures
      </h1>
      <div class="flex justify-center items-center flex-wrap w-full">
        <div class="card m-auto min-h-56 min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 my-4 bg-gray-900">
          <img
            class="h-full min-h-4 w-full rounded-2xl p-3"
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h3 class="py-3 text-center text-2xl text-white">
            <div>Maldives</div>
          </h3>
          <p class="py-2 pb-4 text-center text-sm text-white">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <div class="mx-3 mb-3 flex flex-col gap-4 rounded-md sm:flex-row">
            <button class="h-11 w-full rounded-md bg-gray-500 text-white hover:bg-gray-600">
              Add To Cart
            </button>
            <button class="h-11 w-full rounded-md bg-gray-500 text-white hover:bg-gray-600">
              <Link
                to="/booknow"
                className="text-White hover:text-gray-900 transition"
              >
                Book Now
              </Link>
            </button>
          </div>
        </div>
        <div class="card m-auto min-h-56 min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 my-4 bg-gray-900">
          <img
            class="h-full min-h-4 w-full rounded-2xl p-3"
            src="https://images.unsplash.com/photo-1499678329028-101435549a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <h3 class="py-3 text-center text-2xl text-white">Indonesia</h3>
          <p class="py-2 pb-4 text-center text-sm text-white">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <div class="mx-3 mb-3 flex flex-col gap-4 rounded-md sm:flex-row">
            <button class="h-11 w-full rounded-md bg-gray-500 text-white hover:bg-gray-600">
              Add To Cart
            </button>
            <button class="h-11 w-full rounded-md bg-gray-500 text-white hover:bg-gray-600">
              <Link
                to="/booknow"
                className="text-White hover:text-gray-900 transition"
              >
                Book Now
              </Link>
            </button>
          </div>
        </div>
        <div class="card m-auto min-h-56 min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 my-4 bg-gray-900">
          <img
            class="h-full min-h-4 w-full rounded-2xl p-3"
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h3 class="py-3 text-center text-2xl text-white">Srilanka</h3>
          <p class="py-2 pb-4 text-center text-sm text-white">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <div class="mx-3 mb-3 flex flex-col gap-4 rounded-md sm:flex-row">
            <button class="h-11 w-full rounded-md bg-gray-500 text-white hover:bg-gray-600">
              Add To Cart
            </button>
            <button class="h-11 w-full rounded-md bg-gray-500 text-white hover:bg-gray-600">
              <Link
                to="/booknow"
                className="text-White hover:text-gray-900 transition"
              >
                Book Now
              </Link>
            </button>
          </div>
        </div>
        <div class="card m-auto min-h-56 min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 my-4 bg-gray-900">
          <img
            class="h-full min-h-4 w-full rounded-2xl p-3"
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h3 class="py-3 text-center text-2xl text-white">Rome</h3>
          <p class="py-2 pb-4 text-center text-sm text-white">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <div class="mx-3 mb-3 flex flex-col gap-4 rounded-md sm:flex-row">
            <button class="h-11 w-full rounded-md bg-gray-500 text-white hover:bg-gray-600">
              Add To Cart
            </button>
            <button class="h-11 w-full rounded-md bg-gray-500 text-white hover:bg-gray-600">
              <Link
                to="/booknow"
                className="text-White hover:text-gray-900 transition"
              >
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* <div>third design</div> */}
      <h1 class="text-center text-gray-800 text-3xl md:text-4xl font-semibold mb-8">
        Explore New Places
      </h1>
      <div class="mx-3 my-3 grid overflow-hidden rounded bg-blue-300 transition-all sm:grid-cols-12 sm:rounded-2xl">
        <div class="flex flex-col justify-between font-serif sm:col-span-6 sm:p-2">
          <div class="p-2 text-center text-3xl sm:text-start sm:text-4xl">
            Indonesia
          </div>
          <div class="line-clamp-5 p-2 text-xl sm:text-2xl">
            Indonesia is a country with many attractions, including islands,
            beaches, rainforests, and wildlife. Here are some places to visit in
            Indonesia:
          </div>
          <div class="flex flex-col justify-evenly gap-1 sm:flex-row sm:gap-5">
            <button class="w-50 min-h-10 rounded bg-blue-400 hover:bg-blue-500 sm:h-fit sm:min-h-12 sm:w-full sm:text-xl">
              Visit
            </button>
            <button class="w-50 min-h-10 rounded bg-blue-400 hover:bg-blue-500 sm:h-full sm:min-h-12 sm:w-full sm:text-xl">
              Send
            </button>
          </div>
        </div>
        <div class="order-first sm:order-last sm:col-span-6">
          <img
            class="h-[21rem] w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1700483717331-6da3888bc3db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>
      {/* **************** */}
      {/* <div>fourth design</div> */}
      <h1 class="text-center text-gray-800 text-3xl md:text-4xl font-semibold mb-8">
        Explore Beautiful views
      </h1>
      <div class="flex w-full flex-wrap items-center justify-center">
        <a
          class="m-auto"
          href="https://www.pinterest.com/azarystell/roronoa-zoro-pics/"
        >
          <div class="card group relative m-auto my-4 min-h-full min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 bg-gray-900">
            {/* <!-- Image with hover scale effect --> */}
            <img
              class="h-full min-h-4 w-full transform rounded-2xl p-2 transition duration-300 ease-in-out group-hover:scale-105"
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />

            {/* <!-- Content hidden initially, shown on hover --> */}
            <div class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <h3 class="py-3 text-center text-2xl text-white">Srilanka</h3>
              <p class="pb-4 text-center text-sm text-white">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur.
              </p>
            </div>
          </div>
        </a>
        <a
          class="m-auto"
          href="https://www.pinterest.com/azarystell/roronoa-zoro-pics/"
        >
          <div class="card group relative m-auto my-4 min-h-full min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 bg-gray-900">
            {/* <!-- Image with hover scale effect --> */}
            <img
              class="h-full min-h-4 w-full transform rounded-2xl p-2 transition duration-300 ease-in-out group-hover:scale-105"
              src="https://images.unsplash.com/photo-1533604848340-30ce9aeeb0be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJvbWV8ZW58MHx8MHx8fDA%3D"
              alt=""
            />

            {/* <!-- Content hidden initially, shown on hover --> */}
            <div class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <h3 class="py-3 text-center text-2xl text-white">Srilanka</h3>
              <p class="pb-4 text-center text-sm text-white">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur.
              </p>
            </div>
          </div>
        </a>
        <a
          class="m-auto"
          href="https://www.pinterest.com/azarystell/roronoa-zoro-pics/"
        >
          <div class="card group relative m-auto my-4 min-h-full min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 bg-gray-900">
            {/* <!-- Image with hover scale effect --> */}
            <img
              class="h-full min-h-4 w-full transform rounded-2xl p-2 transition duration-300 ease-in-out group-hover:scale-105"
              src="https://images.unsplash.com/photo-1528181304800-259b08848526?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />

            {/* <!-- Content hidden initially, shown on hover --> */}
            <div class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <h3 class="py-3 text-center text-2xl text-white">Thailand</h3>
              <p class="pb-4 text-center text-sm text-white">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur.
              </p>
            </div>
          </div>
        </a>
        <a
          class="m-auto"
          href="https://www.pinterest.com/azarystell/roronoa-zoro-pics/"
        >
          <div class="card group relative m-auto my-4 min-h-full min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 bg-gray-900">
            {/* <!-- Image with hover scale effect --> */}
            <img
              class="h-full min-h-4 w-full transform rounded-2xl p-2 transition duration-300 ease-in-out group-hover:scale-105"
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RnJhbmNlfGVufDB8fDB8fHww"
              alt=""
            />

            {/* <!-- Content hidden initially, shown on hover --> */}
            <div class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <h3 class="py-3 text-center text-2xl text-white">France</h3>
              <p class="pb-4 text-center text-sm text-white">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur.
              </p>
            </div>
          </div>
        </a>
        <a
          class="m-auto"
          href="https://www.pinterest.com/azarystell/roronoa-zoro-pics/"
        >
          <div class="card group relative m-auto my-4 min-h-full min-w-64 max-w-72 overflow-hidden rounded-xl border-blue-950 bg-gray-900">
            {/* <!-- Image with hover scale effect --> */}
            <img
              class="h-full min-h-4 w-full transform rounded-2xl p-2 transition duration-300 ease-in-out group-hover:scale-105"
              src="https://images.unsplash.com/photo-1533604848340-30ce9aeeb0be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJvbWV8ZW58MHx8MHx8fDA%3D"
              alt=""
            />

            {/* <!-- Content hidden initially, shown on hover --> */}
            <div class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <h3 class="py-3 text-center text-2xl text-white">Rome</h3>
              <p class="pb-4 text-center text-sm text-white">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur.
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* ********************************************************************************************** */}
      {/* <div>fifth design</div> */}
      <h1 class="text-center text-gray-800 text-3xl md:text-4xl font-semibold mb-8">
        Explore Beautiful Destinations
      </h1>
      <div class="flex flex-col flex-wrap md:flex-row gap-8 py-6 px-4">
        <div class="relative w-80  rounded-lg overflow-hidden shadow-lg">
          {/* <!-- Image --> */}
          <img
            src="https://plus.unsplash.com/premium_photo-1676188130387-c4a47e2d4e12?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29sb3NzZXVtJTJDJTIwUm9tZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Columbia Streets"
            class="w-full h-80 object-cover"
          />
          {/* <!-- Content --> */}
          <div class="absolute bottom-4 left-4 space-y-2 text-white">
            <h2 class="text-2xl font-bold">Colosseum, Rome</h2>
            <p class="text-sm">Amazing streets</p>
            <p class="text-lg font-bold">$ 900</p>
            <button class="mt-2 bg-green-300 text-black px-4 py-2 rounded hover:bg-green-400">
              <Link
                to="/booknow"
                className="text-White hover:text-gray-900 transition"
              >
                Book Hotel
              </Link>
            </button>
          </div>
        </div>
        <div class="relative w-80  rounded-lg overflow-hidden shadow-lg">
          {/* <!-- Image --> */}
          <img
            src="https://images.unsplash.com/photo-1613050846188-893358b631de?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SHVhcmF6fGVufDB8fDB8fHww"
            alt="Columbia Streets"
            class="w-full h-80 object-cover"
          />
          {/* <!-- Content --> */}
          <div class="absolute bottom-4 left-4 space-y-2 text-white">
            <h2 class="text-2xl font-bold">Huaraz</h2>
            <p class="text-sm">Mountains</p>
            <p class="text-lg font-bold">$ 300</p>
            <button class="mt-2 bg-green-300 text-black px-4 py-2 rounded hover:bg-green-400">
              <Link
                to="/booknow"
                className="text-White hover:text-gray-900 transition"
              >
                Book Hotel
              </Link>
            </button>
          </div>
        </div>
        <div class="relative w-80  rounded-lg overflow-hidden shadow-lg">
          {/* <!-- Image --> */}
          <img
            src="https://images.unsplash.com/photo-1562903793-3af4a5f0e3f5?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJ1c2lhfGVufDB8fDB8fHww"
            alt="Columbia Streets"
            class="w-full h-80 object-cover"
          />
          {/* <!-- Content --> */}
          <div class="absolute bottom-4 left-4 space-y-2 text-white">
            <h2 class="text-2xl font-bold">Russia</h2>
            <p class="text-sm">Amazing View</p>
            <p class="text-lg font-bold">$ 500</p>
            <button class="mt-2 bg-green-300 text-black px-4 py-2 rounded hover:bg-green-400">
              <Link
                to="/booknow"
                className="text-White hover:text-gray-900 transition"
              >
                Book Hotel
              </Link>
            </button>
          </div>
        </div>

        <div class="relative w-80  rounded-lg overflow-hidden shadow-lg">
          {/* <!-- Image --> */}
          <img
            src="https://plus.unsplash.com/premium_photo-1692673141688-cc6f036db4b4?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxjaGluYXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Columbia Streets"
            class="w-full h-80 object-cover"
          />
          {/* <!-- Content --> */}
          <div class="absolute bottom-4 left-4 space-y-2 text-white">
            <h2 class="text-2xl font-bold">China</h2>
            <p class="text-sm">China City/ streets</p>
            <p class="text-lg font-bold">$ 100</p>
            <button class="mt-2 bg-green-300 text-black px-4 py-2 rounded hover:bg-green-400">
              <Link
                to="/booknow"
                className="text-White hover:text-gray-900 transition"
              >
                Book Hotel
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* <div>six design</div> */}
      {/* <!-- gallery of images --> */}
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-center text-gray-800 text-3xl md:text-4xl font-semibold mb-8">
          Explore Beautiful Destinations
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-4  gap-4">
          <div class="hover:scale-105 transition-all duration-300  relative group md:col-span-2 md:row-span-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D"
              alt="Maldives"
              class="w-full h-full object-cover rounded-lg"
            />
            <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 class="text-white text-xl md:text-3xl font-bold">Maldives</h2>
            </div>
          </div>

          <div class=" hover:scale-105 relative group transition-all duration-300">
            <img
              src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5kb25lc2lhfGVufDB8fDB8fHww"
              alt="Indonesia"
              class="w-full h-full object-cover rounded-lg"
            />
            <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 class="text-white text-xl font-bold">Indonesia</h2>
            </div>
          </div>

          <div class=" hover:scale-105 relative group transition-all duration-300">
            <img
              src="https://plus.unsplash.com/premium_photo-1666254114402-cd16bc302aea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3JpbGFua2F8ZW58MHx8MHx8fDA%3D"
              alt="Srilanka"
              class="w-full h-full object-cover rounded-lg"
            />
            <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 class="text-white text-xl font-bold">Srilanka</h2>
            </div>
          </div>

          <div class=" hover:scale-105 relative group md:col-span-2 transition-all duration-300">
            <img
              src="https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.webp?a=1&b=1&s=612x612&w=0&k=20&c=NJhRUkQLhKC8e17vMlF93RaQOX22lQPx-D0IQGsSCrU="
              alt="North America"
              class="w-full h-full object-cover rounded-lg"
            />
            <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 class="text-white text-xl md:text-2xl font-bold">
                North America
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookingpage;
