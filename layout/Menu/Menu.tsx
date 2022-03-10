import React, {useContext, useEffect} from "react";
import styles from './Menu.module.css';
import cn from 'classnames';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem} from "../../interfaces/interface.menu";
import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import GoodsIcon from './icons/goods.svg';
import ServicesIcon from './icons/services.svg';
import {TopLevelCategory} from "../../interfaces/interface.toppage";

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
    { route: 'products', name: 'Товары', icon: <GoodsIcon />, id: TopLevelCategory.Products},
];

export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
            { firstLevelMenu.map(menu => {
                return (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: menu.id === firstCategory
                            })}>
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </a>
                        {menu.id === firstCategory && buildSecondLevel()}
                    </div>
                );
                }) }
                </>
        );
    };
    const buildSecondLevel = () => {
        return {};
    };
    const buildThirdLevel = () => {
        return {};
    };

    return (
        <>
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </>
    );
};

