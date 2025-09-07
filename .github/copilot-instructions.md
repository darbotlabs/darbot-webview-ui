# Webview UI Toolkit for Visual Studio Code

A deprecated component library for building webview-based VS Code extensions using web components and React wrappers.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## ⚠️ Critical Project Status

This project is **DEPRECATED** and will be discontinued on January 1, 2025. The build system has significant dependency compatibility issues that prevent successful builds. Use these instructions to work with the existing codebase and understand the limitations.

## Working Effectively

### Prerequisites and Setup

- **REQUIRED: Node.js 18.x** - The project fails with Node 20+. Download Node 18:
    ```bash
    curl -fsSL https://nodejs.org/dist/v18.19.1/node-v18.19.1-linux-x64.tar.xz -o /tmp/node-v18.19.1-linux-x64.tar.xz
    cd /tmp && tar -xf node-v18.19.1-linux-x64.tar.xz
    export PATH="/tmp/node-v18.19.1-linux-x64/bin:$PATH"
    ```
- Install dependencies: `npm install --legacy-peer-deps` -- takes 37 seconds. NEVER CANCEL. Set timeout to 90+ seconds.
    - **CRITICAL**: Must use `--legacy-peer-deps` due to Rollup version conflicts.
    - Alternative: `npm install --force` but expect many warnings.

### Commands That WORK

- `npm run lint` -- takes 3 seconds. Runs ESLint on TypeScript files.
- `npm run fmt` -- takes 1.8 seconds. Checks code formatting with Prettier.
- `npm run fmt:fix` -- takes 1.8 seconds. Fixes code formatting issues.

### Commands That DO NOT WORK ❌

- `npm run build` -- **FAILS** due to incompatible Rollup plugin versions and TypeScript compilation errors.
    - Error: Rollup 3.29.5 vs plugins expecting Rollup 2.x
    - Error: TypeScript compilation fails with @microsoft/fast-element compatibility issues
    - **DO NOT attempt to fix the build** - requires major dependency updates beyond the scope of typical changes.
- `npm run test:webview` -- **FAILS** because it depends on the build completing first.
- `npx tsc -p ./tsconfig.json` -- **FAILS** due to TypeScript version incompatibilities.

### Alternative Development Approaches

Since the build is broken, use these alternatives:

1. **Published Package**: Use the npm published version `@vscode/webview-ui-toolkit@1.4.0` in your VS Code extensions.
2. **Source Code Review**: Study the source code in `src/` directories for component implementation details.
3. **Documentation**: Reference the comprehensive docs in `docs/getting-started.md` and `docs/components.md`.

## Validation

- **DO NOT attempt to build the project** - the build is fundamentally broken.
- **ALWAYS run linting** before making changes: `npm run lint && npm run fmt`.
- **Manual Testing**: Since webview testing requires a working build, test changes by:
    1. Installing the published package in a test VS Code extension
    2. Manually reviewing TypeScript source code changes
    3. Using the getting-started guide to create test extensions

## Build System Analysis

- **Rollup Configuration**: `rollup.config.js` uses incompatible plugin versions
- **TypeScript**: Multiple compilation errors due to version mismatches
- **Dependencies**: package.json has conflicting peer dependency requirements
- **CI/CD**: Azure Pipelines (`azure-pipelines.yml`) runs on Node 18.x but may be using locked/cached dependencies

## Common Tasks Reference

### Repository Structure

```
/src                 # Component source code (TypeScript)
├── badge/          # VS Code badge component
├── button/         # VS Code button component
├── checkbox/       # VS Code checkbox component
├── data-grid/      # VS Code data grid component
├── design-tokens.ts # Design system tokens
├── index.ts        # Main entry point
└── react/          # React wrapper components

/docs               # Documentation
├── getting-started.md  # Comprehensive setup guide
└── components.md      # Component documentation

/scripts            # Build and setup scripts
rollup.config.js    # Rollup bundling configuration (broken)
package.json        # npm scripts and dependencies
azure-pipelines.yml # CI/CD configuration
```

### Key Project Information

- **Technology Stack**: TypeScript, Web Components, Microsoft FAST Framework, React wrappers
- **Target**: VS Code webview extensions
- **Package**: Published as `@vscode/webview-ui-toolkit` on npm
- **License**: MIT
- **Maintainer**: Microsoft (deprecated)

### npm Scripts Breakdown

```json
{
	"build": "rollup -c && tsc -p ./tsconfig.json && npm run doc && node ./scripts/move-react-build-dir.js", // BROKEN
	"lint": "eslint . --ext .ts", // WORKS - 3 seconds
	"fmt": "prettier --config ./.prettierrc --check \"**/*.{ts,js,md}\"", // WORKS - 1.8 seconds
	"fmt:fix": "prettier --config ./.prettierrc --write \"**/*.{ts,js,md}\"", // WORKS - 1.8 seconds
	"test:webview": "npm run build && node ./scripts/setup-webview-test-env.js", // BROKEN - depends on build
	"start": "npm run test:webview" // BROKEN - alias for test:webview
}
```

### Dependency Issues Summary

The project has multiple incompatible dependency versions:

- Rollup 3.29.5 vs plugins expecting Rollup 2.x
- TypeScript compilation errors with @microsoft/fast-element
- Outdated peer dependencies requiring `--legacy-peer-deps`

### Working with Source Code

- **Components**: Individual components in `src/*/` directories with TypeScript and CSS-in-JS styling
- **Design Tokens**: VS Code theme integration in `src/design-tokens.ts`
- **React Wrappers**: Auto-generated React components in `src/react/`
- **Documentation**: Each component has a README.md with usage examples

### Timeout Recommendations

- `npm install --legacy-peer-deps`: **90 seconds** (takes ~37 seconds, buffer for slow connections)
- `npm run lint`: **30 seconds** (takes ~3 seconds)
- `npm run fmt`: **30 seconds** (takes ~1.8 seconds)
- **NEVER CANCEL** any of these commands during execution

## Important Notes

- This is a **COMPONENT LIBRARY**, not an application - no server or UI to run
- The project builds distributable JavaScript files for use in VS Code extensions
- Due to build issues, focus on source code analysis and linting only
- Always use Node 18.x - newer versions cause additional compatibility issues
- The Azure Pipeline may work differently due to locked dependency versions or caching
