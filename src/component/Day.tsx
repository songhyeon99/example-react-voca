import dummy from "../db/data.json";
// url에 포함된 값을 얻을때는 useParams 사용
// useParams는 문자열 그래서 타입 변환 해주어야 함
import { useParams } from "react-router-dom";
import Word from "./Word";
import { useEffect, useState } from "react";

interface Day {
    id: number;
    day: number;
    eng: string;
    kor: string;
    isDone: boolean;
  }

export default function Day() {
    // const day = 1;
    // const a = useParams();
    // const day = a.day;
    // const day = useParams().day;
    // 숫자 변환
    // const dayNumber = Number(day);
    // const wordList = dummy.words.filter(word => word.day === Number(day));

    const { day } = useParams<string>();
    const [words, setWords] = useState<Day[]>([]);

    // useEffect 내부에서 day와 같이 특정값을 이용하면, 의존성 배열에 day 입력
    // day를 넣어주면 이 값이 최신 값이라고 보장 받을 수 있음
    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${day}`)
            .then(res => {
                // 실제 응답은 http여서 json으로 변환해주어야 함
                return res.json();
            })
            .then(data => {
                setWords(data);
            })
    }, [day])

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}

            <table>
                <tbody>
                    {/* {dummy.words.map((word) => ( */}
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
