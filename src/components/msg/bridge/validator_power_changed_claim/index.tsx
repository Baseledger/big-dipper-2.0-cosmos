import React from 'react';
import { MsgValidatorPowerChangedClaim } from '@models';
import { useGetStyles } from '../../unknown/styles';

const ValidatorPowerChangedClaim = (props: {
  message: MsgValidatorPowerChangedClaim;
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

export default ValidatorPowerChangedClaim;
