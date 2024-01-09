import Alert from '@mui/material/Alert';
import TaskIcon from '@mui/icons-material/Task';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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
	console.log('reviews', reviews);
	useEffect(() => {
		fetch(`${process.env['NX_API_URL']}/api/reviews`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setReviews(data);
			});
	}, []);
	return (
		<div>
			{reviews && reviews.length ? (
				reviews.map((review: ReviewsResponse) => (
					<Grid item key={review.id}>
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
					No Reviews have been entered.
				</Alert>
			)}
		</div>
	);
}

export default ReviewsList;
