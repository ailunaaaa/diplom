
import './Home.css'; 
import b1 from '../../img/classy wear.jpg' 
import b2 from '../../img/home_img.webp' 
import b3 from '../../img/home111.jpg' 
import b4 from '../../img/home222.jpg' 

import { Swiper, SwiperSlide } from "swiper/react"; 
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/scrollbar'; 
import 'swiper/css/autoplay'; 
import { Link } from "react-router-dom"; 
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; 
import slide1 from '../../img/slide9 1.jpg' 
import slide2 from '../../img/slide2 2.jpg' 
import slide3 from '../../img/slide3 1.jpg' 
import slide4 from '../../img/slide6 2.jpg' 
import slide5 from '../../img/slide5 2.jpg' 
import slide6 from '../../img/slide8 2.jpg' 

 
 
function Home() { 
  return ( 
 
    <div className="Best"> 
      <Swiper 
        spaceBetween={10} 
        slidesPerView={2} 
        // modules={[Navigation, Pagination, Scrollbar, A11y]} 
        navigation 
        autoplay={1000} 
        pagination={{ clickable: true }} 
        scrollbar={{ draggable: true }} 
      > 
        <SwiperSlide> 
          <Link className="Home_slide" to="#"> 
            <img 
              src={slide1} 
              alt="" 
            /> 
            
          </Link> 
        </SwiperSlide> 
        <SwiperSlide> 
          <Link className="Home_slide" to="#"> 
            <img 
              src={slide2} 
              alt="" 
            /> 
            
          </Link> 
        </SwiperSlide> 
        <SwiperSlide> 
          <Link className="Home_slide" to="#"> 
            <img 
              src={slide3} 
              alt="" 
            /> 
             
          </Link> 
        </SwiperSlide> 
        <SwiperSlide> 
          <Link className="Home_slide" to="#"> 
            <img 
              src={slide4} 
              alt="" 
            /> 
            
          </Link> 
        </SwiperSlide> 
 
        <SwiperSlide> 
          <Link className="Home_slide" to="#"> 
            <img 
              src={slide5} 
              alt="" 
            /> 
             
          </Link> 
        </SwiperSlide> 
 
        <SwiperSlide> 
          <Link className="Home_slide" to="#"> 
            <img 
              src={slide6} 
              alt="" 
            /> 
             
          </Link> 
        </SwiperSlide> 
 
       
 
        <Link className="Home_slide" to="#"> 
        <p className="Home_slide-txt"> 
        Luxurious Fabrics: Crafted from high-quality materials such as silk, satin, chiffon, and lace, our evening dresses ensure a sophisticated and comfortable fit.
            </p></Link> 
      </Swiper> 
 
      <div className="container"> 
      <img src="evening-dress.jpg" alt="" class="image"></img>
        <div class="description">
            <h2>Elegant Evening Dresses</h2>
            <p>Indulge in timeless elegance with our exquisite collection of evening dresses, perfect for any special occasion. Our evening gowns are designed to make you feel glamorous and confident, featuring luxurious fabrics, intricate details, and stunning silhouettes.</p>
            <ul>
                <li><strong>Luxurious Fabrics:</strong> Crafted from high-quality materials such as silk, satin, chiffon, and lace, our evening dresses ensure a sophisticated and comfortable fit.</li>
                <li><strong>Intricate Details:</strong> Adorned with beautiful embellishments like sequins, beads, and embroidery, these dresses capture the light beautifully and add a touch of sparkle to your ensemble.</li>
                <li><strong>Stunning Silhouettes:</strong> Whether you prefer a classic A-line, a form-fitting mermaid cut, or a flowing ball gown, our collection offers a variety of styles to flatter every body type.</li>
                <li><strong>Versatile Designs:</strong> From elegant floor-length gowns to chic cocktail dresses, our evening wear is perfect for weddings, galas, proms, and other formal events.</li>
                <li><strong>Elegant Colors:</strong> Choose from a palette of sophisticated colors, including timeless black, elegant navy, romantic red, and ethereal pastels.</li>
            </ul>
            <p>Each dress is thoughtfully designed to enhance your natural beauty and ensure you stand out at any event. Elevate your evening attire with our stunning selection and make every moment unforgettable.</p>
        </div>
        <Link to="" className="BestTit"><h2>Bestsellers</h2> 
        </Link> 
        <br></br> 
        <h3 className='Tit'> 
          This year's top sellers</h3> 
        <div className="bestCart"> 
          <div className="bestCartIn flex"> 
            <Link to="#" className="bestIn"> 
              <div className='imgCart'> 
                <img src={b1} alt="" /></div> 
             
            </Link> 
            <Link to="#" className="bestIn"> 
              <div className='imgCart'> 
                <img src={b2} alt="" /></div> 
              
 
            </Link> 
            <Link to="#" className="bestIn"> 
              <div className='imgCart'> 
                <img src={b3} alt="" /></div> 
              
 
            </Link> 
            <Link to="#" className="bestIn"> 
              <div className='imgCart'> 
                <img src={b4} alt="" /></div> 
               
 
            </Link> 
          
           
          </div> 
        </div> 
      </div> 
      <div className="Home_slider"> 
 
      </div> 
 
    </div> 
 
 
 
 
  ); 
} 
 
export default Home;