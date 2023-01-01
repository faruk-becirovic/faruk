import Footer from "./footer";
import Navigation from "./navbar";

export default function Layout(props) {
    return (
        <div>
            <Navigation />
            {props.children}
            <Footer />
        </div>
    );
}
