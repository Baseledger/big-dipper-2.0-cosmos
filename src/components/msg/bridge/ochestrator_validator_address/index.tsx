import React from 'react';
import { MsgCreateOrchestratorValidatorAddress } from '@models';
import { useGetStyles } from '../../unknown/styles';

const OrchestratorValidatorAddress = (props: {
  message: MsgCreateOrchestratorValidatorAddress;
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

export default OrchestratorValidatorAddress;
