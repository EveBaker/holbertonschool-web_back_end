function getListStudentIds(data) {
  if (!Array.isArray(data)) {
    return [];
  }
  return data.map((student) => student.id);
}
export default getListStudentIds;
