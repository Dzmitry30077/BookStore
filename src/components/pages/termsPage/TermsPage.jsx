import Contract from '../../contract/Contract';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Nav from '../../nav/Nav';
import s from './TermsPage.module.scss';

const TermsPage = () => {
  return (
    <>
      <div className={s.termsPage}>
        <Header />
        <div className={s.x}>
          <Nav />
          <div className={s.y}>
            <Contract title={'Правила пользования'} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TermsPage;
