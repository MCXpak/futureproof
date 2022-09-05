const colors = require("ansi-colors")

colors.theme({
    danger: colors.red,
    dark: colors.dim.gray,
    disabled: colors.gray,
    em: colors.italic,
    heading: colors.bold.underline,
    info: colors.cyan,
    muted: colors.dim,
    primary: colors.blue,
    strong: colors.bold,
    success: colors.green,
    underline: colors.underline,
    warning: colors.yellow
  };

const s = `According to all known laws of aviation, there is no way a bee should be able to fly.`

//console.log(c.bgBlueBright(c.red.bold.underline(`According to all known laws of aviation, there is no way a bee should be able to fly.`)))

for(el in colors.theme){
    console.log("hi")
    console.log(colors.danger(s.charAt(i)))
}
