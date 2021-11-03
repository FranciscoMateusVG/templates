import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box } from '@material-ui/core';

const Container: any = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 720, md: 1236 }}
    width={'100%'}
    margin={'0 auto'}
    paddingX={2}
    paddingY={{ xs: 2, sm: 4, md: 6 }}
    {...rest}
  >
    <Grid container spacing={2}>
      {children}
    </Grid>
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
