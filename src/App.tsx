import React from 'react';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {
            /* 
            * 스위치 내부는 url에 따라 각각 다른 페이지를 보여줌
            * 스위치 바깥쪽은 공통으로 사용됨 
            */
          }
          {/* <Switch> */}
          {
            /* 
            * /day에도 /가 있어서 DayList를 보여줌
            * 그래서 exact라고 적어줌
            */
          }
          <Route path="*" element={<EmptyPage />} />
          <Route path="/" element={<DayList />} />
          {
            /* 
            * :day라는 변수로 값을 받을 수 있음
            */
          }
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          {/* </Switch> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;