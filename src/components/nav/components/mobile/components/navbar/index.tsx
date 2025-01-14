import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import BigDipperLogoWhite from '@assets/big-dipper-white.svg';
import BigDipperLogoRed from '@assets/big-dipper-red.svg';
import { HOME } from '@utils/go_to_page';
import { readTheme } from '@recoil/settings';
import { useStyles } from './styles';
import { NavbarProps } from './types';

const Navbar = (props:NavbarProps) => {
  const classes = useStyles();
  const theme = useRecoilValue(readTheme);
  const {
    isOpen,
    toggleNavMenus,
  } = props;

  return (
    <div className={classes.root}>
      <Link href={HOME}>
        <a className={classes.a}>
          {theme === 'light' ? (
            <BigDipperLogoRed className={classes.logo} />
          ) : (
            <BigDipperLogoWhite className={classes.logo} />
          )}
        </a>
      </Link>
      <div className={classes.actions}>
        {/* =================================== */}
        {/* Baseledger URL */}
        {/* =================================== */}
        <div className={classes.baseledgerUrl}>
          <a href="https://baseledger.net" target="_blank" rel="noreferrer noopener">
            baseledger.net
          </a>
        </div>
        {/* =================================== */}
        {/* Hamburger */}
        {/* =================================== */}
        <div
          role="button"
          onClick={toggleNavMenus}
          className={classnames(classes.hamburger, {
            active: isOpen,
          })}
        >
          <div className="hamburger-content" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
