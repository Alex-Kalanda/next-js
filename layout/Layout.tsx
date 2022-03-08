import React, {FunctionComponent} from "react";
import cn from 'classnames';
import styles from './Layout.module.css';
import {LayoutProps} from "./Layout.props";
import {Sidebar} from "./Sidebar/Sidebar";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";

const Layout = ({ children, className }: LayoutProps) => {
    return (
        <div className={className} >
            <Header className={styles.header}/>
            <main className={styles.main}>
                <Sidebar className={styles.sidebar} />
                <div className={styles.main__content}>{children}</div>
            </main>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
      return (
          <Layout className="page">
              <Component {...props}/>
          </Layout>
      );
  };
};
