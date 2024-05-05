const Feedback = ({ reviews, positiveFeedback, totalFeedback }) => {
  return (
    <div>
      <>
        <p>Good: {reviews.good}</p>
        <p>Neutral: {reviews.neutral}</p>
        <p>Bad: {reviews.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
      </>
    </div>
  );
};

export default Feedback;
