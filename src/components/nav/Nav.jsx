import s from './Nav.module.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className={s.nav}>
        <div className={s.nav_title}>Витрина книг</div>
        <div className={s.undr}></div>
        <div className={s.nav_list}>
          <a href='#' className={s.nav_title}>
            Все книги
          </a>
          <a href='#' className={s.nav_list_item}>
            Бизнес-книги
            <span className={s.nav_list_item_addon}>14</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Детективы
            <span className={s.nav_list_item_addon}>8</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Детские книги
            <span className={s.nav_list_item_addon}>14</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Зарубежная литература
            <span className={s.nav_list_item_addon}>2</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            История
            <span className={s.nav_list_item_addon}>5</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Классическая литература
            <span className={s.nav_list_item_addon}>12</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Книги по психологии
            <span className={s.nav_list_item_addon}>11</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Компьютерная литература
            <span className={s.nav_list_item_addon}>54</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Культура и искусство
            <span className={s.nav_list_item_addon}>5</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Наука и образование
            <span className={s.nav_list_item_addon}>2</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Публицистическая литература
            <span className={s.nav_list_item_addon}>0</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Справочники
            <span className={s.nav_list_item_addon}>10</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Фантастика
            <span className={s.nav_list_item_addon}>12</span>
          </a>
          <a href='#' className={s.nav_list_item}>
            Юмористическая литература
            <span className={s.nav_list_item_addon}>8</span>
          </a>
        </div>
        <div className={s.links}>
          <Link to={'/terms'} className={s.links_link}>
            Правила пользования
          </Link>
          <Link to={'/contract'} className={s.links_link}>
            Договор оферты
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
