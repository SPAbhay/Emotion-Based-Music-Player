import React, { useState } from 'react';
import Webcam from "react-webcam";
import './webcam.css'

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 870,
    height: 470,
    facingMode: "user"
};

export const WebcamCapture = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);


    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc)
        });


    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    // height={1000}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    // width={1200}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div className='btn-container'>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                            className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                            className="webcam-btn"><span className="btn-text">Capture</span></button>
                }
            </div>
        </div>
    );
};