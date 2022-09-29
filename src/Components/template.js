import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Footer from './footer';
import HeaderCom from './header';

export default function Template({contents}) {
    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    }, [pathname]);

    return (
        <div>
            <HeaderCom />
            {contents}
            <Footer />
        </div>
    )
};