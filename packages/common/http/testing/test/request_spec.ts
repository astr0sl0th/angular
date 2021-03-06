/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {HttpClient} from '@angular/common/http';
import {HttpClientTestingBackend} from '@angular/common/http/testing/src/backend';

describe('HttpClient TestRequest', () => {
  it('accepts a null body', () => {
    const mock = new HttpClientTestingBackend();
    const client = new HttpClient(mock);

    let resp: any;
    client.post('/some-url', {test: 'test'}).subscribe(body => { resp = body; });

    const req = mock.expectOne('/some-url');
    req.flush(null);

    expect(resp).toBeNull();
  });
});
