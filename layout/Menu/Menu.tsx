import React, {useContext} from "react";
import styles from './Menu.module.css';
import cn from 'classnames';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/interface.menu";
import Link from "next/link";
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helpers/helpers";



export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        } ));
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => {
                    return (
                        <div key={m.route}>
                            <Link href={`/${m.route}`}>
                                <a>
                                    <li className={cn(styles.firstLevel, {
                                        [styles.firstLevelActive]: m.id === firstCategory
                                    })}>
                                        {m.icon}
                                        <span>{m.name}</span>
                                    </li>
                                </a>
                            </Link>
                            {m.id === firstCategory && buildSecondLevel(m)}
                        </div>
                    );
                })}
            </>
        );
    };
    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <ul className={styles.secondLevelBlock}>
                { menu.map(m => {
                    if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <li key={m._id.secondCategory}>
                            <span className={styles.secondLevel}
                                  onClick={openSecondLevel.bind(null, m._id.secondCategory)}
                            >{m._id.secondCategory}</span>
                            <ul className={cn(styles.thirdLevelBlock, {
                                [styles.thirdLevelBlockOpened]: m.isOpened
                            })}>
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => {
                return (
                    <div key={p.alias}>
                        <Link href={`/${route}/${p.alias}`}>
                            <a className={cn(styles.thirdLevel, {
                                [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
                            })}>
                                <li>{p.category}</li>
                            </a>
                        </Link>
                    </div>
                );
            })
        );
    };

    return (
        <ul className={styles.menu}>
            {buildFirstLevel()}
        </ul>
    );
};

