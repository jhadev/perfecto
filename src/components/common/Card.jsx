/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({ image, title, subtitle, children, helper }) => (
  <>
    <div className={`card ${helper || ''}`}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{subtitle}</p>
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  </>
);

export default Card;
