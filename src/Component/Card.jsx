import React from 'react'

const Card = ({username ,btnText="submit"}) => {
    
  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg p-5 m-4">
      <img
        className="w-full h-48 object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
        alt="Card Image"
      />
      <div className="py-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{username}</h2>
        <p className="text-gray-600 text-sm">
          Ye ek simple Tailwind CSS card hai jo React mein banaya gaya hai.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        {btnText}
        </button>
      </div>
    </div>
  )
}

export default Card