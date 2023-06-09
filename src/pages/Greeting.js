import { useState } from "react";

const Greeting = ({ submitData, data, to }) => {
	const [comment, setComment] = useState("");
	return (
		<section className="min-h-screen bg-white px-3 m-2 rounded-xl">
			<div className="max-w-2xl mx-auto bg-white py-2 rounded-xl">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-lg lg:text-xl font-bold text-slate-600">
						Doa & Ucapan
					</h2>
				</div>
				{to && (
					<>
						<div className="py-2 px-4 mb-4 rounded-lg bg-gray-100 rounded-t-lg border border-gray-200 hover:border-gray-300 text-sm">
							<label htmlFor="comment" className="sr-only">
								Your comment
							</label>
							<textarea
								id="comment"
								rows="6"
								className="px-0 w-full text-sm text-slate-800 bg-gray-100 border-0 focus:ring-0 focus:outline-none "
								placeholder="Write a comment..."
								required
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							></textarea>
						</div>
						<button
							type="submit"
							onClick={() => {
								if (comment !== "") {
									setComment("");
									submitData(comment);
								}
							}}
							className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-slate-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-slate-600"
						>
							Kirim
						</button>
					</>
				)}
				{data?.map((row) => (
					<article
						className="mt-2 p-2 mb-2 border-b-2 border-gray-100"
						key={row._id}
					>
						<footer className="flex justify-between items-center mb-2">
							<div className="flex items-center">
								<p className="inline-flex items-center mr-3 text-sm font-medium text-slate-600 ">
									{row.name.replace(/Bpk|Ibu/gi, "")}
								</p>
							</div>
						</footer>
						<p className="text-gray-300 dark:text-slate-600 text-xs">
							{row.comment}
						</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default Greeting;
