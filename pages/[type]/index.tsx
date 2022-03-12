import React from "react";
import { Htag, Tag} from "../../components";
import {withLayout} from "../../layout/Layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {MenuItem} from "../../interfaces/interface.menu";
import {ParsedUrlQuery} from "querystring";
import {firstLevelMenu} from "../../helpers/helpers";

function Type ({firstCategory}: TypeProps): JSX.Element {

    return <>
        <Htag tag="h1">Choose your favorite courses, add going to learn with pleasure!</Htag>
        <Tag type="ghost">Index page of {firstCategory}.</Tag>
        <Tag type="green">-10 000 ₽</Tag>
        <Tag type="green">sale!!!</Tag>
    </>;
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(m => `/${m.route}`),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ( {params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) return { notFound: true };

    const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
    if (!firstCategoryItem) return { notFound: true };

    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory: firstCategoryItem.id
    });

    return { props: { menu, firstCategory: firstCategoryItem.id } };
};

interface TypeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}
