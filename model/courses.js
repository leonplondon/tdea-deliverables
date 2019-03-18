class Course {
  constructor(id, name, duration, value) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.value = value;
  }

  print() {
    // eslint-disable-next-line no-console
    console.log(`El curso ${this.id} - ${this.name} tiene una duración de ${this.duration} horas y cuesta ${this.value}`);
  }
}

const courses = [
  new Course(3007854, 'Técnicas de aprendizaje estadístico', 40, 500000),
  new Course(3100196, 'Innovación y emprendimiento, de la creatividad a la acción', 48, 520000),
  new Course(3007855, 'Inteligencia artificial', 320, 1499990),
  new Course(3009846, 'Laboratorio de fotografía I', 60, 199999),
  new Course(3006969, 'Diseño de sistemas de riego', 48, 499999),
];

const showCourses = (coursesArray = []) => {
  coursesArray.forEach((course, index) => {
    setTimeout(
      () => { course.print(); },
      (index + 1) * 2000,
    );
  });
};

module.exports = {
  Course,
  courses,
  showCourses,
};
