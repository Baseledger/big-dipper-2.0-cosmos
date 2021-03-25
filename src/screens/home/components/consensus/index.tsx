import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  Box, AvatarName,
} from '@components';
import {
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  Tooltip,
} from 'recharts';
import { useStyles } from './styles';

const Consensus: React.FC<{
  className?: string;
}> = ({ className }) => {
  const {
    classes, theme,
  } = useStyles();
  const { t } = useTranslation('home');

  const data = [
    {
      value: 73,
      fill: theme.palette.custom.primaryData.three,
    },
  ];

  const circleSize = 200;

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('consensus')}
      </Typography>
      <div className={classes.info}>
        <div>
          <Typography variant="caption" className="label" component="div">
            {t('height')}
          </Typography>
          <Typography variant="caption" className="label" component="div">
            {t('proposer')}
          </Typography>
        </div>
        <div>
          <Typography variant="h4">
            100,500
          </Typography>
          <AvatarName address="Forbole" name="Forbole" />
        </div>
      </div>
      <div className={classes.content}>
        <RadialBarChart
          className={classes.chart}
          width={circleSize}
          height={circleSize}
          cx={circleSize / 2}
          cy={circleSize / 2}
          innerRadius={90}
          outerRadius={90}
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={circleSize / 2}
          />
          <Tooltip />
          <text
            x={circleSize / 2}
            y={circleSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            <tspan className={classes.chartPercentLabel}>
              73%
            </tspan>
          </text>
          <text
            x={(circleSize / 2) - 32}
            y={(circleSize / 2) + 35}
            className={classes.chartExtraLabel}
          >
            <tspan className={classes.chartLabel}>
              Round 0
            </tspan>
          </text>
          <text
            x={(circleSize / 2) - 24}
            y={(circleSize / 2) + 55}
            className={classes.chartExtraLabel}
          >
            <tspan className={classes.chartLabel}>
              Step 1
            </tspan>
          </text>
        </RadialBarChart>
      </div>
    </Box>
  );
};

export default Consensus;