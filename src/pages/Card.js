import React from "react";
import logo from "../images/logo.png";
// import meant2be from "../audio/meant2be.mp3";

function Card({ to }) {
	return (
		<div className="py-20 px-10">
			<div className="flex flex-col justify-center max-w-xs mx-auto  shadow-xl rounded-xl py-12 px-35 ">
				<div className="text-center mt-5">
					<span className="text-md sm:text-base font-bold text-brown-300">
						Undangan Pernikahan
					</span>
				</div>
				<div className="">
					<img
						className="w-80 mx-auto rounded-full drop-shadow-sm"
						src={logo}
						alt="profile sc"
					/>
				</div>
				<div className="text-center">
					<div className="flex align-center just-center"></div>
					<p className="text-xs xs:text-base bg-clip-text opacity-75 bg-gradient-to-r from-pink-200 to-brown-200 font-medium italic pt-2 pb-4 px-5 w-auto inline-block border-b-2">
						Jumat, 5 Mei 2023
					</p>
					{to && (
						<div className="text-center">
							<div className="text-sm  text-brown-300">Kepada Yth</div>
							<div className="text-sm  text-brown-300">{to}</div>
						</div>
					)}
				</div>
			</div>

			<div className="bg-white-700 text-sm text-slate-600 text-center inset-x-0 bottom-0 p-9">
				<svg
					onClick={() => {
						window.scroll({
							top: 800,
							behavior: "smooth",
						});
					}}
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-arrow-down-circle mx-auto mt-2 animate-bounce"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#2c3e50"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="12" cy="12" r="9" />
					<line x1="8" y1="12" x2="12" y2="16" />
					<line x1="12" y1="8" x2="12" y2="16" />
					<line x1="16" y1="12" x2="12" y2="16" />
				</svg>
				<button
					onClick={() => {
						window.scroll({
							top: 800,
							behavior: "smooth",
						});
					}}
					className="text-neutral-800 opacity-90 "
				>
					Scroll Down
				</button>
			</div>
		</div>
	);
}

export default Card;
