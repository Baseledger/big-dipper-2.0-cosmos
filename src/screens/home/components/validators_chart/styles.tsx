import {
  makeStyles, useTheme,
} from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        },
        label: {
          marginBottom: theme.spacing(2),
        },
        data: {
          display: 'flex',
          '& .data__item': {
            width: '50%',
            whiteSpace: 'pre-wrap',
            '& h4': {
              color: theme.palette.custom.fonts.fontTwo,
            },
            '& .MuiTypography-caption': {
              color: theme.palette.custom.fonts.fontThree,
            },
          },
        },
        legends: {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          width: '100%',
          '& .MuiTypography-caption': {
            color: theme.palette.custom.fonts.fontThree,
          },
          '& .legends__item': {
            width: '48%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            '&:nth-child(odd)': {
              marginRight: '12px',
            },
            '& .box': {
              content: '""',
              display: 'inline-block',
              width: '12px',
              height: '12px',
              marginRight: '5px',
            },
            '& .caption__percent': {
              color: theme.palette.custom.fonts.fontThree,
            },
          },
        },
        content: {
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
        },
      });
    },
  )();

  return {
    classes: styles,
    theme: useTheme(),
  };
};
