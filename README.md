# typescript-decorator-size-check

Checking the output size of decorator implementations

## Results

Run `npm run calculate` to transpile the examples and calculate the resulting sizes.

TypeScript: 5.8.3

Terser (.min.js): 5.43.1

| Type | Size | Diff | Minified Size | Minified Diff |
| ---- | ---- | ---- | ---- | ------------- |
| experimental-no-tslib/experimental-1-property-decorator.js | 782 | -2650 | 539 | -1219 |
| experimental-no-tslib/experimental-2-property-decorator.js | 868 | -3276 | 608 | -1446 |
| experimental-no-tslib/experimental-3-property-decorator.js | 954 | -3902 | 677 | -1673 |
| experimental-no-tslib/experimental-class-decorator.js | 807 | -2394 | 556 | -1052 |
| experimental-tslib/experimental-1-property-decorator.js | 246 | -1123 | 207 | -521 |
| experimental-tslib/experimental-2-property-decorator.js | 332 | -1749 | 276 | -748 |
| experimental-tslib/experimental-3-property-decorator.js | 418 | -2375 | 345 | -975 |
| experimental-tslib/experimental-class-decorator.js | 271 | -867 | 224 | -354 |
| standard-no-tslib/standard-1-property-decorator.js | 3432 | 2650 | 1758 | 1219 |
| standard-no-tslib/standard-2-property-decorator.js | 4144 | 3276 | 2054 | 1446 |
| standard-no-tslib/standard-3-property-decorator.js | 4856 | 3902 | 2350 | 1673 |
| standard-no-tslib/standard-class-decorator.js | 3201 | 2394 | 1608 | 1052 |
| standard-tslib/standard-1-property-decorator.js | 1369 | 1123 | 728 | 521 |
| standard-tslib/standard-2-property-decorator.js | 2081 | 1749 | 1024 | 748 |
| standard-tslib/standard-3-property-decorator.js | 2793 | 2375 | 1320 | 975 |
| standard-tslib/standard-class-decorator.js | 1138 | 867 | 578 | 354 |
