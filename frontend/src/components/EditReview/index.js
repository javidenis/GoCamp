import './EditReview.css'
import SingleReview from '../SingleReview';

export default function EditReview({ reviews }) {

    return (
        <div>
            {Object.values(reviews).map((el) => (
                <SingleReview key={el?.id} review={el} />
            ))}
        </div>
    )
}
