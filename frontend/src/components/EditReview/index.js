import SingleReview from '../SingleReview';

export default function EditReview({ reviews }) {
    return (
        <div>
            {Object.values(reviews).map((el, i) => (
                <SingleReview key={i} review={el} />
            ))}
        </div>
    )
}