import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  Box, CustomToolTip,
} from '@components';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import { chainConfig } from '@configs';
import { useValidators } from '@src/screens/validators/components/list/hooks';
import { useStyles } from './styles';
import { useTokenomics } from './hooks';

const Tokenomics:React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('home');
  const {
    classes, theme,
  } = useStyles();
  const { state } = useTokenomics();

  const data = [
    {
      legendKey: 'bonded',
      percentKey: 'bondedPercent',
      value: numeral(state.bonded).format('0,0'),
      rawValue: state.bonded,
      percent: `${numeral((state.bonded * 100) / state.total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.one,
    },
  ];

  const validatorData = [];

  const dataProfiles = useProfilesRecoil(useValidators().state.items.map((x) => x.validator));
  const mergedDataWithProfiles = useValidators().state.items.map((x, i) => {
    return ({
      ...x,
      validator: dataProfiles[i],
    });
  });
  const items = useValidators().sortItems(mergedDataWithProfiles);

  items.sort((a, b) => b.votingPower - a.votingPower).forEach((item, index) => {
    validatorData.push({
      legendKey: item.validator.name,
      percentKey: `${item.validator.name}Percent`,
      value: numeral(item.votingPower).format('0,0'),
      rawValue: item.votingPower,
      percent: `${numeral(item.votingPowerPercent).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics[index],
    });
  });

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('tokenomics')}
      </Typography>
      <div className={classes.data}>
        {data.slice(0, 2).map((x) => (
          <div className="data__item" key={x.percentKey}>
            <Typography variant="h4">
              {x.value}
              {' '}
              {chainConfig.tokenUnits[state.denom]?.display?.toUpperCase()}
            </Typography>
          </div>
        ))}
      </div>
      <div className={classes.content}>

        <PieChart
          width={200}
          height={100}
          cy={100}
        >
          <Pie
            stroke="none"
            // cornerRadius={40}
            cy={90}
            data={validatorData}
            startAngle={180}
            endAngle={0}
            // innerRadius={79}
            outerRadius={90}
            fill="#8884d8"
            // paddingAngle={-10}
            dataKey="rawValue"
            // stroke={theme.palette.background.paper}
            // strokeWidth={3}
            isAnimationActive={false}
          >
            {validatorData.map((entry) => {
              return (
                <Cell key={entry.legendKey} fill={entry.fill} />
              );
            })}
          </Pie>
          <Tooltip
            content={(
              <CustomToolTip>
                {(x) => {
                  return (
                    <>
                      <Typography variant="caption">
                        {t(x.legendKey)}
                      </Typography>
                      <Typography variant="body1">
                        {x.value}
                        {' '}
                        (
                        {x.percent}
                        )
                      </Typography>
                    </>
                  );
                }}
              </CustomToolTip>
            )}
          />
        </PieChart>

        <div className={classes.legends}>
          {
            validatorData.map((x) => {
              return (
                <div className="legends__item" key={x.legendKey}>
                  <div className="box" style={{ backgroundColor: `${x.fill}` }} />

                  <Typography variant="caption">
                    {t(x.legendKey)}
                  </Typography>
                </div>
              );
            })
          }
        </div>
      </div>
    </Box>
  );
};

export default Tokenomics;
