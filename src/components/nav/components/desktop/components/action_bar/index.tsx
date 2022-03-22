import React from 'react';
import classnames from 'classnames';
import { useGetComponentDimension } from '@hooks';
import { useStyles } from './styles';
import {
  // Network,
  // NetworkList,
  SettingsList,
} from './components';
import { SearchBar } from '../../..';

const ActionBar: React.FC<{
  isNetwork: boolean;
  className?: string;
  toggleNetwork: () => void;
}> = ({
  // toggleNetwork,
  className,
  isNetwork,
}) => {
  const {
    ref: heightRef,
    // height,
  } = useGetComponentDimension();
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)} ref={heightRef}>
      <div className={classes.actions}>
        <SearchBar className={classnames(classes.searchBar, { open: isNetwork })} />
        {/* <Network
          className={classnames(classes.network, { open: isNetwork })}
          toggleNetwork={toggleNetwork}
        /> */}
        <div className={classes.urlSettings}>
          <a href="https://baseledger.net" target="_blank" rel="noreferrer noopener">
            baseledger.net
          </a>
          <SettingsList className={classes.settingList} />
        </div>
      </div>
      {/* <NetworkList
        actionHeight={height}
        className={classnames(classes.networkList, {
          open: isNetwork,
        })}
      /> */}
    </div>
  );
};

export default ActionBar;
