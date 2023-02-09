import Button from '../button/Button';
import s from './Card.module.scss';
import { Link } from 'react-router-dom';
import crashCover from '../../resources/icons/empty_book_icon.svg';
// import star from '../../resources/icons/starIcons/star_icon.svg';
// import eStar from '../../resources/icons/starIcons/empty_star_icon.svg';
import uniqid from 'uniqid';
import { useEffect, useState } from 'react';
import StarBar from '../starBar/StarBar';

const Card = ({ id, cover, rating, cardStyle, title, subtitle, order, isBooking }) => {
  const [cardState, setCardState] = useState({
    bookImg: cover ? cover : crashCover,
    bookImgStyle: cover ? s.book : s.crash,
  });

  return (
    <>
      {cardStyle ? (
        <div className={s.vertical}>
          <div className={s.vertical_cover}>
            <img className={cardState.bookImgStyle} src={cardState.bookImg} alt='book' />
          </div>
          <StarBar rating={rating} />
          <div className={s.vertical_content}>
            <div className={s.vertical_content_title}>{title}</div>
            <div className={s.vertical_content_subtitle}>{subtitle}</div>
          </div>
          <Button isBooking={isBooking} order={order} />
        </div>
      ) : (
        <div className={s.horizontal}>
          <div className={s.horizontal_cover}>
            <img className={cardState.bookImgStyle} src={cardState.bookImg} alt='book' />
          </div>
          <div className={s.horizontal_content}>
            <div className={s.horizontal_content_tp}>
              <div className={s.horizontal_content_tp_title}>{title}</div>
              <div className={s.horizontal_content_tp_subtitle}>{subtitle}</div>
            </div>
            <div className={s.horizontal_content_bt}>
              <StarBar rating={rating} />
              <Button isBooking={isBooking} order={order} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
