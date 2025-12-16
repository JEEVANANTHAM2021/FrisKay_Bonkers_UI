import React, { useState, useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Textation from "../components/Textation";
import CatImages from "../components/CatImages";
import { assets } from "../assets/assets";

/* ---------- Leaflet Marker Fix ---------- */
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
});

/* ---------- Distance Calculation ---------- */
const getDistanceKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

/* ---------- Shops Data ---------- */
const shopsData = [
  { name: "Pet Shop A", address: "Chennai", lat: 13.0827, lng: 80.2707 },
  { name: "Pet Shop B", address: "Velachery, Chennai", lat: 12.9759, lng: 80.2212 },
  { name: "Pet Shop C", address: "Tambaram, Chennai", lat: 12.9249, lng: 80.1 },
  { name: "Pet Shop D", address: "Madurai", lat: 9.9252, lng: 78.1198 },
  { name: "Pet Shop E", address: "Trichy", lat: 10.7905, lng: 78.7047 },
  { name: "Pet Shop F", address: "Coimbatore", lat: 11.0168, lng: 76.9558 },
  { name: "Pet Shop G", address: "Salem", lat: 11.6643, lng: 78.146 },
];

const WhereToBuy = () => {
  const [location, setLocation] = useState(null);
  const [search, setSearch] = useState("");
  const [distance, setDistance] = useState(50);

  /* ---------- Get Current Location ---------- */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        // fallback (India center)
        setLocation({ lat: 11.1271, lng: 78.6569 });
      }
    );
  }, []);

  /* ---------- Manual Search ---------- */
  const searchLocation = async () => {
    if (!search) return;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${search}`
    );
    const data = await res.json();

    if (data.length > 0) {
      setLocation({
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      });
      setSearch("");
    }
  };

  /* ---------- Filter Shops ---------- */
  const filteredShops = useMemo(() => {
    if (!location) return [];

    return shopsData.filter((shop) => {
      const d = getDistanceKm(
        location.lat,
        location.lng,
        shop.lat,
        shop.lng
      );
      return d <= distance;
    });
  }, [location, distance]);

  return (
    <section className="w-full bg-[#FFEBC3]">
{/*------------ Navbar--------------- */}
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <Navbar />
      </div>

{/*------------------- MAIN CARD ------------------- */}
      <div className="px-4 md:px-8 lg:px-16 py-6">
        <div className="bg-white rounded-3xl shadow-md p-4 md:p-8">
          <h3 className="font-['FatFrank'] text-4xl md:text-6xl lg:text-7xl text-[#FFEBC3] mb-6">
            GET BONKERS
          </h3>
    {/* CONTENT */}
          <div className="flex flex-col lg:flex-row gap-6">
    {/* LEFT */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl font-['Dinosaur'] mb-4">Find Stores</h2>
              <div className="flex gap-2 mb-4">
                <input value={search} onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search city / area" className="flex-1 border-b outline-none py-2"/>
                <button onClick={searchLocation} className="bg-amber-400 px-4 rounded font-['rooneySansRegular']">
                  Search
                </button>
              </div>
    {/* Search Box */}
              <label className="block mb-2 font-['rooneySansRegular']">
                Distance: {distance} km
              </label>
              <input
                type="range"
                min="10"
                max="500"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full mb-6"
              />

              {filteredShops.map((shop, i) => (
                <div key={i} className="p-3 border rounded-lg mb-3">
                  <h3 className="font-['Dinosaur']">{shop.name}</h3>
                  <p className="text-sm text-gray-600 font-['rooneySansRegular']">{shop.address}</p>
                </div>
              ))}
            </div>

  {/*------------------- RIGHT MAP----------------------- */}
            <div className="w-full lg:w-1/2">
              <div className={`h-75 sm:h-100 lg:h-125 w-full rounded-xl overflow-hidden`}>
                {location && (
                  <MapContainer
                    center={[location.lat, location.lng]}
                    zoom={7}
                    className="h-full w-full">
                  <TileLayer
                      attribution="© OpenStreetMap contributors"
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                  <Marker position={[location.lat, location.lng]} icon={defaultIcon}>
                      <Popup>Your location</Popup>
                  </Marker>
                    {filteredShops.map((shop, i) => (
                  <Marker key={i} position={[shop.lat, shop.lng]} icon={defaultIcon}>
                        <Popup>{shop.name}</Popup>
                  </Marker>
                    ))}
                  </MapContainer>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* ----------------- REPEATED SECTIONS ----------------------- */}
      {/* ----------------- Images Tags -------------------- */}
          <Textation className="bg-white rounded-2xl shadow-xl flex items-center gap-8 md:gap-14 p-4 
          w-max whitespace-nowrap animate-[ticker-ltr_12s_linear_infinite]">
          {[
            assets.amazon_img,
            assets.chewy_img,
            assets.cvs_img,
            assets.meijer_img,
            assets.petco_img,
            assets.petsmart_img,
            assets.target_img,
            assets.walgreens_img,
            assets.walmart_img,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
          ))}

          {/* Duplicate loop */}
          {[
            assets.amazon_img,
            assets.chewy_img,
            assets.cvs_img,
            assets.meijer_img,
            assets.petco_img,
            assets.petsmart_img,
            assets.target_img,
            assets.walgreens_img,
            assets.walmart_img,
          ].map((img, i) => (
            <img
              key={`dup-${i}`}
              src={img}
              alt=""
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
          ))}
        </Textation>
{/*---------------- Cat Images ------------- */}
          <CatImages />
{/*---------------- Cat Images ------------- */}

{/*--------------- Bonkers Tag --------------- */}
      {/* ---------- TEXTATION ---------- */}
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

{/*---------------- Footer ------------- */}
      <Footer />
{/*---------------- Footer ------------- */}
    </section>
  );
};

export default WhereToBuy;
