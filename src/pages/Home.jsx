import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BestProduct from '../components/BestProduct'
import CatImages from '../components/CatImages'
import Products from '../components/Products'
import ProductVideo from '../components/ProductVideo'
import QualityCard from '../components/QualityCard'
import ViewProduct from '../components/ViewProduct'
import FooterReveal from '../components/FooterReveal'

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <div id="page-content">
        <section className="bg-[#FFEBC3] px-4 md:px-8 lg:px-16 py-4">
          <Navbar />
          <Hero />
          <BestProduct />
        </section>

        <section className="bg-white">
          <CatImages />
          <Products />
          <ProductVideo />
          <QualityCard />
          <ViewProduct />
        </section>
      </div>

      {/* Footer Loader Trigger */}
      <div id="footer-trigger" className="h-0"></div>
      <FooterReveal />
    </main>
  );
};

export default Home;