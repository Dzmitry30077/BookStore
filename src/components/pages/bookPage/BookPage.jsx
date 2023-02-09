import Header from '../../header/Header';
import s from './BookPage.module.scss';
import book from '../../../resources/img/Book_XL.png';
import Button from '../../button/Button';
import Footer from '../../footer/Footer';
import slash from '../../../resources/icons/slash_icon.svg';
import userIcon from '../../../resources/icons/user_icon.svg';
import ButtonRate from '../../button/ButtonRate';

const BookPage = ({ category, name }) => {
  return (
    <>
      <div className={s.bookPage}>
        <div className={s.lable}>
          <div>
            {category} <img src={slash} alt='slash' /> {name}
          </div>
        </div>
        <div className={s.wrapper}>
          <Header />
          <div className={s.main}>
            <div className={s.main_picBox}>
              <img src={book} alt='book' />
            </div>
            <div className={s.main_info}>
              <div className={s.main_title}>
                Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
              </div>
              <div className={s.main_subtitle}>Адитья Бхаргава, 2019</div>
              <Button isBooking={{ book: true }} order={false} />
              <div className={s.main_about}>
                <div className={s.section_title}>О книге</div>
                <div className={s.underline}></div>
                <div className={s.main_about_subtitle}>
                  Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
                  кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального
                  Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить
                  на это свое время?
                  <br />
                  <br />
                  Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                  алгоритмы — это веселое и увлекательное занятие.
                </div>
              </div>
            </div>
          </div>
          <div className={s.raiting}>
            <div className={s.section_title}>Рейтинг</div>
            <div className={s.underline}></div>
            <div className={s.raiting_x}>
              <img src='' alt='stars' className={s.starBar} />
              <div className={s.raiting_rate}>4.3</div>
            </div>
          </div>
          <div className={s.descr}>
            <div className={s.section_title}>Подробная информация</div>
            <div className={s.underline}></div>
            <div className={s.descr_list}>
              <div className={s.descr_list_item}>
                <span>Издательство</span>Питер
              </div>
              <div className={s.descr_list_item}>
                <span>Год издания</span>2019
              </div>
              <div className={s.descr_list_item}>
                <span>Страниц</span>288
              </div>
              <div className={s.descr_list_item}>
                <span>Переплёт</span>Мягкая обложка
              </div>
              <div className={s.descr_list_item}>
                <span>Формат</span>70х100
              </div>
              <div className={s.descr_list_item}>
                <span>Жанр</span>Компьютерная литература
              </div>
              <div className={s.descr_list_item}>
                <span>Вес</span>370 г
              </div>
              <div className={s.descr_list_item}>
                <span>ISBN</span>978-5-4461-0923-4
              </div>
              <div className={s.descr_list_item}>
                <span>Изготовитель</span>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит.
                А29
              </div>
            </div>
          </div>
          <div className={s.reviews}>
            <div className={s.section_title}>
              Отзывы <span>2</span>
            </div>
            <div className={s.underline}></div>
            <div className={s.reviews_list}>
              <div className={s.reviews_list_item}>
                <div>
                  <img src={userIcon} alt='avatar' className={s.reviews_avatar} />
                  <div className={s.reviews_info}>Иван Иванов</div>
                  <div className={s.reviews_info}>5 января 2019</div>
                </div>
                <img src={starBar} alt='stars' className={s.starBar} />
              </div>
              <div className={s.reviews_list_item}>
                <div>
                  <img src={userIcon} alt='avatar' className={s.reviews_avatar} />
                  <div className={s.reviews_info}>Николай Качков</div>
                  <div className={s.reviews_info}>20 июня 2018</div>
                </div>
                <img src={starBar} alt='stars' className={s.starBar} />
                <div className={s.reviews_comment}>
                  Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект
                  не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение
                  современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении
                  поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут
                  в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий
                  уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что
                  акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя
                  само их существование приносит несомненную пользу обществу.
                </div>
              </div>
              <div className={s.reviews_list_item}>
                <div>
                  <img src={userIcon} alt='avatar' className={s.reviews_avatar} />
                  <div className={s.reviews_info}>Екатерина Беляева</div>
                  <div className={s.reviews_info}>18 февраля 2018</div>
                </div>
                <img src={starBar} alt='stars' className={s.starBar} />
              </div>
            </div>
          </div>
          <ButtonRate />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BookPage;
