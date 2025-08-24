import React from 'react';

export default function Services() {
  const items = [
    { title: 'Printed Labels', img: '/images/service3.png' },
    { title: 'Barcode Stickers', img: '/images/service4.png' },
    { title: 'Heat Transfer Stickers', img: '/images/service5.png' },
    { title: 'Woven Labels', img: '/images/service6.png' },
  ];

  return (
    <section className="px-6 py-12 text-center">
      <span className="inline-block px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">
        OUR SERVICES
      </span>
      <h2 className="mt-2 text-3xl font-bold">Exploring the Role of</h2>
      <h3 className="text-2xl text-purple-600 mt-1">Labels & Stickers</h3>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white shadow-md p-4 rounded-lg">
            <img src={item.img} alt={item.title}
                 className="w-full h-32 object-cover rounded-md mb-3" />
            <div className="text-sm text-gray-500">Garment</div>
            <h4 className="mt-1 font-semibold">{item.title}</h4>
            <button className="mt-2 px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition">
              Learn Today
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
