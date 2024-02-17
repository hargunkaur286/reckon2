"use client"
import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import { useWebcam } from './useWebcam'; // Assuming useWebcam hook is in the same directory

const UprightHelper = () => {
    const { webcamRef, isWebcamReady } = useWebcam();
    const [classifier, setClassifier] = useState(null);
    const [net, setNet] = useState(null);
    const audio = new Audio('audio_file.mp3');

    useEffect(() => {
        const init = async () => {
            console.log('Loading mobilenet..');
            setNet(await mobilenet.load());
            console.log('Successfully loaded model');
            setClassifier(knnClassifier.create());
        };

        init();
    }, []);

    const addExample = async (classId) => {
        if (net && isWebcamReady) {
            const activation = net.infer(webcamRef.current, true);
            classifier.addExample(activation, classId);
        }
    };

    const run = async () => {
        while (true && net && classifier && isWebcamReady) {
            if (classifier.getNumClasses() > 0) {
                const activation = net.infer(webcamRef.current, 'conv_preds');
                const result = await classifier.predictClass(activation);
                if (result.classIndex === 1) {
                    audio.play();
                    document.body.style.backgroundColor = "rgb(168, 63, 63)";
                } else {
                    document.body.style.backgroundColor = "rgb(80, 168, 80)";
                }
            }
            await tf.nextFrame();
        }
    };

    useEffect(() => {
        if (net && classifier && isWebcamReady) {
            run();
        }
    }, [net, classifier, isWebcamReady]);

    return (
        <div className="container mx-auto text-center my-16">
            <div className="flex flex-col items-center justify-center my-4">
                <div className="buttons mb-4">
                    <button onClick={() => addExample(0)} className="bg-green-500 text-white font-bold py-2 px-4 rounded mr-2">Right Posture</button>
                    <button onClick={() => addExample(1)} className="bg-red-500 text-white font-bold py-2 px-4 rounded">Wrong Posture</button>
                </div>
                <video ref={webcamRef} autoPlay playsInline muted className="w-90 h-90"></video>
            </div>
        </div>
    );
};

export default UprightHelper;