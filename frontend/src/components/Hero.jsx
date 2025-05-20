// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* Hero Left Side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//       </div>
//       {/* Hero Right Side */}
//       <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   )
// }

// export default Hero













// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// import { assets } from '../assets/assets'

// const heroSlides = [
//   {
//     title: 'Latest Arrivals',
//     subtitle: 'OUR BESTSELLERS',
//     cta: 'SHOP NOW',
//     image: assets.hero_img,
//   },
//   {
//     title: 'Summer Collection',
//     subtitle: 'JUST IN',
//     cta: 'EXPLORE',
//     image: 'https://st2.depositphotos.com/1017986/12154/i/950/depositphotos_121542672-stock-photo-happy-young-woman-choosing-clothes.jpg', // Replace with actual path
//   },
//   {
//     title: 'Winter Picks',
//     subtitle: 'TOP CHOICES',
//     cta: 'DISCOVER',
//     image:"https://thumbs.dreamstime.com/b/happy-family-warm-clothes-white-background-winter-vacation-165048195.jpg", // Replace with actual path
//   },
// ]

// const HeroCarousel = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       autoplay={{ delay: 4000 }}
//       loop
//       pagination={{ clickable: true }}
//       navigation
//       className='w-full'
//     >
//       {heroSlides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div className='flex flex-col sm:flex-row border border-gray-400'>
//             {/* Left Section */}
//             <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//               <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                   <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                   <p className='font-medium text-sm md:text-base'>{slide.subtitle}</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
//                   {slide.title}
//                 </h1>
//                 <div className='flex items-center gap-2'>
//                   <p className='font-semibold text-sm md:text-base'>{slide.cta}</p>
//                   <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Section */}
//             <img className='w-full sm:w-1/2 object-cover' src={slide.image} alt={slide.title} />
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }

// export default HeroCarousel















import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { assets } from '../assets/assets'

const heroSlides = [
  {
    title: 'Latest Arrivals',
    subtitle: 'OUR BESTSELLERS',
    cta: 'SHOP NOW',
    image: assets.hero_img,
  },
  {
    title: 'Summer Collection',
    subtitle: 'JUST IN',
    cta: 'EXPLORE',
    image: 'https://img.freepik.com/free-photo/two-young-beautiful-smiling-hipster-girls-trendy-summer-sundress-sexy-carefree-women-posing-near-wall-street-sunglasses-positive-models-having-fun-hugging-hats_158538-16065.jpg?semt=ais_hybrid&w=740',
  },
  {
    title: 'Winter Picks',
    subtitle: 'TOP CHOICES',
    cta: 'DISCOVER',
    image: 'https://media.istockphoto.com/id/1065840316/photo/attractive-businessmen-on-the-street.jpg?s=612x612&w=0&k=20&c=8-tpELzQrwsNPzdqJYO03jFSdD0PPemWQ2kKTouEra4=',
  },
]

const HeroCarousel = () => {
  return (
    <>
      {/* Embedded Styles for Swiper */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #1a1a1a !important;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 24px;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: #888;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #1a1a1a;
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 9000 }}
        loop
        pagination={{ clickable: true }}
        navigation
        className='w-full'
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col sm:flex-row border border-gray-300'>
              {/* Left Section (White Background) */}
              <div
                className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-4'
                style={{ backgroundColor: '#ffffff' }}
              >
                <div className='text-[#414141] max-w-md'>
                  <div className='flex items-center gap-2 mb-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>{slide.subtitle}</p>
                  </div>
                  <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
                    {slide.title}
                  </h1>
                  <div className='flex items-center gap-2 mt-3'>
                    <p className='font-semibold text-sm md:text-base'>{slide.cta}</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                  </div>
                </div>
              </div>

              {/* Right Section (Image) */}
              <img
                className='w-full sm:w-1/2 h-[500px] object-cover'
                src={slide.image}
                alt={slide.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default HeroCarousel
