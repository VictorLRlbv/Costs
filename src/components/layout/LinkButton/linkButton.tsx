import { Link} from 'react-router-dom'
import './linkButton.scss'

export default function LinkButton({to, text}: {to: string, text: string}) {
    return <Link to={to} className='btn'>{text}</Link>
}