const removeASCII = (string) => string.replace(/[^\x20-\x7E]/g, "");
console.log(removeASCII("äÄçÇéÉêphuöcÖÐþúÚ"));
console.log(removeASCII("äÄçÇéÉêtrungönguÖÐþúÚ"));
console.log(removeASCII("wwdwdwdwdww"));
console.log(removeASCII("6326363"));
