import { Link } from "react-router-dom"
import dummy from "../db/data.json"
import { useEffect, useState } from "react";
import useFetch from "../hooks/UseFetch";
import { Day } from "./DayType";

export default function DayList() {
    // 훅을 통해 받을 떄 받을 타입 명시해주어야 함
    const days = useFetch<Day[]>("http://localhost:3001/days");

    // 데이터가 null일 경우 로딩 중 표시
    if (!days ||days.length === 0) {
        return <div>Loading...</div>;
    }

    // const [days, setDays] = useState<Day[]>([]);
    // const [count, setCount] = useState(0);

    // function onClick() {
    //     setCount(count + 1);
    // }

    // function onClick2() {
    //     setDays([
    //         ...days,
    //         {
    //             id : Math.random(),
    //             day: 1,
    //         }
    //     ])
    // }

    // useEffect(() => {
    //     console.log("Count Change");   
    // });

    // 상태값이 바뀌었을 때 동작하는 함수를 작성할 수 있음
    // 첫 번째 매개변수로 함수를 넣음 () =>
    // 상태값이 바뀌고 난 후 렌더링 된 후 보여줌
    // 의존성 변수의 값이(카운트가) 변경될 떄마다 실행 됨
    // useEffect(() => {
    //     console.log("Count Change");

    // }, [count]);

    // // 렌더링 직후 딱 한번만 실행되는 것은 빈 배열만 실행
    // useEffect(() => {
    //     console.log("Count Change");
    // }, []);

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         // 실제 응답은 http여서 json으로 변환해주어야 함
    //         return res.json();
    //     })
    //     .then(data => {
    //         setDays(data);
    //     })
    // },[])

    return (
        <>
            <ul className="list_day">
                {/* 
                * 타입스크립트는 day이라고 타입 명시해주어야 함
                */}
                {days.map((day:Day) => (
                    <li key={day.id}>
                        {
                            /* 
                            * html은 <a href를 사용하지만, 리액트는 <Link>를 사용함 
                            * /day 뒤에 day 날짜로 url 사용하여 구분할 수 있음
                            */
                        }
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
            {/* <button onClick={onClick}>{count}</button>
        <button onClick={onClick2}>Day change</button> */}
        </>
    )
}