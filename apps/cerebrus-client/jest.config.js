module.exports = {
  name: 'cerebrus-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cerebrus-client',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
