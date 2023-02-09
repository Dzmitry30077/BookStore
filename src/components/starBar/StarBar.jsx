import s from './StarBar.module.scss';
import star from '../../resources/icons/starIcons/star_icon.svg';
import emptyStar from '../../resources/icons/starIcons/empty_star_icon.svg';
import uniqid from 'uniqid';

const StarBar = ({ rating }) => {
  const beatStar = (rating) => {
    return [...new Array(5)].map((_, i) => {
      return i < rating ? (
        <img key={uniqid()} src={star} alt='star' />
      ) : (
        <img key={uniqid()} src={emptyStar} alt='star' />
      );
    });
  };

  return <div className={s.starbar}>{rating ? beatStar(rating) : 'еще нет оценок'}</div>;
};

export default StarBar;
