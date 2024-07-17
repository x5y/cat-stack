import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [userData, setUserData] = useState({});
  const [totalPrice, setTotalPrice] = useState("-");
  useEffect(() => {
    const id = window.location.pathname.split('/').slice(-1);
    fetch(`/comms/your-next-delivery/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setTotalPrice(data.totalPrice.toFixed(2))
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (userData.title) {
    return (
      <div className='p-10 pt-20 bg-slate-200 grid place-content-center'>
        <div className="card rounded lg:card-side bg-base-100 shadow-xl bg-white border-2 border-slate-300 max-w-4xl">
          <figure>
            <img
              className='rounded-full h-24 w-24 -top-10 aspect-square absolute lg:rounded-none lg:top-0 lg:relative lg:w-48 lg:h-48'
              src="https://cdn.pixabay.com/photo/2022/06/27/14/38/cat-7287671_1280.jpg"
              alt="Cute cat" />
          </figure>
          <div className="card-body mt-10 lg:m-0 text-center lg:text-left">
            <h2 className="card-title text-green-700 justify-center lg:justify-normal">{userData.title}</h2>
            <p className='text-slate-400'>{userData.message}</p>
            <h3 className='text-slate-500 font-bold text-md'>Total price: £{totalPrice}</h3>
            <div className="flex justify-center mt-10 space-x-6">
              <button className="btn btn-primary bg-green-800 text-white w-1/2 uppercase">See Details</button>
              <button className="btn btn-outline border-green-700 text-green-700 w-1/2 uppercase">Edit Delivery</button>
            </div>
            {userData.freeGift &&
              <div class="absolute px-4 py-1 -bottom-5 place-self-center lg:place-self-start lg:-top-5 lg:-right-5 bg-pink-300 -rotate-12 lg:rotate-12">
                <p className='text-sm'>FREE GIFT</p>
              </div>
            }
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='p-10 pt-20 bg-slate-200 grid place-content-center'>
        <div className="card rounded lg:card-side bg-base-100 shadow-xl bg-white border-2 border-slate-300 max-w-4xl">
          <figure>
            <img
              className='rounded-full h-24 w-24 -top-10 aspect-square absolute lg:rounded-none lg:top-0 lg:relative lg:w-48 lg:h-48'
              src="https://cdn.pixabay.com/photo/2022/06/27/14/38/cat-7287671_1280.jpg"
              alt="Cute cat" />
          </figure>
          <div className="card-body mt-10 lg:m-0 text-center lg:text-left">
          <h2 className="card-title text-green-700 justify-center lg:justify-normal">Something went wrong!</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
