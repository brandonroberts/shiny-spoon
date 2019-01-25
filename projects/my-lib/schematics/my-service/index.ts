import { Rule, Tree, apply, url, applyTemplates, move, chain, mergeWith } from '@angular-devkit/schematics';

import { Schema as MyServiceSchema } from './schema';
import { getWorkspace } from '../util/workspace';
import { normalize } from '@angular-devkit/core';
import { classify, dasherize } from '@angular-devkit/core/src/utils/strings';


export function myService(options: MyServiceSchema): Rule {
  return (tree: Tree) => {
    const workspace = getWorkspace(tree);

    if (!options.project) {
      options.project = workspace.projects['defaultProject'];
    }
    const project = workspace.projects[options.project as string];
    const projectType = project['projectType'] === 'application' ? 'app' : 'lib';

    if (options.path === undefined) {
      options.path = project['sourceRoot'][projectType];
    }

    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify,
        dasherize,
        name: options.name
      }),
      move(normalize(options.path as string))
    ]);
    
    return chain([
      mergeWith(templateSource)
    ]);
  };
}
