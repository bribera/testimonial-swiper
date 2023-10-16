'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import {Pagination} from 'swiper/modules'
import {EffectCoverflow} from 'swiper/modules'
import {FaQuoteLeft, FaStar, FaRegStar} from 'react-icons/fa'

const data = [
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-man-designer.png',
        name: 'Jane Doe',
        job: "Photographe"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-woman-designer.png',
        name: 'Leader Doe',
        job: "Producteur"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-woman.png',
        name: 'Gad Doe',
        job: "Journaliste"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-man-designer.png',
        name: 'Jacques Doe',
        job: "Mechanicien"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-woman-designer.png',
        name: 'Edgard Doe',
        job: "Youtubeur"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-woman.png',
        name: 'Blanche Doe',
        job: "Banquière"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-man-designer.png',
        name: 'Leader Black',
        job: "Coiffeur"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-woman-designer.png',
        name: 'Gustave Doe',
        job: "Garagiste"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-woman.png',
        name: 'Leader Blanchart',
        job: "Garagiste"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-man-designer.png',
        name: 'Alexandre Doe',
        job: "Producteur"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-woman-designer.png',
        name: 'Janette Doe',
        job: "Blogueuse"
    },
    {
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquam numquam iure ab.",
        avatar:'/black-professional-woman.png',
        name: 'Pierre Doe',
        job: "Vendeur"
    },
]

const Testimonial = () => {
  return (
    <section >
      <div className="container mx-auto pt-[10%] pl-[30%]" >
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 1150,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="w-full pt-[50px] pb-[50px]"
        >
            {
                data.map((person,index) => {
                    const {message, avatar, name, job} =  person
                    return(
                        <SwiperSlide key={index} className='' >
                            <div className="">
                                <div className="bg-white w-[520px] h-[420px] p-[25px]">
                                    <FaQuoteLeft className='text-5xl text-orange-500 mb-6'/>
                                    <p className="text-xl ">
                                        {message}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex justify-center items-center">
                                         <Image alt='' src={avatar} width={64} height={64} className='rounded-full mb-4'/>
                                         <div className="flex flex-col items-center ml-5 my-[20px]">
                                            <h1 className="text-2xl font-bold mb-2">{name}</h1>
                                            <h3 className="text-xl font-semibold">{job}</h3>
                                         </div>
                                        </div>
                                        <div className=" flex items-center gap-x-4">
                                            <FaStar className='text-2xl text-orange-500 mb-6'/>
                                            <FaStar className='text-2xl text-orange-500 mb-6'/>
                                            <FaStar className='text-2xl text-orange-500 mb-6'/>
                                            <FaStar className='text-2xl text-orange-500 mb-6'/>
                                            <FaRegStar className='text-2xl text-orange-500 mb-6'/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial
