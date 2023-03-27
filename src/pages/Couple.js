import React from "react";
import Avatar from "avataaars";

function Couple() {
	return (
		<div className="py-16 px-3">
			<div className="flex flex-col justify-center max-w-sm mx-auto rounded-xl py-12 px-35 ">
				<div className="text-md font-normal text-center">
					<span className="bg-clip-text mt-2 font-bold text-slate-600">
						بِسمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
					</span>

					<p className="bg-clip-text mt-4 font-medium text-slate-600 text-sm">
						Assalamu'alaikum wr.wb
					</p>
				</div>

				<div className="text-sm text-center mt-3 mb-0 font-normal break-words text-slate-600 leading-relaxed">
					<p>Dengan memohon rahmat dan ridho Allah SWT</p>
					<p>kami bermaksud menyelenggarakan resepsi pernikahan</p>
				</div>
				<div className="text-xl font-extrabold text-center">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300 shadow-sm font-gwendolyn text-4xl">
						Syaifudin Alkatiri
					</span>
					<p></p>
					<p
						className="text-sm font-normal mt-2 mb-0 
                italic bg-clip-text text-slate-600"
					>
						Putra ke-4 dari Bapak Syamsudin AB & Ibu Ika Martini
					</p>
				</div>
				<div className="text-center">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300 font-gwendolyn text-4xl">
						&
					</span>
				</div>
				<div className="text-xl font-extrabold text-center">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300 shadow-sm font-gwendolyn text-4xl">
						Inung Anggun Saputri
					</span>
					<p className="text-sm mt-2 font-normal italic bg-clip-text text-slate-600">
						Putri ke-2 dari Alm Bapak Muhadi & Ibu Suyatmi
					</p>
				</div>
			</div>
		</div>
	);
}

export default Couple;
