import React from 'react';

const Card3 = (props) => {
    const { name, content, ratings,img } = props.review;
    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{content}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted2">Rating: {ratings}</small>
                    </div>
            </div>
        </div>
    );
};

export default Card3;