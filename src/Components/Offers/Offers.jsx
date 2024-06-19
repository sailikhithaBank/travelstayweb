import React,{useEffect} from 'react'
import './offers.css';

import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdOutlineAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";


import img from '../../Assets/bgimg(6).jpeg'


import img2 from '../../Assets/bgimg(2).jpeg'
import img3 from '../../Assets/bgimg(3).jpeg'
import img4 from '../../Assets/bgimg(4).jpeg'
import img5 from '../../Assets/bgimg(5).jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Offer= [
  {
    id:1,
    imgSrc:img2,
    destTitle:'Machu Picchu',
    location:'Peru',
    price:'$1400'
  },
  {
    id:2,
    imgSrc:img3,
    destTitle:'Guanajuato',
    location:'Mexico',
    price:'$2000'
  },
  {
    id:3,
    imgSrc:img4,
    destTitle:'Angkor Wat',
    location:'Canada',
    price:'$3500'
  }
]


const Offers = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (
   <section className='offer container section'>
    <div className="secContainer">
      <div data-aos="fade-up" data-aos-duration="2000"className="secIntro">
        <h2 className="secTitle">
          Special Offers
        </h2>
        <p>
          From historical cities to natural spectularies,come see the natural of the best!!!
        </p>
      </div>

      <div className="mainContent grid">

        {
          Offer.map(({id,imgSrc,destTitle,location,price})=>{
            return(
               <div data-aos="fade-up" data-aos-duration="3000"className="singleOffer">
          <div className="destImage">
            <img src={imgSrc} alt={destTitle}/>

            <span className="discount">
              30% Off
            </span>
          </div>

          <div className="offerBody">
            <div className="price flex">
              <h4>
                {price}
              </h4>
              <span className="status">
                For Rent
              </span>
            </div>

            <div className="amenities flex">
                <div className="singleAmenity flex">
                <MdKingBed className="icon"/>
                <small>2 Beds</small>
                </div>

                <div className="singleAmenity flex">
                <MdBathtub className="icon"/>
                <small>1 Bath</small>
                </div>

                <div className="singleAmenity flex">
                <FaWifi className="icon"/>
                <small>Wi-Fi</small>
                </div>

                <div className="singleAmenity flex">
                <MdOutlineAirportShuttle className="icon"/>
                <small>Shuttle</small>
                </div>
            </div>

            <div className="location flex">
            <MdLocationOn  className="icon"/>
            <small>500  SS #1919,{location}</small>
            </div>
            <button className='btn flex'>
              View Details
              <BsArrowRightShort className="icon"/>
            </button>
          </div>
        </div> 
            )
          })
        }
        {/* <div className="singleOffer">
          <div className="destImage">
            <img src={img} alt="Image Name"/>

            <span className="discount">
              30% Off
            </span>
          </div>

          <div className="offerBody">
            <div className="price flex">
              <h4>
                $1000
              </h4>
              <span className="status">
                For Rent
              </span>
            </div>

            <div className="amenities flex">
                <div className="singleAmenity flex">
                <MdKingBed className="icon"/>
                <small>2 Beds</small>
                </div>

                <div className="singleAmenity flex">
                <MdBathtub className="icon"/>
                <small>1 Bath</small>
                </div>

                <div className="singleAmenity flex">
                <FaWifi className="icon"/>
                <small>Wi-Fi</small>
                </div>

                <div className="singleAmenity flex">
                <MdOutlineAirportShuttle className="icon"/>
                <small>Shuttle</small>
                </div>
            </div>

            <div className="location flex">
            <MdLocationOn  className="icon"/>
            <small>500  Nlr #1919,SS</small>
            </div>
            <button className='btn flex'>
              View Details
              <BsArrowRightShort className="icon"/>
            </button>
          </div>
        </div> */}
      </div>
    </div>
   </section>
  )
}

export default Offers;
