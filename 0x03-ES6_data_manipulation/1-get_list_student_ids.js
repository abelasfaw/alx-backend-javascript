export default function getListStudentIds(input) {
  if (input instanceof Array) {
    return input.map((student) => student.id);
  }
  return [];
}
