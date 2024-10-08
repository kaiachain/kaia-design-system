**Note: This repository is currently in the experimental stage. Features and implementations are subject to change as development progresses.**


# Kaia Design System

This is the Kaia Design System built with React and emotion/styled, using Yarn for package management and building the project. The kit includes a variety of reusable UI components and SVG icons.

## Features

- **React Components**: Modular and reusable React components.
- **@emotion/styled**: Utilizes @emotion/styled for styling.
- **SVG Icons**: Easy inclusion and use of SVG icons with automatic imports.
- **TypeScript**: Strongly typed components using TypeScript.

## Getting Started

### Prerequisites

- Node.js and Yarn should be installed on your machine.

### Installation

Clone the repository and install dependencies.

```sh
git clone https://github.com/kaiachain/kaia-design-system
cd kaia-design-system
yarn install
```


### Usage

### Using KaThemeProvider

To apply theming to your application using KaThemeProvider, set up your App.tsx as follows:

```tsx
import React, { useState } from 'react';
import { KaThemeProvider } from 'kaia-design-system';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <KaThemeProvider theme={theme}>
      <Home />
    </KaThemeProvider>
  );
}

export default App;

```

#### Importing Components

To use a component from the design system, import it into your project:

```tsx
import React from 'react';
import { KaButton } from 'kaia-design-system';

const App = () => (
  <div>
    <KaButton>Click Me</KaButton>
  </div>
);

export default App;
```

#### Using SVG Icons

The design system includes a variety of SVG icons. You can import and use them as follows:

```tsx
import React from 'react';
import { KaIcon } from 'kaia-design-system';

const IconComponent: React.FC = () => (
  <div>
    <KaIcon.SearchNormal style={{ width: 20, height: 30 }} stroke="blue" />
  </div>
);

export default IconComponent;
```

### Development

For development, use the following command to start a development server with hot reloading:

```sh
yarn start
```

### Testing

To run tests, use the following command:

```sh
yarn test
```

### Scripts

- `yarn build`: Builds the project for production.
- `yarn start`: Starts the development server.
- `yarn test`: Runs the test suite.
- `node generateIcons.js`: Generates icon imports and exports.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgments

Special thanks to the open-source community for providing valuable tools and libraries that made this project possible.

