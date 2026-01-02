import React from "react";
import Navbar from "../components/Navbar";
import Textation from "../components/Textation";
import FooterReveal from "../components/FooterReveal";

const ordersItem = [
  {
    id: 1,
    name: "BONKERS DOG BITES",
    image: "/images/bonkers-barkery1.png",
    quantity: 2,
    status: "Delivered",
  },
  {
    id: 2,
    name: "BONKERS BBQ",
    image: "/images/bonkers-bbq1.png",
    quantity: 3,
    status: "Shipping",
  },
  {
    id: 3,
    name: "BONKERS CAT BITES",
    image: "/images/bonkers-cat1.png",
    quantity: 4,
    status: "Out for Delivery",
  },
  {
    id: 4,
    name: "BONKERS MIXX",
    image: "/images/bonkers-mixx1.png",
    quantity: 1,
    status: "Packing",
  },
  {
    id: 5,
    name: "BONKERS SURPRISE",
    image: "/images/bonkers-surprise.png",
    quantity: 2,
    status: "Out for Delivery",
  },
  {
    id: 6,
    name: "BONKERS SURPRISE",
    image: "/images/bonkers-surprise.png",
    quantity: 1,
    status: "Cancelled",
  },
];

    const getStatusColor = (status) => {
      switch (status) {
        case "Delivered":
          return "bg-green-200 text-green-700";
        case "Shipping":
          return "bg-blue-200 text-blue-700";
        case "Out for Delivery":
          return "bg-yellow-200 text-yellow-700";
        case "Packing":
          return "bg-blue-200 text-blue-700";
        case "Cancelled":
          return "bg-red-200 text-red-700";
        default:
          return "bg-gray-200 text-gray-700";
      }
    };


const Orders = () => {
  return (
    <section className="w-full bg-[#FFEBC3] min-h-screen">
{/*--------- Navbar -------------*/}
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <Navbar />
      </div>

{/*------------- Main --------------*/}
      <div className="px-4 md:px-8 lg:px-16 py-6 text-sm lg:text-lg font-['rooneySansRegular']">
        <div className="border border-gray-200 rounded-3xl shadow-lg bg-white p-4 md:p-6 mx-auto">
          <h1 className="text-3xl md:text-5xl font-['FatFrank'] mb-6 text-[#FFEBC3]">
            My Orders
          </h1>

          <div className="space-y-4">
            {ordersItem.map((order) => (
              <div
                key={order.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b py-3"
              >
                {/* Left section */}
                <div className="flex items-center gap-14">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-16 h-16 md:w-24 md:h-24 rounded-xl object-cover"
                  />
                  <div>
                    <h2 className="font-['Dinosaur']">{order.name}</h2>
                    <p className="text-gray-600 text-sm">
                      Qty: {order.quantity}
                    </p>
                  </div>
                </div>

                {/* Order Status */}
                <span className={`self-end px-3 py-1 rounded-full text-xs md:text-sm font-['rooneySansRegular'] ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
        
{/*------- Textation ---------- */}
    <Textation className="bg-[#FFD715] font-['Dinosaur'] font-normal py-2 md:py-4">
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
    </Textation>


{/*----------- Footer ------------- */}
      <FooterReveal />
    </section>
  );
};

export default Orders;
