
import { useEffect } from 'react';

const ScrolltoTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}



export default ScrolltoTop