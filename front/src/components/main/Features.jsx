import React, {useState} from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import {useTranslation} from "react-i18next";

const Features = () => {
    const {t} = useTranslation();
    const [featuresList, setFeaturesList] = useState([
        {
            id: 1,
            title: 'Saving time',
            description: 'You can quickly find the right lawyer or lawyer',
            svg: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M29.0011 37.9998L33.0011 41.9998L42.0011 32.9998M43.9713 25.0996C43.9911 24.7354 44.0011 24.3688 44.0011 23.9998C44.0011 12.9541 35.0467 3.99976 24.0011 3.99976C12.9554 3.99976 4.00111 12.9541 4.00111 23.9998C4.00111 34.8706 12.6741 43.7158 23.4781 43.993M24.0011 11.9998V23.9998L31.4779 27.7382" stroke="#2F3EDE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>'
        },
        {
            id: 2,
            title: 'Convenience',
            description: 'You can communicate directly with selected specialists through the website and solve problems online.',
            svg: '<svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M16 18L20 22L29 13M21.9864 6.27162C17.9876 1.5968 11.3195 0.339284 6.30938 4.62002C1.29928 8.90076 0.593941 16.058 4.5284 21.1208C7.50018 24.9448 15.9426 32.622 19.896 36.1498C20.6228 36.7982 20.9862 37.1226 21.4116 37.2502C21.781 37.361 22.1916 37.361 22.561 37.2502C22.9864 37.1226 23.3498 36.7982 24.0766 36.1498C28.03 32.622 36.4724 24.9448 39.4442 21.1208C43.3786 16.058 42.7594 8.85574 37.6632 4.62002C32.567 0.384324 25.985 1.5968 21.9864 6.27162Z" stroke="#2F3EDE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>'
        },
        {
            id: 3,
            title: 'Transparency',
            description: 'You can study the reviews and ratings of lawyers and advocates to make a more informed choice.',
            svg: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M4.84024 25.4264C4.56788 24.995 4.43169 24.7794 4.35544 24.4468C4.29818 24.197 4.29818 23.803 4.35544 23.5532C4.43169 23.2206 4.56788 23.005 4.84024 22.5736C7.09106 19.0097 13.7908 10 24.0008 10C34.2108 10 40.9106 19.0097 43.1614 22.5736C43.4338 23.005 43.57 23.2206 43.6462 23.5532C43.7034 23.803 43.7034 24.197 43.6462 24.4468C43.57 24.7794 43.4338 24.995 43.1614 25.4264C40.9106 28.9904 34.2108 38 24.0008 38C13.7908 38 7.09106 28.9904 4.84024 25.4264Z" stroke="#2F3EDE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '<path d="M24 30C27.3138 30 30 27.3138 30 24C30 20.6862 27.3138 18 24 18C20.6862 18 18 20.6862 18 24C18 27.3138 20.6862 30 24 30Z" stroke="#2F3EDE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>'
        }
    ]);
    return (
        <section className="py-[112px]">
            <div className="container flex flex-col items-center gap-[40px]">
                <MainTitle
                    title="Advantages of the platform"
                />
                <div className="grid grid-cols-3 gap-[120px] max_md:gap-[60px] max_md:flex max_md:flex-col">
                    {
                        featuresList.map((feature, index)=> (
                            <div
                                className="flex flex-col gap-[32px] items-center text-center"
                                key={index}
                            >
                                <div
                                    className="bg-palatinate bg-opacity-20 rounded-full w-[124px] h-[124px] flex items-center justify-center"
                                    dangerouslySetInnerHTML={{__html:feature.svg}}
                                >
                                </div>
                                <h3 className="text-2xl font-medium">
                                    {t(feature.title)}
                                </h3>
                                <p className="text-lg">
                                    {t(feature.description)}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;