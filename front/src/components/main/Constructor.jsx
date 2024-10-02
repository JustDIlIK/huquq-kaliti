import React from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import MainSubtitle from "../ui/MainSubtitle.jsx";
import MainButton from "../ui/MainButton.jsx";
import { HashLink as Link } from 'react-router-hash-link';

const Constructor = () => {
    return (
        <section id={'constructor'} className="relative pt-[112px]">
            <div className="container flex items-center justify-between max_md:flex-col max_md:items-start max_md:gap-10">
                <div className="w-5/12 max_md:w-full">
                    <MainTitle
                        title="Document Designer"
                    />
                    <MainSubtitle
                        content="The Ejudicary platform was created to help users find qualified lawyers and lawyers who can solve their legal problems and problems. The platform features specialists from various fields of law, such as civil, criminal, family, labor, and others."
                    />
                    <Link to={'/patterns/#intro'}>
                        <MainButton
                            className="w-10/12 mt-[40px]"
                            content="Create a document"
                        />
                    </Link>
                </div>
                <div className="w-6/12 max_md:w-7/12 max_sm:w-9/12">
                    <img src="/img/constructor.webp" alt="about-platform"/>
                    <img className={'absolute bottom-[50px] right-0'} src="/img/constructor-mask.webp"
                         alt="intro-mask-bg"/>
                </div>
            </div>
        </section>
    );
};

export default Constructor;