import useTitleAnimation from '@/hooks/useTitleAnimation';
import service_data from '@/data/service-data';
import RightArrow from '@/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

import img from "../../../../public/assets/img/service/sv-dashbord.png" 

const service_content = {
    title: "Explore Our Data Services",
    sub_title: <>More than 15,000 companies trust and choose Itech</>,

    bg_img: "/assets/img/service/sv-bg.jpg",
    title_2: <>Data Analysis <br /> Tools & Methods</>,
    des: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
    btn_text: "Work with Us",

    

}
const {title, sub_title,bg_img, title_2, des, btn_text}  = service_content

const ServicesArea = () => {
    let titleRef = useRef(null)

   useTitleAnimation(titleRef)
    return (
        <>
            
        </>
    );
};

export default ServicesArea;