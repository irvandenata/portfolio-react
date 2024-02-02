/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";

export default function Transition (OgComponent: any) {
	const text: string = "Loading...";
	return () => (
		<>
			<motion.div
				id="prev"
				className="fixed top-0  left-0 w-full h-[100vh]  bg-black z-[1000] origin-bottom"
				initial={{ scaleY: 0 }}
				animate={{
					scaleY: [0, 1],
				}}
				onAnimationComplete={() => {
					document.getElementById("prev")?.classList.remove("h-[100vh]");
					document.getElementById("prev")?.classList.add("h-[0vh]");
					document.getElementById("next")?.classList.remove("h-[0vh]");
					document.getElementById("next")?.classList.add("h-[100vh]");
				}}
				transition={{ duration: 0.2, ease: [0.22, 0, 0.36, 0] }}
			/>
			<motion.div
				id="next"
				className="fixed top-0 left-0 w-full  h-[0vh] bg-black z-[1000] origin-top"
				initial={{ scaleY: 1 }}
				animate={{
					scaleY: 0,
				}}
				exit={{ scaleY: 0 }}
				onAnimationStart={() => {
					setTimeout(() => {
						document.getElementById("content")?.classList.remove("hidden");
					}, 400);
				}}
				transition={{
					delay: 1,
					duration: 1,
					ease: [0.22, 0, 0.36, 0],
				}}
			>
				<div className="h-full w-full text-white flex">
					<div className="mx-auto my-auto text-3xl tracking-widest font-extrabold">
						{text.split("").map((char, index) => {
							return (
								<motion.span
									key={char + "-" + index}
									className="inline-block"
									custom={index}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 * index,
                                        ease: [0.22, 0, 0.36, 0],
                                        reverse: true,
                                    }}
                                    initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
								>
									{char}
								</motion.span>
							);
						})}
					</div>
				</div>
			</motion.div>
			<motion.div
				id="content"
				className="hidden"
				exit={{
					opacity: 0,
					transition: {
						duration: 3,
					},
				}}
			>
				<OgComponent />
			</motion.div>
		</>
	);
}
