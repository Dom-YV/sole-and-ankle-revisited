/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <MenuOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <MenuContent aria-label='Menu'>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
          <VisuallyHidden>Close Menu</VisuallyHidden>
        </CloseButton>
        <NavWrapper>
          <Spacer/>
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>
          <Spacer>
            <NavFooter>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
            </NavFooter>
          </Spacer>
        </NavWrapper>
      </MenuContent>
    </MenuOverlay>
  );
};

const MenuOverlay = styled(DialogOverlay)`
  position: absolute;
  background: rgba(96, 100, 108, 0.8);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`

const MenuContent = styled(DialogContent)`
  position: absolute;
  width: 300px;
  height: 100%;
  top: 0;
  right: 0;
  background: white;
  padding: 32px;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 22px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  a {
    text-transform: uppercase;
    color: var(--color-gray-900);
    text-decoration: none;
    font-weight: 600;
    font-size: ${18/16}rem;
  }

  a:first-of-type {
    color: var(--color-secondary);
  }
`

const NavFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
  height: 100%;

  a {
    color: var(--color-gray-700);
    text-decoration: none;
    font-weight: 500;
    font-size: ${14/16}rem;
  }
`

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Spacer = styled.div`
  flex: 1;
`

export default MobileMenu;
