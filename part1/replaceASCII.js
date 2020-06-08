const replaceASCII = (string) => string.replace(/[^\x20-\x7E]/g, "");

console.log(replaceASCII("äÄçÇéÉêw3resouröceÖÐþúÚ"));
