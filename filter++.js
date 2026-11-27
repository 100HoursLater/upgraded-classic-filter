
const awords = ["ass", "ASS", "azz", "AZZ"];
const cwords = ["cunt", "Cunt", "CUNT", "Cnnt"];
const fwords = ["fuck", "Fuck", "FUCK", "Fnck"];
const swords = ["shit", "Shit", "SHIT", "s-hit"];
const dwords = ["dick", "Dick", "DICK", "dlck"];
const racialwords = ["nigga", "Nigga", "NIGGA", "n!gga", "N!gga", "N!GGA", "nigger", "Nigger", "NIGGER", "n!gger", "N!gger", "N!GGER"];
const special = ["fucking cunt", "Fucking Cunt"];
const special_2 = ["Yes", "No", "no", "yes"];
const special_3 = ["Lucia"];
      const special_4 = ["Jason Duval"];
      const special_5 = ["Jeffrey Epstein"];

let userinput = "";

for (const iuword of special) {
  userinput = userinput.replaceAll(iuword, "jerk off batman?");
}

for (const word of awords) { userinput = userinput.replaceAll(word, "a**"); }
for (const word of cwords) { userinput = userinput.replaceAll(word, "c***"); }
for (const word of fwords) { userinput = userinput.replaceAll(word, "f***"); }
for (const word of swords) { userinput = userinput.replaceAll(word, "s***"); }
for (const word of dwords) { userinput = userinput.replaceAll(word, "d***"); }
for (const word of racialwords) { userinput = userinput.replaceAll(word, "abhorrent word"); }
 for (const word of special_3) {userinput = userinput.replaceAll(word, "Neil Druckmann")}
      for (const word of special_4) {userinput = userinput.replaceAll(word, "Electric Eel")}
      for (const word of special_5) {userinput = userinput.replaceAll(word, "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678910")}

userinput = userinput.replace(/\b(yes|no)\b/gi, match => {
  const replacement = match.toLowerCase() === "yes" ? "no" : "yes";
  return match === match.toUpperCase()
    ? replacement.toUpperCase()
    : match[0] === match[0].toUpperCase()
      ? replacement[0].toUpperCase() + replacement.slice(1)
      : replacement;
});

console.log(userinput);
