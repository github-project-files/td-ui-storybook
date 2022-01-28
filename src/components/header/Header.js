import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import { Button } from "../button/Button";
import { ReactComponent as IconLogo } from "../../assets/icons/logo.svg";

const StyledHeader = Styled.header`
  .wrapper {
    // font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    display: inline-block;
    vertical-align: top;
  }

  h1 {
    font-weight: 900;
    font-size: 20px;
    line-height: 1;
    margin: 6px 0 6px 10px;
    display: inline-block;
    vertical-align: top;
  }

  button + button {
    margin-left: 10px;
  }

`;

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
    <StyledHeader>
        <div className="wrapper">
            <div>
                <IconLogo />
                <h1>Acme</h1>
            </div>
            <div>
                {user ? (
                    <Button size="small" onClick={onLogout} label="Log out" />
                ) : (
                    <>
                        <Button size="small" onClick={onLogin} label="Log in" />
                        <Button
                            primary
                            size="small"
                            onClick={onCreateAccount}
                            label="Sign up"
                        />
                    </>
                )}
            </div>
        </div>
    </StyledHeader>
);

Header.propTypes = {
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired
};

Header.defaultProps = {
    user: null
};
