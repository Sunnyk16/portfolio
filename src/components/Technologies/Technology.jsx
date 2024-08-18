
import { animate, motion } from "framer-motion"

import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiHtml5, SiCss3, SiPostman } from "react-icons/si";

const iconVariables = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

function Technology() {
    return (
        <div>
            <div className="border border-neutral-600 pb-4 mt-1 my-2 shadow-sm shadow-slate-300">
                <motion.h2 whileInView={{opacity:1,y:0}} 
                initial={{opacity:0,y:-100}}
                transition={{duration:1.5}}
                className="mx-20 text-center text-6xl mb-6 m-5">Technology</motion.h2>

                <div className="flex flex-wrap items-center justify-center gap-6">

                    <motion.div variants={iconVariables(2.5)} initial="initial" animate="animate" className="rounded-2xl border border-neutral-800 p-4 shadow-sm shadow-slate-300">
                        <RiReactjsFill className="text-6xl text-blue-500" />

                    </motion.div>
                    <motion.div variants={iconVariables(2.5)} initial="initial" animate="animate" className="rounded-2xl border border-neutral-800 p-4 shadow-sm shadow-slate-300">
                        <SiTailwindcss className="text-6xl text-teal-500" />
                    </motion.div>

                    <motion.div variants={iconVariables(4)} initial="initial" animate="animate" className="rounded-2xl border border-neutral-800 p-4 shadow-sm shadow-slate-300">
                        <SiNodedotjs className="text-6xl text-green-600" />
                    </motion.div>

                    <motion.div variants={iconVariables(3.2)} initial="initial" animate="animate" className="rounded-2xl border border-neutral-800 p-4 shadow-sm shadow-slate-300">
                        <SiMongodb className="text-6xl text-green-500" />
                    </motion.div>

                    <motion.div variants={iconVariables(2.5)} initial="initial" animate="animate" className="rounded-2xl border border-neutral-800 p-4 shadow-sm shadow-slate-300">
                        <SiExpress className="text-6xl text-gray-500" />
                    </motion.div>

                    <motion.div variants={iconVariables(2.5)} initial="initial" animate="animate" className="rounded-2xl border border-neutral-800 p-4 shadow-sm shadow-slate-300">
                        <SiHtml5 className="text-6xl text-orange-600" />
                    </motion.div>

                    <motion.div variants={iconVariables(2.5)} initial="initial" animate="animate" className="rounded-2xl border border-neutral-800 p-4 shadow-sm shadow-slate-300">
                        <SiCss3 className="text-6xl text-blue-600" />
                    </motion.div>

                    <motion.div variants={iconVariables(2.5)} initial="initial" animate="animate" className="rounded-2xl border border-neutral-800 p-4 shadow-sm shadow-slate-300">
                        <SiPostman className="text-6xl text-orange-500" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Technology;
