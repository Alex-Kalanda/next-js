import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode;
    className?: string;
    size: 'small' | 'mid' | 'big';
}
