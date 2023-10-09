import React, { useEffect } from 'react';
import { useGetAccount } from '@multiversx/sdk-dapp/hooks/account';
import { useWebWalletLogin } from '@multiversx/sdk-dapp/hooks/login/useWebWalletLogin';
import Button from 'components/Button';
import '../styles/home.scss';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [initiateLogin] = useWebWalletLogin({ callbackRoute: "/" });

  const { address } = useGetAccount();
  const isConnected = address != "";

  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      navigate('/profile');
    }
  }, [isConnected]);

  function connectWallet() {
    initiateLogin();
  }

  return (
    <div id='body-container' className='home'>
      <div className="center-container">
        <h1>Discover Your <span>MultiversX Profile</span></h1>
        <p className="description">Le projet TKYC est lorem ipsum etc lalala imsup maguel michel laurent et mon sapin doré. Il fait beau e été et froid en hivers, c’est la vie you can see more about projet in <a href="#">this notion</a></p>
        <Button className='button' onClick={connectWallet}>Connect my wallet</Button>
      </div>
    </div>
  );
}