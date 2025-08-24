import React from 'react'

const Card = (props) => {
  return (
     <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-72 rounded-2xl border bg-white shadow p-4">
        <img
          src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFufGVufDB8fDB8fHww"
          alt="card"
          className="h-40 w-full object-contain rounded-xl mb-3"
        />
              <h3 className="text-lg font-semibold">{props.name }</h3>
        <p className="text-sm text-gray-600 mt-1">
          Ye ek chhota, clean card hai React aur Tailwind se.
        </p>
        <button className="mt-4 w-full rounded-xl border px-4 py-2 hover:bg-gray-50">
          {props.btn}
        </button>
      </div>
    </div>
  )
}

export default Card