import React from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import MainSubtitle from "../ui/MainSubtitle.jsx";

const About = () => {
    return (
        <section id={'about'} className="relative pt-[112px]">
            <div className="container flex items-center justify-between max_md:flex-col max_md:gap-10">
                <div className="w-5/12 max_md:w-full">
                    <MainTitle
                        title="About the platform"
                    />
                    <MainSubtitle
                        content="The Ejudicary platform was created to help users find qualified lawyers and lawyers who can solve their legal problems and problems. The platform features specialists from various fields of law, such as civil, criminal, family, labor, and others."
                    />
                </div>
                <div className="w-5/12 max_md:w-7/12 max_sm:w-9/12">
                    <img src="/img/about-platform.webp" alt="about-platform"/>
                    <img className={'absolute bottom-[150px] left-0'} src="/img/about-platform-mask.webp" alt="intro-mask-bg"/>
                </div>
            </div>
        </section>
    );
};

export default About;