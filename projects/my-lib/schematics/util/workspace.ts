import { Tree, SchematicsException } from '@angular-devkit/schematics';


export function getWorkspace(tree: Tree): { projects: { [name: string]: any } } {
  const workspaceConfig = tree.read('/angular.json');

  if (!workspaceConfig) {
    throw new SchematicsException('Could not find Angular workspace configuration');
  }

  const workspaceContent = workspaceConfig.toString();

  return JSON.parse(workspaceContent);
}