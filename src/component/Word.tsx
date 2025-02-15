import { useState } from "react";

export default function Word({ word : w }: any) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        console.log("단어 아이디 : ", word.id);
        
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
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
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        })
            .then(res => {
                if (res.ok) {
                    setIsDone(!isDone);
                }
            })
    }

    function del() {
        if (window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE'
            }).then(res => {
                if(res.ok) {
                    setWord({id:0})
                }
            });
        }
    }

    if(word.id === 0) {
        return null
    }

    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone} />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>
                    뜻 {isShow ? '숨기기' : '보기'}
                </button>
                <button className="btn_del" onClick={del}>삭제</button>
            </td>
        </tr>
    );
}