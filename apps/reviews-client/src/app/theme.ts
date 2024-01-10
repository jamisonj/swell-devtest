import { createTheme, PaletteOptions } from '@mui/material/styles';

const palette: PaletteOptions = {
	mode: 'light',
	common: {
		black: '#0d1521',
		white: '#ffffff',
	},
	primary: {
		main: '#e11979',
		light: '#f673b2',
		dark: '#9d2054',
		contrastText: '#ffffff',
	},
	secondary: {
		main: '#1c789c',
		light: '#a6d2e3',
		dark: '#0c5c7b',
		contrastText: '#ffffff',
	},
	success: {
		main: '#5cbd8f',
		light: '#9dd7bc',
		dark: '#175839',
		contrastText: '#0d1521',
	},
	error: {
		main: '#ec6168',
		light: '#f4a0a4',
		dark: '#9a2a31',
		contrastText: '#0d1521',
	},
	warning: {
		main: '#fff9ee',
		dark: '#b28d44',
		contrastText: '#0d1521',
	},
	grey: {
		50: '#f6f8fb',
		100: '#e7eaef',
		200: '#d2d8e0',
		300: '#abb3c0',
		400: '#646c79',
		500: '#2f333a',
	},
	text: {
		primary: '#101418',
		secondary: '#646c79',
	},
	divider: '#d2d8e0',
};

export const theme = createTheme({
	components: {
		MuiGrid: {
			styleOverrides: {
				root: {
					marginTop: 16,
				},
			},
		},
		MuiCardHeader: {
			styleOverrides: {
				title: {
					fontSize: 16,
				},
				root: {
					paddingBottom: 5,
				},
			},
		},
		MuiRating: {
			styleOverrides: {
				root: {
					paddingLeft: 16,
				},
			},
		},
	},
	palette,
	typography: {
		fontFamily: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
		h1: {
			fontWeight: 700,
			fontSize: 24,
		},
		h2: {
			fontWeight: 700,
			fontSize: 16,
		},
		h3: {
			fontWeight: 600,
			fontSize: 16,
		},
		h4: {
			fontWeight: 700,
			fontSize: 12,
		},
		h5: {
			fontWeight: 700,
			fontSize: 10,
		},
		h6: {
			fontWeight: 600,
			fontSize: 8,
		},
		body1: {
			fontWeight: 500,
			fontSize: 14,
		},
		body2: {
			fontWeight: 500,
			fontSize: 12,
		},
		subtitle1: {
			fontWeight: 600,
			fontSize: 12,
		},
		caption: {
			fontWeight: 500,
			fontSize: 10,
		},
	},
});
