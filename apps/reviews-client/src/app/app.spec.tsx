import { render } from '@testing-library/react';
import App from './app';
import 'isomorphic-fetch';
import nock = require('nock');
import mockResponse from '../app/mocks/mockResponse';

describe('App', () => {
	it('should render successfully', async () => {
		nock('http://localhost:3333').persist().get('/api/reviews').reply(200, mockResponse);

		const { baseElement } = render(<App />);
		expect(baseElement).toBeTruthy();
	});
});
