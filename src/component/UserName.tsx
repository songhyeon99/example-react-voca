
interface UserNameProps {
    name : string;
}

export default function UserName(props : UserNameProps){
    return <p>{props.name}</p>
}