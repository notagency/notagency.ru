module.exports = [
  {
    name: 'sequoia-site',
    script: './dist/server_compiled.js',
    exec_mode: process.env.PM2_MODE,
    instances: process.env.PM2_INSTANCES,
    interpreter: 'node',
    interpreter_args: '',
  },
];
