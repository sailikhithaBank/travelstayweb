import React ,{useEffect}from 'react'
import './popular.css'

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
 
import img from '../../Assets/bgimg.jpeg'


import img2 from '../../Assets/bgimg(2).jpeg'
import img3 from '../../Assets/bgimg(3).jpeg'
import img4 from '../../Assets/bgimg(4).jpeg'
import img5 from '../../Assets/bgimg(5).jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc:img2,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURAL RELAX'
    },
  {
     id:2,
     imgSrc:img3,
     destTitle:'Guanajuto',
     location:'Mexico',
     grade:'CULTURAL RELAX'
  },
  {
    id:3,
    imgSrc:img4,
    destTitle:'Angkor Wat',
    location:'Cambodia',
    grade:'CULTURAL RELAX'
  },
  {
    id:4,
    imgSrc:img5,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'CULTURAL RELAX'
  }
]


const Popular = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className='popular section caontainer'>
       <div className="secContainer">
        <div className="secHeader flex">
          <div data-aos="fade-right"  data-aos-duration="2500"className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars,come see the best of the world!!
            </p>
          </div>

          <div data-aos="fade-left"  data-aos-duration="2500"className="iconsDiv flex">
          <BsArrowLeftShort  className="icon leftIcon"/>
          <BsArrowRightShort className="icon"/>
          </div>
        </div>

        <div className="mainContent grid">
           {
             Data.map(({id,imgSrc,destTitle,location,grade})=>{
              return(
                  <div data-aos="fade-up"className="singleDestination">
            <div className="destImage">

              <img src={imgSrc} alt="Image title"/>

              <div className="overlayInfo">
                <h3>{destTitle}</h3>
                <p>{location}</p>


                <BsArrowRightShort className='icon'/>
              </div>
            </div>

            <div className="destFooter">
            <div className="number">
              0{id}
            </div>

            <div className="destText flex">
              <h6>{location}</h6>
              <span className='flex'>
                <span className="dot">
                <BsDot className="icon"/>
                </span>
                LIKHITHA
              </span>
            </div>
          </div>
          </div> 
              )
             })
           }
          
          {/* <div className="singleDestination">
            <div className="destImage">

              <img src={img} alt="Image title"/>

              <div className="overlayInfo">
                <h3>Srinu</h3>
                <p>Lorem ipsum dolor sit amet.</p>


                <BsArrowRightShort className='icon'/>
              </div>
            </div>

            <div className="destFooter">
            <div className="number">
              01
            </div>

            <div className="destText flex">
              <h6>Paris</h6>
              <span className='flex'>
                <span className="dot">
                <BsDot className="icon"/>
                </span>
                LIKHITHA
              </span>
            </div>
          </div>
          </div> */}
        </div>
       </div>
   </section>
  )
}

export default Popular;;
