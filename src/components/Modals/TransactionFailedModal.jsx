import React from "react";
import styled from "styled-components";

import { Close, Fail } from "./Icons";
import * as Modal from "./styles";
import { responsive } from "theme/constants";

const FailIconWrapper = styled(Modal.ModalIconWrapper)`
  background-color: ${(props) => props.theme.colors.highlightRed};
  border-color: #412a33;

  svg * {
    fill: ${(props) => props.theme.colors.textPrimary};
  }
`;

const FooterControls = styled(Modal.FooterControls)`
  justify-content: center;
`;

const Message = styled.div`
  padding: 32px;
  margin: 32px 0 24px;

  background-color: ${(props) => props.theme.colors.bgDarken};
  border-radius: 8px;

  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;

  @media screen and (max-width: ${responsive.laptop}) {
    padding: 24px;
    margin: 24px 0 20px;
  }

  @media screen and (max-width: ${responsive.smartphone}) {
    font-size: 14px;
  }
`;

export default function TransactionFailedModal({ closeModal, error }) {
  return (
    <Modal.Wrapper>
      <Modal.CloseIcon onClick={closeModal}>
        <Close />
      </Modal.CloseIcon>

      <main>
        <FailIconWrapper>
          <Fail />
        </FailIconWrapper>
        <Modal.Caption>Transaction Failed</Modal.Caption>

        <Message>
          {error.toString()}
        </Message>
      </main>
      <footer>
        <FooterControls>
          <Modal.PrimaryButton onClick={closeModal}>Ok &#x1f625;</Modal.PrimaryButton>
        </FooterControls>
      </footer>
    </Modal.Wrapper>
  );
}
