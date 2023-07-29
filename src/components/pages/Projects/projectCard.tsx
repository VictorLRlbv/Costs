import Button from "../../../layout/ButtonPurple/button";
import "./projectCard.scss";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import {TbPigMoney} from 'react-icons/tb'
import {MdHomeRepairService} from 'react-icons/md'
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";

interface Props {
  id: string;
  name: string;
  budget: number;
  category: any;
  handleRemove: any;
}

export default function ProjectCard({
  id,
  name,
  budget,
  category,
  handleRemove,
}: Props) {

    function remove(e: any) {
        e.preventDefault()
        handleRemove(id)
    }

  return (
    <div className="project_card">
      <div className="card">
        <div className="header">
          <span className="title">{category.name}</span>
          <span className="price">{name}</span>
        </div>
        <ul className="lists">
          <li className="list">
            <TbPigMoney />
            <span>ORÇAMENTO: {budget}</span>
          </li>
          <li className="list">
            <MdHomeRepairService />
            <span>Serviços: ainda nada</span>
          </li>
        </ul>
        <div className="actions">
            <div><Link to={`/projects/${id}`}><Button text={`Editar `} type="button" id="editProject"/><BsPencil /></Link></div>
            <div onClick={remove}><Button text={`Excluir `} type="button" id="excludeProject"/> <BsFillTrashFill /></div>
        </div>
      </div>
    </div>
  );
}
