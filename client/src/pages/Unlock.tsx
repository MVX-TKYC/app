import React from "react";
import { WalletConnectLoginButton } from '@multiversx/sdk-dapp/UI/walletConnect/WalletConnectLoginButton/WalletConnectLoginButton';
import { WebWalletLoginButton } from '@multiversx/sdk-dapp/UI/webWallet/WebWalletLoginButton/WebWalletLoginButton';
import { ExtensionLoginButton } from '@multiversx/sdk-dapp/UI/extension/ExtensionLoginButton/ExtensionLoginButton';
import { LedgerLoginButton } from '@multiversx/sdk-dapp/UI/ledger/LedgerLoginButton/LedgerLoginButton';
import { OperaWalletLoginButton } from '@multiversx/sdk-dapp/UI/operaWallet/OperaWalletLoginButton/OperaWalletLoginButton';

const commonProps = {
    callbackRoute: "/"
};

const Unlock = () => {
    return (
        <div className='flex justify-center items-center'>
            <div
                className='flex flex-col p-6 items-center justify-center gap-4 rounded-xl bg-[#f6f8fa]'
                data-testid='unlockPage'
            >
                <div className='flex flex-col items-center gap-1'>
                    <h2 className='text-2xl'>Login</h2>

                    <p className='text-center text-gray-400'>Choose a login method</p>
                </div>

                <div className='flex flex-col md:flex-row'>
                    <WalletConnectLoginButton
                        loginButtonText='xPortal App'
                        {...commonProps}
                    />
                    <LedgerLoginButton loginButtonText='Ledger' {...commonProps} />
                    <ExtensionLoginButton
                        loginButtonText='DeFi Wallet'
                        {...commonProps}
                    />
                    <OperaWalletLoginButton
                        loginButtonText='Opera Crypto Wallet - Beta'
                        {...commonProps}
                    />
                    <WebWalletLoginButton
                        loginButtonText='Web Wallet'
                        data-testid='webWalletLoginBtn'
                        {...commonProps}
                    />
                </div>
            </div>
        </div>
    );
};

export default Unlock;