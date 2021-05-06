import { cyan } from '@material-ui/core/colors';
import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        custom: Record<string, unknown>;
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        custom?: Record<string, unknown>;
    }
}

const defaultTheme = ((options: ThemeOptions) => {
    return createMuiTheme({
        ...options,
    });
})({
    palette: {
        primary: {
            main: cyan.A200,
        },
    },
    custom: {
        controlPanel: {
            backgroundColor: '#333',
        },
        controlDrawer: {
            backgroundColor: '#212121',
        },
    },
});

export default defaultTheme;
