import {
  Divider,
  makeStyles,
  Theme,
  Typography,
  Button,
} from '@material-ui/core';
import Container from '../../../components/UI/Container/Container';
import GridItem from '../../../components/UI/GridItem/GridItem';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Sample: any = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <GridItem xs={12} md={12}>
          <Typography color="primary" variant="h1" className="mt-20">
            Texto em h1 color primary
          </Typography>
          <Typography color="secondary" variant="h1">
            Texto em h1 color secondary
          </Typography>
          <Typography variant="h1" className={classes.corTemaBase}>
            Texto em h1 color corBase
          </Typography>

          <Divider />
          <br></br>

          <Typography color="primary" variant="body1">
            Texto em body1 color primary
          </Typography>
          <Typography color="secondary" variant="body1">
            Texto em body1 color secondary
          </Typography>
          <Typography variant="body1" className={classes.corTemaBase}>
            Texto em body1 color corBase
          </Typography>

          <Divider />
          <br></br>

          <Typography color="primary" variant="h2">
            Texto em h2 color primary
          </Typography>
          <Typography color="secondary" variant="h2">
            Texto em h2 color secondary
          </Typography>
          <Typography variant="h2" className={classes.corTemaBase}>
            Texto em h2 color corBase
          </Typography>

          <Divider />
          <br></br>

          <Typography color="primary" variant="body2">
            Texto em body2 color primary
          </Typography>
          <Typography color="secondary" variant="body2">
            Texto em body2 color secondary
          </Typography>
          <Typography variant="body2" className={classes.corTemaBase}>
            Texto em body2 color corBase
          </Typography>

          <Divider />
          <br></br>

          <Typography color="primary" variant="h3">
            Texto em h3 color primary
          </Typography>
          <Typography color="secondary" variant="h3">
            Texto em h3 color secondary
          </Typography>
          <Typography variant="h3" className={classes.corTemaBase}>
            Texto em h3 color corBase
          </Typography>

          <Divider />
          <br></br>

          <Button variant="contained" color="primary">
            Botao com background
          </Button>
          <Button variant="outlined" color="primary">
            Botao sem background
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowRightAltIcon />}
          >
            Com icone
          </Button>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowRightAltIcon />}
          >
            Com icone
          </Button>
        </GridItem>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  corTemaBase: {
    color: theme.palette.corBase.main,
  },
}));

export default Sample;
