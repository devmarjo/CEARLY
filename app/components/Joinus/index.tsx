import Contactusform from "../Navbar/Contactus";

const Join = () => {
    return (
        <div className=" my-32">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h2 className="text-xl sm:text-6xl font-bold my-6 leading-10">{String('Enroll Today').toUpperCase()}</h2>
                    <p className="text-3xl my-16">
                        We Offer group discounts for corporate clients <br /> and customized training to meet specific business needs.
                    </p>
                </div>
                <div className="flex justify-center w-100 mb-32">
                    <Contactusform />
                </div>
            </div>
        </div>
    )
}

export default Join;
