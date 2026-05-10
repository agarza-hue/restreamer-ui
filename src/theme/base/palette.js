/* eslint-disable import/no-anonymous-default-export */
// Paleta Catppuccin Mocha — adoptada para MolloStream
// Mantiene los keys originales de Restreamer para compatibilidad con todos
// los componentes MUI que referencian palette.background.*, palette.error.*, etc.
//
// Mapeo: tonos grises/oscuros del Restreamer original → Mocha base/mantle/surface,
// accents (success/warning/error) → catGreen/peach/catRed/catYellow.
export default {
	common: {
		// MuiButton, ChannelList.js, index.js, Player.js
		black: '#11111b', // crust (más profundo que negro puro)
		// Header.js, ChannelList.js, Edit->index.js
		white: '#cdd6f4', // catText (off-white Mocha)
	},
	background: {
		// MuiAccordion
		accordion: 'rgba(49, 50, 68, .6)',          // surface0 con alpha
		accordion_border: 'rgba(108, 112, 134, .6)', // overlay0
		// MuiMenuItem, Header.js, Progress.js
		box_default: '#313244', // surface0
		// MuiListItem, Progress.js (danger)
		box_danger: '#f38ba8',  // catRed
		// MuiButton, global.js (page background)
		button_disabled: '#1e1e2e', // base
		// MuiButton, MuiMenu, MuiToggleButton, MultiSelectOption.js
		dark1: 'rgba(17, 17, 27, .25)',  // crust con alpha
		// MuiOutlinedInput, BoxText.js (color=dark)
		dark2: 'rgba(17, 17, 27, .45)',
		// Footer.js, Textarea.js, global.js (Scrollbar)
		footer1: 'rgba(24, 24, 37, .9)',  // mantle
		footer2: 'rgba(17, 17, 27, .9)',  // crust
		// MuiAppBar, BoxText.js (color=light = default), TabsHorizontal.js, Paper.js
		light1: 'rgba(205, 214, 244, .08)', // catText con alpha bajo
		// MuiDialog, MuiPaper, MuiTooltip, Header.js, ModalContent.js, Dialog.js
		modal: '#313244',  // surface0
		// BoxTextarea.js, Progress.js, Process.js, Textarea.js, gobal.js (textarea)
		modalbox: '#45475a', // surface1
		// MuiFab, MuiListItem, MuiPaper, Header.js
		paper: 'rgba(30, 30, 46, .95)', // base con alpha
	},
	default: {
		main: '#9399b2', // overlay2
	},
	primary: {
		// MuiOutlinedInput
		light: '#cba6f7',  // mauve (color principal MolloStream)
		// MuiAlert, MuiMenu, MuiOutlinedInput, MuiSelect
		main: '#cba6f7',   // mauve
		// MuiMenu, MuiOutlinedInput
		dark: '#b4befe',   // lavender
		// MuiButton
		contrastText: '#1e1e2e', // base (sobre mauve claro)
	},
	secondary: {
		// success / streams activos / acciones positivas
		// MuiAlert, MuiButton, MuiFab, MuiOutlinedInput, MuiSelect, MuiToggleButton
		main: '#a6e3a1',  // catGreen
		// MuiButton, MuiFab
		contrastText: '#1e1e2e', // base (sobre verde claro)
	},
	service: {
		// service color — botón "service" en login (originalmente amarillo brillante)
		// MuiButton, Login.js
		main: '#f9e2af',  // catYellow
		// Paper.js
		contrastText: 'rgba(30, 30, 46, .95)',
	},
	error: {
		// MuiAlert, MuiButton, BoxText.js (color=danger), Env.js
		main: '#f38ba8',  // catRed
		// MuiButton
		contrastText: '#1e1e2e',
	},
	warning: {
		// MuiAlert, Main->index.js
		main: '#fab387',  // peach
	},
	selected: {
		// MuiFab — color del nodo seleccionado
		main: '#cba6f7',  // mauve (consistente con primary)
	},
	text: {
		// MuiBackdrop, MuiButton, MuiDialog, MuiFormLabel, MuiIconButton,
		// MuiInputLabel, MuiMenu, MuiOutlinedInput, MuiPaper, MuiSelect, MuiTab,
		// MuiToggleButton, MuiTypography,
		// Header.js, Checkbox.js, Env.js, LanguageSelect.js, ModalContent.js,
		// TabsHorizontal.js, Dialog.js, global.js (Textarea)
		primary: '#cdd6f4',                     // catText
		secondary: 'rgba(166, 173, 200, 0.85)', // subtext0 con alpha
		disabled: 'rgba(127, 132, 156, 0.6)',   // overlay1 con alpha
		hint: 'rgba(186, 194, 222, 0.7)',       // subtext1 con alpha
	},
};
