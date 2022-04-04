import React from 'react';
import { MsgUbtDepositedClaim } from '@models';
import { useGetStyles } from '../../unknown/styles';

const UbtDepositedClaim = (props: {
  message: MsgUbtDepositedClaim;
}) => {
  const { message } = props;

  const { classes } = useGetStyles();
  return (
    <pre className={classes.root}>
      <code>
        {JSON.stringify(message.json, null, '\t')}
      </code>
    </pre>
  );
};

export default UbtDepositedClaim;
