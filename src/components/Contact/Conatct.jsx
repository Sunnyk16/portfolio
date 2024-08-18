import { CONTACT } from '../../constants/index'

function Conatct() {
    return (
        <div>
            <div className='border border-neutral-700 pb-4 px-2 rounded'>
                <h2 className='py-10 text-center text-6xl capitalize'>Get In touch</h2>
                <div className="text-center tracking-wide space-y-4">
                    <p className="text-lg font-medium text-neutral-300">
                        {CONTACT.address}
                    </p>
                    <p className="text-lg font-medium text-neutral-300">
                        <a href={`tel:${CONTACT.phoneNo}`} className="hover:text-purple-500">
                            {CONTACT.phoneNo}
                        </a>
                    </p>
                    <p className="text-lg font-medium text-neutral-300">
                        <a href={`mailto:${CONTACT.email}`} className="hover:text-purple-500">
                            {CONTACT.email}
                        </a>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Conatct