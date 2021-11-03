import {
  Paper,
  Avatar,
  Typography,
  makeStyles,
  Theme,
} from '@material-ui/core';

const Card: any = ({ titulo, subTitulo, icone }) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paperStyle}>
        <Avatar className={classes.avatarStyle}>
          <span className={classes.iconStyle}>{icone}</span>
        </Avatar>
        <Typography variant="h2" color="primary" className="mb-4">
          {titulo}
        </Typography>
        <Typography variant="body2" color="secondary">
          {subTitulo}
        </Typography>
      </Paper>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  avatarStyle: {
    textAlign: 'center',
    marginBottom: '10px',
    display: 'inline-block',
    width: '50px',
    height: '50px',
    backgroundColor: theme.palette.corBase.main,
  },
  iconStyle: {
    marginTop: '13px',
    display: 'inline-block',
  },
  paperStyle: {
    padding: '30px',
    margin: '8px',
    borderRadius: '16px',
    boxShadow: theme.palette.menuBoxShadow.main,
    backgroundColor: theme.palette.customBackgroundColor.main,
  },
}));

export default Card;
