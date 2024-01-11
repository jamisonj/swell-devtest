import { Company, User } from '@prisma/client';

export interface ReviewsCountResponse {
	reviewsCount: number;
}

export interface ReviewsResponse {
	id: string;
	reviewerId: string;
	companyId: string;
	reviewText: string;
	rating: number;
	createdOn: string;
	company: Company;
	user: User;
}
