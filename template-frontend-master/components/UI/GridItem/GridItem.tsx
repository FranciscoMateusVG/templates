import { Grid } from '@material-ui/core';

const GridItem: any = (props: any) => {
  return (
    <Grid item {...props}>
      {props.children}
    </Grid>
  );
};

export default GridItem;
