import React from 'react'
import Avatar from 'avataaars'

function Couple() {
    return (
        <div className='min-h-screen pattern-dots-lg red py-10 px-3'> 

            <div class="text-md font-extrabold text-center">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Assalamu'alaikum wr.wb
                </span>
                <p></p>
                <p class="bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500">
                    بِسمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                </p>
            </div>

            <div className='text-md text-center mt-3 mb-0 font-bold text-brown-250 leading-relaxed'>
                Dengan memohon rahmat dan ridho Allah SWT,
                <p>kami bermaksud menyelenggarakan pernikahan anak kami,</p>
            </div>

            <div className='flex flex-auto justify-center w-36 mx-auto inset-1'>
                <Avatar
                    avatarStyle='Circle'
                    topType='Hijab'
                    accessoriesType='Round'
                    hatColor='Red'
                    clotheType='BlazerShirt'
                    eyeType='Happy'
                    eyebrowType='Default' 
                    mouthType='Default'
                    skinColor='Light'
                />
            </div>
                
            <div class="text-xl font-extrabold text-center">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Ria Rosyida, Amd.Keb
                    <p class="bg-clip-text text-md-24 font-semibold italic text-transparent bg-gradient-to-r from-brown-200 to-pink-400">  (Ida)
                    </p>
                </span>
                <p class="text-sm font-normal italic bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500">
                    Putri dari Bapak Pudji Harjono & Ibu Sugiyem
                </p>
            </div>

            <div class="text-2xl font-extrabold text-center mt-8">
                <span class="bg-clip-text italic text-transparent bg-gradient-to-r from-white to-violet-500">
                   &
                </span>
            </div>
                
            <div className='flex flex-auto justify-center w-36 mx-auto'>
                <Avatar
                    avatarStyle='Circle'
                    topType='ShortHairShortCurly'
                    accessoriesType='Blank'
                    hairColor='BrownDark'
                    facialHairType='Blank'
                    clotheType='BlazerSweater'
                    eyeType='Default'
                    eyebrowType='Default'
                    mouthType='Default'
                    skinColor='Light'
                />
            </div>
            <div class="text-xl font-extrabold text-center">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Rifki Rahafian
                    <p class="bg-clip-text text-md-24 font-semibold italic text-transparent bg-gradient-to-r from-brown-200 to-pink-400">  (Oki)</p>
                </span>
                <p></p>
                <p class="text-sm font-normal mb-0 
                italic bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500">
                    Putra dari Bapak H. Hafid & Ibu Rasmini
                </p>
            </div>
        </div>
    )
}

export default Couple
