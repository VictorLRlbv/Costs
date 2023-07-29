import { useEffect, useState } from 'react';
import './message.scss'
import {FaCheck, FaExclamationTriangle, FaInfo} from 'react-icons/fa'

interface Props {
  type: "error" | "info" | "success";
  msg: string;
}

export default function Message({ type, msg }: Props) {

  let [visible, setVisible] = useState(false)

  useEffect(() => {
    if(!msg) {
      setVisible(false)
      return
    }

    setVisible(true)
    let timer = setTimeout(() => {
      setVisible(false)
    }, 5000)

    return () => {clearTimeout(timer)}
  }, [msg])

  return (
  <>
    {visible && (
      <div>
          {type == 'success' ? 
            <div className="msg msg-success">
                <div className="icon__wrapper">
                  <FaCheck />
                </div>
                <p>
                  {msg}
                </p>
                <span className="mdi mdi-open-in-new open"></span>
                <span className="mdi mdi-close close"></span>
            </div> 
            : type === 'info' ? 
            <div className="msg msg-info">
                    <div className="icon__wrapper">
                      <FaInfo />
                    </div>
                    <p>{msg}</p>
                    <span className="mdi mdi-open-in-new open"></span>
                    <span className="mdi mdi-close close"></span>
            </div> 
            : type === 'error' ? 
            <div className="msg msg-error">
                    <div className="icon__wrapper">
                      <FaExclamationTriangle />
                    </div>
                    <p>{msg}</p>
                    <span className="mdi mdi-open-in-new open"></span>
                    <span className="mdi mdi-close close"></span>
            </div> 
            : <p>Erro ao exibir a mensagem/</p>
          }
      </div>
    )}
  </>
    
  );
}
