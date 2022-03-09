import React from "react";
import cn from 'classnames';
import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css';
import OwlIcon from './owl-icon.svg';
import CoursesIcon from './courses.svg';
import ServicesIcon from './services.svg';
import BooksIcon from './books.svg';
import GoodsIcon from './goods.svg';
import Lens from './lens-icon.svg';

export const Sidebar = ( { className, ...props }: SidebarProps): JSX.Element => {
    return (
        <aside className={cn(className, styles.sidebar)} {...props}>
            <OwlIcon className={styles.owl_icon} />
            <div className={styles.search}>
                <input className={styles.input} type="text" placeholder="Поиск..." />
                <button className={styles.search__button}>
                    <Lens />
                </button>
            </div>
            <ul className={styles.list}>
                <li>
                    <CoursesIcon />
                    <span>Курсы</span>
                    <ul>
                        <li>
                            <span>ДИЗАЙН</span>
                            <ul>
                                <li>Photoshop</li>
                                <li>AfterEffect</li>
                                <li>Illustrator</li>
                                <li>Figma</li>
                            </ul>
                        </li>
                        <li>РАЗРАБОТКА</li>
                        <li>АНАЛИТИКА</li>
                        <li>МАРКЕТИНГ</li>
                    </ul>
                </li>
                <li>
                    <ServicesIcon />
                    <span>Сервисы</span>
                </li>
                <li>
                    <BooksIcon />
                    <span>Книги</span>
                </li>
                <li>
                    <GoodsIcon />
                    <span>Товары</span>
                </li>
            </ul>
        </aside>
    );
};
