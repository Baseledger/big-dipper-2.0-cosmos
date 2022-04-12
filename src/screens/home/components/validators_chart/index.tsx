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
import { useValidators } from '@src/screens/validators/components/list/hooks';
import { useStyles } from './styles';

const chartColors = (amount) => {
  const colors = [];
  for (let i = 0; i < amount; i += 1) {
    colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  return colors;
};

const ValidatorsChart:React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('home');
  const {
    classes,
  } = useStyles();
  const {
    state,
    sortItems,
  } = useValidators();

  const dataProfiles = useProfilesRecoil(state.items.map((x) => x.validator));
  const mergedDataWithProfiles = state.items.map((x, i) => {
    return ({
      ...x,
      validator: dataProfiles[i],
    });
  });
  const items = sortItems(mergedDataWithProfiles);
  const colors = chartColors(items.length);

  const validatorData = [];
  items.sort((a, b) => b.votingPower - a.votingPower).forEach((item, index) => {
    validatorData.push({
      legendKey: item.validator.name,
      percentKey: `${item.validator.name}Percent`,
      value: numeral(item.votingPower).format('0,0'),
      rawValue: item.votingPower,
      percent: `${numeral(item.votingPowerPercent).format('0.00')}%`,
      fill: colors[index],
    });
  });

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('validators')}
      </Typography>
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
                    {x.legendKey}
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

export default ValidatorsChart;
