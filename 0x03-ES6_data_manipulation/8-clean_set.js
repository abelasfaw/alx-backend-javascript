export default function cleanSet(set, startString) {
  let result = '';
  let firstSubstring = true;
  if (!set || !startString) {
    return '';
  }
  for (const value of set.values()) {
    if (value.startsWith(startString)) {
      if (value.substring(startString.length)) {
        if (firstSubstring) {
          firstSubstring = false;
        } else {
          result += '-';
        }
        result += value.substring(startString.length);
      }
    }
  }
  return result;
}
