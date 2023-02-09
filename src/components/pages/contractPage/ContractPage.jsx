import Contract from '../../contract/Contract';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Nav from '../../nav/Nav';
import s from './ContractPage.module.scss';

const ContractPage = () => {
  return (
    <>
      <div className={s.contractPage}>
        <Header />
        <div className={s.x}>
          <Nav />
          <div className={s.y}>
            <Contract title={'Договор оферты'} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContractPage;
