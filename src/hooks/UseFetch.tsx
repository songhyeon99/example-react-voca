import { useEffect, useState } from "react";

// 나만의 커스텀 훅 만들기
// 공통으로 사용하기 떄문에 제네릭 사용 : T 타입
// 리턴 값은 any로 하여 공통으로 사용
export default function useFetch<T>(url:string) : any {
    const [data, setData] = useState<T[] | null>(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
            });
    }, [url]);

    return data;
}