import React,{useEffect} from 'react'
import './blog.css'

import { BsArrowRightShort } from "react-icons/bs";

import img from '../../Assets/bgimg.jpeg'

import img2 from '../../Assets/bgimg(2).jpeg'
import img3 from '../../Assets/bgimg(3).jpeg'
import img4 from '../../Assets/bgimg(4).jpeg'
import img5 from '../../Assets/bgimg(5).jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts =[
  {
    id:1,
    postImage:img,
    title:'Let us have an advanture outside Tunisia',
    desc:'Tunisia is the place and it is small in the country Africa that represents both the aspirants.'
  },
  {
    id:2,
    postImage:img2,
    title:'Best Country in East Africa',
    desc:'When kenya claimed its independence from U.K in 1963,leaders of the newly formed republic promoted .'
  },
  {
    id:3,
    postImage:img3,
    title:'Romantic moments under effil tower',
    desc:'With vast swaths of desert in its east and west and rich nile river vally in its heart, is the place.'
  },
  {
    id:4,
    postImage:img4,
    title:'Devotional place to see',
    desc:'The place in india is to see the devotional time and to see the goddes with naked eye and its peacefull.'
  }
]

const Blog = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='blog container section'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000"className='secTitle'>
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experience in the world!!
          </p>
        </div>

        <div className="mainContainer grid">

          {
            Posts.map(({id,postImage,title,desc})=>{
              return(
                 <div data-aos="fade-up" data-aos-duration="2000"className="singlePost grid">
                   <div className="imgDiv">
                     <img src={postImage}alt={title}/>
                   </div>

                   <div className="postDetails">
                    <h3 data-aos="fade-up" data-aos-duration="3000">
                      {title}
                   </h3>
              <p data-aos="fade-up" data-aos-duration="4000">{desc}</p>

             </div>

             <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500">
             Read More
             <BsArrowRightShort className="icon"/>
             </a>

          </div> 
              )
            })
          }
          {/* <div className="singlePost grid">

             <div className="imgDiv">
              <img src={img}alt="Image Name"/>
             </div>

             <div className="postDetails">
              <h3>
                Title
              </h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis?</p>
             </div>

             <a href="#" className="flex">
             <BsArrowRightShort className="icon"/>
             Read More
             </a>

          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Blog;
