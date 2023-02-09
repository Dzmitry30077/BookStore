import Card from '../card/Card';
import s from './ProductsList.module.scss';
import { booksDB } from '../db/Db';

const ProductsList = ({ listState }) => {
  const style = listState ? s.block : s.list;

  return (
    <>
      <div className={style}>
        {booksDB.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              cardStyle={listState}
              cover={item.cover}
              rating={item.rating}
              title={item.title}
              subtitle={item.subtitle}
              order={item.order}
              isBooking={item.isBooking}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
