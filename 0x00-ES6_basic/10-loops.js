export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const data of array) {
    result.push(appendString + data);
  }

  return result;
}
