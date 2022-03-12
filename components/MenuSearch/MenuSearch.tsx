import React from "react";
import cn from 'classnames';
import styles from "./MenuSearch.module.css";
import {MenuSearchProps} from "./MenuSearch.props";
import SearchIcon from "./lens-icon.svg";

export const MenuSearch = ({ className, ...props }: MenuSearchProps): JSX.Element => {
    return (
        <div className={cn(className, styles.searchContainer)} {...props}>
            <input type="text" placeholder="Поиск..." className={styles.search}/>
            <div className={styles.button}>
                <SearchIcon className={styles.lens} />
            </div>
        </div>
    );
};
