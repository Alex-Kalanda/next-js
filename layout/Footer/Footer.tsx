import React from "react";
import cn from 'classnames';
import { format } from 'date-fns';
import styles from "./Footer.module.css";
import {FooterProps} from "./Footer.props";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <span>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</span>
            <a className={styles.link} href='#' target='_blank'>Пользовательское соглашение</a>
            <a className={styles.link} href='#' target='_blank'>Политика конфиденциальности</a>
        </footer>
    );
};
