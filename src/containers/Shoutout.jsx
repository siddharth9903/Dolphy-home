import React from 'react'
import twiiter_mobile from '../../public/twiiter_mobile.png'
import tweet_ex1 from '../../public/tweet_ex1.png'
import Image from 'next/image'

const Shoutout = () => {
  return (
    <div className='px-40 py-20 flex flex-col items-center gap-10'>
      <h3>Give us a Shoutout on Twitter</h3>
      <div className='flex flex-row gap-20'>
        <div className='flex flex-1 flex-col text-black text-xl gap-7'>
          <div className='flex justify-center items-center'>Click below </div>
          <button className='text-white bg-[#04045c] p-2 rounded-full'>
            {' '}
            Wall of love{' '}
          </button>
          <div className='flex justify-center items-center'>or</div>
          <div className='flex justify-center items-center'>
            <Image src={twiiter_mobile} class=' transform hover:scale-135' />
          </div>
        </div>
        <div>
          <div className='justify-center items-center'>
            <Image src={tweet_ex1} />
            <p className='text-center'>Click on "Share Shoutout on Twitter</p>
          </div>
        </div>
        <div className='text-black text-xl mt-10'>
          Write a Tweet
          <br />
          <div className='text-black text-base'>
            Don't forget to tag us @Dolphy_io
          </div>
        </div>
      </div>
      <div className='text-black text-xl'>
        Get <span className='text-7xl text-[#04045c]'> 50 </span>Free Replies
      </div>
    </div>
  )
}

export default Shoutout
