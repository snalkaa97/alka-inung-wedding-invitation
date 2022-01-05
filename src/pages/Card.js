import React from 'react'
import profile from '../images/couple.png'
import logodir from '../images/logodir.png'
import meant2be from '../audio/meant2be.mp3'

function Card() {
    return (
        <div className='min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 py-20 px-3'>
            <div className='flex flex-col justify-center max-w-xs mx-auto bg-gradient-to-r from-borahe to-fuchsia-200 shadow-xl rounded-xl py-12 px-12 '>
                <div className=''>
                    <img className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt = 'profile sc'/>
                </div>
                <div className='text-center mt-5'>
                    <span class="text-md sm:text-base font-bold text-brown-300 ">
                        We Invite You To Celeberate Our Wedding
                    </span>
                    
                    <p className='text-xl sm:text-2xl mt-3 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold'>
                        Ida & Oki
                    </p>
                    <div className='flex align-center just-center mt-3'></div>
                    <p className='text-xs xs:text-base bg-clip-text opacity-75 bg-gradient-to-r from-pink-200 to-brown-200 font-medium italic pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                        Minggu, 6 Februari 2022
                    </p>

                </div>
            </div>
            
            <div class="bg-white-700 text-sm text-white text-center inset-x-0 bottom-0 p-9">
                <audio className='object-center mx-auto mt-1 mb-7' autoPlay='true' src={meant2be} controls>
                    <p>If you are reading this, it is because your browser does not support the audio element.</p>
                </audio>
                <footer className='text-black mt-5'>
                    Made with 💙 by
                    <a href='mailto:me.izatyproject@gmail.com' className='text-black text-underline-offset-4 hover:text-red-800'> Dita Izaty </a>
                    <p className=''>
                        <img className='w-12 mx-auto justify-center' src={logodir} alt = 'logo dir'/>
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default Card
