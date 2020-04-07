module.exports = {
  name: 'angular-nest-herokuapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-nest-herokuapp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
