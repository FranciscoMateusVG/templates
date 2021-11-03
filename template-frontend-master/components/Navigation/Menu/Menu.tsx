import React, { useState, useEffect } from 'react';
import { Theme, makeStyles } from '@material-ui/core';
import Container from '../../UI/Container/Container';
import GridItem from '../../UI/GridItem/GridItem';
import DarkModeButton from './children/DarkModeButton/DarkModeButton';
import { debounce } from './util/debounce';
import MenuLinks from './children/MenuLinks/MenuLinks';
import LogoSvg from '../../UI/LogoSvg/LogoSvg';

const Menu: any = () => {
  const classes = useStyles();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 30) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <div
        className={
          visible
            ? `${classes.showMenu} ${classes.menuDivPai}`
            : `${classes.hideMenu} ${classes.menuDivPai}`
        }
      >
        <Container className={classes.menuContainer}>
          <GridItem xs={1} md={1} className="text-left">
            <div className={classes.logoImg}>
              <LogoSvg classe={classes.logoSvgStyle} />
            </div>
          </GridItem>
          <GridItem xs={6} md={10} className="text-right">
            <MenuLinks />
          </GridItem>
          <GridItem xs={2} md={1} className="text-right">
            <DarkModeButton />
          </GridItem>
        </Container>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  iconeAbrirMenu: {
    padding: 0,
    cursor: 'pointer',
    marginTop: '7px',
  },
  menuDivPai: {
    boxShadow: theme.palette.menuBoxShadow.main,
    backgroundColor: theme.palette.menuBackgroundColor.main,
    zIndex: 1200,
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 'auto',
    right: 0,
  },
  showMenu: {
    transform: 'none',
    transition: 'all .15s ease-in',
  },
  hideMenu: {
    transform: 'translateY(-64px)',
    transition: 'all .15s ease-in',
  },
  menuContainer: {
    paddingTop: '13px',
    paddingBottom: '13px',
  },
  logoImg: {
    width: '35px',
    marginTop: '4px',
  },
  logoSvgStyle: {
    fill: theme.palette.corBase.main,
    stroke: theme.palette.corBase.main,
  },
}));

export default Menu;
