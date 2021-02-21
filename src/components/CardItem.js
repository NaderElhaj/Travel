/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img src={props.src}  alt='Travel Image'  className='cards__item__img'/>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.texts} </h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;