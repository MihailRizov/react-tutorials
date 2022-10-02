import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { componentGenerator } from '@nrwl/react';
import { names, getProjects } from '@nrwl/devkit';

export default async function (host: Tree, schema: any) {
  const { className, fileName } = names(schema.name);
  const projects = getProjects(host);
  const project = projects.get(schema.project);
  const rootDirectory = `app/`;
  const componentDir = `${schema.dir}` || `/`;
  const directory = `${rootDirectory}${componentDir}`;

  await componentGenerator(host, {
    name: schema.name,
    project: schema.project,
    style: 'scss',
    directory,
  });

  host.write(
    `${project!.root}/src/${directory}/${fileName}/${fileName}.tsx`,
    `
      import styles from './${className}.module.scss'

      /* eslint-disable-next-line */
      export interface ${className}Props {}

      export const ${className} = (props: ${className}Props) => {
        return(
          <div className={styles['']}>
          The ${className} works!
          </div>
        );
      }

      export default ${className};
  `
  );

  await formatFiles(host);

  return () => {
    installPackagesTask(host);
  };
}
