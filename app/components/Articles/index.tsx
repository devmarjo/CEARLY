"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    name: string;
    heading: string[];
    imgSrc: string;
}

const postData: DataType[] = [
    {
        name: "Level 2 Award for Door Supervisors",
        heading:  [
            "Essential training for door supervision roles.",
            "Covers conflict management and physical intervention.",
        ],
        imgSrc: '/images/articles/door.jpg',
    },
    {
        name: "Level 2 Award in CCTV Operations",
        heading: [
            "Learn to operate surveillance equipment effectively.",
            "Understand public space surveillance laws.",
        ],
        imgSrc: '/images/articles/cftv.jpg',
    },
    {
        name: "Level 3 Certificate in Close Protection",
        heading: [
            "Comprehensive close protection training for personal security roles.",
            "Topics include risk assessment and tactical communication.",
        ],
        imgSrc: '/images/articles/Close.jpg',
    },
    {
        name: "Level 2 Award in Conflict Management",
        heading: [
            "Practical skills for de-escalating and resolving conflicts.", ''
        ],
        imgSrc: '/images/articles/conflict.jpg',
    },
    {
        name: "Level 2 Award in Fire Safety Principles",
        heading: [
            "Fire prevention and emergency response knowledge.", ''
        ],
        imgSrc: '/images/articles/Fire.jpg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-lightgrey py-20" id="courses-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">COURSES</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Our Training Programs</h3>
                    </div>
                    <div className="text-xl text-center mt-16">
                        We provide a wide range of accredited security courses, designed for beginners and professionals alike:
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {postData.map((items, i) => (
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={1000} height={262} className="inline-block m-auto rounded-3xl" style={{maxWidth: '100%'}} />
                                    <h4 className='text-2xl font-bold pt-6 text-black'>{items.name}</h4>
                                    <div>
                                        <ul>
                                            {items.heading.map((el, index) => (<h3 key={'course' + i + 'desc' + index} className='text-base font-normal pt-6 pb-2 opacity-75'>{el}</h3>))}
                                            <li></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        ))} 
                    </div>
                </div>
            </div>

        );
    }
}
