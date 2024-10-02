import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioFile = ({ src, id, onChatIdChange, onDeleteMessageId }) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showPlay, setShowPlay] = useState(true);
    const [showPause, setShowPause] = useState(false);
    const waveformRef = useRef(null);
    const wavesurferRef = useRef(null);

    useEffect(() => {
        if (src) {
            initWaveSurfer();
        }

        return () => {
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
            }
        };
    }, []);

    // useEffect(() => {
    //     if (onChatIdChange) {
    //         onChatIdChange((chatId) => {
    //             if (wavesurferRef.current) {
    //                 wavesurferRef.current.destroy();
    //             }
    //         });
    //     }
    //
    //     if (onDeleteMessageId) {
    //         onDeleteMessageId((deleteMessageId) => {
    //             if (deleteMessageId === id && wavesurferRef.current) {
    //                 wavesurferRef.current.destroy();
    //             }
    //         });
    //     }
    // }, [onChatIdChange, onDeleteMessageId, id]);

    const formatTime = (time) => {
        return [
            Math.floor((time % 3600) / 60), // minutes
            ('00' + Math.floor(time % 60)).slice(-2) // seconds
        ].join(':');
    };

    const initWaveSurfer = () => {
        if (wavesurferRef.current) {
            wavesurferRef.current.destroy();
        }

        const wavesurfer = WaveSurfer.create({
            container: '#waveform',
            cursorWidth: 3,
            cursorColor: '#fff',
            barGap: 3,
            barRadius: 30,
            height: 28,
            barWidth: 2,
            waveColor: '#747881',
            progressColor: '#005FFF',
            url: src,
        });

        wavesurfer.on('error', (err) => {
            console.error('WaveSurfer error:', err);
        });

        wavesurfer.on('ready', () => {
            setDuration(wavesurfer.getDuration());
            const container = document.getElementById('messageContainer');
            if(container.scrollTop !== container.scrollHeight){
                container.scrollTop = container.scrollHeight;
            }
        });

        wavesurfer.on('audioprocess', (time) => {
            setCurrentTime(time);
        });

        wavesurfer.on('interaction', () => {
            setShowPlay(false);
            setShowPause(true);
            wavesurfer.play();
        });

        wavesurfer.on('finish', () => {
            setShowPlay(true);
            setShowPause(false);
        });

        wavesurferRef.current = wavesurfer;
    };

    const play = () => {
        if (wavesurferRef.current) {
            wavesurferRef.current.play();
            setShowPlay(false);
            setShowPause(true);
        }
    };

    const pause = () => {
        if (wavesurferRef.current) {
            wavesurferRef.current.pause();
            setShowPlay(true);
            setShowPause(false);
        }
    };

    return (
        <div className="pr-0 pl-2 relative flex gap-3 py-3 max_lit:px-3 max_lit:pb-8">
            {showPlay && (
                <button onClick={play}
                        className="w-[36px] h-[36px] shadow-chatButton my-auto flex items-center justify-center rounded-full max_sm:p-2 max_sm:mb-8 max_lit:mb-2">
                    <svg className={'shrink-0'} width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0V14L11.5 7L0.5 0Z" fill="#080707"/>
                    </svg>
                </button>
            )}
            {showPause && (
                <button onClick={pause}
                        className="w-[36px] h-[36px] shadow-chatButton my-auto flex items-center justify-center rounded-full max_sm:p-2 max_sm:mb-8 max_lit:mb-2">
                    <svg className={'shrink-0'} width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 14H4V0H0V14ZM8 0V14H12V0H8Z" fill="#080707"/>
                    </svg>
                </button>
            )}
            <div className="flex gap-1 items-start flex-col">
                <div ref={waveformRef} id={'waveform'} className="w-[300px] max_sm:w-[168px] max_lit:w-[80px]"></div>
                <div className="flex gap-1 max_lit:absolute max_lit:left-2 max_lit:bottom-3 text-sm">
                    <span className="left-[60px] top-7">
                        {formatTime(currentTime)}
                    </span>
                    /
                    <span className="right-10 top-7">
                        {formatTime(duration)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AudioFile;
