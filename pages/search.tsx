import React from "react";
import {Htag} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/interface.menu";
import {HomeProps} from "../interfaces/interface.toppage";

export const Search = (): JSX.Element => {
    return (
        <>
            <Htag tag='h1'>
                Search
            </Htag>
        </>
    );
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    return { props: { menu, firstCategory } };
};

