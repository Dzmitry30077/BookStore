import { useState } from 'react';
import s from './Button.module.scss';

const Button = ({ isBooking, order }) => {
  const [active, setActive] = useState(order ? false : true);

  const allow = isBooking.book;

  return (
    <>
      {allow ? (
        <button
          onClick={(e) => {
            setActive(!active);
          }}
          className={active ? s.button : `${s.button} ${s.active}`}
        >
          {active ? 'Забронировать' : 'Забронирована'}
        </button>
      ) : (
        <button disabled className={`${s.button} ${s.reserve}`}>
          Занята до {isBooking.to}
        </button>
      )}
    </>
  );
};

export default Button;
