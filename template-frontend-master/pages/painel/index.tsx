import { makeStyles, Paper, Typography, Theme } from '@material-ui/core';
import Container from '../../components/UI/Container/Container';
import GridItem from '../../components/UI/GridItem/GridItem';
import RouteGuard from '../../components/RouteGuard/RouteGuard';
import Menu from '../../components/Navigation/Menu/Menu';
import { useSession } from 'next-auth/client';

const Painel: any = () => {
  const classes = useStyles();
  const [session] = useSession();
  return (
    <>
      <RouteGuard>
        <Menu />
        <Container className="mt-20">
          <GridItem xs={12} md={3}>
            <Paper className={classes.cardUser}>
              <img
                src={session ? session.user.image : ''}
                alt="Avatar"
                className={classes.userImage}
              />
              <Typography
                variant="body1"
                color="primary"
                className="font-semibold"
              >
                {session ? session.user.name : ''}
              </Typography>
              <Typography variant="h3" color="secondary">
                {session ? session.user.email : ''}
              </Typography>
            </Paper>
          </GridItem>
          <GridItem xs={12} md={9}>
            <Paper className={classes.cardInfos}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              dicta iusto molestiae quas rem officia est unde dignissimos
              obcaecati aliquid porro quae accusamus? Et esse rerum iusto autem
              incidunt fuga.
            </Paper>
          </GridItem>
        </Container>
      </RouteGuard>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  cardUser: {
    marginBottom: '18px',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: theme.palette.menuBoxShadow.main,
    backgroundColor: theme.palette.customBackgroundColor.main,
  },
  cardInfos: {
    marginBottom: '18px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: theme.palette.menuBoxShadow.main,
    backgroundColor: theme.palette.customBackgroundColor.main,
  },
  userImage: {
    margin: '0 auto',
    width: '120px',
    borderRadius: '100%',
    marginBottom: '8px',
  },
}));

export default Painel;
