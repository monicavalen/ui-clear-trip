import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// images import 
import about_img_1 from "../../public/assets/img/about/about-bg-shape.png"
import about_img_2 from "../../public/assets/img/about/about-2.jpg"
import about_img_3 from "../../public/assets/img/about/about-1.jpg"
import about_img_4 from "../../public/assets/img/about/about-3.jpg"
import about_img_5 from "../../public/assets/img/about/about-5.png"

import taxForm from "../../public/assets/img/about/tax_form_new.png"
import backGroundImage from "../../public/assets/img/about/Background_Complete.png"
// import coins from "../../public/assets/img/about/Coins.png"
import coins from "../../public/assets/img/about/Group_1237.png"
import gst_recon_image from "../../public/assets/img/about/gst_recon.png"
import hassle_free_image from "../../public/assets/img/about/hassle_free.png"
import avatar2 from "../../public/assets/img/about/avatar2.png"



// about data
const about_data = [
    // {
    //     id: 1,
    //     cls: "bg-shape",
    //     img: backGroundImage
    // },
    {
        id: 2,
        cls: "main-img z-index",
        img: taxForm
    },
    // {
    //     id: 3, 
    //     cls: "sub-img-1 d-none d-sm-block z-index-3",
    //     img: about_img_3
    // },
    // {
    //     id: 4, 
    //     cls: "sub-img-2 d-none d-sm-block",
    //     img: coins
    // },
    // {
    //     id: 5, 
    //     cls: "sub-img-3 d-none d-sm-block z-index-3",
    //     img: about_img_5
    // },
]

// about content
const about_content = {
    title: "OVER 150K+ CLIENT",
    sub_title: "Match invoice with GST for Reconciliation",
    des: <>Reconciliation helps make sure the GST you pay and collect is correct. It allows you to spot and fix any differences, which is important for keeping accurate financial records</>,

    about_list: [
        <>Match Amounts Precisely.</>,
        <>Reconcile Tax Amounts.</>,
        <>Validate GST Numbers.</>,
    ],

    about_list2: [
        <>Verify GST Invoice.</>,
        <>Reconcile Tax Credits.</>,
        <>Confirm Supplier GSTIN.</>,
    ],

    about_list3: [
        <>Integrate Seamlessly.</>,
        <>Ensure Data Accuracy.</>,
        <>Maintain Data Security.</>,
    ],

    btn_text: "About Us",

}
const { title, sub_title, des, about_list, about_list2, about_list3, btn_text } = about_content


const AboutArea = () => {
    return (
        <>
            <div className="tp-about__area tp-about__pt-pb pt-100 pb-160">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s">
                            {/* <Image src={backGroundImage} alt="theme-pure" style={{
                                color: 'transparent',
                                width: '287px',
                                marginTop: '-85px',
                                marginRight: '-61px',
                                position: 'absolute'
                            }} /> */}

                            <div className="tp-about__img-wrapper text-center text-lg-end p-relative" style={{ marginRight: "139px" }}>
                                {about_data.map((item, i) =>
                                    <div key={i} className={`tp-about__${item.cls}`}>
                                        <Image src={item.img} alt="theme-pure" style={{ width: "338px", }} />
                                    </div>
                                )}
                                <Image src={about_img_5} alt="theme-pure" style={{ width: "141px", marginTop: "-65px", marginRight: "-61px" }} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s">
                            <div className="tp-about__right">
                                <div className="tp-about__section-box">
                                    <h4 className="tp-section-subtitle">{title}</h4>
                                    <h3 className="tp-section-title mb-15">{sub_title}</h3>
                                    <p>{des}</p>
                                </div>
                                <div className="tp-about__list">
                                    <ul>
                                        {about_list.map((item, i) => <li key={i}><i className="fal fa-check"></i>{item}</li>)}
                                    </ul>
                                </div>
                                {/* <div className="tp-about__btn">
                                    <Link className="tp-btn tp-btn-hover alt-color-black" href="/about">
                                        <span>{btn_text}</span>
                                        <b></b>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd card */}

            <div className="tp-about__area tp-about__pt-pb pt-100 pb-160" style={{ marginTop: '-176px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s" style={{ padding: "0px" }}>
                            <div className="tp-about__right" style={{ padding: "0px" }}>
                                <div className="tp-about__section-box">
                                    <h4 className="tp-section-subtitle">{title}</h4>
                                    <h3 className="tp-section-title mb-15">GST Reconciliation</h3>
                                    <p>Having all invoices in a single location makes it easier to access, review, and manage them without having to search through multiple sources.</p>
                                </div>
                                <div className="tp-about__list">
                                    <ul>
                                        {about_list2.map((item, i) => <li key={i}><i className="fal fa-check"></i>{item}</li>)}


                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s" style={{ paddingLeft: "100px" }}>

                            {/* <Image src={backGroundImage} alt="theme-pure" style={{
                                color: 'transparent',
                                width: '287px',
                                marginTop: '-85px',
                                marginRight: '-61px',
                                position: 'absolute'
                            }} /> */}

                            <div className="tp-about__img-wrapper text-center text-lg-end p-relative" style={{ marginRight: "0px" }}>
                                {about_data.map((item, i) =>
                                    <div key={i} className={`tp-about__${item.cls}`}>
                                        <Image src={gst_recon_image} alt="theme-pure" style={{ width: "338px", }} />
                                    </div>
                                )}
                                <Image src={avatar2} alt="theme-pure" style={{ width: "141px", marginTop: "-65px", marginRight: "-61px" }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="tp-about__area tp-about__pt-pb pt-100 pb-160" style={{ marginTop: '-176px', paddingBottom:"106px" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s">
                            {/* <Image src={backGroundImage} alt="theme-pure" style={{
                                color: 'transparent',
                                width: '287px',
                                marginTop: '-85px',
                                marginRight: '-61px',
                                position: 'absolute'
                            }} /> */}

                            <div className="tp-about__img-wrapper text-center text-lg-end p-relative" style={{ marginRight: "139px" }}>
                                {about_data.map((item, i) =>
                                    <div key={i} className={`tp-about__${item.cls}`}>
                                        <Image src={hassle_free_image} alt="theme-pure" style={{ width: "338px", }} />
                                    </div>
                                )}
                                <Image src={about_img_5} alt="theme-pure" style={{ width: "141px", marginTop: "-65px", marginRight: "-61px" }} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s">
                            <div className="tp-about__right">
                                <div className="tp-about__section-box">
                                    <h4 className="tp-section-subtitle">{title}</h4>
                                    <h3 className="tp-section-title mb-15">Hassle Free Follow Up</h3>
                                    <p>Automated systems lower the chance of mistakes, making sure all follow-ups are tracked and handled correctly.</p>
                                </div>
                                <div className="tp-about__list">
                                    <ul>
                                        {about_list3.map((item, i) => <li key={i}><i className="fal fa-check"></i>{item}</li>)}


                                    </ul>
                                </div>
                                {/* <div className="tp-about__btn">
                                    <Link className="tp-btn tp-btn-hover alt-color-black" href="/about">
                                        <span>{btn_text}</span>
                                        <b></b>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutArea;