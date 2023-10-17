import React, { useEffect } from 'react';
import '../styles/profile.scss';
import { ReactSVG } from 'react-svg';
import MintIcon from './../images/itheum.svg';
import RestartIcon from './../images/restart.svg';
import { useNavigate } from 'react-router-dom';
import { logout } from '@multiversx/sdk-dapp/utils';
import Loading from '../components/Loading';
import RadarChart from 'components/RadarChart';
import { useGetAccount } from '@multiversx/sdk-dapp/hooks/account/useGetAccount';
import useGetProfile from 'hooks/requests/useGetProfile';


export default function Profile() {
    const navigate = useNavigate();
    const { address } = useGetAccount();
    const profile = useGetProfile(address);
    const [profileImage] = React.useState<string>('/img/tmp-layout.png');


    function getNewProfile() {
        // logout
        logout();

        // go to home page
        navigate('/');
    }

    function mintWithItheum() {
        alert("Not implemented yet")
    }

    function generateXUrl() {
        const hereDomain = window.location.hostname; // TODO add to tweet in a next update
        /*
       Just minted my Data NFT profile (by @Itheum) on the MultiversX blockchain using @Truly_KYC ! 🚀

        My scores are:
        🎮 Gaming: A/100
        💹 DeFi: ?/100
        🚀 Launchpad: ?/100
        💳 Payment: ?/100
        👥 PFP-Community: ?/100
        🔗 DAO: ?/100
        💎 Diamond Hand: ?/100
        */
        return "https://twitter.com/intent/tweet?text=Just%20minted%20my%20Data%20NFT%20profile%20(by%20%40Itheum)%20on%20the%20MultiversX%20blockchain%20using%20%40Truly_KYC%20!%20%F0%9F%9A%80%0A%0AMy%20scores%20are%3A%0A%F0%9F%8E%AE%20Gaming%3A%20" + profile['Gaming'] + "%2F100%0A%F0%9F%92%B9%20DeFi%3A%20" + profile['Defi'] + "%2F100%0A%F0%9F%9A%80%20Launchpad%3A%20" + profile['Launchpad'] + "%2F100%0A%F0%9F%92%B3%20Payment%3A%20" + profile['Payement'] + "%2F100%0A%F0%9F%91%A5%20PFP-Community%3A%20" + profile['PFP-Community'] + "%2F100%0A%F0%9F%94%97%20DAO%3A%20" + profile['DAO'] + "%2F100%0A%F0%9F%92%8E%20Diamond%20Hand%3A%20" + profile['Diamond Hand'] + "%2F100";
    }

    console.log(profile)

    if (profile == undefined) return (<Loading />);

    return (
        <div id='body-container' className='profile'>
            <div className="center-container">
                <h1>Your profile looks great!</h1>
                <p className="address">{address}</p>
                <div className="profile-picture"><img src={profileImage} alt={"Profile picture of " + address} /></div>
                <a className="share-on-x" href={generateXUrl()} target="_blank" rel="noreferrer">Share your profile on X</a>
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
