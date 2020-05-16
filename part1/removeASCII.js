const removeASCII = (string) => string.replace(/[^\x20-\x7E]/g, "");
console.log(removeASCII("äÄçÇéÉêphuöcÖÐþúÚ"));
console.log(removeASCII("äÄçÇéÉêtrungönguÖÐþúÚ"));
