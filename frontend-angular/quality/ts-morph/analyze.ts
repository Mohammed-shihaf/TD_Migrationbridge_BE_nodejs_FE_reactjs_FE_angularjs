import { Project } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('target.ts');
const classes = sourceFile.getClasses();
console.log(`classes found: ${classes.length}`);
classes.forEach((c) => {
  console.log(`class ${c.getName()} has ${c.getMethods().length} methods`);
});
