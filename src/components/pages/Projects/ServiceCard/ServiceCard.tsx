import { BsFillTrashFill } from 'react-icons/bs'
import './serviceCard.scss'

interface Props {
    id: string,
    name: string,
    cost: string,
    description: string,
    key: string,
    handleRemove: any
}

export default function ServiceCard({id, name, cost, description, key, handleRemove}: Props) {

    function remove(e: any) {
        e.preventDefault()
        console.log(id);
        
        handleRemove(id, cost)
    }

    return (
        <section className="service_card">
            <div className='info_title'>
                <h2>{name}</h2>
                <div className='info'>
                    <p><span>Custo:</span> {cost}</p>
                    <p><span>Descrição:</span> {description}</p>
                    <p className='btn' onClick={remove}><span><BsFillTrashFill /></span> Excluir </p>
                </div>
            </div>
        </section>
    )
}