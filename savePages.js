const { readdirSync } = require("fs");

const content = readdirSync("./pages", {withFileTypes: true});

for (let file of content)
{
    console.log(file.isDirectory(), file.name);
}