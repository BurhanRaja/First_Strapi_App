import React, {useEffect, useState} from 'react'

const Cart = ({cart}) => {

  const [totalPay, setTotalPay] = useState(0)
  const [form, setForm] = useState({name:"", email:"", phone:"", city:"", address:""})

  useEffect(() => {
    let myTotal = 0
    for (let index = 0; index < cart.length; index++) {
      myTotal += cart[index][1];
    }
    setTotalPay(myTotal)
  }, [])

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }
  
  return (
    <div className='container mx-auto'>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">Checkout</h1>
          </div>

          <div className='cart-checkout mb-10'>
            <h1 className="sm:text-2xl text-xl font-medium title-font mb-5 text-gray-900">{cart.length? 'Your Cart Details as follows: ': 'Your Cart is currently empty.'}</h1>

            <div className="flex justify-start flex-wrap mx-auto">

            {cart.map((item, index) => {
              return <div key={index} className="rounded-lg bg-gray-100 max-w-sm mx-2 mb-2 flex">
              <a href="#!" className='flex flex-col items-center justify-center'>
                <img className="ml-2" src={item[2]} alt="" />
              </a>
              <div className="px-6 py-2">
                <h5 className="text-gray-900 text-lg font-medium mb-2">{item[0]}</h5>
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className='mb-1 font-semibold text-base'>Price: <span className='font-light'>₹{item[1]}</span> </span>
                </div>
              </div>
            </div>
            })}
            </div>
            <h1 className="sm:text-2xl text-center text-2xl mb-5 text-gray-900">Your Total Pay: <span className='font-medium'>₹{totalPay}</span></h1>
          </div>

          <div className="lg:w-full md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" onChange={handleChange} value={form.name} id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" onChange={handleChange} value={form.email} id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                  <input type="phone" onChange={handleChange} value={form.phone} id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                  <input type="text" onChange={handleChange} value={form.city} id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <textarea id="address" onChange={handleChange} value={form.address} name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart