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
                    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGx1bzk5czhveDNmOWU5MzZqMm40b3Y1cm9lNXRwd3QybmEydmJvOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J8Dzurp032sOQxLE6c/giphy.gif" alt="" />
                </div>
            )}
        </>
    );
};

export default Preloader;