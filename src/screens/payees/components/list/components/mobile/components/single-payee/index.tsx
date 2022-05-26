import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

const SinglePayee: React.FC<{
  className?: string;
  idx: string;
  validator: React.ReactNode;
  revenueAddress: React.ReactNode;
  stakingAddress: React.ReactNode;
  contractStakes: string;
  duePayment: string;
  ubtStakingBalance: string;
  type: string;
}> = ({
  className,
  validator,
  revenueAddress,
  stakingAddress,
  contractStakes,
  duePayment,
  ubtStakingBalance,
  type,
}) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('validator')}
        </Typography>
        {validator}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('revenueAddress')}
        </Typography>
        {revenueAddress}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('stakingAddress')}
        </Typography>
        {stakingAddress}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('contractStakes')}
        </Typography>
        {contractStakes}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('duePayment')}
        </Typography>
        {duePayment}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('ubtStakingBalance')}
        </Typography>
        {ubtStakingBalance}
      </div>
      {
        type && (
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('type')}
          </Typography>
          {type}
        </div>
        )
      }
    </div>

  );
};

export default SinglePayee;
