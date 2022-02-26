const variant = require("./index.js");

try {
    variant("Hello World!", "monospace", "strike") === "𝙷̶𝚎̶𝚕̶𝚕̶𝚘̶ ̶𝚆̶𝚘̶𝚛̶𝚕̶𝚍̶!̶"
        ? console.log("Success")
        : console.log("Failed");
} catch (error) {
    console.log(`Failed: ${error}`);
}