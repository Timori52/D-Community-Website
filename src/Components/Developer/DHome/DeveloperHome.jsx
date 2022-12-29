import React from 'react';
import VideoIcon from '../../../assets/DHome-icons/video.svg';
import PhotoIcon from '../../../assets/DHome-icons/photo-icon.svg';
import SmileyIcon from '../../../assets/DHome-icons/smile.svg';
import ThreeDot from '../../../assets/DHome-icons/3-horizontal-dots-icon.svg';

import globe from '../../../assets/DHome-icons/social-icon/globe.svg';
import facebook from '../../../assets/DHome-icons/social-icon/facebook-svgrepo-com.svg';
import twitter from '../../../assets/DHome-icons/social-icon/twitter-outline-svgrepo-com.svg';
import instagram from '../../../assets/DHome-icons/social-icon/instagram-o-svgrepo-com.svg';

const DeveloperHome = () => {
  return (
    <section className='relative'>
      <div className='flex gap-6'>
        <div className='flex flex-col'>
          <div className='rounded-xl shadow-gray-300 shadow-lg bg-white p-3'>
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
                  className='bg-gray-100 py-1 px-3 w-full outline-none focus:border border-cyan-700 rounded'
                />
              </div>
            </div>
            <div className='flex items-center justify-center gap-6 pt-3'>
              <div className='flex items-center cursor-pointer'>
                <div className='w-5 h-5 inline-block mr-2'>
                  <img
                    src={VideoIcon}
                    alt='video-logo'
                    className='w-full h-full'
                  />
                </div>
                <span className='text-sm'>Live Video</span>
              </div>
              <div className='flex items-center cursor-pointer'>
                <div className='w-5 h-5 inline-block mr-2'>
                  <img
                    src={PhotoIcon}
                    alt='photoVideo-logo'
                    className='w-full h-full'
                  />
                </div>
                <span className='text-sm'>Photo/Video</span>
              </div>
              <div className='flex items-center cursor-pointer'>
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
          <div className='rounded-xl shadow-gray-300 shadow-lg mt-4 bg-white p-3'>
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
              <div className='flex items-center'>
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
          </div>
        </div>
        <div>
          <div className='rounded-xl shadow-gray-300 shadow-lg bg-white w-80'>
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
                <div className='w-5 h-5'>
                  <img src={globe} alt='' className='w-full h-full' />
                </div>
                <div className='w-5 h-5'>
                  <img src={facebook} alt='' className='w-full h-full' />
                </div>
                <div className='w-5 h-5'>
                  <img src={twitter} alt='' className='w-full h-full' />
                </div>
                <div className='w-5 h-5'>
                  <img src={instagram} alt='' className='w-full h-full' />
                </div>
              </div>
              <div className='flex justify-between items-center gap-4'>
                <button className='bg-white border-2 py-1 px-4 w-1/2 rounded-lg hover:bg-gray-300'>
                  Ignore
                </button>
                <button className='bg-blue-500 text-white border-2 border-blue-500 py-1 px-4 w-1/2 rounded-lg hover:brightness-110'>
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperHome;
