import React from 'react'
import './places.css'
import image_1 from '../../assets/travel_1.jpg'
import image_2 from '../../assets/travel_2.jpg'
import image_3 from '../../assets/travel_3.jpg'
import image_4 from '../../assets/travel_4.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Places = () => {
  return (
    <div className='places ' id='places'>
        <div className="location  p-2 lg:mx-[100px] md:mx-[50px] sm:mx-[20px]">
            <div className="locate-detail mb-[70px]">
                <h1 className='text-4xl font-[550] uppercase'>Find <span className='text-4xl font-[550] uppercase text-red-500'>Popular</span> <br />Destinations</h1>
            </div>
            <div className="locations grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 overflow-hidden place-items-center flex-[1] mb-[100px]">
                <div data-aos="fade-right" className='card  rounded-[10px] w-[250px] bg-yellow-50 mx-2 mb-[50px] shadow-xl'>
                        <div className="card-top p-2 relative  mb-[10px]">
                            <img src={image_1} alt="" className='bg-center object-cover rounded-[8px] opacity-90'/>
                            <div className="star absolute top-0 right-0 pr-4 pt-3">
                            <i class='bx bxs-star text-orange-600 mr-1'></i><span className='text-white'>4.5</span>
                            </div>
                        </div>
                        <div className="card-bottom p-3">
                            <div>
                                <h3>Serayu Rafting</h3>
                                <p className='text-[12px]'>china, Pshtyij</p>
                            </div>
                            <div className='booking flex justify-between mt-3 mr-3'>
                                <div className='flex '>
                                    <h3 className='text-2xl font-bold'>$20 </h3><span className='mt-1'>/month</span>
                                </div>
                                <button className='btn active '>Book</button>
                            </div>
                        </div>
                </div>
                <div data-aos="fade-up" className='card  rounded-[10px] w-[250px] bg-yellow-50 mx-2 mb-[50px] shadow-xl'>
                        <div className="card-top p-2 relative  mb-[10px]">
                            <img src={image_2} alt="" className='bg-center object-cover rounded-[8px] opacity-90 h-[160px] w-full object-bottom'/>
                            <div className="star absolute top-0 right-0 pr-4 pt-3">
                            <i class='bx bxs-star text-orange-600 mr-1'></i><span className='text-white'>4.5</span>
                            </div>
                        </div>
                        <div className="card-bottom p-3">
                            <div>
                                <h3>Camping Mui</h3>
                                <p className='text-[12px]'>japan, mui</p>
                            </div>
                            <div className='booking flex justify-between mt-3 mr-3'>
                                <div className='flex '>
                                    <h3 className='text-2xl font-bold'>$24 </h3><span className='mt-1'>/month</span>
                                </div>
                                <button className='btn active '>Book</button>
                            </div>
                        </div>
                </div>
                <div data-aos="fade-up" className='card  rounded-[10px] w-[250px] bg-yellow-50 mx-2 mb-[50px] shadow-xl'>
                        <div className="card-top p-2 relative  mb-[10px]">
                            <img src={image_3} alt="" className='bg-center object-cover rounded-[8px] opacity-90 h-[160px] w-full object-bottom'/>
                            <div className="star absolute top-0 right-0 pr-4 pt-3">
                            <i class='bx bxs-star text-orange-600 mr-1'></i><span className='text-white'>4.5</span>
                            </div>
                        </div>
                        <div className="card-bottom p-3">
                            <div>
                                <h3>Kun yui  temple</h3>
                                <p className='text-[12px]'>china, Kung mui</p>
                            </div>
                            <div className='booking flex justify-between mt-3 mr-3'>
                                <div className='flex '>
                                    <h3 className='text-2xl font-bold'>$18 </h3><span className='mt-1'>/month</span>
                                </div>
                                <button className='btn active '>Book</button>
                            </div>
                        </div>
                </div>
                <div data-aos="fade-right" className='card  rounded-[10px] w-[250px] bg-yellow-50 mx-2 mb-[50px] shadow-xl'>
                        <div className="card-top p-2 relative  mb-[10px]">
                            <img src={image_4} alt="" className='bg-center object-cover rounded-[8px] opacity-90 h-[160px] w-full object-center'/>
                            <div className="star absolute top-0 right-0 pr-4 pt-3">
                            <i class='bx bxs-star text-orange-600 mr-1'></i><span className='text-white'>4.5</span>
                            </div>
                        </div>
                        <div className="card-bottom p-3">
                            <div>
                                <h3>India Gate</h3>
                                <p className='text-[12px]'>India, Delhi</p>
                            </div>
                            <div className='booking flex justify-between mt-3 mr-3'>
                                <div className='flex '>
                                    <h3 className='text-2xl font-bold'>$13 </h3><span className='mt-1'>/month</span>
                                </div>
                                <button className='btn active '>Book</button>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Places