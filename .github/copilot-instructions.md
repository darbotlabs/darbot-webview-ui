# DarBot Webview UI Toolkit

An unofficial continuation of Microsoft's deprecated VSCode Webview UI Toolkit. A component library for building webview-based VS Code extensions using web components and React wrappers.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## ⚠️ Project Status

This project is an **unofficial continuation** of Microsoft's deprecated VSCode Webview UI Toolkit (discontinued January 1, 2025). Maintained by DarBot Labs, this toolkit has legacy build system issues with significant dependency compatibility problems. Use these instructions to work with the existing codebase and understand the limitations.

## Working Effectively

### Prerequisites and Setup

- **Node.js compatibility**: While the project works with Node.js 20.x (currently tested), you may encounter better compatibility with Node.js 18.x if issues arise
- Install dependencies: `npm install --legacy-peer-deps` -- takes ~20-40 seconds. NEVER CANCEL. Set timeout to 90+ seconds.
    - **CRITICAL**: Must use `--legacy-peer-deps` due to Rollup version conflicts.
    - Alternative: `npm install --force` but expect many warnings.

### Commands That WORK

- `npm run lint` -- takes 3 seconds. Runs ESLint on TypeScript files.
- `npm run fmt` -- takes 1.8 seconds. Checks code formatting with Prettier.
- `npm run fmt:fix` -- takes 1.8 seconds. Fixes code formatting issues.

### Commands That DO NOT WORK ❌

- `npm run build` -- **FAILS** due to TypeScript compilation errors with @microsoft/fast-element compatibility issues.
    - Error: TypeScript TS2339: Property 'withDefault' does not exist on type 'never' in design-tokens.ts
    - Error: Rollup plugin version incompatibilities
    - **DO NOT attempt to fix the build** - requires major dependency updates beyond the scope of typical changes.
- `npm run test:webview` -- **FAILS** because it depends on the build completing first.
- `npm run test:webview-react` -- **FAILS** because it depends on the build completing first.

### Alternative Development Approaches

Since the build is broken, use these alternatives:

1. **Published Package**: Use the npm published version `darbot-webview-ui@1.4.0` in your VS Code extensions.
2. **Source Code Review**: Study the source code in `src/` directories for component implementation details.
3. **Documentation**: Reference the comprehensive docs in `docs/getting-started.md` and `docs/components.md`.
4. **Sample Extensions**: Explore working examples in the `SAMPLES/` directory for various frameworks and use cases.

## Validation

- **DO NOT attempt to build the project** - the build is fundamentally broken.
- **ALWAYS run linting** before making changes: `npm run lint && npm run fmt`.
- **Manual Testing**: Since webview testing requires a working build, test changes by:
    1. Installing the published package in a test VS Code extension
    2. Manually reviewing TypeScript source code changes
    3. Using the getting-started guide to create test extensions

## Common Development Patterns

### Working with Components

- Each component is in `src/{component-name}/` with TypeScript implementation
- Components follow Microsoft FAST framework patterns
- Design tokens in `src/design-tokens.ts` provide VS Code theme integration
- React wrappers are auto-generated in `src/react/`

### Adding New Components

- Follow existing component structure pattern in `src/`
- Add component to main export in `src/index.ts`
- Include README.md with usage examples and component documentation
- Test using sample extensions in `SAMPLES/` directory

### Making Changes

- **Always run `npm run lint && npm run fmt:fix`** before submitting changes
- Focus on source code in `src/` directory
- Update documentation if component APIs change
- Test changes by creating sample extensions or reviewing existing ones in `SAMPLES/`

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
├── dropdown/       # VS Code dropdown component
├── design-tokens.ts # Design system tokens
├── index.ts        # Main entry point
└── react/          # React wrapper components

/docs               # Documentation
├── getting-started.md  # Comprehensive setup guide
└── components.md      # Component documentation

/SAMPLES            # Example VS Code extensions
├── default/        # Vanilla JavaScript/TypeScript examples
└── frameworks/     # Framework-specific examples (React, Vue, Angular, etc.)

/scripts            # Build and setup scripts
rollup.config.js    # Rollup bundling configuration (broken)
package.json        # npm scripts and dependencies
azure-pipelines.yml # CI/CD configuration
```

### Key Project Information

- **Technology Stack**: TypeScript, Web Components, Microsoft FAST Framework, React wrappers
- **Target**: VS Code webview extensions
- **Package**: Published as `darbot-webview-ui` on npm
- **License**: MIT
- **Maintainer**: DarBot Labs (unofficial continuation)
- **Original**: Microsoft's deprecated VSCode Webview UI Toolkit

### npm Scripts Breakdown

```json
{
	"build": "rollup -c && tsc -p ./tsconfig.json && npm run doc && node ./scripts/move-react-build-dir.js", // BROKEN
	"lint": "eslint . --ext .ts", // WORKS - ~3 seconds
	"fmt": "prettier --config ./.prettierrc --check \"**/*.{ts,js,md}\"", // WORKS - ~2 seconds (shows formatting issues)
	"fmt:fix": "prettier --config ./.prettierrc --write \"**/*.{ts,js,md}\"", // WORKS - fixes formatting issues
	"test:webview": "npm run build && node ./scripts/setup-webview-test-env.js", // BROKEN - depends on build
	"test:webview-react": "npm run build && node ./scripts/setup-webview-react-test-env.js", // BROKEN - depends on build
	"start": "npm run test:webview" // BROKEN - alias for test:webview
}
```

### Dependency Issues Summary

The project has multiple incompatible dependency versions:

- TypeScript compilation errors with @microsoft/fast-element (design-tokens.ts withDefault issue)
- Rollup plugin version incompatibilities
- Outdated peer dependencies requiring `--legacy-peer-deps`
- Many deprecated dependencies causing npm warnings

### Working with Source Code

- **Components**: Individual components in `src/*/` directories with TypeScript and CSS-in-JS styling
- **Design Tokens**: VS Code theme integration in `src/design-tokens.ts`
- **React Wrappers**: Auto-generated React components in `src/react/`
- **Documentation**: Each component has a README.md with usage examples

### Timeout Recommendations

- `npm install --legacy-peer-deps`: **90 seconds** (takes ~20-40 seconds, buffer for slow connections)
- `npm run lint`: **30 seconds** (takes ~3 seconds)
- `npm run fmt`: **30 seconds** (takes ~2 seconds)
- **NEVER CANCEL** any of these commands during execution

## Important Notes

- This is a **COMPONENT LIBRARY**, not an application - no server or UI to run
- The project builds distributable JavaScript files for use in VS Code extensions
- Due to build issues, focus on source code analysis and linting only
- Node.js 20.x works but Node.js 18.x may provide better compatibility if issues arise
- The Azure Pipeline may work differently due to locked dependency versions or caching
- Extensive SAMPLES directory contains working example extensions for various frameworks
