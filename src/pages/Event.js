import React from "react";

function Event({ isInvite, sesi }) {
	return (
		<div className="py-16 px-3">
			<div className="flex flex-col justify-center max-w-sm mx-auto rounded-xl py-12 px-35 ">
				<div className="text-sm text-center mt-7 mb-0 font-normal text-slate-600 leading-relaxed">
					<div className="text-center text-5xl mb-5">🗓️</div>
					Yang Insya Allah akan diselenggarakan pada :
					<div className="text-sm text-center my-7">
						<span className="bg-clip-text text-slate-600">Hari, Tanggal :</span>
						<p className="bg-clip-text font-medium text-slate-600">
							Jumat, 5 Mei 2023
						</p>
					</div>
					<div className="text-sm text-center my-7">
						{sesi === "1" && (
							<>
								<span className="bg-clip-text text-slate-600">
									Akad & Resepsi Pernikahan :
								</span>

								<p className="bg-clip-text font-medium text-slate-600">
									13:30 - 15:30 WIB
								</p>
							</>
						)}
						{sesi === "2" && (
							<>
								<span className="bg-clip-text text-slate-600">
									Resepsi Pernikahan :
								</span>

								<p className="bg-clip-text font-medium text-slate-600">
									16:00 - 17:30 WIB
								</p>
							</>
						)}
						{!sesi && (
							<>
								<span className="bg-clip-text text-slate-600">
									Akad & Resepsi Pernikahan :
								</span>

								<p className="bg-clip-text font-medium text-slate-600">
									13:30 - 17:30 WIB
								</p>
							</>
						)}
					</div>
					<div className="text-sm text-center my-7">
						<span className="bg-clip-text text-slate-600">Bertempat di :</span>

						<p className="bg-clip-text font-medium text-slate-600">
							Sky Lounge Hotel Bukit Jaas Permai
						</p>
						<p className="bg-clip-text font-medium text-slate-600">
							Trenggalek
						</p>
					</div>
					<div>
						<a
							href="https://goo.gl/maps/mmUArZCwN6Wodt6B8"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-full border-2 bg-slate-300 text-black hover:bg-transparent hover:text-slate-600 hover:border-gray-re px-8 py-1"
						>
							Lihat Lokasi
						</a>
					</div>
					<div className="text-sm text-center mb-7 font-normal text-slate-600 leading-relaxed mt-20">
						Merupakan suatu kehormatan dan kebahagiaan bagi kami{" "}
						{isInvite ? "apabila Bapak/Ibu/Saudara/i berkenan hadir" : ""} untuk
						memberikan do'a restu kepada kedua mempelai
					</div>
					<div className="">
						<svg
							className="w-6 h-6 object-center mx-auto mt-3 mb-7"
							fill="gray"
							stroke="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<g data-name="Layer 2">
								<g data-name="more-horizotnal">
									<rect width="24" height="24" opacity="0" />
									<circle cx="12" cy="12" r="2" />
									<circle cx="19" cy="12" r="2" />
									<circle cx="5" cy="12" r="2" />
								</g>
							</g>
						</svg>
					</div>
					<div className="mb-8">
						<p className="bg-clip-text text-sm mb-3 font-medium text-slate-600">
							Turut berbahagia, segenap keluarga besar
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Event;
