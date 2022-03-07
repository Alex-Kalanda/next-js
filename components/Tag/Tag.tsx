import React from "react";
import cn from 'classnames';
import styles from "./Tag.module.css";
import {TagProps} from "./Tag.props";

export const Tag = ({ type='grey', className, href, children, ...props }: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.grey]: type === 'grey',
            [styles.green]: type === 'green',
            [styles.red]: type === 'red',
            [styles.ghost]: type === 'ghost',
        })}
           {...props}>
            { href ? <a href={href}>{children}</a> : <>{children}</> }
        </div>
    );
};
