import bookCover from '../../resources/img/Book.png';
import crashCover from '../../resources/icons/empty_book_icon.svg';

export const booksDB = [
  {
    id: 1,
    cover: bookCover,
    rating: 4,
    title: 'Грокаем алгоритмы. Иллюстрированное',
    subtitle: 'Адитья Бхаргава, 2019',
    order: false,
    isBooking: {
      book: true,
    },
  },
  {
    id: 2,
    cover: bookCover,
    rating: 4,
    title: 'Грокаем алгоритмы.',
    subtitle: 'Адитья Бхаргава, 2019',
    order: false,
    isBooking: {
      book: true,
    },
  },
  {
    id: 3,
    cover: bookCover,
    rating: 4,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    subtitle: 'Адитья Бхаргава, 2019',
    order: false,
    isBooking: {
      book: false,
      to: '03.05',
    },
  },
  {
    id: 4,
    cover: bookCover,
    rating: 4,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    subtitle: 'Адитья Бхаргава, 2019',
    order: false,
    isBooking: {
      book: true,
    },
  },
  {
    id: 5,
    cover: bookCover,
    rating: 3,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    subtitle: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    order: false,
    isBooking: {
      book: true,
    },
  },
  {
    id: 6,
    cover: undefined,
    rating: 3,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    subtitle: 'Адитья Бхаргава, 2019',
    order: false,
    isBooking: {
      book: false,
      to: '23.04',
    },
  },
  {
    id: 7,
    cover: bookCover,
    rating: 2,
    title: 'Грокаем алгоритмы.',
    subtitle: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    order: false,
    isBooking: {
      book: true,
    },
  },
  {
    id: 8,
    cover: bookCover,
    rating: 1,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    subtitle: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    order: false,
    isBooking: {
      book: true,
    },
  },
  {
    id: 9,
    cover: bookCover,
    rating: 1,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    subtitle: 'Адитья Бхаргава, 2019',
    order: false,
    isBooking: {
      book: true,
    },
  },
  {
    id: 10,
    cover: undefined,
    rating: undefined,
    title: 'Грокаем алгоритмы. Иллюстрированное',
    subtitle: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    order: false,
    isBooking: {
      book: false,
      to: '23.04',
    },
  },
  {
    id: 11,
    cover: bookCover,
    rating: undefined,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    subtitle: 'Адитья Бхаргава, 2019',
    order: false,
    isBooking: {
      book: true,
    },
  },
];
