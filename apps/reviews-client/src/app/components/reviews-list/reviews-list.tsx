import Alert from '@mui/material/Alert';
import TaskIcon from '@mui/icons-material/Task';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ReviewsResponse } from '../../../../../../apps/reviews-api/src/reviews/reviews.types';

/* eslint-disable-next-line */
export interface ReviewsListProps {}

export function ReviewsList(props: ReviewsListProps) {
	const [reviews, setReviews] = useState([] as Array<ReviewsResponse>);
	const [error, setError] = useState('');

	useEffect(() => {
		const errorMessage = 'Error occurred while trying to fetch reviews: ';
		fetch(`${process.env['NX_API_URL']}/api/reviews`)
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					setReviews([]);
					setError(errorMessage + data.error);
				} else {
					setReviews(data);
				}
			})
			.catch((error) => {
				setError(errorMessage + error.message);
			});
	}, []);

	return (
		<div>
			{reviews && Array.isArray(reviews) && reviews.length ? (
				reviews.map((review: ReviewsResponse) => (
					<Grid item key={review.id} aria-label="review-grid">
						<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
							<CardHeader
								action={
									<IconButton aria-label="settings">
										<MoreVertIcon />
									</IconButton>
								}
								title={`${review?.user?.firstName} ${review?.user?.lastName} - ${review?.company?.name}`}
								subheader={`${new Date(review?.createdOn).toLocaleString('en-US')}`}
							/>
							<Rating name="read-only" value={review?.rating} readOnly />
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography>{review?.reviewText}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))
			) : (
				<Alert severity="error" icon={<TaskIcon />}>
					{error ? error : 'No reviews were found.'}
				</Alert>
			)}
		</div>
	);
}

export default ReviewsList;
