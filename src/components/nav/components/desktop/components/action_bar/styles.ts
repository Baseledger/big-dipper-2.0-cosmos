import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          width: '100%',
          background: theme.palette.background.default,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: theme.spacing(3),
        },
        actions: {
          width: '70%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 5000,
        },
        urlSettings: {
          fontSize: '1.2rem',
          color: 'white',
          display: 'flex',
          justifyContent: 'flex-end',
        },
        settingList: {
          marginLeft: '20px',
        },
        searchBar: {
          width: '50%',
          display: 'flex',
          marginRight: theme.spacing(2),
          '&.open': {
            '& .MuiInputBase-root': {
              background: theme.palette.background.default,
            },
          },
        },
        network: {
          marginRight: theme.spacing(2),
          '&.open': {
            background: theme.palette.background.default,
          },
        },
        networkList: {
          width: '100%',
          zIndex: 1201,
          opacity: 0,
          visibility: 'hidden',
          transition: '0.2s ease-in-out',
          position: 'fixed',
          top: 0,
          left: 0,
          '&.open': {
            opacity: 1,
            visibility: 'visible',
          },
        },
      });
    },
  )();

  return styles;
};
