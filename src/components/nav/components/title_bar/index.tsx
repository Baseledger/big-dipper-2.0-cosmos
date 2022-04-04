import React from 'react';
import * as R from 'ramda';
import classnames from 'classnames';
import { useRecoilValue } from 'recoil';
import { Typography } from '@material-ui/core';
import { chainConfig } from '@configs';
import { readTheme } from '@recoil/settings';
import { useStyles } from './styles';

const TitleBar:React.FC<{
  className?: string;
  title: string;
}> = ({
  className, title,
}) => {
  const theme = useRecoilValue(readTheme);
  const classes = useStyles();

  const logoUrl = R.pathOr(chainConfig.logo.default, ['logo', theme], chainConfig);

  return (
    <div className={classnames(className, classes.root)}>
      {
      title
        ? <Typography variant="h1">{title}</Typography>
        : <img src={logoUrl} className={classes.logo} alt="logo" />
      }
    </div>
  );
};

export default TitleBar;
