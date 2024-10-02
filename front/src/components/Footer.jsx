import React, {useState} from 'react';
import {HashLink} from "react-router-hash-link";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    const currentYear = new Date().getFullYear();
    const [navLinks, setNavLinks] = useState([
        {
            name: 'about the platform',
            link: '/about-us/#intro'
        },
        {
            name: 'Constructor',
            link: '/#constructor'
        },
        {
            name: 'Team',
            link: '/#team'
        },
        {
            name: 'Services',
            link: '/services/#intro'
        },
        {
            name: 'News',
            link: '/#news'
        },
        {
            name: 'FAQ',
            link: '/usual-questions/#intro'
        },
    ])
    const contacts = [
        {
            id: 1,
            title: 'Contact us',
            contact: 'unreal@outlook.com',
            link: 'mailto:unreal@outlook.com',
            svg: '<svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M1.33325 4L9.49815 9.7154C10.1594 10.1783 10.49 10.4097 10.8496 10.4993C11.1672 10.5785 11.4994 10.5785 11.817 10.4993C12.1766 10.4097 12.5072 10.1783 13.1684 9.7154L21.3333 4M6.13325 17H16.5333C18.2135 17 19.0535 17 19.6953 16.673C20.2598 16.3854 20.7187 15.9265 21.0063 15.362C21.3333 14.7202 21.3333 13.8802 21.3333 12.2V5.8C21.3333 4.11984 21.3333 3.27976 21.0063 2.63803C20.7187 2.07354 20.2598 1.6146 19.6953 1.32698C19.0535 1 18.2135 1 16.5333 1H6.13325C4.45309 1 3.61301 1 2.97128 1.32698C2.40679 1.6146 1.94785 2.07354 1.66023 2.63803C1.33325 3.27976 1.33325 4.11984 1.33325 5.8V12.2C1.33325 13.8802 1.33325 14.7202 1.66023 15.362C1.94785 15.9265 2.40679 16.3854 2.97128 16.673C3.61301 17 4.45309 17 6.13325 17Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>'
        },
        {
            id: 2,
            title: 'Any questions?',
            contact: '+998 95 557 45 54  ',
            link: 'tel:998955574554',
            svg: '<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M13.3829 5C14.3596 5.19057 15.2572 5.66826 15.9609 6.37194C16.6646 7.07561 17.1423 7.97326 17.3329 8.95M13.3829 1C15.4121 1.22544 17.3045 2.13417 18.7491 3.57701C20.1938 5.01984 21.1049 6.91101 21.3329 8.94M9.55985 12.8631C8.35831 11.6615 7.40952 10.3028 6.71353 8.85323C6.65366 8.72854 6.62373 8.66619 6.60073 8.5873C6.51901 8.30695 6.57771 7.96269 6.74772 7.72526C6.79556 7.65845 6.85272 7.60129 6.96703 7.48698C7.31663 7.13737 7.49144 6.96257 7.60572 6.78679C8.03672 6.1239 8.03672 5.26932 7.60572 4.60643C7.49144 4.43065 7.31663 4.25585 6.96703 3.90624L6.77216 3.71137C6.24072 3.17993 5.97499 2.91421 5.68961 2.76987C5.12205 2.4828 4.45179 2.4828 3.88423 2.76987C3.59885 2.91421 3.33312 3.17993 2.80168 3.71137L2.64405 3.86901C2.11442 4.39863 1.84961 4.66344 1.64736 5.02348C1.42294 5.42298 1.26158 6.04347 1.26295 6.5017C1.26417 6.91464 1.34428 7.19687 1.50449 7.76131C2.36546 10.7947 3.98993 13.6571 6.37791 16.045C8.76589 18.433 11.6282 20.0575 14.6616 20.9185C15.226 21.0787 15.5083 21.1588 15.9212 21.16C16.3794 21.1614 16.9999 21 17.3994 20.7756C17.7595 20.5733 18.0243 20.3085 18.5539 19.7789L18.7115 19.6213C19.243 19.0898 19.5087 18.8241 19.653 18.5387C19.9401 17.9712 19.9401 17.3009 19.653 16.7333C19.5087 16.448 19.243 16.1822 18.7115 15.6508L18.5167 15.4559C18.1671 15.1063 17.9923 14.9315 17.8165 14.8172C17.1536 14.3862 16.299 14.3862 15.6361 14.8172C15.4603 14.9315 15.2855 15.1063 14.9359 15.4559C14.8216 15.5702 14.7645 15.6274 14.6976 15.6752C14.4602 15.8453 14.116 15.904 13.8356 15.8222C13.7567 15.7992 13.6944 15.7693 13.5697 15.7094C12.1201 15.0134 10.7614 14.0646 9.55985 12.8631Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>'
        }
    ]
    return (
        <footer id={'contacts'} className={'relative py-[112px] bg-romance'}>
            <img className={'absolute bottom-0'} src="/img/footer-mask.webp" alt="footer-mask"/>
            <img className={'absolute top-0 right-0 rotate-[180deg]'} src="/img/footer-mask.webp" alt="footer-mask"/>
            <div className="container flex items-start justify-between max_xl:gap-20 max_md:flex-col ">
                <div className={'flex flex-col gap-[24px]'}>
                    <HashLink to={'/#main'} className={'font-bold text-xl'}>
                        <img className={'max-w-[180px]'} src="/logo.svg" alt=""/>
                    </HashLink>
                    <p>
                        © 2000-{currentYear}, {t('All rights reserved')}
                    </p>
                </div>
                <ul className={'grid grid-cols-2 gap-x-[30px] gap-y-[24px]'}>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <HashLink to={link.link}>
                                    {t(link.name)}
                                </HashLink>
                            </li>
                        ))
                    }
                </ul>
                <div className={'flex items-center max_xl:flex-col max_xl:items-start'}>
                    {
                        contacts.map((contact, index) => (
                            <div key={index} className={`${index ? 'pl-[16px] border-l max_xl:pl-0 max_xl:border-none': 'pr-[16px] max_xl:pr-0'}`}>
                                <p className={'mb-[8px]'}>
                                    {t(contact.title)}
                                </p>
                                <div className={'p-[16px]'}>
                                    <a href={contact.link} className={'flex items-center gap-[16px] font-bold'}>
                                        <div dangerouslySetInnerHTML={{__html: contact.svg}}></div>
                                        {contact.contact}
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;