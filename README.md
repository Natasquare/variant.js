# variant.js

### Install

```bash
npm i variant.js
```

### Info

Convert a string into different kind of Unicode variants. Created to show some "cool" styled text in the browsers built-in `alert()`, `prompt()` and `confirm()` dialogs.

|Variant     | Alias | Description                   | Example           |
|:--------- |:-----:|:----------------------------- |:----------------- |
| monospace |   m   | Monospace      | ๐๐๐๐๐๐๐๐๐ |
| bold   |   b   | Bold text                        |๐๐จ๐ฅ๐  |
| italic  |  if   | Italic text                       | ๐๐ก๐๐๐๐  |
| bold italic   |   bi   | bold+italic text   | ๐๐๐๐ ๐๐๐๐๐๐ |
| script     |   c   | Handwriting style         | ๐๐ธ๐๐พ๐๐    |
| bold script  |  bc   | Bolder handwriting     | ๐ซ๐ธ๐ต๐ญ ๐ผ๐ฌ๐ป๐ฒ๐น๐ฝ      |
| gothic  |   g   |Gothic (fraktur)            | ๐ค๐ฌ๐ฑ๐ฅ๐ฆ๐       |
| gothic bold  |   gb   | Gothic in bold| ๐๐๐๐๐๐ ๐๐๐๐        |
| doublestruck |   d   | Outlined text        | ๐๐ ๐ฆ๐๐๐๐ค๐ฅ๐ฃ๐ฆ๐๐ |
| ๐๐บ๐๐   |  s   | Sans-serif style    | ๐๐บ๐๐ |
| bold ๐๐บ๐๐   |  bs   | Bold sans-serif   | ๐ฏ๐ผ๐น๐ฑ ๐๐ฎ๐ป๐ |
| italic ๐๐บ๐๐   |  is   | Italic sans-serif  | ๐ช๐ต๐ข๐ญ๐ช๐ค ๐ด๐ข๐ฏ๐ด |
| bold italic sans  |  bis   | Bold italic sans-serif  | ๐๐ค๐ก๐ ๐๐ฉ๐๐ก๐๐ ๐จ๐๐ฃ๐จ |
| circled  |  o   | Letters within circles   | โโโกโโโโ |
| paranthesis   |  p   | Letters within paranthesis  | โซโโญโ โฉโฏโฃโ โฎโค |
| fullwidth  | w   | Wider monospace font   | ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ |


The text can be enriched with underline or strike (or both) through the flags param:

|Variant     | Flags               | Example           |
|:--------- |:-----|:---------------------------- |
| gothic |   underline   | ๐คฬฒ๐ฌฬฒ๐ฑฬฒ๐ฅฬฒ๐ฆฬฒ๐ ฬฒ|
| paranthesis |   strike   | ๐ฬถ๐ฬถ๐ฬถ๐ฬถ๐ฬถ๐ฬถ๐ฬถ๐ฬถ๐ฬถ๐ฬถ๐ฬถ |

### Example

```js
const variant = require("variant.js");

console.log(variant.format("Hello World", "monospace", "strike")); // "๐ทฬถ๐ฬถ๐ฬถ๐ฬถ๐ฬถโฬถ๐ฬถ๐ฬถ๐ฬถ๐ฬถ๐ฬถ"
```

### Notes

* There is no support for special chars such as `&`, `%` and so on.
* Not all combinations of variants and flags is guaranteed to work.
* Some variants does not support numbers some variants does not support capital or small letters.