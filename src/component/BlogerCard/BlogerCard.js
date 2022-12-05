import React from "react";
import "./BlogerCard.scss";

const BlogerCard = (blogCardProps) => {
  return (
    <div className="blogCard__card">
      <div className="blogCard__image">
        <img src={blogCardProps.image} alt="blogcard-image" />
      </div>
      <div className="blogCard__info">
        <div className="blogCard__top">
          <div className="blogCard__title">{blogCardProps.title}</div>
          <div className="blogCard__stars">
            <img src={blogCardProps.img} alt="blogCard-icon" />
            <img src={blogCardProps.img} alt="blogCard-icon" />
            <img src={blogCardProps.img} alt="blogCard-icon" />
            <img src={blogCardProps.img} alt="blogCard-icon" />
            <img src={blogCardProps.img} alt="blogCard-icon" />
          </div>
          <p className="blogCard__desc">{blogCardProps.desc}</p>
        </div>
        <div className="blogCard__bottom">
          <p className="blogCard__date">
            <b>{blogCardProps.address}</b> <span>{blogCardProps.date}</span>
          </p>
          <p className="blogCard__date">
            <b>{blogCardProps.address}</b> <span>{blogCardProps.date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default BlogerCard;
