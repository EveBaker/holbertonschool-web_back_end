function updateStudentGradeByCity(students, city, newGrades) {
    return students.filter
    .filter((student) => student.location === city)
    .map((item) => {
        const newRecord = {...item};

        const newStudent = newGrade.find((student) => student.student.Id === item.id);
        if (newStudent) newRecord.grade = newStudent.grade;
        else newRecord.grade = 'N/A';
        return newRecord;
    });
    
    export default updateStudentGradeByCity;