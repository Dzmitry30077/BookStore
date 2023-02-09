import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
import MainPage from './components/pages/mainPage/MainPage';
import ContractPage from './components/pages/contractPage/ContractPage';
import TermsPage from './components/pages/termsPage/TermsPage';
import BookPage from './components/pages/bookPage/BookPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/contract' element={<ContractPage />} />
        <Route path='/terms' element={<TermsPage />} />
        <Route
          path='/book/:category/:bookId'
          element={
            <BookPage
              category={'Бизнес книги'}
              name={'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих'}
            />
          }
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
