// import { RiReactjsFill } from "react-icons/ri"
// import { SiTailwindcss } from "react-icons/si"
// import { SiNodedotjs } from "react-icons/si"
// import { SiMongodb } from "react-icons/si"
// import {siExpress} from "react-icons/si"

// function Technology() {
//     return (
//         <div>
//             <div className="border border-neutral-600 pb-4 mt-1">
//                 <h2 className="mx-20 text-center text-4xl">Technology</h2>
//                 <div className="flex flex-wrap items-center justify-center gap-4">
//                     <div className="rounded-2xl border border-neutral-800 p-4">
//                         <RiReactjsFill className="text-7xl "/>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Technology
import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiHtml5, SiCss3, SiPostman } from "react-icons/si";

function Technology() {
    return (
        <div>
            <div className="border border-neutral-600 pb-4 mt-1 my-2 shadow-lg">
                <h2 className="mx-20 text-center text-6xl mb-6 m-5">Technology</h2>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    <div className="rounded-2xl border border-neutral-800 p-4">
                        <RiReactjsFill className="text-6xl text-blue-500" />
                    </div>
                    <div className="rounded-2xl border border-neutral-800 p-4">
                        <SiTailwindcss className="text-6xl text-teal-500" />
                    </div>
                    <div className="rounded-2xl border border-neutral-800 p-4">
                        <SiNodedotjs className="text-6xl text-green-600" />
                    </div>
                    <div className="rounded-2xl border border-neutral-800 p-4">
                        <SiMongodb className="text-6xl text-green-500" />
                    </div>
                    <div className="rounded-2xl border border-neutral-800 p-4">
                        <SiExpress className="text-6xl text-gray-500" />
                    </div>
                    <div className="rounded-2xl border border-neutral-800 p-4">
                        <SiHtml5 className="text-6xl text-orange-600" />
                    </div>
                    <div className="rounded-2xl border border-neutral-800 p-4">
                        <SiCss3 className="text-6xl text-blue-600" />
                    </div>
                    <div className="rounded-2xl border border-neutral-800 p-4">
                        <SiPostman className="text-6xl text-orange-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;
