import { useState } from "react";

const Greeting = ({ submitData, data, to }) => {
	const [comment, setComment] = useState("");
	return (
		<section className="bg-gray-300 dark:bg-gray-900 py-8 lg:py-16">
			<div className="max-w-2xl mx-auto px-5 bg-neutral-800 py-10 rounded-xl">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-lg lg:text-xl font-bold text-gray-300 dark:text-white">
						Ucapan
					</h2>
				</div>
				{to && (
					<>
						<div className="py-2 px-4 mb-4 bg-neutral-900 rounded-lg rounded-t-lg border border-gray-700 dark:bg-gray-800 dark:border-gray-700 hover:border-gray-500 text-sm">
							<label for="comment" className="sr-only">
								Your comment
							</label>
							<textarea
								id="comment"
								rows="6"
								className="px-0 w-full text-sm bg-neutral-900 text-gray-300 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
								placeholder="Write a comment..."
								required
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							></textarea>
						</div>
						<button
							type="submit"
							onClick={() => {
								if (comment != "") {
									setComment("");
									submitData(comment);
								}
							}}
							className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-violet-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-violet-700"
						>
							Kirim
						</button>
					</>
				)}
				{data?.map((row) => (
					<article class="mt-2 p-2 mb-2 border-b-2 border-neutral-700">
						<footer class="flex justify-between items-center mb-2">
							<div class="flex items-center">
								<p class="inline-flex items-center mr-3 text-sm text-violet-200 dark:text-white">
									{row.name}
								</p>
							</div>
						</footer>
						<p className="text-gray-300 dark:text-gray-400 text-xs">
							{row.comment}
						</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default Greeting;
