import React, {useState} from "react";
import {Htag, Rating, Tag} from "../components";
import {Button} from "../components";
import {withLayout} from "../layout/Layout";
import axios from 'axios';
import {GetStaticProps} from "next";
import {MenuItem} from "../interfaces/interface.menu";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  const counterIncrease = () => {setCounter(counter+1);};
  const counterReduce = () => {setCounter(counter-1);};

  return <>
    <Htag tag="h1">First caption</Htag>
    <Htag tag="h1">{counter}</Htag>
    <Button arrow="down" onClick={counterIncrease} appearance="primary">Увеличить</Button>
    <Button arrow="down" onClick={counterReduce} appearance="primary">Уменьшить</Button>
    <Tag type="red">hh.ru</Tag>
    <Tag type="ghost">Работа в Photoshop</Tag>
    <Tag type="ghost">Подготовка макетов</Tag>
    <Tag type="ghost">Web дизайн</Tag>
    <Rating isEditable setRating={setRating} rating={rating}/>
    <Rating rating={rating}/>
    <Tag type="green">-10 000 ₽</Tag>
    <Tag type="green">sale!!!</Tag>
    <Tag type="grey">{counter}</Tag>
    <Tag type="grey">14</Tag>
  </>;
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
   return {
     props: {
       menu,
       firstCategory
     }
   };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}
