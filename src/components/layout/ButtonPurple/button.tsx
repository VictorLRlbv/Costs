import './button.scss'

interface Props {
    text: string,
    type: "button" | "submit" | "reset" | undefined,
    id: string
}

export default function Button({text, type, id}: Props) {
    return <button className="btnPurple" type={type} id={id}>{text}</button>
}