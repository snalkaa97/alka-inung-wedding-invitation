import React from "react";

const Invitation = (props) => {
	const open = () => {
		props.openUndangan();
	};
	return (
		<div className="h-screen flex justify-center items-center shadow-xl rounded-xl">
			<div className="flex items-center space-x-4 p-20">
				<button
					className="flex space-x-2 items-center px-3 py-2 transition ease-in-out delay-150 bg-sky-100 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md drop-shadow-md"
					onClick={() => open()}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="mr-2 h-3.5 w-3.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
						/>
					</svg>
					Buka Undangan
				</button>
			</div>
		</div>
	);
};

export default Invitation;
