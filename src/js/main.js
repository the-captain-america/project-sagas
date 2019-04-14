import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { grey500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Routes from './routes';

const palette = {
  primary1Color: grey500,
  secondaryColor: grey500,
  primary2Color: grey500,
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey500,
    secondaryColor: grey500,
    primary2Color: grey500,
  },
  checkbox: {
    boxColor: palette.secondaryColor,
    checkedColor: palette.secondaryColor,
    requiredColor: palette.primaryColor,
    disabledColor: palette.secondaryColor,
    labelColor: palette.secondaryColor,
    labelDisabledColor: palette.secondaryColor,
  },
  RadioButton: {
    labelStyle: palette.secondaryColor,
    inputStyle: palette.secondaryColor,
    style: palette.secondaryColor,
  },
});

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById('app'),
);
