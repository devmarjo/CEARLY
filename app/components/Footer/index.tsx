import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/logo.svg'

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Menu",
        link: ['Home', 'Popular', 'About', 'Contact'],
    },
    {
        id: 2,
        section: "Category",
        link: ['Design', 'Mockup', 'View all', 'Log In']
    },
    {
        id: 3,
        section: "Pages",
        link: ['404', 'Instructions', 'License']
    },
    {
        id: 4,
        section: "Others",
        link: ['Styleguide', 'Changelog']
    }
]

const footer = () => {
    return (
        <div className="bg-black grid grid-cols-1 sm:grid-cols-2" id="first-section">
            <div className="pt-8 text-center">
                <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'>
                    <span>{String('Cearly Security').toUpperCase()}</span>
                </h3>
            </div>

            {/* All Rights Reserved */}

            <div className="text-center">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center text-offwhite text-lg'>@{new Date().getFullYear()} - reDesigned by Marjo</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default footer;
