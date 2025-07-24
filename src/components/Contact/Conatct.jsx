import { CONTACT } from '../../constants/index'
import { motion } from "framer-motion"
import Seo from '../SEO/Seo'

function Conatct() {
    return (
        <div>
            <Seo title="Contact Section" description="Sunny Kumar's portfolio contact section for inquiries and connections." />
            <div className='border border-neutral-900 shadow-sm shadow-slate-300 pb-4 px-2 rounded mb-3'>
                <motion.h2 whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }} className='py-10 text-center text-6xl capitalize'>Get In touch</motion.h2>
                <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }} className="text-center tracking-wide space-y-4">
                    <p className="text-lg font-medium text-neutral-300">
                        {CONTACT.address}
                    </p>
                    <motion.p whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }} className="text-lg font-medium text-neutral-300">
                        <a href={`tel:${CONTACT.phoneNo}`} className="hover:text-purple-500">
                            {CONTACT.phoneNo}
                        </a>
                    </motion.p>
                    <p className="text-lg font-medium text-neutral-300">
                        <a href={`mailto:${CONTACT.email}`} className="hover:text-purple-500">
                            {CONTACT.email}
                        </a>
                    </p>
                </motion.div>

            </div>
        </div>
    )
}

export default Conatct