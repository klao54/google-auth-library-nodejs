 // Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

module.exports = {
  opts: {
    readme: './README.md',
    package: './package.json',
    template: './node_modules/jsdoc-fresh',
    recurse: true,
    verbose: true,
    destination: './docs/',
  },
  plugins: ['plugins/markdown', 'jsdoc-region-tag'],
  source: {
    include: ['build/src'],
    includePattern: '\\.js$',
  },
  templates: {
    copyright: 'Copyright 2019 Google LLC',
    includeDate: false,
    sourceFiles: false,
    systemName: 'google-auth-library',
    theme: 'lumen',
    default: {
      outputSourceFiles: false,
    },
  },
  markdown: {
    idInHeadings: true,
  },
};
