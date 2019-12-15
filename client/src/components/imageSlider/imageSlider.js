import React from 'react';
import C from '../../constants';

function ImageSlider({images}){
    return(
        <div className="image__slider" >
        {
            images.map(img => (
                <div className="img">
                    <img src={`${C.DATA_SERV}/${img}`} alt />
                </div>
            ))
        }
        </div>
    );
}

export default ImageSlider;