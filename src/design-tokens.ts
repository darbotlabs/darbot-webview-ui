// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {create} from './utilities/design-tokens/create.js';

/**
 * Developer note:
 *
 * There are some tokens defined in this file that make use of `--fake-vscode-token`. This is
 * done when a toolkit token should be added to the tokenMappings map (and subsequently altered
 * in the applyTheme function) but does not have a corresponding VS Code token that can be used.
 *
 * An example is buttonIconHoverBackground token which does not have a corresponding VS Code token
 * at this time (it's a hardcoded value in VS Code), but needs to be adjusted to be transparent when a
 * high contrast theme is applied.
 *
 * As a rule of thumb, if there are special cases where a token needs to be adjusted based on the
 * VS Code theme and does not have a corresponding VS Code token, `--fake-vscode-token` can be used
 * to indicate that it should be added to the tokenMappings map and thus make it accessible to the
 * applyTheme function where it can be dynamically adjusted.
 */

/**
 * Global design tokens.
 */

export const background = create<string>('background', '--vscode-editor-background');
export const borderWidth = create<number>('border-width');
export const contrastActiveBorder = create<string>('contrast-active-border', '--vscode-contrastActiveBorder');
export const contrastBorder = create<string>('contrast-border', '--vscode-contrastBorder');
export const cornerRadius = create<number>('corner-radius');
export const cornerRadiusRound = create<number>('corner-radius-round');
export const designUnit = create<number>('design-unit');
export const disabledOpacity = create<number>('disabled-opacity');
export const focusBorder = create<string>('focus-border', '--vscode-focusBorder');
export const fontFamily = create<string>('font-family', '--vscode-font-family').withDefault(
	'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'
);
export const fontWeight = create<string>('font-weight', '--vscode-font-weight');
export const foreground = create<string>('foreground', '--vscode-foreground');
export const inputHeight = create<string>('input-height');
export const inputMinWidth = create<string>('input-min-width');
export const typeRampBaseFontSize = create<string>('type-ramp-base-font-size', '--vscode-font-size');
export const typeRampBaseLineHeight = create<string>('type-ramp-base-line-height');
export const typeRampMinus1FontSize = create<string>('type-ramp-minus1-font-size');
export const typeRampMinus1LineHeight = create<string>('type-ramp-minus1-line-height');
export const typeRampMinus2FontSize = create<string>('type-ramp-minus2-font-size');
export const typeRampMinus2LineHeight = create<string>('type-ramp-minus2-line-height');
export const typeRampPlus1FontSize = create<string>('type-ramp-plus1-font-size');
export const typeRampPlus1LineHeight = create<string>('type-ramp-plus1-line-height');
export const scrollbarWidth = create<string>('scrollbarWidth');
export const scrollbarHeight = create<string>('scrollbarHeight');
export const scrollbarSliderBackground = create<string>('scrollbar-slider-background', '--vscode-scrollbarSlider-background');
export const scrollbarSliderHoverBackground = create<string>('scrollbar-slider-hover-background', '--vscode-scrollbarSlider-hoverBackground');
export const scrollbarSliderActiveBackground = create<string>('scrollbar-slider-active-background', '--vscode-scrollbarSlider-activeBackground');

/**
 * Badge design tokens.
 */

export const badgeBackground = create<string>('badge-background', '--vscode-badge-background');
export const badgeForeground = create<string>('badge-foreground', '--vscode-badge-foreground');

/**
 * Button design tokens.
 */

// Note: Button border is used only for high contrast themes and should be left as transparent otherwise.
export const buttonBorder = create<string>('button-border', '--vscode-button-border');
export const buttonIconBackground = create<string>('button-icon-background');
export const buttonIconCornerRadius = create<string>('button-icon-corner-radius');
export const buttonIconFocusBorderOffset = create<number>('button-icon-outline-offset');
// Note usage of `--fake-vscode-token` (refer to doc comment at top of file for explanation).
export const buttonIconHoverBackground = create<string>('button-icon-hover-background', '--fake-vscode-token');
export const buttonIconPadding = create<string>('button-icon-padding');
export const buttonPrimaryBackground = create<string>('button-primary-background', '--vscode-button-background');
export const buttonPrimaryForeground = create<string>('button-primary-foreground', '--vscode-button-foreground');
export const buttonPrimaryHoverBackground = create<string>('button-primary-hover-background', '--vscode-button-hoverBackground');
export const buttonSecondaryBackground = create<string>('button-secondary-background', '--vscode-button-secondaryBackground');
export const buttonSecondaryForeground = create<string>('button-secondary-foreground', '--vscode-button-secondaryForeground');
export const buttonSecondaryHoverBackground = create<string>('button-secondary-hover-background', '--vscode-button-secondaryHoverBackground');
export const buttonPaddingHorizontal = create<string>('button-padding-horizontal');
export const buttonPaddingVertical = create<string>('button-padding-vertical');

/**
 * Checkbox design tokens.
 */

export const checkboxBackground = create<string>('checkbox-background', '--vscode-checkbox-background');
export const checkboxBorder = create<string>('checkbox-border', '--vscode-checkbox-border');
export const checkboxCornerRadius = create<number>('checkbox-corner-radius');
export const checkboxForeground = create<string>('checkbox-foreground', '--vscode-checkbox-foreground');

/**
 * Data Grid design tokens
 */

export const listActiveSelectionBackground = create<string>('list-active-selection-background', '--vscode-list-activeSelectionBackground');
export const listActiveSelectionForeground = create<string>('list-active-selection-foreground', '--vscode-list-activeSelectionForeground');
export const listHoverBackground = create<string>('list-hover-background', '--vscode-list-hoverBackground');

/**
 * Divider design tokens.
 */

export const dividerBackground = create<string>('divider-background', '--vscode-settings-dropdownListBorder');

/**
 * Dropdown design tokens.
 */

export const dropdownBackground = create<string>('dropdown-background', '--vscode-dropdown-background');
export const dropdownBorder = create<string>('dropdown-border', '--vscode-dropdown-border');
export const dropdownForeground = create<string>('dropdown-foreground', '--vscode-dropdown-foreground');
export const dropdownListMaxHeight = create<string>('dropdown-list-max-height');

/**
 * Text Field & Area design tokens.
 */

export const inputBackground = create<string>('input-background', '--vscode-input-background');
export const inputForeground = create<string>('input-foreground', '--vscode-input-foreground');
export const inputPlaceholderForeground = create<string>('input-placeholder-foreground', '--vscode-input-placeholderForeground');

/**
 * Link design tokens.
 */

export const linkActiveForeground = create<string>('link-active-foreground', '--vscode-textLink-activeForeground');
export const linkForeground = create<string>('link-foreground', '--vscode-textLink-foreground');

/**
 * Progress ring design tokens.
 */

export const progressBackground = create<string>('progress-background', '--vscode-progressBar-background');

/**
 * Panels design tokens.
 */

export const panelTabActiveBorder = create<string>('panel-tab-active-border', '--vscode-panelTitle-activeBorder');
export const panelTabActiveForeground = create<string>('panel-tab-active-foreground', '--vscode-panelTitle-activeForeground');
export const panelTabForeground = create<string>('panel-tab-foreground', '--vscode-panelTitle-inactiveForeground');
export const panelViewBackground = create<string>('panel-view-background', '--vscode-panel-background');
export const panelViewBorder = create<string>('panel-view-border', '--vscode-panel-border');

/**
 * Tag design tokens.
 */

export const tagCornerRadius = create<string>('tag-corner-radius');
