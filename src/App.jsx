import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import WhereToBuy from "./pages/WhereToBuy";
import Contact from "./pages/Contact";
import FaqData from "./pages/FaqData";
import OurTreats from "./pages/OurTreats";
import Profile from "./pages/Profile";
import LearnMore from "./pages/LearnMore";
import ReviewPage from "./pages/ReviewPage";
import GetBonkers from "./pages/GetBonkers";
import ProductsView from "./pages/ProductsView";
import Orders from "./pages/Order";

const App = () => {
  const location = useLocation();

  return (
    <div className="w-full">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/treats" element={<PageTransition><OurTreats /></PageTransition>} />
        <Route path="/buy" element={<PageTransition><WhereToBuy /></PageTransition>} />
        <Route path="/FAQ" element={<PageTransition><FaqData /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
        <Route path="/learn-more" element={<PageTransition><LearnMore /></PageTransition>} />
        <Route path="/review" element={<PageTransition><ReviewPage /></PageTransition>} />
        <Route path="/get-bonkers" element={<PageTransition><GetBonkers /></PageTransition>} />
        <Route path="/products-view" element={<PageTransition><ProductsView /></PageTransition>} />
        <Route path="/orders" element={<PageTransition><Orders /></PageTransition>} />
      </Routes>
    </div>
  );
};

export default App;
