export const insertSpace = (value) => value.replace(/([A-Z])/g, " $1").trim();

export const isValidEmail = (value) =>
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);

export const translateTitles = (word) => {
  const dictionary = {
    name: "Nombre",
    email: "Correo electrónico",
    subject: "Asunto",
    message: "Mensaje",
    programmingLanguages: "Lenguajes de Programación",
    frameworksAndLibraries: "Frameworks y Librerías",
    databases: "Bases de Datos",
    webDevelopment: "Desarrollo Web",
    operatingSystemsAndTools: "Sistemas Operativos y Herramientas",
    otherTools: "Otras Herramientas",
    languages: "Idiomas",
  };
  return dictionary[word] || word;
};
