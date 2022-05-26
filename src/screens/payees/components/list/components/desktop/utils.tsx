import React from 'react';

export const fetchPayeesColumns = (): {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
  component?: React.ReactNode;
  sortKey?: string;
  sort?: boolean;
}[] => {
  return ([
    {
      key: 'idx',
      width: 5,
    },
    {
      key: 'validator',
      sortKey: 'validator.name',
      width: 15,
      sort: true,
    },
    {
      key: 'revenueAddress',
      width: 15,
    },
    {
      key: 'stakingAddress',
      width: 15,
    },
    {
      key: 'duePayment',
      width: 15,
    },
    {
      key: 'contractStakes',
      width: 15,
    },
    {
      key: 'ubtStakingBalance',
      width: 15,
    },
    {
      key: 'type',
      width: 5,
    },
  ]);
};
