import React from 'react';
import classnames from 'classnames';
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Divider } from '@material-ui/core';
import { AvatarName } from '@components';
import {
  useList,
  useListRow,
} from '@hooks';
import SinglePayee from './components/single-payee';

const Mobile: React.FC<{
  className?: string;
  items: any[];
}> = ({
  className, items,
}) => {
  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formattedItems = items.map((x, i) => {
    const revenueAddressEtherscan = x.payees && x.payees[0] ? `https://etherscan.io/address/${x.payees[0].revenueAddress}` : '';
    const stakingAddressEtherscan = x.payees && x.payees[0] ? `https://etherscan.io/address/${x.payees[0].stakingAddress}` : '';
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
      duePayment: x.payees && x.payees[0] ? x.payees[0].duePayment : '',
      contractStakes: x.payees && x.payees[0] ? x.payees[0].contractStakes : '',
      ubtStakingBalance: x.payees && x.payees[0] ? x.payees[0].ubtStakingBalance : '',
    });
  });

  return (
    <div className={classnames(className)}>
      <AutoSizer>
        {({
          height, width,
        }) => {
          return (
            <List
              className="List"
              height={height}
              itemCount={formattedItems.length}
              itemSize={getRowHeight}
              ref={listRef}
              width={width}
            >
              {({
                index, style,
              }) => {
                const { rowRef } = useListRow(index, setRowHeight);
                const selectedItem = formattedItems[index];
                return (
                  <div style={style}>
                    <div ref={rowRef}>
                      <SinglePayee {... selectedItem} />
                      {index !== formattedItems.length - 1 && <Divider />}
                    </div>
                  </div>
                );
              }}
            </List>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
