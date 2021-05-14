import { common, cyan, grey } from '@material-ui/core/colors';
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
    overrides: {
        MuiPaper: {
            root: {
                color: common.white,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: grey[800],
            },
        },
    },
    palette: {
        primary: {
            main: cyan.A200,
        },
        text: {
            primary: common.white,
            secondary: grey[500],
        },
    },
    custom: {
        palette: {
            lightGrey: grey[800],
            darkGrey: grey[900],
        },
    },
});

export default defaultTheme;
