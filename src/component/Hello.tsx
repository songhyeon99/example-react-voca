import React from "react"
import World from "./World"
import styles from "./Hello.module.css"

// 1. 첫 번째 방법
// const Hello = () => {
//     <p>Hello</p>
// }

// 2. 두 번째 방법
// const Hello = function() {
//     <p>Hello</p>
// }

// 3. 세 번째 방법
export default function Hello() {
    function showName() {
        console.log("Mike");
    }

    // 타입스크립트는 매개변수, 알규먼트 타입을 지정해주어야 함
    function showAge(age : number) {
        console.log(age);
    }

    function showText(text:string) {
        console.log(text);
    }

    return (
        // jsx는 하나의 태그로만 이루어져 있기 때문에 div가 없으면 에러가 발생 함
        // 그래서 <div> 또는 <> 태그로 감싸주면 됨
        <div>
            {
                /* 
                * css 사용 하는 법 
                * 1. 인라인 스타일 사용
                * - 태그 안에는 객체로 사용해야 함
                * 2. index.css에 작성
                */
            }
            <h1>Hello</h1>
            {
                /* 
                * 1. 전달하고자 하는 내용은 문자열이 아니기 때문에 중괄호 해야함
                * - showName 뒤에 괄호를 해주게 되면, 반환하는 값(현재는 없어서 undefined가 됨. 그래서 원하는 결과가 안 나옴)
                * - 그래서 함수명만 작성
                * 2. 괄호 안에 직접 작성
                * - 매개변수를 전달하기 쉬움
                */
            }
            <button onClick={showName}>Show name</button>
            <button onClick={() => {
                showAge(30);
            }}
            >
                Show age
            </button>
            {/* <input type="text" onChange={showText}></input> */}
            <input type="text" onChange={e => {
                const text = e.target.value;
                showText(text);
            }}></input>
            <div className={styles.box}>Hello</div>
        </div>
    );
}

// export default Hello;