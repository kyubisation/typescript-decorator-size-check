# typescript-decorator-size-check

Checking the output size of decorator implementations

## Results

Run `npm run calculate` to transpile the examples and calculate the resulting sizes.

TypeScript: 5.8.3
Terser (.min.js): 5.43.1

| Type | Size | Diff |
| ---- | ---- | ---- |
| experimental-no-tslib/experimental-class-decorator.js | 807 | -2394 |
| experimental-no-tslib/experimental-class-decorator.min.js | 556 | -1052 |
| experimental-no-tslib/experimental-property-decorator.js | 787 | -2650 |
| experimental-no-tslib/experimental-property-decorator.min.js | 544 | -1219 |
| experimental-tslib/experimental-class-decorator.js | 271 | -867 |
| experimental-tslib/experimental-class-decorator.min.js | 224 | -354 |
| experimental-tslib/experimental-property-decorator.js | 251 | -1123 |
| experimental-tslib/experimental-property-decorator.min.js | 212 | -521 |
| standard-no-tslib/standard-class-decorator.js | 3,201 | 2394 |
| standard-no-tslib/standard-class-decorator.min.js | 1,608 | 1052 |
| standard-no-tslib/standard-property-decorator.js | 3,437 | 2650 |
| standard-no-tslib/standard-property-decorator.min.js | 1,763 | 1219 |
| standard-tslib/standard-class-decorator.js | 1,138 | 867 |
| standard-tslib/standard-class-decorator.min.js | 578 | 354 |
| standard-tslib/standard-property-decorator.js | 1,374 | 1123 |
| standard-tslib/standard-property-decorator.min.js | 733 | 521 |
