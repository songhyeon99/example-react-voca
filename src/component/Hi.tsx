import { useState } from "react";
import UserName from "./UserName";

interface HiProps {
    age: number;
}

// 아래 부분으로 App.tsx에서 입력했던 값들이 들어옴
// props는 객체 형태이고, 타입스크립트는 props 타입을 명확하게 정의해야 함
// props가 age를 포함하는 객체로 정의되어야 하므로, Hi 컴포넌트의 props 타입을 지정
export default function Hi(props:HiProps) {
    console.log(props);
    // 컴포넌트가 관리하고 있는 네임은 단순 변수이기 때문에
    // 컴포넌트가 관리하고 있는 상태값이 아님
    // 그래서 값이 바뀌어도 리액트는 그것을 인지하지 못하고 UI를 업데이트 해주지 않음 
    // let name = "Mike";

    // useState는 import 해주어야 함
    // useState는 배열을 반환함
    // 첫 번째 값은 변수명, 두 번쨰 값은 state를 변경해주는 함수
    // setName 함수를 호출해서 name이 바뀌면 리액트는 컴포넌트를 다시 렌더링 함
    // 괄호 안에는 초기값이 들어 감
    const [name, setName] = useState('Mike');
    const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

    function changeName() {
        // Mike일때는 Jane으로 아닐때는 Mike로 변환
        // name = name === "Mike" ? "Jane" : "Mike";
        console.log(name);
        // 자바스크립트 DOM 사용해서 화면에 name값 변화 시켜주기
        // document.getElementById("name").innerText = name;

        const newName = name === 'Mike' ? 'Jane' : 'Mike';
        setName(newName);
    }

    return (
        <div>
            {
                /* 
                * 넘겨 받은 값은 컴포넌트 안에서 변경 안됨
                * 받은 그대로 사용해야 함
                * 내부에서 변경하고 싶다면, state를 다시 만들어서 변경 해야 함
                */
            }
            <h2 id="name">{name}
                {/* ({props.age}) */}
                ({age}) : {msg}
                </h2>
                {/* 여기서 name 컴포넌트의 state이지만 userName 컴포넌트 입장에서는 props임*/}
                <UserName name={name}></UserName>
            {/* <button onClick={changeName}>Change</button> */}

            {/* 함수 선언없이 아래와 같이 작성하면 됨 */}
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike")
                setAge(age + 1)
            }}>Change</button>
        </div>
    )
}