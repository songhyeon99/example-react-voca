import React from 'react';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import World from './component/World';
import styles from './App.module.css';
import Hi from './component/Hi';

const Practice: React.FC = () => {
  return (
    <div className="App">
            {/* 1. 중간에 넣을 값이 있을 때 아래와 같이 사용할 수 있음 */}
            {/* <Hello></Hello> */}
            {/* 2. 없을때는 셀프 닫기 */}
            {/* <Welcome />
            <World /> */}
            <Hello />
            {
            /* 
            * 컴포넌트가 여러개 사용돼도 각각 관리함.
            * 그래서 다른데서 동일한 컴포넌트 사용해도 영향이 없음
            */
            }
            <Hi age={10}/>
            <Hi age={20}/>
            <Hi age={30}/>
            <div className={styles.box}>App</div>
    </div>
  );
};

export default Practice;