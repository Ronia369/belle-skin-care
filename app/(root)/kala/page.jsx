import Header from '@/component/Hedear'
import React from 'react'

function page() {
  return (
    <div className='bg-fuchsia-500'>
      
      {/* Header */}
      <Header />
      <section id="card" className="w-[90%] mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16">
        {[
          { img: "", title: "" },
          { img: "", title: "" },
          { img: "", title: "" },
          { img: "", title: "" },
          { img: "", title: "" },
          { img: "", title: "" },
          { img: "", title: "" },
          { img: "", title: "" },
          { img: "", title: "" },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-2xl hover:scale-105 transition-transform"
          >
            <img src={card.img} alt={card.title} className="w-full h-48 rounded-t-3xl object-cover" />
            <p className="text-xl font-bold text-center mt-4 text-gray-900">{card.title}</p>
            <button className="block mx-auto my-6 px-8 py-2 bg-gradient-to-r from-[#1b1044] to-[#050db7] text-white rounded-3xl hover:px-10 transition-all">
              ثبت درخواست
            </button>
          </div>
        ))}
      </section>

    </div>
  )
}

export default page
