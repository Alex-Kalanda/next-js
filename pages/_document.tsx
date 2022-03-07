import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";
import React from "react";

class MyDocument extends Document {

    static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(context);
        return {...initialProps};
    }

    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@200;300;400;500;600;700&family=Sen&display=swap"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
