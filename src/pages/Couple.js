import React from "react";
import Avatar from "avataaars";

function Couple() {
	return (
		<div className="min-h-screen py-16 px-3">
			<div className="text-md font-normal text-center">
				<span className="bg-clip-text mt-2 font-bold text-white">
					بِسمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
				</span>

				<p className="bg-clip-text mt-4 font-medium text-white text-sm">
					Assalamu'alaikum wr.wb
				</p>
			</div>

			<div className="text-sm text-center mt-3 mb-0 font-normal break-words text-white leading-relaxed">
				<p>Dengan memohon rahmat dan ridho Allah SWT</p>
				<p>kami bermaksud menyelenggarakan resepsi pernikahan</p>
			</div>

			<div className="flex flex-auto justify-center w-36 mx-auto">
				<Avatar
					avatarStyle="Circle"
					topType="ShortHairShortCurly"
					accessoriesType="Blank"
					hairColor="BrownDark"
					facialHairType="Blank"
					clotheType="BlazerSweater"
					eyeType="Default"
					eyebrowType="Default"
					mouthType="Default"
					skinColor="Light"
				/>
			</div>
			<div className="text-xl font-extrabold text-center">
				<span className="bg-clip-text text-violet-300 font-gwendolyn text-4xl">
					Syaifudin Alkatiri
				</span>
				<p></p>
				<p
					className="text-sm font-normal mt-2 mb-0 
                italic bg-clip-text text-gray-300"
				>
					Putra ke-4 dari Bapak Syamsudin AB & Ibu Ika Martini
				</p>
			</div>

			<div className="flex flex-auto justify-center w-36 mx-auto inset-1">
				<Avatar
					avatarStyle="Circle"
					topType="Hijab"
					accessoriesType="Round"
					hatColor="Red"
					clotheType="BlazerShirt"
					eyeType="Happy"
					eyebrowType="Default"
					mouthType="Default"
					skinColor="Light"
				/>
			</div>

			<div className="text-xl font-extrabold text-center">
				<span className="bg-clip-text text-violet-300 font-gwendolyn text-4xl">
					Inung Anggun Saputri
				</span>
				<p className="text-sm mt-2 font-normal italic bg-clip-text text-gray-300">
					Putri ke-2 dari Alm Bapak Muhadi & Ibu Suyatmi
				</p>
			</div>
		</div>
	);
}

export default Couple;
