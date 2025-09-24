import React from 'react';

const InfoBox = ({title,content}) => {
    return (
        <div className="mt-4">
            <div>
                <h6>
                    {title}
                </h6>
            </div>
            <p className="text-xs">
                {content}
            </p>
        </div>
    );
};

export default InfoBox;
