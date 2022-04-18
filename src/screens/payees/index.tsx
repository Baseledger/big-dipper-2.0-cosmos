import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import { List } from './components';

const Payees = () => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  return (
    <>
      <NextSeo
        title={t('payees')}
        openGraph={{
          title: t('payees'),
        }}
      />
      <Layout
        navTitle={t('payees')}
        className={classes.root}
      >
        <List />
      </Layout>
    </>
  );
};

export default Payees;
