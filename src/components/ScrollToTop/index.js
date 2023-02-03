import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    // whenever the route changes, scroll to the beginning of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}