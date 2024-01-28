export const GetInTouch = () => {
	return (
		<div
			className="snap-always snap-center container min-h-screen mx-auto flex justify-center items-center"
			id="get-in-touch"
		>
			<div className="w-full text-left">
				<div className="flex justify-center">
					<h1 className="text-3xl font-bold">
						Get <span className="text-primary">In</span> Touch
					</h1>
				</div>
				<div className="flex justify-center text-center mt-4">
					<p>
						Feel free to reach out to me <br />
						if you'd like to discuss further or collaborate on a project
					</p>
				</div>
				<form
					className="mt-6 lg:w-8/12 sm:w-full mx-auto"
					id="form-get-in-touch"
					// onSubmit={}
				>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Your Name
						</label>
						<input
							type="text"
							id="name"
							autoComplete="off"
							className="bg-gray-50 border-2 border-gray text-gray-900 text-sm rounded-lg focus:outline-primary  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray "
							placeholder="your name"
							required
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Your email
						</label>
						<input
							type="email"
							id="email"
							autoComplete="off"
							className="bg-gray-50 border-2 border-gray text-gray-900 text-sm rounded-lg focus:outline-primary  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray "
							placeholder="your@email.com"
							required
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Your Message
						</label>
						<textarea
							name=""
							id="message"
							cols={30}
							rows={10}
							className=" bg-gray-50 border-2 border-gray text-gray-900 text-sm rounded-lg focus:outline-primary focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						></textarea>
					</div>
					<button
						type="submit"
						className="text-black bg-blue-700 hover:bg-blue-800 bg-background focus:ring-4 hover:bg-primary focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Send
						<svg
							className="w-3.5 h-3.5 inline-block"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</button>
				</form>
			</div>
		</div>
	);
};
