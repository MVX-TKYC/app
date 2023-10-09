import React, { useEffect } from 'react';
import '../styles/profile.scss';
import { ReactSVG } from 'react-svg';
import MintIcon from './../images/mint.svg';
import RestartIcon from './../images/restart.svg';
import { useNavigate } from 'react-router-dom';
import { logout } from '@multiversx/sdk-dapp/utils';
import Loading from './Loading';

export default function Profile() {
    const navigate = useNavigate();

    function fetchProfile() {
        console.warn('fetchProfile not implemented yet');
        // TODO bug: fetchProfile is called twice
        // TODO add catch
        // TODO add api call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({});
            }, 8000);
        });
    }

    function getNewProfile() {
        // logout
        logout();

        // go to home page
        navigate('/');
    }

    function mintWithItheum() {
        console.warn('mintWithItheum not implemented yet');
        alert('not implemented yet');
    }

    const [profile, setProfile] = React.useState({} as any);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetchProfile().then((profile) => {
            setProfile(profile);
            setLoading(false);
        });
    }, []);

    if (loading) return (<Loading />);

    return (
        <div id='body-container' className='profile'>
            <div className="center-container">
                <h1>Your porfile look nice!</h1>
                <p className="address">erd????????????????????????????????????????????????</p>
                <div className="profile-picture"><img src="/img/tmp-layout.png" alt="Profile picture of ????????????????????????????????????????????????</" /></div>
                <div className="unknow-container">???? ???</div>
                <div className="datas">
                    <div className="tags">
                        <div className="tag">
                            <span className="title">Gaming</span>
                            <span className="plus">++++</span>
                        </div>
                        <div className="tag">
                            <span className="title">Defi</span>
                            <span className="plus">+</span>
                        </div>
                        <div className="tag">
                            <span className="title">NFTs</span>
                            <span className="plus">++++</span>
                        </div>
                        <div className="tag">
                            <span className="title">Stacking</span>
                            <span className="plus">++</span>
                        </div>
                    </div>
                    <div className="itheum" onClick={mintWithItheum}>
                        <span>Mint DataNFT with ITHEUM</span>
                        <ReactSVG src={MintIcon} className='svg' />
                    </div>
                </div>
            </div>

            <div className="get-new" onClick={getNewProfile}>
                <ReactSVG src={RestartIcon} className='svg' />
                <span>Get another profile</span>
            </div>
        </div>
    );
}