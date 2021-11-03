import Menu from '../components/Navigation/Menu/Menu';
import Fade from 'react-reveal/Fade';
import Sample from '../containers/Home/Sample/Sample';

const Home: any = () => {
  return (
    <>
      <Menu />
      <Fade>
        <Sample />
      </Fade>
    </>
  );
};

export default Home;
