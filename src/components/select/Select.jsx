import s from './Select.module.scss';
import selectIcon from '../../resources/icons/select_icon.svg';

const Select = () => {
  return (
    <>
      <div className={s.box}>
        <img src={selectIcon} alt='drop' />
        <select className={s.select}>
          <option>По рейтингу</option>
          <option>option2</option>
          <option>option3</option>
          <option>option4</option>
          <option>option5</option>
        </select>
      </div>
    </>
  );
};

export default Select;
