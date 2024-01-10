import { render, screen } from '@testing-library/react';
import ReviewsList from './reviews-list';
import 'isomorphic-fetch';
import nock = require('nock');
import mockResponse from '../../mocks/mockResponse';
import { HttpStatus } from '@nestjs/common';

describe('ReviewsList', () => {
	afterEach(() => {
		nock.cleanAll();
	});

	it('should render successfully', async () => {
		const { baseElement } = render(<ReviewsList />);
		expect(baseElement).toBeTruthy();
	});

	it('should render list of reviews, including the name, company, and review text', async () => {
		nock('http://localhost:3333').get('/api/reviews').reply(200, mockResponse);

		render(<ReviewsList />);

		const nameAndCompany = await screen.findByText('Nicki Shyre - Russel, Orn and Jacobson');
		expect(nameAndCompany).toBeInTheDocument();

		const review = await screen.findByText('Praesent blandit lacinia erat.');
		expect(review).toBeInTheDocument();
	});

	it('should display message if no reviews are found', () => {
		render(<ReviewsList />);
		expect(screen.getByText('No reviews were found.')).toBeInTheDocument();
	});

	it('should display error message if error occurs', async () => {
		nock('http://localhost:3333').get('/api/reviews').replyWithError({
			message: 'error',
			code: 'ERROR',
		});

		render(<ReviewsList />);

		const errorMessage =
			'Error occurred while trying to fetch reviews: request to http://localhost:3333/api/reviews failed, reason: error';
		const apiError = await screen.findByText(errorMessage);
		expect(apiError).toBeInTheDocument();
	});

	it('should display API error message if API error occurs', async () => {
		nock('http://localhost:3333')
			.get('/api/reviews')
			.reply(500, { status: HttpStatus.INTERNAL_SERVER_ERROR, error: 'Internal server error' });

		render(<ReviewsList />);

		const errorMessage = 'Error occurred while trying to fetch reviews: Internal server error';
		const apiError = await screen.findByText(errorMessage);
		expect(apiError).toBeInTheDocument();
	});
});
