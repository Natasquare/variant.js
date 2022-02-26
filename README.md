# variant.js

### Install

```bash
npm i variant.js
```

### Testing

```bash
npm test
```

### Info

Convert a string into different kind of Unicode variants. Created to show some "cool" styled text in the browsers built-in `alert()`, `prompt()` and `confirm()` dialogs.

|Variant     | Alias | Description                   | Example           |
|:--------- |:-----:|:----------------------------- |:----------------- |
| monospace |   m   | Monospace      | 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 |
| bold   |   b   | Bold text                        |𝐛𝐨𝐥𝐝  |
| italic  |  if   | Italic text                       | 𝑖𝑡𝑎𝑙𝑖𝑐  |
| bold italic   |   bi   | bold+italic text   | 𝒃𝒐𝒍𝒅 𝒊𝒕𝒂𝒍𝒊𝒄 |
| script     |   c   | Handwriting style         | 𝓈𝒸𝓇𝒾𝓅𝓉    |
| bold script  |  bc   | Bolder handwriting     | 𝓫𝓸𝓵𝓭 𝓼𝓬𝓻𝓲𝓹𝓽      |
| gothic  |   g   |Gothic (fraktur)            | 𝔤𝔬𝔱𝔥𝔦𝔠      |
| gothic bold  |   gb   | Gothic in bold| 𝖌𝖔𝖙𝖍𝖎𝖈 𝖇𝖔𝖑𝖉        |
| doublestruck |   d   | Outlined text        | 𝕕𝕠𝕦𝕓𝕝𝕖𝕤𝕥𝕣𝕦𝕔𝕜 |
| 𝗌𝖺𝗇𝗌   |  s   | Sans-serif style    | 𝗌𝖺𝗇𝗌 |
| bold 𝗌𝖺𝗇𝗌   |  bs   | Bold sans-serif   | 𝗯𝗼𝗹𝗱 𝘀𝗮𝗻𝘀 |
| italic 𝗌𝖺𝗇𝗌   |  is   | Italic sans-serif  | 𝘪𝘵𝘢𝘭𝘪𝘤 𝘴𝘢𝘯𝘴 |
| bold italic sans  |  bis   | Bold italic sans-serif  | 𝙗𝙤𝙡𝙙 𝙞𝙩𝙖𝙡𝙞𝙘 𝙨𝙖𝙣𝙨 |
| circled  |  o   | Letters within circles   | ⓒⓘⓡⓒⓛⓔⓓ |
| paranthesis   |  p   | Letters within paranthesis  | ⒫⒜⒭⒠⒩⒯⒣⒠⒮⒤ |
| fullwidth  | w   | Wider monospace font   | ｆｕｌｌｗｉｄｔｈ |


Besides that, the text can be enriched with underline or strike (or both) through the flags param:

|Variant     | Flags               | Example           |
|:--------- |:-----|:---------------------------- |
| gothic |   underline   | 𝔤̲𝔬̲𝔱̲𝔥̲𝔦̲𝔠̲|
| paranthesis |   strike   | 𝚙̶𝚊̶𝚛̶𝚊̶𝚗̶𝚝̶𝚑̶𝚎̶𝚜̶𝚒̶𝚜̶ |

### Example

```js
const variant = require("variant.js");

console.log(variant("Hello World!", "monospace", "strike")); // "𝙷̶𝚎̶𝚕̶𝚕̶𝚘̶ ̶𝚆̶𝚘̶𝚛̶𝚕̶𝚍̶!̶"
```

### Notes

* There is no support for special chars such as `&`, `%` and so on.
* Not all combinations of variants and flags is guaranteed to work.
* Some variants does not support numbers some variants does not support capital or small letters.