import React, {useEffect} from 'react';
import MainTitle from "../../ui/MainTitle.jsx";
import MainSubtitle from "../../ui/MainSubtitle.jsx";
import MainButton from "../../ui/MainButton.jsx";

const Consultation = () => {
    useEffect(() => {
        document.getElementById('vid').play();
    }, []);
    return (
        <section>
            <div className="relative container flex items-center justify-between max_xl:flex-col max_xl:gap-10">
                <img className={'absolute -top-24 -right-20'} src="/img/consultation-bg.png" alt="consultation"/>
                <div className={'flex flex-col gap-[40px] w-4/12 max_xl:w-6/12 max_md:w-full'}>
                    <MainTitle
                        title="Customer reviews"
                    />
                    <MainSubtitle
                        content={'Воспользуйтесь нашими онлайн-консультациями и получите профессиональную поддержку от опытных юристов, не выходя из дома.'}
                    />
                    <MainButton
                        className={'w-fit'}
                        content={'Заказать консультацию'}
                    />
                </div>
                <div className={'relative w-[660px] h-[453px] rounded-lg overflow-hidden max_md:w-full max_md:h-fit'}>
                    <video id={'vid'} className={'w-full h-full object-cover'} autoPlay muted>
                        <source src="/consultarion.mp4" type="video/mp4"/>
                    </video>
                </div>

            </div>
        </section>
    );
};

export default Consultation;