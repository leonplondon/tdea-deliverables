module.exports = {
  NAME: 'inscribir',
  description: 'Inscripción de curso en el TdeA',
  definition: {
    courseId: {
      alias: 'c',
      demand: true,
    },
    name: {
      alias: 'n',
      demand: true,
    },
    id: {
      alias: 'i',
      demand: true,
    },
  },
};
