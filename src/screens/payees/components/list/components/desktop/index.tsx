import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import { Typography } from '@material-ui/core';
import { useGrid } from '@hooks';
import {
  SortArrows,
  AvatarName,
} from '@components';
import { useStyles } from './styles';
import {
  fetchPayeesColumns,
} from './utils';

const Desktop: React.FC<{
  className?: string;
  sortDirection: 'desc' | 'asc';
  sortKey: string;
  handleSort: (key: string) => void;
  items: any[];
  payees?: boolean;
}> = (props) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const columns = fetchPayeesColumns();

  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  } = useGrid(columns);

  const formattedItems = props.items.map((x, i) => {
    const revenueAddressEtherscan = x.payees && x.payees[0] ? `https://etherscan.io/address/${x.payees[0].revenueAddress}` : '';
    let stakingAddressEtherscan = x.payees && x.payees[0] ? `https://etherscan.io/address/${x.payees[0].stakingAddress}` : '';

    if (x.payees && x.payees[0] && x.payees[0].stakeAddressOverride) {
      stakingAddressEtherscan = x.payees[0].stakeAddressOverride;
    }

    let stakingBalance = x.payees && x.payees[0] ? x.payees[0].ubtStakingBalance : '';
    if (stakingBalance === '0') {
      stakingBalance = '0 UBT (check staking address)';
    } else {
      stakingBalance = `${Math.round(x.payees[0].ubtStakingBalance / 100000000)} UBT`;
    }
    return ({
      idx: `#${i + 1}`,
      validator: (
        <AvatarName
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
          name={x.validator.name}
        />
      ),
      revenueAddress: x.payees && x.payees[0] ? (
        <a target="_blank" href={revenueAddressEtherscan} rel="noreferrer">
          {' '}
          { x.payees[0].revenueAddress }
          {' '}
        </a>
      ) : '',
      stakingAddress: x.payees && x.payees[0] ? (
        <a target="_blank" href={stakingAddressEtherscan} rel="noreferrer">
          {' '}
          { x.payees[0].stakingAddress }
          {' '}
        </a>
      ) : '',
      duePayment: x.payees && x.payees[0] ? `${Math.round(x.payees[0].duePayment / 100000000)} UBT` : '',
      contractStakes: x.payees && x.payees[0] ? `${Math.round(x.payees[0].contractStakes / 100000000)} UBT` : '',
      ubtStakingBalance: stakingBalance,
    });
  });

  return (
    <div className={classnames(props.className, classes.root)}>
      <AutoSizer onResize={onResize}>
        {({
          height, width,
        }) => {
          return (
            <>
              {/* ======================================= */}
              {/* Table Header */}
              {/* ======================================= */}
              <Grid
                ref={columnRef}
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={50}
                rowCount={1}
                rowHeight={() => 50}
                width={width}
              >
                {({
                  columnIndex, style,
                }) => {
                  const {
                    key,
                    align,
                    component,
                    sort,
                    sortKey: sortingKey,
                  } = columns[columnIndex];

                  const formattedComponent = component;

                  return (
                    <div
                      style={style}
                      className={classnames(
                        classes.cell,
                        {
                          [classes.flexCells]: component || sort,
                          [align]: sort || component,
                          sort,
                        },
                      )}
                      onClick={() => (sort ? props.handleSort(sortingKey) : null)}
                      role="button"
                    >
                      {formattedComponent || (
                      <Typography
                        variant="h4"
                        align={align}
                      >
                        {t(key)}
                        {!!sort && (
                        <SortArrows
                          sort={props.sortKey === sortingKey
                            ? props.sortDirection
                            : undefined}
                        />
                        )}
                      </Typography>
                      )}
                    </div>
                  );
                }}
              </Grid>
              {/* ======================================= */}
              {/* Table Body */}
              {/* ======================================= */}
              <Grid
                ref={gridRef}
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={height - 50}
                rowCount={formattedItems.length}
                rowHeight={getRowHeight}
                width={width}
                className="scrollbar"
              >
                {({
                  columnIndex, rowIndex, style,
                }) => {
                  const {
                    key, align,
                  } = columns[columnIndex];
                  const item = formattedItems[rowIndex][key];
                  return (
                    <div
                      style={style}
                      className={classnames(classes.cell, classes.body, {
                        odd: !(rowIndex % 2),
                      })}
                    >
                      <Typography
                        variant="body1"
                        align={align}
                        component="div"
                      >
                        {item}
                      </Typography>
                    </div>
                  );
                }}
              </Grid>
            </>
          );
        }}
      </AutoSizer>
    </div>

  );
};

export default Desktop;
