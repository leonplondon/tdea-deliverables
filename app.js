/* eslint-disable no-console */

const yargs = require('yargs');
const fs = require('fs');
const express = require('express');

let operationResult = undefined;

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

  operationResult = `Interesado(id=${data.id}, name=${data.name}) <-> Curso(id=${course.id}, name=${course.name}, duration=${course.duration}, value=${course.value})\n`;
  console.log(operationResult);

};

const cli = yargs
  .command(inscriptCmd.NAME, inscriptCmd.description, inscriptCmd.definition)
  .argv;

if (cli._[0] === inscriptCmd.NAME) {
  studentInscription(cli);
} else {
  showCourses(courses);
}

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(operationResult);

  res
    .status(200)
    .end(operationResult);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
