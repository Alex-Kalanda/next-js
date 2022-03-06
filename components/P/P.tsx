import React from "react";
import cn from 'classnames';
import styles from "./P.module.css";
import {PProps} from "./P.props";

export const P = ({ size='mid', className, children, ...props }: PProps): JSX.Element => {
    return (
        <p className={cn(className, {
            [styles.big]: size === 'big',
            [styles.middle]: size === 'mid',
            [styles.small]: size === 'small',
        })}
           {...props}>
            {children}
        </p>
    );
};
