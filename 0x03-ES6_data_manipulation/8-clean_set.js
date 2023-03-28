export default function cleanSet(set, startString) {
  let result = '';
  let firstSubstring = true;
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (value.startsWith(startString)) {
      const substring = value.substring(startString.length);
      if (substring && substring !== value) {
        if (firstSubstring) {
          firstSubstring = false;
        } else {
          result += '-';
        }
        result += substring;
      }
    }
  }
  return result;
}
