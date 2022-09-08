import React from "react";

const Card = ({data}) => {
    return (
        <div className="card flex  js-sb">
            <div className="img_wrapper">
                <img
                    src={data.image}
                    alt=""
                />
            </div>
            <div className="info">
                <h5 className="title">{data.name}</h5>
                <p className="currentPrice">{data.current_price}</p>
            </div>
        </div>
    );
};

export default Card;
