# react-router-management

> inspired by vue-router

[![NPM](https://img.shields.io/npm/v/react-router-management.svg)](https://www.npmjs.com/package/react-router-management) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-router-management
```

## Usage

```tsx
// App.tsx
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouterManagement } from 'react-router-management'

import HelloWorldPage from 'pages/HelloWorld'

const routes = [
  {
    exactly: false,
    path: '*',
    name: 'HelloWorld',
    component: HelloWorldPage
  }
]

export default () => {
  return (
    <Router>
      <RouterManagement routes={routes} />
    </Router>
  )
}
```

or

```tsx
// router/index.ts
import { RouterManagement } from 'react-router-management'
import HelloWorldPage from 'pages/HelloWorld'

const routes = [
  {
    exactly: false,
    path: '*',
    name: 'HelloWorld',
    component: HelloWorldPage
  }
]

export default () => {
  return RouterManagement({ routes })
}

// App.tsx
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouterManagementViews } from './router'

const App: React.FC = () => {
  return (
    <Router>
      <RouterManagementViews />
    </Router>
  )
}

export default App
```

## License

MIT © [Planxnx](https://github.com/Planxnx)
