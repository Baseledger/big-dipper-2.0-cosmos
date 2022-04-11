import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import Link from 'next/link';
import dayjs, { formatDayJs } from '@utils/dayjs';
import { Typography } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import useTranslation from 'next-translate/useTranslation';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import {
  BoxDetails, Result,
} from '@components';
import { useStyles } from './styles';
import { OverviewType } from '../../types';

const isBaseledgerTransaction = (messages: any) => {
  return messages.items.length === 1 && messages.items[0].category === 'proof';
};

// TODO: if we introduce better message parsing most of this would not be needed
const getBaseledgerTransactionTransferLog = (logs) => {
  // just to make sure some non-standard transaction does not break the page
  if (!logs || !logs.length || !logs[0].events || !logs[0].events.length) {
    return;
  }
  const transferEvent = logs[0].events.find((e) => e.type === 'transfer');
  if (!transferEvent) {
    return;
  }

  const transferAmountAttr = transferEvent.attributes.find((a) => a.key === 'amount');
  if (!transferAmountAttr) {
    return;
  }

  return transferAmountAttr.value;
};

const getPayloadWorktokensDetails = (messages, logs) => {
  if (!isBaseledgerTransaction(messages)) {
    return;
  }

  return {
    payloadSize: messages.items[0].json.payload.length,
    worktokenUsed: getBaseledgerTransactionTransferLog(logs),
  };
};

const Overview: React.FC<{
  className?: string;
  data: OverviewType;
  messages: any;
  logs: [];
}> = ({
  className, data, messages, logs,
}) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const dateFormat = useRecoilValue(readDate);

  const details = [
    {
      label: t('hash'),
      detail: data.hash,
    },
    {
      label: t('height'),
      detail: (
        <Link href={BLOCK_DETAILS(data.height)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(data.height).format('0,0')}
          </Typography>
        </Link>
      ),
    },
    {
      label: t('time'),
      detail: formatDayJs(dayjs.utc(data.timestamp), dateFormat),
    },
    {
      label: t('result'),
      detail: (
        <Result success={data.success} />
      ),
    },
    {
      className: 'memo',
      label: t('memo'),
      detail: data.memo,
    },
  ];
  const payloadWorktokensDetails = getPayloadWorktokensDetails(messages, logs);
  if (payloadWorktokensDetails) {
    details.splice(3, 0, {
      label: t('payloadTokens'),
      detail: `${payloadWorktokensDetails.payloadSize} / ${payloadWorktokensDetails.worktokenUsed}`,
    });
  }

  if (!data.success) {
    details.push({
      className: 'memo',
      label: t('error'),
      detail: data.error,
    });
  }

  return (
    <BoxDetails
      className={classnames(className, classes.root)}
      title={t('overview')}
      details={details}
    />
  );
};

export default Overview;
