import React from 'react';
import { MsgCreateOrchestratorValidatorAddress } from '@models';
// import { useProfileRecoil } from '@recoil/profiles';
import { useGetStyles } from '../../unknown/styles';

const OrchestratorValidatorAddress = (props: {
  message: MsgCreateOrchestratorValidatorAddress;
}) => {
  // const { message } = props;
  // const validator = undefined;
  // const validatorMoniker = validator ? validator?.name : message.creator;

  // return (
  //   <Typography>
  //     <Trans
  //       i18nKey="message_contents:txUnjailContent"
  //       components={[
  //         (
  //           <Name
  //             address={message.creator}
  //             name={validatorMoniker}
  //           />
  //         ),
  //       ]}
  //     />
  //   </Typography>
  // );
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
