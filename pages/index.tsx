import React from "react";
import {Htag, P, Tag} from "../components";
import {Button} from "../components";

export default function Home(): JSX.Element {

  return <div className="wrapper">
    <Htag tag="h1">First caption</Htag>
    <Button arrow="down" appearance="primary">Отправить</Button>
    <Tag type="red">hh.ru</Tag>
    <Tag type="ghost">Работа в Photoshop</Tag>
    <Tag type="ghost">Подготовка макетов</Tag>
    <Tag type="ghost">Web дизайн</Tag>
    <Tag type="green">-10 000 ₽</Tag>
    <Tag type="green">sale!!!</Tag>
    <Tag type="grey">30</Tag>
    <Tag type="grey">14</Tag>
  </div>;
}
