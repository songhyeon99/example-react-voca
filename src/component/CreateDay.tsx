import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const nevigate = useNavigate();

    function addDay() {
        fetch(`http://localhost:3001/days`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length + 1,
            }),
        }).then(res => {
            if(res.ok) {
                alert("생성이 완료 되었습니다.");
                nevigate(`/`);
            }
        })
    }
    return(
        <>
            <h3>현재 일수 : {days.length}</h3>
            <button onClick={addDay}>Day 추가</button>
        </>
    )
}