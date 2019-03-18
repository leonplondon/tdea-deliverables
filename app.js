/* eslint-disable no-console */

const yargs = require('yargs');
const fs = require('fs');

const { courses, showCourses } = require('./model/courses');
const inscriptCmd = require('./commands/inscription');

const studentInscription = (data) => {
  const course = courses.find(element => element.id === data.courseId);

  if (!course) {
    console.warn('Curso no encontrado, los cursos disponibles son:');
    showCourses(courses);
    return;
  }

  console.log(`El estudiante ${data.name} se va a inscribir en: `);
  course.print();

  const dataToPersist = `Interesado(id=${data.id}, name=${data.name}) <-> Curso(id=${course.id}, name=${course.name}, duration=${course.duration}, value=${course.value})\n`;
  const fileToPersist = `interesado-${data.id}.txt`;
  fs.writeFile(fileToPersist, dataToPersist, { flag: 'a' }, (error) => {
    if (error) {
      console.error(`Error guardando información en archivo ${error}`);
    }

    console.log('El interesado ha quedado prematriculado');
  });
};

const cli = yargs
  .command(inscriptCmd.NAME, inscriptCmd.description, inscriptCmd.definition)
  .argv;

if (cli._[0] === inscriptCmd.NAME) {
  studentInscription(cli);
} else {
  showCourses(courses);
}
