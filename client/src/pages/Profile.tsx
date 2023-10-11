import React, { useEffect } from 'react';
import '../styles/profile.scss';
import { ReactSVG } from 'react-svg';
import MintIcon from './../images/itheum.svg';
import RestartIcon from './../images/restart.svg';
import { useNavigate } from 'react-router-dom';
import { logout } from '@multiversx/sdk-dapp/utils';
import Loading from './Loading';
import RadarChart from 'components/RadarChart';
import { useGetAccount } from '@multiversx/sdk-dapp/hooks/account/useGetAccount';

export default function Profile() {
    const navigate = useNavigate();
    const { address } = useGetAccount();

    function fetchProfile() {
        console.warn('fetchProfile not implemented yet');
        // TODO bug: fetchProfile is called twice
        // TODO add catch
        // TODO add api call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    'Gaming': 100,
                    'Defi': 40,
                    'NFTs': 100,
                    'Stacking': 46,
                    'Trading': 17,
                    'Mining': 70,
                }); // TODO fake data
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
                <p className="address">{address}</p>
                <div className="profile-picture"><img src="/img/tmp-layout.png" alt={"Profile picture of " + address} /></div>
                <div className="unknow-container">???? ???</div>
                <div className="datas">
                    <div className="itheum" onClick={mintWithItheum}>
                        <span>Mint DataNFT with ITHEUM</span>
                        <ReactSVG src={MintIcon} className='svg' />
                    </div>
                    <div className="radar-tags">
                        <RadarChart profile={profile} />
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