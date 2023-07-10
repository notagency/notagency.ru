import fs from 'fs-extra';
import path from 'node:path';

function recursiveResolve(alias, cwd, result = {}) {
  for (const [k, v] of Object.entries(alias)) {
    if (fs.statSync(v).isDirectory()) {
      fs.readdirSync(v).forEach((fileOrDir) => {
        const currentPath = path.join(v, fileOrDir);
        const isStillDir = fs.statSync(currentPath).isDirectory();

        if (isStillDir) {
          const resolved = recursiveResolve(
            {
              [currentPath]: currentPath,
            },
            cwd,
            result
          );
          const [[_k, _v]] = Object.entries(resolved);
          result[_k] = _v;
        } else {
          const fileName = fileOrDir.replace(path.extname(fileOrDir), '');
          let replacedKey;
          if (fileName === 'index') {
            replacedKey = k.endsWith('*') ? k.replace('*', '') : k;
          } else {
            replacedKey = k.endsWith('*')
              ? k.replace('*', fileName)
              : path.join(k, fileOrDir.replace(path.extname(fileOrDir), ''));
          }
          result[replacedKey] = path.resolve(v, fileOrDir);
        }
      });

      k.endsWith('*') && delete alias[k];
    } else {
      result[k] = v;
    }
  }

  return result;
}

function normalizeOption(options = {}) {
  const alias = options.alias ?? {};
  const cwd = options.cwd ?? process.cwd();
  const resolvedAlias = recursiveResolve(alias, cwd);
  const shouldSkipThisPlugin = options.skip ?? !Object.keys(resolvedAlias).length;
  return {
    alias: resolvedAlias,
    skip: shouldSkipThisPlugin,
    cwd,
  };
}

const pluginName = 'plugin:alias-resolve';

function escapeNamespace(keys) {
  return new RegExp(`^${keys.map((str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')}$`);
}

export const AliasResolvePlugin = (options) => {
  const { alias, skip } = normalizeOption(options);

  if (skip) {
    return {
      name: pluginName,
      setup() {},
    };
  }

  const escapedNamespace = escapeNamespace(Object.keys(alias));

  return {
    name: pluginName,
    setup(build) {
      build.onResolve({ filter: escapedNamespace }, ({ path: fromPath }) => {
        const replacedPath = alias[fromPath];
        if (!replacedPath) {
          return null;
        }
        return {
          path: replacedPath,
        };
      });
    },
  };
};
