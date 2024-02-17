"use client"
import { useRef, useEffect, useState } from 'react';

export const useWebcam = () => {
    const webcamRef = useRef(null);
    const [isWebcamReady, setIsWebcamReady] = useState(false);

    useEffect(() => {
        const getVideo = async () => {
            try {
                const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
                webcamRef.current.srcObject = videoStream;
                webcamRef.current.play();
                setIsWebcamReady(true);
            } catch (error) {
                console.error('Error accessing the webcam:', error);
            }
        };

        getVideo();
    }, []);

    return { webcamRef, isWebcamReady };
};