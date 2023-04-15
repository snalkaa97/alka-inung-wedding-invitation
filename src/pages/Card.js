import logo from "../images/logo.png";

function Card({ to, isInvite }) {
	return (
		<div className="py-20 px-10">
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
