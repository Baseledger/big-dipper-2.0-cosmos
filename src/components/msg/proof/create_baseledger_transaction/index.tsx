import React from 'react';
import { MsgCreateBaseledgerTransaction } from '@models';
import { useGetStyles } from '../../unknown/styles';

const CreateBaseledgerTransaction = (props: {
  message: MsgCreateBaseledgerTransaction;
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

export default CreateBaseledgerTransaction;
