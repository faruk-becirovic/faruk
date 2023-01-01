import { Oswald } from '@next/font/google';

import Footer from "./footer";
import Navigation from "./navbar";

const font = Oswald({ subsets: ['latin'] });

export default function Layout(props: any) {
    return (
        <div className={font.className}>
            <Navigation />
            {props.children}
            <Footer />
        </div>
    );
}
