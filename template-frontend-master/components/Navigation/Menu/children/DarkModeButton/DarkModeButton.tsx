import { Switch } from '@material-ui/core';
import { useDarkModeState } from '../../../../../globalStates/darkMode/darkMode';

const DarkModeButton: any = () => {
  const darkModeState = useDarkModeState();
  return (
    <>
      <Switch
        checked={darkModeState.get()}
        onChange={() => darkModeState.toggle()}
        color="primary"
      />
    </>
  );
};

export default DarkModeButton;
