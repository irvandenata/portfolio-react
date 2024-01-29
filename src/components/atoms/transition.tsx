/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";

export const Transition = (OgComponent: any) => {
	return () => (
		<>
			<OgComponent />
			<motion.div
				id="init-transition"
				className="fixed top-0 left-0 w-full  bg-black z-[1000] transform-[origin-bottom]"
				initial={{ height: 0 }}
				animate={{
					height: "100vh",
				}}
                exit={{ height: 0 }}
				transition={{ duration: 1, ease: [0.22, 0, 0.36, 0] }}
                // onAnimationComplete={() => {
                //     console.log("Animation End");
                //     setTimeout(() => {
                //     document.getElementById("init-transition")?.style.setProperty("display", "none");
                //     }, 1000);
                // }}
				
			/>
			<motion.div
				id="next-transition"
				className="fixed top-0 left-0 w-full  bg-black z-[1000] transform-[origin-top]"
				animate={{ height: 0 }}
                initial={{ height: "100vh" }}
				exit={{ height: 0 }}
                onAnimationStart={() => {
                    console.log("Animation Start");
                }}
				transition={{ delay: 1, duration: 1, ease: [0.22, 0, 0.36, 0] }}
			/>
		</>
	);
};
