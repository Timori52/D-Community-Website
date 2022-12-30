import React from 'react';
import VideoIcon from '../../../assets/DHome-icons/video.svg';
import PhotoIcon from '../../../assets/DHome-icons/photo-icon.svg';
import SmileyIcon from '../../../assets/DHome-icons/smile.svg';
import ThreeDot from '../../../assets/DHome-icons/3-horizontal-dots-icon.svg';

import globe from '../../../assets/DHome-icons/social-icon/globe.svg';
import facebook from '../../../assets/DHome-icons/social-icon/facebook-svgrepo-com.svg';
import twitter from '../../../assets/DHome-icons/social-icon/twitter-outline-svgrepo-com.svg';
import instagram from '../../../assets/DHome-icons/social-icon/instagram-o-svgrepo-com.svg';

import OpenBook from '../../../assets/DHome-icons/open-book.svg';
import Camera from '../../../assets/DHome-icons/camera.svg';

import SendIcon from '../../../assets/DHome-icons/send-plane-2-svgrepo-com.svg';
import Gif from '../../../assets/DHome-icons/gif-svgrepo-com.svg';
import Gallery from '../../../assets/DHome-icons/gallery-svgrepo-com.svg';
import SmileFace from '../../../assets/DHome-icons/happy-face-svgrepo-com.svg';

const DeveloperHome = () => {
  return (
    <section className='relative'>
      <div className='flex gap-6'>
        <div className='flex flex-col'>
          <div className='rounded-xl shadow-gray-200 shadow-lg bg-white p-3'>
            <div className='flex flex-row items-center gap-2 '>
              <div className='w-10 h-10'>
                <img
                  src={require('../../../assets/DHome-icons/profile.png')}
                  alt=''
                  className='w-full h-full'
                />
              </div>
              <div className='w-full'>
                <input
                  type='text'
                  placeholder="What's happening?"
                  className='bg-gray-50 py-1 px-3 w-full outline-none focus:border-2 border-gray-300 rounded'
                />
              </div>
            </div>
            <div className='flex items-center justify-center gap-6 pt-3'>
              <div className='flex items-center cursor-pointer hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1 '>
                <div className='w-5 h-5 inline-block mr-2'>
                  <img
                    src={VideoIcon}
                    alt='video-logo'
                    className='w-full h-full'
                  />
                </div>
                <span className='text-sm'>Live Video</span>
              </div>

              <div className='flex items-center cursor-pointer hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1'>
                <div className='w-5 h-5 inline-block mr-2'>
                  <img
                    src={PhotoIcon}
                    alt='photoVideo-logo'
                    className='w-full h-full'
                  />
                </div>
                <span className='text-sm'>Photo/Video</span>
              </div>

              <div className='flex items-center cursor-pointer hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1'>
                <div className='w-5 h-5 inline-block mr-2'>
                  <img
                    src={SmileyIcon}
                    alt='smile-logo'
                    className='w-full h-full'
                  />
                </div>
                <span className='text-sm'>Fleeing</span>
              </div>

              <div className='ml-8'>
                <button className='bg-blue-500 text-white py-1 px-5 rounded-md hover:bg-blue-600'>
                  Post
                </button>
              </div>
            </div>
          </div>

          <div className='rounded-xl shadow-gray-200 shadow-lg mt-6 bg-white p-3'>
            <div className='flex justify-between'>
              <div className='flex gap-3'>
                <div className='w-10 h-10'>
                  <img
                    src={require('../../../assets/DHome-icons/profile-2.png')}
                    alt=''
                    className='w-full h-full'
                  />
                </div>
                <div>
                  <h4 className='font-medium'> Sepural Gallery </h4>
                  <p className='text-gray-500 text-xs'>15h, Public</p>
                </div>
              </div>
              <div className='w-5 cursor-pointer'>
                <img src={ThreeDot} alt='' className='w-full h-full' />
              </div>
            </div>

            <div className='mt-4 h-60 rounded-xl overflow-hidden'>
              <img
                src={require('../../../assets/DHome-icons/project-3.png')}
                alt=''
                className='w-full h-full'
              />
            </div>

            <div className='flex justify-between mt-4'>
              <div className='flex items-center cursor-pointer'>
                <div className='w-6 h-6 '>
                  <img
                    src={require('../../../assets/DHome-icons/profile.png')}
                    alt=''
                    className='w-full h-full'
                  />
                </div>
                <div className='w-6 h-6 -ml-2'>
                  <img
                    src={require('../../../assets/DHome-icons/profile-2.png')}
                    alt=''
                    className='w-full h-full'
                  />
                </div>
                <div className='w-6 h-6 bg-gray-600 rounded-full -ml-2 text-white text-xs flex items-center justify-center'>
                  <span>+9</span>
                </div>
              </div>
              <div className='flex gap-2 text-sm text-gray-500'>
                <p>3 Comments</p>
                <p>17 Share</p>
              </div>
            </div>
            <div className='my-3 bg-gray-300 h-[1px]' />
            <div className='flex justify-between items-center text-sm'>
              <p>Like</p>
              <p>Comments</p>
              <p>Share</p>
            </div>
            <div className='my-3 bg-gray-300 h-[1px]' />
            <div className='flex justify-between items-center'>
              <div className='w-10 h-10'>
                <img
                  src={require('../../../assets/DHome-icons/profile.png')}
                  alt=''
                  className='w-full h-full'
                />
              </div>
              <div className='flex justify-center items-center gap-1 w-3/4 bg-gray-100 rounded pr-2'>
                <input
                  type='text'
                  className='bg-gray-100 py-2 text-sm px-3 w-full outline-none focus:border-2 border-gray-300 rounded'
                  placeholder='write a comment...'
                />
                <div className='w-6 h-6 cursor-pointer'>
                  <img src={Gif} alt='' className='w-full h-full' />
                </div>
                <div className='w-6 h-6 cursor-pointer'>
                  <img src={Gallery} alt='' className='w-full h-full' />
                </div>
                <div className='w-6 h-6 cursor-pointer'>
                  <img src={SmileFace} alt='' className='w-full h-full' />
                </div>
              </div>
              <div className='w-10 h-10 p-2 bg-blue-50 rounded-md cursor-pointer active:bg-light-blue-100'>
                <img src={SendIcon} alt='' className='w-full h-full' />
              </div>
            </div>
          </div>
        </div>

        <div className='w-80'>
          <div className='rounded-xl shadow-gray-200 shadow-lg bg-white '>
            <div className='flex justify-between items-center p-3'>
              <p>You Might Like</p>
              <button className='text-blue-700 text-sm'>See all</button>
            </div>
            <hr />
            <div className='p-3'>
              <div className='flex gap-4'>
                <div className='w-10 h-10'>
                  <img
                    src={require('../../../assets/DHome-icons/profile.png')}
                    alt=''
                    className='w-full h-full'
                  />
                </div>
                <div>
                  <h4 className='font-medium'>Radovan SkillArena</h4>
                  <p className='text-xs text-gray-500'>
                    Founder & CEO at Trophy
                  </p>
                </div>
              </div>
              <div className='flex justify-center items-center py-5 gap-4'>
                <div className='w-5 h-5 cursor-pointer'>
                  <a
                    href='http://www.google.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={globe} alt='' className='w-full h-full' />
                  </a>
                </div>
                <div className='w-5 h-5 cursor-pointer'>
                  <a
                    href='http://www.facebook.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={facebook} alt='' className='w-full h-full' />
                  </a>
                </div>
                <div className='w-5 h-5 cursor-pointer'>
                  <a
                    href='http://www.twitter.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={twitter} alt='' className='w-full h-full' />
                  </a>
                </div>
                <div className='w-5 h-5 cursor-pointer'>
                  <a
                    href='http://www.instagram.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={instagram} alt='' className='w-full h-full' />
                  </a>
                </div>
              </div>
              <div className='flex justify-between items-center gap-4'>
                <button className='bg-white border-2 py-1 px-4 w-1/2 rounded-lg hover:bg-gray-200'>
                  Ignore
                </button>
                <button className='bg-blue-500 text-white border-2 border-blue-500 py-1 px-4 w-1/2 rounded-lg hover:brightness-110'>
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className='rounded-xl shadow-gray-200 shadow-lg bg-white mt-6'>
            <div className='flex justify-between items-center p-3 border-b-2'>
              <p className='text-sm font-semibold'>Recent Event</p>
              <div className='w-5 cursor-pointer'>
                <img src={ThreeDot} alt='' className='w-full h-full' />
              </div>
            </div>
            <div className='m-3 flex flex-col gap-4'>
              <div className='rounded-xl bg-gray-50 p-3'>
                <div className='flex gap-2'>
                  <div className='w-16 h-10 bg-light-blue-50 p-1 rounded-md'>
                    <img src={OpenBook} alt='' className='w-full h-full' />
                  </div>
                  <div>
                    <h6 className='font-semibold'>Graduation Ceremony</h6>
                    <p className='text-xs font-medium  text-gray-500'>
                      The graduation ceremony is after sometimes called...
                    </p>
                  </div>
                </div>
                <div className='my-3 bg-gray-300 h-[1px]' />
                <div className='flex justify-between items-center mt-4'>
                  <div className='flex gap-2 text-xs font-semibold text-gray-500'>
                    <p>8 seen</p>
                  </div>
                  <div className='flex items-center cursor-pointer'>
                    <div className='w-6 h-6 '>
                      <img
                        src={require('../../../assets/DHome-icons/profile.png')}
                        alt=''
                        className='w-full h-full'
                      />
                    </div>
                    <div className='w-6 h-6 -ml-2'>
                      <img
                        src={require('../../../assets/DHome-icons/profile-2.png')}
                        alt=''
                        className='w-full h-full'
                      />
                    </div>
                    <div className='w-6 h-6 bg-gray-600 rounded-full -ml-2 text-white text-xs flex items-center justify-center'>
                      <span>+5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rounded-xl bg-gray-50 p-3 mb-3'>
                <div className='flex gap-2'>
                  <div className='w-16 h-10 bg-red-100 p-1 rounded-md'>
                    <img src={Camera} alt='' className='w-full h-full' />
                  </div>
                  <div>
                    <h6 className='font-semibold'>Photography Ideas</h6>
                    <p className='text-xs text-gray-500 font-medium'>
                      Reflections, Reflections work because they can create...
                    </p>
                  </div>
                </div>
                <div className='my-3 bg-gray-300 h-[1px]' />
                <div className='flex justify-between mt-4 items-center'>
                  <div className='flex gap-2 text-xs font-semibold text-gray-500'>
                    <p>11 seen</p>
                  </div>
                  <div className='flex items-center cursor-pointer'>
                    <div className='w-6 h-6 '>
                      <img
                        src={require('../../../assets/DHome-icons/profile.png')}
                        alt=''
                        className='w-full h-full'
                      />
                    </div>
                    <div className='w-6 h-6 -ml-2'>
                      <img
                        src={require('../../../assets/DHome-icons/profile-2.png')}
                        alt=''
                        className='w-full h-full'
                      />
                    </div>
                    <div className='w-6 h-6 bg-gray-600 rounded-full -ml-2 text-white text-xs flex items-center justify-center'>
                      <span>+8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperHome;
