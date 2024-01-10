import { Controller, Get, HttpException } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsCountResponse, ReviewsResponse } from './reviews.types';
import { HttpStatus } from '@nestjs/common';

@Controller('reviews')
export class ReviewsController {
	constructor(private reviewsService: ReviewsService) {}

	@Get()
	async getReviews(): Promise<Array<ReviewsResponse>> {
		const result = await this.reviewsService.getReviews();
		return result;
	}

	@Get('/count')
	async getReviewsCount(): Promise<ReviewsCountResponse> {
		const reviewsCount = await this.reviewsService.getReviewsCount();
		return { reviewsCount };
	}
}
