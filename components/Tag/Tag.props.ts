import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode;
    className?: string;
    type: 'grey' | 'green' | 'red'| 'ghost';
    href?: string;
}
