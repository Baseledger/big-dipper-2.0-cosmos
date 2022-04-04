import React from 'react';
import classnames from 'classnames';
import { useGetComponentDimension } from '@hooks';
import { useStyles } from './styles';
import {
  SettingsList,
} from './components';
import { SearchBar } from '../../..';

const ActionBar: React.FC<{
  isNetwork: boolean;
  className?: string;
  toggleNetwork: () => void;
}> = ({
  className,
  isNetwork,
}) => {
  const {
    ref: heightRef,
  } = useGetComponentDimension();
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)} ref={heightRef}>
      <div className={classes.actions}>
        <SearchBar className={classnames(classes.searchBar, { open: isNetwork })} />
        <div className={classes.urlSettings}>
          <a href="https://baseledger.net" target="_blank" rel="noreferrer noopener">
            baseledger.net
          </a>
          <SettingsList className={classes.settingList} />
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
