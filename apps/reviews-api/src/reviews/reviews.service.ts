import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ReviewsService {
	constructor(private prisma: DatabaseService) {}

	getReviews() {
		return this.prisma.review.findMany({
			include: {
				user: true,
				company: true,
			},
			orderBy: [
				{
					createdOn: 'desc',
				},
			],
		});
	}

	getReviewsCount() {
		return this.prisma.review.count();
	}
}
