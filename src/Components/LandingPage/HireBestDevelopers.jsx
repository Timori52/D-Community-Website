import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import cross from '../../assets/cross.svg';
import arrow from '../../assets/Arrow.svg';

function NextArrow() {
  return <div className='hidden' />;
}
function PrevArrow() {
  return <div className='hidden' />;
}

var settings = {
  cssEase: 'linear',
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,

        infinite: true,
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 2,

        initialSlide: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Modal = ({ data, close }) => {
  return (
    <div className='w-72 shrink-0 p-4 m-auto bg-slate-500 rounded-md shadow-lg fixed top-0 left-0'>
      <img src={require(`../../assets/YouTube-Thumbnail.png`)} alt='' />
      <img src={cross} alt='cross' onClick={close} />
      <div className='my-2'>
        <p className='pt-1'>{data}</p>
        <p className='pt-1'>Lorem ipsum: Lorem ipsum</p>
        <p className='pt-1'>Lorem ipsum: Lorem ipsum</p>
        <p className='pt-1'>Lorem ipsum: Lorem ipsum</p>
      </div>
    </div>
  );
};

const Card = ({ value }) => {
  const [isModal, setIsModal] = useState(false);

  const handleShow = () => setIsModal(true);
  const handleClose = () => {
    setIsModal(false);
    console.log(isModal);
  };

  return (
    <div
      className='p-2 w-56 lg:w-72 sm:w-60 shrink-0 md:p-3 lg:p-4 m-auto bg-white rounded-md shadow-lg cursor-pointer relative'
      onClick={handleShow}
    >
      <img src={require(`../../assets/YouTube-Thumbnail.png`)} alt='' />
      <div className='my-2'>
        <p className='pt-1'>{value}</p>
        <p className='pt-1'>Lorem ipsum: Lorem ipsum</p>
        <p className='pt-1'>Lorem ipsum: Lorem ipsum</p>
        <p className='pt-1'>Lorem ipsum: Lorem ipsum</p>
      </div>
      {isModal && <Modal data={value} close={handleClose} />}
    </div>
  );
};
const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const HireBestDevelopers = () => {
  return (
    <section className='relative'>
      <div className='arrow hidden lg:block absolute w-[10%] top-5 right-[25%] z-20'>
        <img src={arrow} alt='' />
      </div>
      <div>
        <h1 className='font-bold text-4xl text-center'>
          Hire The Best Developers
        </h1>

        <div className='flex flex-col justify-center items-center'>
          <svg
            width='259'
            height='19'
            viewBox='0 0 379 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 10.2934C138.959 25.4151 239.791 -19.9093 378 14'
              stroke='#0066FF'
            />
            <path
              d='M44 13C156.598 27.9175 222.197 -15.3926 335 18.0587'
              stroke='#0066FF'
            />
          </svg>
        </div>

        <p className='text-center'>
          D-Community combines global reach and AI to deliver your ideal remote
          developers
        </p>
        {/* <div className='inline'>
          <img src={arrow} alt='' />
        </div> */}
      </div>
      <div className='relative'>
        <div className='carousal bg-blue-600 w-full py-16 px-10 h-full mt-14 relative'>
          <Slider {...settings}>
            {items.map((item, idx) => (
              <Card key={idx} value={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HireBestDevelopers;
