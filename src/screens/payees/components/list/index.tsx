import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import {
  Box,
  NoData,
  LoadAndExist,
} from '@components';
import { useScreenSize } from '@hooks';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import { useValidators } from '@src/screens/validators/components/list/hooks';
import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const List: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const {
    state,
    handleSort,
    sortItems,
  } = useValidators();
  const dataProfiles = useProfilesRecoil(state.items.map((x) => x.validator));
  const mergedDataWithProfiles = state.items.map((x, i) => {
    return ({
      ...x,
      validator: dataProfiles[i],
    });
  });
  const items = sortItems(mergedDataWithProfiles);
  return (
    <LoadAndExist
      loading={state.loading}
      exists={state.exists}
    >
      <Box className={classnames(className)}>
        <div className={classes.list}>
          {items.length ? (
            <>
              {isDesktop ? (
                <Desktop
                  className={classes.desktop}
                  sortDirection={state.sortDirection}
                  sortKey={state.sortKey}
                  handleSort={handleSort}
                  items={items}
                />
              ) : (
                <Mobile
                  className={classes.mobile}
                  items={items}
                />
              )}
            </>
          ) : (
            <NoData />
          )}
        </div>
      </Box>
    </LoadAndExist>
  );
};

export default List;
