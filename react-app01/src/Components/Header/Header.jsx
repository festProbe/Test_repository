import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo_block}>
                <img className={s.logo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCvMC35mZ9zwoLonZb_iOSc_gQFccPGB729g&usqp=CAU"
                    alt=""/>
            </div>
        </header>
    );
}

export default Header;