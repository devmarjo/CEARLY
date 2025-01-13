import Image from "next/image";

const Digital = () => {
    return (

        <div className="mx-2" style={{zIndex: 999}}>
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 my-16'>

                    {/* COLUMN-1 */}

                    <div className="pt-24 lg:px-24 ">
                        {/* <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">WHO WE ARE</h3> */}
                        <h4 className="text-xl sm:text-3xl font-bold text-white mb-8 leading-snug text-center lg:text-start">
                            We are committed to excellence in security training. With years of experience and a team of industry experts, we equip our learners with the skills and certifications required to excel in the competitive private security sector.
                        </h4>
                    </div>

                    {/* COLUMN-2 */}

                    <div className="col-span-2">
                        <div className="mt-32">
                            <Image className="m-auto" src="/images/digital/girldoodle.svg" alt="girldoodle" width={1000} height={500} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Digital;
