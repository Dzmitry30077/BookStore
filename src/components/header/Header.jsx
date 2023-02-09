import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../resources/img/logo.png';
import user from '../../resources/img/user.png';
import menuBtn from '../../resources/icons/menu_btn_icon.svg';

const Header = () => {
  return (
    <>
      <div className={s.header}>
        <div className={s.leftSide}>
          <Link to={'/'}>
            <img src={logo} alt='Logo' className={s.header_pic} />
          </Link>
          <button className={s.menu_btn}>
            <img src={menuBtn} alt='menu' />
          </button>
          <div className={s.title}>Библиотека</div>
        </div>
        <div className={s.user}>
          <div className={s.user_text}>Привет, Иван!</div>
          <div className={s.user_avatar}>
            <img src={user} alt='user' className={s.user_avatar_pic} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
