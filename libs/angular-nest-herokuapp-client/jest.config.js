module.exports = {
  name: 'angular-nest-herokuapp-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/angular-nest-herokuapp-client',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
