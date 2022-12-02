import { Fragment, useState, ChangeEvent } from 'react';

export default function AddReviewForm(): JSX.Element {

  const [formState, setFormState] = useState({
    rating: '',
    comment: ''
  });

  const ratingQty: number[] = Array.from({ length: 10 }, (_, i) => ++i);

  function handleFieldChange({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratingQty.reverse().map((i) => (
              <Fragment key={`rating-${i}`}>
                <input
                  className="rating__input"
                  id={`star-${i}`}
                  type="radio"
                  name="rating"
                  value={i}
                  onChange={handleFieldChange}
                  checked={i === Number(formState.rating)}
                />
                <label className="rating__label" htmlFor={`star-${i}`} >Rating {i}</label>
              </Fragment >
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={handleFieldChange}
            defaultValue={formState.comment}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}
