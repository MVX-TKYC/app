import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { useGetAccount } from '@multiversx/sdk-dapp/hooks/account';
import { useWebWalletLogin } from '@multiversx/sdk-dapp/hooks/login/useWebWalletLogin';
import { logout } from '@multiversx/sdk-dapp/utils';
import { truncateAddress } from "../utils/string"

export default function Home() {
  const [initiateLogin] = useWebWalletLogin({ callbackRoute: "/" });

  const { address } = useGetAccount();
  const isConnected = address != "";

  return (
    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                      alt='Generic placeholder image'
                      fluid />
                  </div>

                  {isConnected ?
                    <RightPanel
                      title="Hey"
                      subtitle={truncateAddress(address)}
                      onBtnClick={logout}
                      btnLabel={"Disconnect"} />
                    :
                    <RightPanel
                      title="Who are you?"
                      subtitle="Connect your discover"
                      onBtnClick={initiateLogin}
                      btnLabel={"Connect"} />
                  }


                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div >
  );
}

type RightPanelProps = {
  title: string,
  subtitle: string,
  onBtnClick: () => void,
  btnLabel: string
}

const RightPanel = ({ title, subtitle, onBtnClick, btnLabel }: RightPanelProps) => {
  return <div className="flex-grow-1 ms-3">
    <MDBCardTitle>{title}</MDBCardTitle>
    <MDBCardText>{subtitle}</MDBCardText>

    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
      style={{ backgroundColor: '#efefef' }}>
      <i className="mx-auto fab fa-instagram fa-2x"></i>
      <i className="mx-auto fab fa-twitter fa-2x"></i>
      <i className="mx-auto fab fa-discord fa-2x"></i>
    </div>
    <div className="d-flex pt-1">
      <MDBBtn className="me-1 flex-grow-1" onClick={onBtnClick}>{btnLabel}</MDBBtn>
    </div>
  </div>
}