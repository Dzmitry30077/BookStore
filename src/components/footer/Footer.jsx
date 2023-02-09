import s from './Footer.module.scss';
import fb from '../../resources/icons/socialIcons/fb_icon.svg';
import insta from '../../resources/icons/socialIcons/insta_icon.svg';
import vk from '../../resources/icons/socialIcons/vk_icon.svg';
import ln from '../../resources/icons/socialIcons/ln_icon.svg';

const Footer = () => {
  return (
    <>
      <div className={s.footer}>
        <div className={s.descr}>© 2020-2023 Cleverland. Все права защищены.</div>
        <div className={s.social}>
          <a href='#' className={s.social_link}>
            <img src={fb} alt='FaceBook' />
          </a>
          <a href='#' className={s.social_link}>
            <img src={insta} alt='Instagramm' />
          </a>
          <a href='#' className={s.social_link}>
            <img src={vk} alt='Vk' />
          </a>
          <a href='#' className={s.social_link}>
            <img src={ln} alt='LinkedIn' />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
