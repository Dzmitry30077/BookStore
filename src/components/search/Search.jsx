import s from './Search.module.scss';
import searchIcon from '../../resources/icons/search_icon.svg';

const Search = () => {
  return (
    <>
      <form className={s.form}>
        <input type='text' placeholder='Поиск книги или автора…' />
        <img src={searchIcon} alt='search' />
      </form>
    </>
  );
};

export default Search;
