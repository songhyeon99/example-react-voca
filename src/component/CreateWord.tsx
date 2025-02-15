import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/UseFetch";
import { Day } from "./DayType";
import { WordType } from "./WordType";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
    const days = useFetch<Day[]>("http://localhost:3001/days");
    const [isLoading, setIsLoading] = useState(false);


    // 리액트 라우터에서 제공
    const navigate = useNavigate();
    const [selectedDay, setSelectedDay] = useState(0);
    const [word, setWord] = useState<WordType>({
        eng: "",
        kor: "",
        day: 1,
        isDone: false,
    });

    // onChange 핸들러
    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target; // 입력된 값과 name 속성
        if (name === "day") {
            setSelectedDay(Number(value)); // 'day' 값에 대해 setSelectedValue 호출
        }
        setWord((prevWord) => ({
            ...prevWord,
            [name]: name === "day" ? Number(value): value, // day는 Number로 변환
        }));
    }

    // days가 로드되었는지 확인하고, 로딩 중일 경우 처리
    if (!days) {
        return <div>Loading...</div>; // days가 로드되지 않았다면 로딩 화면 표시
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // 기본 동작 방지 (새로고침 방지)
        
        if(!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3001/words`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // 수정한 정보를 body에 담아서 보냄
                // json 형태로 변환
                // ...word는 기존 데이터 의미
                // isDone만 추출해서 값 변환
                // 요청의 body에는 수정할 데이터를 담습니다. 
                // body는 JSON.stringify로 객체를 JSON 문자열로 변환하여 전송됩니다. 
                // 이 객체는 기존의 word 데이터를 그대로 보내되, isDone만 반전시킨 값으로 바꿉니다 (isDone: !isDone).
                body: JSON.stringify(word),
            })
            .then((res) => res.json())  // 응답으로 반환된 데이터에서 id를 확인
            .then((newWord) => {
                alert("생성이 완료되었습니다.");
                console.log("생성된 단어:", newWord); // 새로운 단어와 자동으로 생성된 id 확인
                navigate(`/day/${newWord.day}`);
            })
        }
        setIsLoading(false);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="input_area">
                    <label>Eng</label>
                    <input type="text" placeholder="computer" name="eng" onChange={onChange} />
                </div>
                <div className="input_area">
                    <label>Kor</label>
                    <input type="text" placeholder="컴퓨터" name="kor" onChange={onChange} />
                </div>
                <div className="input_area">
                    <label>Day</label>
                    <select name="day" onChange={onChange}>
                        {days.map((day: Day) => (
                            <option key={day.id} value={day.day}>
                                {day.day}
                            </option>
                        ))}
                    </select>
                </div>
                <button>저장</button>
            </form>
        </>
    )
}