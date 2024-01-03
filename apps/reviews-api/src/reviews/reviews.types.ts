import { Company, Review, User } from '@prisma/client';

export interface ReviewsCountResponse {
	reviewsCount: number;
}

// TODO: Consider removing this.
// export interface ReviewExt extends Review {
// 	company: Company;
// 	user: User;
// }

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
