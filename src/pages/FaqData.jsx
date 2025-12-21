import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PexelsVideo from '../components/PexelsVideo'
import { useState } from 'react'
import { assets } from '../assets/assets'
import Textation from '../components/Textation'

const faq = [
    {
      heading: "All Faq's",
        faqs: [
          { q: "Where can I buy BONKERS ", 
            a: ["See below for our list of BONKERS whiffy good snacky snacks stockists or check out our store locator here.",
                "Madurai, Salem, Chennai, Trichy, Coimbatore", ]},
          { q: "What BONKERS products are available in my country?", 
            a: ["BONKERS Cat Bites Paw Lickin’ Chicken Flavor",
              "BONKERS Cat Bites Seafood & Eat It! Flavor",
              "BONKERS Cat Bites Catnip, Chick N’ Cheddar Flavor",
              "BONKERS Cat Bites Salmon Supreme Flavor",
              "BONKERS Cat Bites Bangin’ Beef Flavor",
              "BONKERS Purrpops Chicky Licks",
              "BONKERS Purrpops Tip Top Tuna",
              "BONKERS Purrpops Lip Smackin’ Salmon",
              "BONKERS Purrpops Catnip",
              "BONKERS Purrpops Tuna & Salmon 18 Pack",
            ] },
          { q: "What is the shelf life of BONKERS treats?",
            a: ["All BONKERS snacky snacks have a shelf life of 18-24 months from production, so there’s plenty of time to get weird with your furry pals.See below for exact shelf life for each product.",
                "BONKERS Bites: 24 months",
                "BONKERS Mixx/BONKERS Licky Tubes: 24 months",
                "BONKERS Purrpops: 18 months",
                "BONKERS Zoomers: 18 months",
                "BONKERS BBQ: 24 months"
            ]},
          { q: "Are BONKERS treats vet certified?", a: "BONKERS snacky snacks are carefully formulated by leading animal nutritionists, who really know their stuff when it comes to all things nutrition and snacky snacks." },
          { q: "Is the packaging recyclable?", 
            a: "No, unfortunately, BONKERS packaging is not recyclable at this time. However, recycling capabilities can vary by location, so we recommend checking with your local recycling program for more information." },
          { q: "How should I store BONKERS?", 
            a: "Store BONKERS treats in a cool, dry place to ensure they stay fresh and delicious for your pet." },
          { q: "Have BONKERS pet treats ever been recalled?", 
            a: "No, BONKERS pet treats have never been recalled." },
          { q: "Are BONKERS pet treats involved in the recent outbreak of Salmonella?", 
            a: "No, BONKERS pet treats are regularly tested for salmonella, and have never been recalled." },
          { q: "Can BONKERS Snacky Snacks be used for training?", 
            a: "You bet! Our BONKERS snacks have a variety of textures and tastes that pets go BONKERS for—meaning they are perfect for training." },
          { q: "Do you offer coupons?", 
            a: "No, we do not currently offer coupons. However, we do have promotions and special offers from time to time with ourretailer partners. Be sure to follow us on social media to stay updated on the latest news." },
          { q: "What ingredients are in BONKERS treats?", 
            a: "Lots of yums, for a start. The full ingredient list for each product can be found on individual product pages on our website, see cat or dog. You can also find them listed on our packaging." },
          { q: "How many treats per day should I feed my cat or dog?", 
            a: "Your pet will probably be telling you one thing… but you can find recommended feeding guidelines listed on website product pages and our packaging. We also encourage you to consult with your pet’s veterinarian if you are unsure!" },
          { q: "Are BONKERS snacky snacks healthy?", 
            a: "Both our cat and dog treats have been made to be a healthy, lower calorie treat. Our cat bites are less than 2 calories per snack, and our dog bites are less than 5 calories per snack. Yee-haw!" },
          { q: "Are BONKERS treats suitable for kittens and puppies?", 
            a: "Yes, BONKERS treats are suitable for both kittens and puppies." },
          { q: "Err, so my pet is going BONKERS just looking at the bag. What do I do now?", 
            a: "Ooh, it sounds like you’ve unlocked the BONKERS! Pets revealing all their weird and wonderful traits is why we do what we do. We suggest you join in the fun (they love that!) or alternatively, make some TikToks and share that little cutie with the world." },
        ],
    },
    {
      heading:"Product",
        faqs: [
          { q: "Where can I buy BONKERS ", 
            a: ["See below for our list of BONKERS whiffy good snacky snacks stockists or check out our store locator here.",
                "Madurai, Salem, Chennai, Trichy, Coimbatore", ]},
          { q: "What BONKERS products are available in my country?", 
            a: ["BONKERS Cat Bites Paw Lickin’ Chicken Flavor",
              "BONKERS Cat Bites Seafood & Eat It! Flavor",
              "BONKERS Cat Bites Catnip, Chick N’ Cheddar Flavor",
              "BONKERS Cat Bites Salmon Supreme Flavor",
              "BONKERS Cat Bites Bangin’ Beef Flavor",
              "BONKERS Purrpops Chicky Licks",
              "BONKERS Purrpops Tip Top Tuna",
              "BONKERS Purrpops Lip Smackin’ Salmon",
              "BONKERS Purrpops Catnip",
              "BONKERS Purrpops Tuna & Salmon 18 Pack",
            ] },
          { q: "What is the shelf life of BONKERS treats?",
            a: ["All BONKERS snacky snacks have a shelf life of 18-24 months from production, so there’s plenty of time to get weird with your furry pals.See below for exact shelf life for each product.",
                "BONKERS Bites: 24 months",
                "BONKERS Mixx/BONKERS Licky Tubes: 24 months",
                "BONKERS Purrpops: 18 months",
                "BONKERS Zoomers: 18 months",
                "BONKERS BBQ: 24 months"
            ]},
          { q: "Are BONKERS treats vet certified?", a: "BONKERS snacky snacks are carefully formulated by leading animal nutritionists, who really know their stuff when it comes to all things nutrition and snacky snacks." },
          { q: "Is the packaging recyclable?", 
            a: "No, unfortunately, BONKERS packaging is not recyclable at this time. However, recycling capabilities can vary by location, so we recommend checking with your local recycling program for more information." },
          { q: "How should I store BONKERS?", 
            a: "Store BONKERS treats in a cool, dry place to ensure they stay fresh and delicious for your pet." },
          { q: "Have BONKERS pet treats ever been recalled?", 
            a: "No, BONKERS pet treats have never been recalled." },
          { q: "Are BONKERS pet treats involved in the recent outbreak of Salmonella?", 
            a: "No, BONKERS pet treats are regularly tested for salmonella, and have never been recalled." },
          { q: "Can BONKERS Snacky Snacks be used for training?", 
            a: "You bet! Our BONKERS snacks have a variety of textures and tastes that pets go BONKERS for—meaning they are perfect for training." },
          { q: "Do you offer coupons?", 
            a: "No, we do not currently offer coupons. However, we do have promotions and special offers from time to time with ourretailer partners. Be sure to follow us on social media to stay updated on the latest news." },
        ],
    },
        {
      heading: "Feeding & Nutrition",
        faqs: [
          { q: "What ingredients are in BONKERS treats?", 
            a: "Lots of yums, for a start. The full ingredient list for each product can be found on individual product pages on our website, see cat or dog. You can also find them listed on our packaging." },
          { q: "How many treats per day should I feed my cat or dog?", 
            a: "Your pet will probably be telling you one thing… but you can find recommended feeding guidelines listed on website product pages and our packaging. We also encourage you to consult with your pet’s veterinarian if you are unsure!" },
          { q: "Are BONKERS snacky snacks healthy?", 
            a: "Both our cat and dog treats have been made to be a healthy, lower calorie treat. Our cat bites are less than 2 calories per snack, and our dog bites are less than 5 calories per snack. Yee-haw!" },
          { q: "Are BONKERS treats suitable for kittens and puppies?", 
            a: "Yes, BONKERS treats are suitable for both kittens and puppies." },
          { q: "Err, so my pet is going BONKERS just looking at the bag. What do I do now?", 
            a: "Ooh, it sounds like you’ve unlocked the BONKERS! Pets revealing all their weird and wonderful traits is why we do what we do. We suggest you join in the fun (they love that!) or alternatively, make some TikToks and share that little cutie with the world." },
        ],
    },
  ]

const FaqData = () => {
  const [activeHeading, setActiveHeading] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <section className='w-full overflow-x-hidden bg-[#FFEBC3]'>
      <div className='px-4 md:px-8 lg:px-16 py-4'>
        <Navbar />
      </div>
{/*------ Content Area------------- */}
    <div className='px-4 md:px-8 lg:px-16 py-4'>

  <div className='flex flex-col lg:flex-row gap-6 border border-gray-100 rounded-3xl shadow-lg bg-white p-6 md:p-8 mx-auto'>

    {/* LEFT SIDE HEADINGS */}
    <div className="w-full lg:w-1/3">
      <h3 className='text-4xl sm:text-5xl lg:text-7xl font-[FatFrank] text-[#FFEBC3] mb-4'>
        FAQ'S
      </h3>

      {faq.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveHeading(index);
            setOpenIndex(null);
          }}
          className={`block text-left mt-4 font-[Dinosaur] text-base sm:text-lg
          ${activeHeading === index ? 'bg-[#FFD715]' : 'bg-white'}
          px-3 py-3 rounded-lg`}
        >
          {item.heading}
        </button>
      ))}
    </div>

    {/* RIGHT SIDE FAQ */}
    <div className="w-full lg:w-2/3 max-h-137.5 overflow-y-auto pr-2">

      <h4 className='text-[#FFEBC3] text-2xl sm:text-3xl font-[Dinosaur] mb-4'>
        {faq[activeHeading].heading}
      </h4>

      {faq[activeHeading].faqs.map((faq, i) => (
        <div key={i} className="border-b">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center p-4 text-left gap-4"
          >
            <span className="font-[Dinosaur] text-base sm:text-lg">
              {faq.q}
            </span>

            <span className="text-2xl font-bold min-w-6 text-right">
              {openIndex === i ? "-" : "+"}
            </span>
          </button>

          {/* Answer */}
          {openIndex === i && (
            <div className="px-4 pb-4 text-gray-700 text-sm sm:text-base font-['rooneySansRegular'] leading-relaxed">

              {/* If answer is array -> show bullet points */}
              {Array.isArray(faq.a) ? (
                <ul className="list-disc ml-5 space-y-1">
                  {faq.a.map((ans, j) => (
                    <li key={j}>{ans}</li>
                  ))}
                </ul>
              ) : (
                <p>{faq.a}</p>
              )}

            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</div>


{/*----------- Image Textation */}
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

{/*-------- PexelsVideo for Cats------------ */}
      <div>
        <PexelsVideo />
      </div>

{/*--------- Product Textation--------------- */}
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

{/*---------- Footer ----------------- */}
      <div>
        <Footer />
      </div>
    </section>
  )
}

export default FaqData
