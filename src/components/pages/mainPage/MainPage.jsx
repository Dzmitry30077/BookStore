import s from './MainPage.module.scss';
import Header from '../../header/Header';
import Nav from '../../nav/Nav';
import Filter from '../../filter/Filter';
import ProductsList from '../../productsList/ProductsList';
import Footer from '../../footer/Footer';
import { useState } from 'react';

const MainPage = () => {
  const [listState, setListState] = useState(true);

  const onChangeList = (e) => {
    e.preventDefault();
    setListState(!listState);
  };

  return (
    <>
      <div className={s.wrapper}>
        <Header />
        <div className={s.wrapper_row}>
          <Nav />
          <div className={s.wrapper_column}>
            <Filter onChangeList={(e) => onChangeList(e)} listState={listState} />
            <ProductsList listState={listState} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
