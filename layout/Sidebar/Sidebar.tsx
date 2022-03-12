import React from "react";
import cn from 'classnames';
import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css';
import {Menu} from "../Menu/Menu";
import Logo from '../owl-icon.svg';
import {MenuSearch} from "../../components/MenuSearch/MenuSearch";

export const Sidebar = ( { className, ...props }: SidebarProps): JSX.Element => {
    return (
        <aside className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo} />
            <MenuSearch />
            <Menu />
        </aside>
    );
};
