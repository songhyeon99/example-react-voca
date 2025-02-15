import Hello from "./component/Hello"
import Welcome from "./component/Welcome"

export default function Index() {
    return (
        <div className="App">
            // 1. 중간에 넣을 값이 있을 때 아래와 같이 사용할 수 있음
            <Hello></Hello>
            // 2. 없을때는 셀프 닫기
            <Welcome />
        </div>
    )
}