import {FaArrowRight, FaUser } from 'react-icons/fa'
import './card.scss'

export default function Card({url, fotoLeft, text, title, subtitle}: {url: string, fotoLeft: boolean, text: string, title: string, subtitle: string}) {
    return (
        <>
            {fotoLeft ? (
                        <div className="blog-card">
                            <div className="meta" >
                                <img className="photo" src={url}></img>
                                <ul className="details"> 
                                    <li className="author"><FaUser className='liIcon'/><a href="#">Victor Rocha</a></li>
                                    <li className="date">07/08/2013 10 anos atrás</li>
                                </ul>
                                </div>
                                <div className="description">
                                <h1>{title}</h1>
                                <h2>{subtitle}</h2>
                                <p>{text}</p>
                                <p className="read-more">
                                    <a href="#">Leia sobre <FaArrowRight className='arrowIcon'/></a>
                                </p>
                            </div>
                        </div>
            ) : (
                        <div className="blog-card alt">
                            <div className="meta" >
                                <img className="photo" src={url}></img>
                                <ul className="details"> 
                                    <li className="author"><FaUser className='liIcon'/><a href="#">John Doe</a></li>
                                    <li className="date">07/08/2018 5 anos atrás</li>
                                </ul>
                                </div>
                                <div className="description">
                                <h1>{title}</h1>
                                <h2>{subtitle}</h2>
                                <p>{text}</p>
                                <p className="read-more">
                                    <a href="#">Leia Sobre <FaArrowRight className='arrowIcon'/></a>
                                </p>
                            </div>
                        </div>
            )}
        </>
    )
}