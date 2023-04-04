import { useState } from "react";
import logo from "../images/logo.png";
import perahukertas from "../audio/perahukertas2.mp3";
import { useScrollTo } from "react-use-window-scroll";

function Card({ to, isInvite }) {
	const scrollTo = useScrollTo();
	const song = new Audio(perahukertas);
	const [isPlaying, setIsPlaying] = useState(false);
	// useEffect(() => {}, [isPlaying]);

	const playPause = () => {
		setIsPlaying(!isPlaying);
		if (isPlaying) {
			console.log("Paused");
			song.pause();
		} else {
			song.play();
		}
	};

	return (
		<div className="py-20 px-10">
			<div className="flex flex-row-reverse">
				<div className="fixed bottom-0 mb-10">
					<div className="px-3"></div>
					{!isPlaying && (
						<svg
							className="stroke-slate-600 hover:stroke-slate-700"
							onClick={() => playPause()}
							fill="none"
							stroke="currentColor"
							strokeWidth={1.5}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
							/>
						</svg>
					)}
				</div>
			</div>
			<div className="flex flex-col justify-center max-w-xs mx-auto  shadow-xl rounded-xl py-12 px-35 ">
				<div className="text-center mt-5">
					<span className="text-md sm:text-base font-bold text-brown-300">
						{isInvite ? "Undangan " : null}Pernikahan
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
		</div>
	);
}

export default Card;
