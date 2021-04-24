# triplecheck-core

## TripleCheck: Core contracts and utilities

This repo contains core functionality that is shared across `triplecheck` projects, such as the base [repository contract](https://hannesdorfmann.com/android/evolution-of-the-repository-pattern/) to be used by any concrete implementations that handle database actions for TripleCheck. To use a vendor-specific solution there needs to be a compatible Repository built for it.

TripleCheck and its repositories are written in Typescript.

## Installation

Install as a dependency with `npm install triplecheck-core` or `yarn install triplecheck-core`.

## Documentation

See the generated documentation under `/docs`.

## The Repository class

You should `implement` the Repository class for your concrete implementation.

```TypeScript
export abstract class Repository {
  abstract seedData(): Promise<void>;
  abstract getData(key: string): Promise<any>;
  abstract putData(type: DocumentType, data: any): Promise<void>;
  abstract deleteData(
    type: DocumentType,
    serviceName: string,
    version?: string | undefined,
    test?: string | undefined
  ): Promise<void>;
}
```

## Hygiene and standards

### Open source

Dependencies (direct, production) are checked in CI with [license-compliance](https://www.npmjs.com/package/license-compliance) and [license-compatibility-checker](https://github.com/HansHammel/license-compatibility-checker) for acceptable permissive licenses.

Additionally, it's possible to use [tldrlegal](https://github.com/eladnava/tldrlegal) and [legally](https://github.com/franciscop/legally) to get a fuller picture of any obligations.

### Security

GitHub code scanning, CodeQL analysis and Dependabot is used to improve our security.
