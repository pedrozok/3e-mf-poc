// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'portal',
  remotes: ['sqp', 'sqdv'],
};

module.exports = moduleFederationConfig;
