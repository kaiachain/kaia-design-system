# Kaia Design System - Example Project

This is an example project demonstrating the usage of `@kaiachain/kaia-design-system`. It includes examples of how to use various components such as buttons, text inputs, checkboxes, icons, and more. The project also supports theme toggling between light and dark themes.

## Requirements

- Node.js (version 16 or higher)
- Yarn package manager (npm is not allowed)

## Installation

Make sure to use `yarn` for installing dependencies:

```bash
yarn install
```

`Note: The project is configured to throw an error if you attempt to use npm. Only yarn is allowed for dependency management.`


## Scripts
Here are the available scripts defined in the package.json:

* `preinstall`: Ensures that only yarn is used to install dependencies.
* `dev`: Starts the development server using Vite.
* `lint`: Runs ESLint on the project and checks for unused disable directives with no warnings allowed.

### Script Usage
To start the development server:

```bash
yarn dev
```

To run the linter:

```bash
yarn lint
```

## Linking `kaia-design-system`
While developing kaia-design-system, you can link the local version of the package to this example project to see changes immediately.

Steps for Linking and Tracking Changes

1. In the root directory of kaia-design-system, create a symbolic link:

```bash
yarn link
```

2. In the example project directory, link the design system:
```bash
yarn link "@kaiachain/kaia-design-system"
```

3. Build the design system to compile changes:
```bash
yarn build
```

Now, any changes made in `kaia-design-system` will be reflected in the example project after running the build command.

## Usage

Run the example project to explore various use cases and examples.

## Key Features Demonstrated

This project showcases components that follow the Kaia Foundation's design system:

- **KaIcon**: A set of scalable SVG icons designed for consistent and flexible use across the UI.

- **KaLogo**: The official Kaia Foundation logo in SVG format, ensuring scalability and clarity.

- **KaButton & KaButtonProps**: A customizable button component with options for size, type, icons, and disabled states.

- **KaCheckBox & KaCheckBoxProps**: A checkbox component with customizable states like checked, disabled, and onChange handlers.

- **KaTextInput & KaTextInputProps**: A text input field with support for error states, disabled states, and various sizes.

- **KaLabel & KaLabelProps**: A label component with different styles (solid, pale, line, etc.) for tagging or categorization.

- **KaRadio & KaRadioProps**: A radio button component for selecting between multiple options, customizable in size and label.

- **KaText & KaTextProps**: A text component with predefined font styles and sizes, fully compliant with the design system’s typography.

- **KaSelectBox & KaSelectBoxProps**: A dropdown component for selecting options, with customizable value and state handling.

- **useKaTheme**: A hook that provides access to and control over the current theme (light or dark).

- **font**: The standardized typography settings, including font sizes, weights, and line heights.

- **darkTheme**: A predefined dark theme for better readability in low-light conditions.

- **lightTheme**: A predefined light theme for bright environments, ensuring clarity and usability.


## Theming
The project allows toggling between light and dark themes using the `useKaTheme` hook from `@kaiachain/kaia-design-system`. The theme can be switched via radio buttons.

## License
This project is licensed under the MIT License.



