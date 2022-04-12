import React from 'react';
// import Web3 from 'web3';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';

// import myData from './baseledger_abi.json';

const Payees = () => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  // const web3 = new Web3(new Web3.providers.HttpProvider(''));

  // eslint-disable-next-line max-len
  // const contract = new web3.eth.Contract(myData as any, '0xdade4688c10c05716929f91d3005c23d4e233869');
  // console.log('contract',  contract.methods.totalShares().call().then(console.log))
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
        {/* <LoadAndExist
          exists={state.exists}
          loading={state.loading}
        >
          <Box className={classes.box}>
            {txListFormat === 'compact' ? (
              <TransactionsList
                transactions={state.items}
                itemCount={itemCount}
                hasNextPage={state.hasNextPage}
                isNextPageLoading={state.isNextPageLoading}
                loadNextPage={loadNextPage}
                loadMoreItems={loadMoreItems}
                isItemLoaded={isItemLoaded}
              />
            ) : (
              <TransactionListDetails
                transactions={state.items}
                itemCount={itemCount}
                hasNextPage={state.hasNextPage}
                isNextPageLoading={state.isNextPageLoading}
                loadNextPage={loadNextPage}
                loadMoreItems={loadMoreItems}
                isItemLoaded={isItemLoaded}
              />
            )}
          </Box>
        </LoadAndExist> */}
      </Layout>
    </>
  );
};

export default Payees;
