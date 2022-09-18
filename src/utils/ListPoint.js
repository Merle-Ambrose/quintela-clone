import React from 'react';

function ListPoint({img, altImgText, heading, desc, url, isImgOnLeft}) {
    if(isImgOnLeft) {
        return (
            <div className="listPoint row justify-content-center align-items-center">
                <img src={img} alt={altImgText} className="listPointImg listPointImgLeft col-7"/>
                <div className="listPointText col-5" style={{marginLeft: '30px'}} >
                    <h1>{heading}</h1>
                    <p>{desc}</p>
                    <a href={url}><button type="button">Know More</button></a>
                </div>
            </div>
        );
    }
    return (
        <div className="listPoint row justify-content-center align-items-center">
            <div className="listPointText listPointTextLeft col-5" style={{marginRight: '30px'}}>
                <h1>{heading}</h1>
                <p>{desc}</p>
                <a href={url}><button type="button">Know More</button></a>
            </div>
            <img src={img} alt={altImgText} className="listPointImg col-7"/>
        </div>
    );
}

export default ListPoint;