import React, { useEffect, useState } from 'react';


const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false); 
            }, 3000); 
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <>
            {isLoading && (
                <div id="preloader" className='preloader d-flex align-items-center justify-content-center'>
                    <img src="https://htmlburger.com/blog/wp-content/uploads/2021/07/The-Best-50-Website-Preloaders-Around-the-Web-Example-27.gif" alt="" />
                </div>
            )}
        </>
    );
};

export default Preloader;