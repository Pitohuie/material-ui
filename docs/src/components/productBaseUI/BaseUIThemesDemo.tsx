import * as React from 'react';
import clsx from 'clsx';

// Base UI imports
import Badge, { badgeClasses } from '@mui/base/Badge';
import Input, { InputProps } from '@mui/base/Input';
import Button from '@mui/base/Button';
import Menu, { MenuActions } from '@mui/base/Menu';
import MenuItem, { menuItemClasses } from '@mui/base/MenuItem';
import Modal from '@mui/base/Modal';
import Option from '@mui/base/Option';
import Popper from '@mui/base/Popper';
import Select from '@mui/base/Select';
import Slider, { sliderClasses } from '@mui/base/Slider';
import Snackbar from '@mui/base/Snackbar';
import { SnackbarCloseReason } from '@mui/base/useSnackbar';
import Switch, { switchClasses } from '@mui/base/Switch';
import Tab from '@mui/base/Tab';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import { ListActionTypes } from '@mui/base/useList';

// Other packages
import { css, styled, keyframes } from '@mui/system';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import SmartButtonRounded from '@mui/icons-material/SmartButtonRounded';
import InputRounded from '@mui/icons-material/InputRounded';
import PlaylistAddCheckRounded from '@mui/icons-material/PlaylistAddCheckRounded';
import ToggleOnRoundedIcon from '@mui/icons-material/ToggleOnRounded';
import LinearScaleRounded from '@mui/icons-material/LinearScaleRounded';
import CircleNotificationsRounded from '@mui/icons-material/CircleNotificationsRounded';
import ReportGmailerrorredRounded from '@mui/icons-material/ReportGmailerrorredRounded';
import MenuOpenRounded from '@mui/icons-material/MenuOpenRounded';
import FirstPageRounded from '@mui/icons-material/FirstPageRounded';
import TabRounded from '@mui/icons-material/TabRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import InterestsRoundedIcon from '@mui/icons-material/InterestsRounded';
import RadioRoundedIcon from '@mui/icons-material/RadioRounded';

import ROUTES from 'docs/src/route';
import Link from 'docs/src/modules/components/Link';
import heroVariables from 'docs/src/components/productBaseUI/heroVariables';

const Panel = styled('div')({
  width: 340,
  backgroundColor: 'var(--muidocs-palette-background-paper)',
  borderRadius: 'min(var(--border-radius) * 2, 32px)',
  border: 'var(--border-width) solid',
  borderColor: 'var(--border-color)',
  boxShadow: 'var(--Panel-shadow)',
  overflow: 'hidden',
});

const StyledLabel = styled('label')({
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--muidocs-palette-text-secondary)',
  margin: '0.25rem 0',
});

const StyledLabelCategory = styled('label')({
  fontSize: 10,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '.08rem',
  color: 'var(--muidocs-palette-text-secondary)',
  margin: '0.5rem 0.4rem',
});

const StyledParagraph = styled('p')({
  margin: 0,
  fontSize: 14,
  fontWeight: 600,
  color: 'text.primary',
});

const StyledTabsList = styled('div')({
  display: 'flex',
  borderBottom: 'var(--border-width) solid var(--border-color)',
});

const StyledTab = styled('button')({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  justifyContent: 'center',
  gap: 6,
  position: 'relative',
  minHeight: 42,
  flex: 1,
  padding: '0.75rem',
  background: 'var(--Tab-background)',
  border: 'none',
  fontSize: 14,
  fontWeight: 600,
  color: 'var(--muidocs-palette-text-secondary)',

  '&:hover:not(.Mui-selected)': {
    background: 'var(--Tab-hoverBackground)',
  },

  '&.Mui-selected': {
    color: 'var(--color-primary)',

    '&::after': {
      content: '""',
      display: 'block',
      height: 'max(2px, var(--border-width, 0px))',
      left: 2,
      right: 2,
      bottom: 'calc(-1 * min(2px, var(--border-width, 0px)))',
      position: 'absolute',
      backgroundColor: 'var(--color-primary)',
    },
  },
});

const StyledSelectButton = styled('button')({
  width: '100%',
  cursor: 'pointer',
  maxWidth: '100%',
  minHeight: 'calc(2 * var(--border-width, 0px) + 37px)',
  border: 'var(--border-width, 1px) solid',
  borderColor: 'var(--Select-ringColor, var(--border-color))',
  borderRadius: 'var(--border-radius)',
  padding: '8px 12px',
  backgroundColor: 'var(--Select-background)',
  display: 'flex',
  color: 'var(--muidocs-palette-text-secondary)',
  alignItems: 'center',
  fontSize: '0.875rem',
  fontFamily: 'var(--muidocs-font-family)',
  lineHeight: 21 / 14,
  boxShadow: 'var(--formControl-shadow, 0px 2px 2px rgba(205, 210, 215, 0.3))',

  '&:hover': {
    backgroundColor: 'var(--Tab-hoverBackground)',
  },
  '& svg:last-child': {
    marginLeft: 'auto',
  },
  '& svg:first-child': {
    marginRight: 'var(--Select-spacing)',
  },
  '&:not(:empty)': {
    fontWeight: 500,
  },
});

const StyledModalButton = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '8px 12px',
  cursor: 'pointer',
  backgroundColor: 'var(--muidocs-palette-primary-50)',
  border: '1px solid',
  borderColor: 'var(--muidocs-palette-primary-100)',
  borderRadius: 'var(--border-radius)',
  boxShadow: 'var(--formControl-shadow), inset 0px 4px 4px rgba(205, 210, 215, 0.3)',
  fontFamily: 'var(--muidocs-font-family)',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'var(--muidocs-palette-primary-600)',
  lineHeight: 21 / 14,

  '&:hover': {
    backgroundColor: 'var(--muidocs-palette-primary-100)',
  },

  '[data-mui-color-scheme="dark"] &': {
    borderColor: 'var(--muidocs-palette-primary-700)',
    backgroundColor: 'var(--muidocs-palette-primary-900)',
    color: 'var(--muidocs-palette-primary-200)',
    boxShadow: 'var(--formControl-shadow), inset 0px 4px 4px rgba(205, 210, 215, 0.15)',
    '&:hover': {
      backgroundColor: 'var(--muidocs-palette-primary-800)',
    },
  },
});

const StyledSnackbarButton = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '8px 12px',
  cursor: 'pointer',
  backgroundColor: 'var(--muidocs-palette-grey-50)',
  border: '1px solid',
  borderColor: 'var(--muidocs-palette-grey-200)',
  borderRadius: 'var(--border-radius)',
  boxShadow: 'var(--formControl-shadow), inset 0px 4px 4px rgba(205, 210, 215, 0.3)',
  fontFamily: 'var(--muidocs-font-family)',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'var(--muidocs-palette-grey-900)',
  lineHeight: 21 / 14,

  '&:hover': {
    backgroundColor: 'var(--muidocs-palette-grey-200)',
  },

  '[data-mui-color-scheme="dark"] &': {
    borderColor: 'var(--muidocs-palette-grey-700)',
    backgroundColor: 'var(--muidocs-palette-grey-900)',
    color: 'var(--muidocs-palette-grey-200)',
    boxShadow: 'var(--formControl-shadow), inset 0px 4px 4px rgba(205, 210, 215, 0.05)',
    '&:hover': {
      backgroundColor: 'var(--muidocs-palette-grey-800)',
    },
  },
});

const StyledViewCode = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
  width: '100%',
  padding: '12px 16px',
  cursor: 'pointer',
  backgroundColor: 'var(--muidocs-palette-primaryDark-700)',
  border: 'none',
  borderRadius: 'var(--border-radius)',
  boxShadow: '0px 2px 2px rgba(205, 210, 215, 0.2), inset 0px 4px 4px rgba(205, 210, 215, 0.2)',
  fontFamily: 'var(--muidocs-font-family)',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'var(--muidocs-palette-primary-200)',
  lineHeight: 21 / 14,

  '&:hover': {
    backgroundColor: 'var(--muidocs-palette-primaryDark-800)',
    color: 'var(--muidocs-palette-primary-100)',
  },

  '[data-mui-color-scheme="dark"] &': {
    color: 'var(--muidocs-palette-primary-200)',
    boxShadow: '0px 2px 2px rgba(205, 210, 215, 0.2), inset 0px 4px 4px rgba(205, 210, 215, 0.08)',
    '&:hover': {
      color: 'var(--muidocs-palette-primary-100)',
      backgroundColor: 'var(--muidocs-palette-primaryDark-800)',
    },
  },
});

const StyledPopper = styled(Popper)({
  zIndex: 1,
});

const StyledListbox = styled('ul')({
  '--_listbox-radius': 'min(var(--border-radius), 12px)',
  width: 'calc(320px - 1rem)',
  maxHeight: 'calc(320px - 1rem)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  border: 'var(--border-width) solid',
  borderColor: 'var(--Select-ringColor, var(--border-color))',
  borderRadius: 'var(--_listbox-radius)',
  backgroundColor: 'var(--muidocs-palette-background-paper)',
  boxShadow: '0px 4px 40px rgba(62, 80, 96, 0.1)',
  padding: 'calc(var(--Select-spacing) * 0.5)',
  gap: 'calc(var(--Select-spacing) * 0.2)',
  fontFamily: 'var(--muidocs-font-family)',
  fontSize: '0.875rem',
  lineHeight: 21 / 14,
  margin: '6px 0',
  '& li': {
    display: 'flex',
    borderRadius: '12px',
    '&[role="none"]': {
      flexDirection: 'column',
      padding: 0,
      '& > ul': {
        padding: 0,
      },
    },
    '&[role="presentation"]': {
      fontSize: '0.625rem',
      color: 'var(--muidocs-palette-text-tertiary)',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      alignItems: 'center',
      minHeight: 0,
      paddingBottom: '0.5rem',
    },
    '&[role="option"]': {
      boxSizing: 'border-box',
      border: 'var(--border-width) solid transparent',
      padding: 'calc(var(--Select-spacing) * 0.5)',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'var(--muidocs-palette-text-secondary)',
      alignItems: 'center',
      cursor: 'pointer',
      borderRadius: 'calc(var(--_listbox-radius) - var(--Select-spacing) * 0.05)',

      '&:hover, &.MuiOption-highlighted': {
        backgroundColor: 'var(--Option-hoverBackground, var(--muidocs-palette-grey-50))',
        color: 'var(--muidocs-palette-text-primary)',
      },

      '&.Mui-selected': {
        backgroundColor: 'var(--Option-selectedBackground, var(--muidocs-palette-grey-50))',
        borderColor: 'var(--border-color)',
        color: 'var(--muidocs-palette-text-primary)',
      },

      '& svg:first-child': {
        color: 'var(--muidocs-palette-primary-main)',
        marginRight: 'var(--Select-spacing)',
        fontSize: '1.125rem',
      },
    },
  },
});

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 25,
    label: '25°C',
  },
  {
    value: 50,
    label: '50°C',
  },
  {
    value: 75,
    label: '75°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

const StyledSlider = styled(Slider)(`
  --_margin: 4px;
  color: var(--color-primary);
  height: 8px;
  width: 100%;
  max-width: calc(100% - var(--_margin));
  padding: 16px 0;
  margin: 0 var(--_margin);
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 1;
  }

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: var(--border-radius);
    background-color: var(--color-primary-light)
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: var(--border-radius);
    background-color: currentColor;
  }

  & .${sliderClasses.thumb} {
    position: absolute;
    width: 16px;
    height: 16px;
    margin-left: -6px;
    margin-top: -6px;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    outline: 0;
    border: 4px solid currentColor;
    background-color: #fff;

    :hover,
    &.${sliderClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem var(--Slider-thumb-focus);
    }

    &.${sliderClasses.active} {
      box-shadow: 0 0 0 0.25rem var(--Slider-thumb-focus);
    }
  }

  & .${sliderClasses.mark} {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: var(--border-radius);
    background-color: var(--color-primary-light);
    top: 44%;
    transform: translateX(-50%);
  }

  & .${sliderClasses.markActive} {
    background-color: var(--color-primary);
  }

  & .${sliderClasses.markLabel} {
    font-weight: 600;
    font-size: 10px;
    position: absolute;
    top: 24px;
    transform: translateX(-50%);
    margin-top: 8px;
    &[data-index="0"] {
      transform: translateX(calc(-1 * var(--_margin)));
    }
    &[data-index="4"] {
      transform: translate(-100%);
    }
  }
`);

const StyledSwitch = styled('span')(`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
  cursor: pointer;

  &.${switchClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchClasses.track} {
    background: var(--Switch-background, var(--muidocs-palette-grey-400));
    border-radius: max(2px, var(--border-radius) * 4);
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: max(2px, var(--border-radius));
    background-color: #fff;
    position: relative;
    
    transition-property: left;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  }

  &.${switchClasses.focusVisible} .${switchClasses.thumb} {
    background-color: var(--muidocs-palette-grey-500);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchClasses.checked} {
    .${switchClasses.thumb} {
      left: 17px;
      top: 3px;
      background-color: #fff;
    }

    .${switchClasses.track} {
      background: var(--muidocs-palette-primary-500);
    }
  }

  & .${switchClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `);

const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean; className: string }>(
  (props, ref) => {
    const { open, className, ...other } = props;
    return <div className={clsx({ 'MuiBackdrop-open': open }, className)} ref={ref} {...other} />;
  },
);

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: visibility;
  transition-delay: ${({ open }) => (open ? '0s' : '400ms')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const Dialog = styled('div')({
  backgroundColor: 'var(--muidocs-palette-background-paper)',
  borderRadius: 'min(var(--border-radius) * 2, 32px)',
  border: 'var(--border-width) solid',
  borderColor: 'var(--border-color)',
  overflow: 'hidden',
  padding: '1.5rem',
  textAlign: 'center',
  outline: 'none',
  maxWidth: 500,
  width: 'auto',
  transform: 'translateY(8px)',
  opacity: 0,
  transition: 'all 0.2s ease-out',
  '&[data-open="true"]': {
    transform: 'translateY(0)',
    opacity: 1,
    boxShadow: 'var(--Panel-shadow)',
    transition: 'all 0.3s ease',
  },
});

const StyledBadge = styled(Badge)(
  ({ theme }) => `
  box-sizing: border-box;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  

  & .${badgeClasses.badge} {
    --_scale: 1.5em;
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.75rem;
    border-radius: var(--_scale);
    line-height: var(--_scale);
    width: var(--_scale);
    height: var(--_scale);
    color: #fff;
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    background: var(--muidocs-palette-error-main);
    outline: 3px solid ${
      theme.palette.mode === 'dark' ? 'var(--muidocs-palette-primaryDark-900)' : '#FFF'
    };
    box-shadow: 0px 2px 24px ${
      theme.palette.mode === 'dark'
        ? 'var(--muidocs-palette-primary-900)'
        : 'var(--muidocs-palette-primary-100)'
    };
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
  `,
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 6px 8px;
  margin: 4px 0;
  border-radius: 8px;
  cursor: default;
  user-select: none;
  border-radius: min(var(--border-radius), 8px);
  font-weight: 500;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${
      theme.palette.mode === 'dark'
        ? 'var(--muidocs-palette-primary-600)'
        : 'var(--muidocs-palette-primary-200)'
    };
    background-color: ${
      theme.palette.mode === 'dark'
        ? 'var(--muidocs-palette-grey-800)'
        : 'var(--muidocs-palette-grey-100)'
    };
    color: ${
      theme.palette.mode === 'dark'
        ? 'var(--muidocs-palette-grey-300)'
        : 'var(--muidocs-palette-grey-900)'
    };
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${
      theme.palette.mode === 'dark'
        ? 'var(--muidocs-palette-grey-800)'
        : 'var(--muidocs-palette-grey-50)'
    };
    color: ${
      theme.palette.mode === 'dark'
        ? 'var(--muidocs-palette-grey-300)'
        : 'var(--muidocs-palette-grey-900)'
    };
  }
  `,
);

const StyledMenuListbox = styled('ul')(`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 230px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background-color: var(--muidocs-palette-background-paper);
  border-radius: min(var(--border-radius), 16px);
  border: var(--border-width) solid;
  border-color: var(--border-color);
  box-shadow: var(--Panel-shadow);
  `);

const StyledMenuButton = styled(Button)({
  padding: 0,
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
});

const snackbarInRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const StyledSnackbar = styled(Snackbar)(css`
  background-color: var(--muidocs-palette-background-paper);
  border-radius: min(var(--border-radius), 32px);
  border: var(--border-width) solid;
  border-color: var(--border-color);
  box-shadow: var(--Panel-shadow);
  position: fixed;
  z-index: 1200;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  right: 16px;
  bottom: 16px;
  left: auto;
  max-width: 560px;
  min-width: 300px;
  padding: 0.75rem 1rem;
  animation: ${snackbarInRight} 200ms;
  transition: transform 0.2s ease-out;

  & svg {
    color: var(--muidocs-palette-success-600);
  }

  & [data-title] {
    font-size: 0.875rem;
    font-weight: 600;
  }

  & [data-description] {
    color: var(--muidocs-palette-text-secondary);
    font-size: 0.75rem;
    font-weight: 500;
  }
`);

const StyledInputElement = styled('input')({
  marginTop: '8px',
  width: '100%',
  maxWidth: '100%',
  border: 'var(--border-width, 1px) solid',
  borderColor: 'var(--Select-ringColor, var(--border-color))',
  borderRadius: 'var(--border-radius)',
  padding: '8px 12px',
  backgroundColor: 'var(--Select-background)',
  display: 'flex',
  color: 'var(--muidocs-palette-text-secondary)',
  alignItems: 'center',
  fontSize: '0.875rem',
  fontFamily: 'var(--muidocs-font-family)',
  lineHeight: 21 / 14,
  boxShadow: 'var(--formControl-shadow, 0px 2px 2px rgba(205, 210, 215, 0.3))',

  '&:hover': {
    borderColor: 'var(--Input-border)',
  },
  '&:focus': {
    borderColor: 'var(--Input-border)',
    boxShadow: 'var(--Input-focus-border)',
  },
  '&:focus-visible': {
    // Firefox
    outline: 0,
  },
});

// Input
const CustomInput = React.forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
});

export default function BaseUIThemesDemo() {
  const [design, setDesign] = React.useState(0);
  // Modal
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  // Snackbar
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCloseSnackbar = (_: any, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };
  // Menu
  const [buttonElement, setButtonElement] = React.useState<HTMLButtonElement | null>(null);
  const [isOpenMenu, setOpenMenu] = React.useState(false);
  const menuActions = React.useRef<MenuActions>(null);
  const preventReopen = React.useRef(false);

  const updateAnchor = React.useCallback((node: HTMLButtonElement | null) => {
    setButtonElement(node);
  }, []);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (preventReopen.current) {
      event.preventDefault();
      preventReopen.current = false;
      return;
    }

    setOpenMenu((open) => !open);
  };

  const handleButtonMouseDown = () => {
    if (isOpenMenu) {
      // Prevents the menu from reopening right after closing
      // when clicking the button.
      preventReopen.current = true;
    }
  };

  const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpenMenu(true);
      if (event.key === 'ArrowUp') {
        // Focus the last item when pressing ArrowUp.
        menuActions.current?.dispatch({
          type: ListActionTypes.keyDown,
          key: event.key,
          event,
        });
      }
    }
  };

  const createHandleMenuClick = () => {
    return () => {
      setOpenMenu(false);
      buttonElement?.focus();
    };
  };
  return (
    <Fade in timeout={700}>
      <Panel sx={{ ...heroVariables[design] }}>
        <Tabs value={design} onChange={(event, newValue) => setDesign(newValue as number)}>
          <TabsList slots={{ root: StyledTabsList }}>
            <Tab slots={{ root: StyledTab }} value={0}>
              <AutoAwesomeRounded sx={{ fontSize: 15 }} />
              Sleek
            </Tab>
            <Tab slots={{ root: StyledTab }} value={1}>
              <RadioRoundedIcon sx={{ fontSize: 15 }} />
              Retro
            </Tab>
            <Tab slots={{ root: StyledTab }} value={2}>
              <InterestsRoundedIcon sx={{ fontSize: 15 }} />
              Playful
            </Tab>
          </TabsList>
        </Tabs>
        {/* Notification component */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: '1rem',
            borderBottom: 'var(--border-width) solid var(--border-color)',
          }}
        >
          <StyledParagraph>Notifications</StyledParagraph>
          <StyledMenuButton
            type="button"
            onClick={handleButtonClick}
            onKeyDown={handleButtonKeyDown}
            onMouseDown={handleButtonMouseDown}
            ref={updateAnchor}
            aria-controls={isOpenMenu ? 'simple-menu' : undefined}
            aria-expanded={isOpenMenu || undefined}
            aria-haspopup="menu"
          >
            <StyledBadge badgeContent={5}>
              <Box
                component="img"
                alt="Michał Dudak, the leading engineer for Base UI."
                src="/static/branding/about/michal.png"
                sx={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  height: 32,
                  width: 32,
                  borderRadius: 'var(--avatar-radius)',
                  border: 'var(--border-width) solid var(--border-color)',
                  background: 'var(--color-primary-light)',
                  '&:hover': {
                    background: 'var(--color-primary)',
                  },
                }}
              />
            </StyledBadge>
          </StyledMenuButton>
          <Menu
            actions={menuActions}
            open={isOpenMenu}
            onOpenChange={(open) => {
              setOpenMenu(open);
            }}
            anchorEl={buttonElement}
            slots={{ root: StyledPopper, listbox: StyledMenuListbox }}
            slotProps={{ root: { disablePortal: true }, listbox: { id: 'simple-menu' } }}
          >
            <StyledLabelCategory>Notification menu</StyledLabelCategory>
            <CustomInput aria-label="Demo input" placeholder="Search for a component…" />
            <StyledMenuItem onClick={createHandleMenuClick()}>Request a component</StyledMenuItem>
            <StyledMenuItem onClick={createHandleMenuClick()}>Get started</StyledMenuItem>
            <StyledMenuItem onClick={createHandleMenuClick()}>View all</StyledMenuItem>
          </Menu>
        </Box>
        {/* Select component */}
        <Box
          sx={{
            p: '1rem 1rem 1.5rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            borderBottom: 'var(--border-width) solid var(--border-color)',
          }}
        >
          <StyledLabel>Select a component</StyledLabel>
          <Select
            defaultValue={10}
            slots={{
              root: StyledSelectButton,
              popper: StyledPopper,
              listbox: StyledListbox,
            }}
            slotProps={{
              popper: {
                disablePortal: true,
              },
            }}
          >
            <StyledLabelCategory>Input</StyledLabelCategory>
            <Option value={10}>
              <AutoAwesomeRounded fontSize="small" />
              Autocomplete
            </Option>
            <Option value={20}>
              <SmartButtonRounded fontSize="small" />
              Button
            </Option>
            <Option value={30}>
              <InputRounded fontSize="small" />
              Input
            </Option>
            <Option value={40}>
              <PlaylistAddCheckRounded fontSize="small" />
              Select
            </Option>
            <Option value={50}>
              <ToggleOnRoundedIcon fontSize="small" />
              Switch
            </Option>
            <Option value={60}>
              <LinearScaleRounded fontSize="small" />
              Slider
            </Option>
            <StyledLabelCategory>Data display</StyledLabelCategory>
            <Option value={70}>
              <CircleNotificationsRounded fontSize="small" />
              Badge
            </Option>
            <StyledLabelCategory>Feedback</StyledLabelCategory>
            <Option value={80}>
              <ReportGmailerrorredRounded fontSize="small" />
              Snackbar
            </Option>
            <StyledLabelCategory>Navigation</StyledLabelCategory>
            <Option value={90}>
              <MenuOpenRounded fontSize="small" />
              Menu
            </Option>
            <Option value={100}>
              <FirstPageRounded fontSize="small" />
              Table Pagination
            </Option>
            <Option value={110}>
              <TabRounded fontSize="small" />
              Tabs
            </Option>
          </Select>
        </Box>
        {/* Slider component */}
        <Box
          sx={{
            px: '1rem',
            pt: '1rem',
            pb: '1.5rem',
            borderBottom: 'var(--border-width) solid var(--border-color)',
          }}
        >
          <StyledLabel>Choose a temperature</StyledLabel>
          <StyledSlider
            aria-label="Temperature"
            defaultValue={37}
            getAriaValueText={valuetext}
            marks={marks}
          />
        </Box>
        {/* Switch component */}
        <Box
          sx={{
            p: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderBottom: 'var(--border-width) solid var(--border-color)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <StyledParagraph id="make-it-your-own">Make it your own</StyledParagraph>
            <Switch
              slots={{
                root: StyledSwitch,
              }}
              slotProps={{
                input: { 'aria-labelledby': 'make-it-your-own' },
              }}
              defaultChecked
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <StyledParagraph id="use-every-component">Use every component</StyledParagraph>
            <Switch
              slots={{
                root: StyledSwitch,
              }}
              slotProps={{
                input: { 'aria-labelledby': 'use-every-component' },
              }}
            />
          </Box>
        </Box>
        {/* Modal and Snackbar component */}
        <Box
          sx={{
            display: 'flex',
            p: '1rem',
            gap: '0.5rem',
            borderBottom: 'var(--border-width) solid var(--border-color)',
            '& > button': { flex: 1 },
          }}
        >
          <StyledModalButton type="button" onClick={handleOpenModal}>
            View modal
          </StyledModalButton>
          <StyledModal
            disablePortal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={openModal}
            onClose={handleCloseModal}
            slots={{ backdrop: StyledBackdrop }}
            keepMounted
          >
            <Dialog data-open={openModal}>
              <Box
                component="h2"
                id="unstyled-modal-title"
                sx={{ mt: 1, mb: 0.5, textWrap: 'balance' }}
              >
                Oh, hey, this is a Base UI modal.
              </Box>
              <Box
                component="p"
                id="unstyled-modal-description"
                sx={{ m: 0, mb: 4, color: 'text.secondary', textWrap: 'balance' }}
              >
                Base UI modals manages modal stacking when more than one is needed, creates a
                backdrop to disable interaction with the rest of the app, and a lot more.
              </Box>
              <StyledSnackbarButton onClick={handleCloseModal}>Close</StyledSnackbarButton>
            </Dialog>
          </StyledModal>
          <StyledSnackbarButton type="button" onClick={handleClickSnackbar}>
            View snackbar
          </StyledSnackbarButton>
          <StyledSnackbar open={openSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar}>
            <CheckCircleRoundedIcon fontSize="small" />
            <Box>
              <div data-title>This is a Base UI snackbar.</div>
              <div data-description>Free to design as you want it.</div>
            </Box>
          </StyledSnackbar>
        </Box>
        {/* Button "View all components" component */}
        <Box sx={{ display: 'flex', p: '1rem', gap: '0.5rem', '& > button': { flex: 1 } }}>
          <StyledViewCode href={ROUTES.baseComponents}>
            View all components <ChevronRightRoundedIcon fontSize="small" />
          </StyledViewCode>
        </Box>
      </Panel>
    </Fade>
  );
}