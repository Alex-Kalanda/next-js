import React from "react";
import axios from 'axios';
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {withLayout} from "../../layout/Layout";
import {MenuItem} from "../../interfaces/interface.menu";
import {TopPageModel} from "../../interfaces/interface.toppage";
import {ParsedUrlQuery} from "querystring";
import {ProductModel} from "../../interfaces/interface.product";
const firstCategory = 0;

function Course({ menu, page, products }: CourseProps): JSX.Element {

    return (<>
        <ul>
            {products && products.map(p => <li key={p._id}>{p.description}</li>)}
        </ul>
    </>);
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
        category: page.category,
        limit: 10
    });

    return {
        props: {
            menu,
            page,
            firstCategory,
            products
        }
    };
};

interface CourseProps extends Record<string, unknown>{
    menu: MenuItem[];
    page: TopPageModel;
    products: ProductModel[];
    firstCategory: number;
}

