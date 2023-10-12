import React from 'react';
import style from './../styles/modules/Footer.module.scss';

export default function FooterSection() {
    return (
        <footer className={style.footer}>
            <img src="/img/tkyc_logo.png" alt="Logo TKYC" />
            <p>is made to show the potential of processes Data from blockchain for the MultiversX Hackathon</p>
        </footer>
    );
}