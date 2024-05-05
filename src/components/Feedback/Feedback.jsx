const Feedback = ({ reviews, percentages, totalFeedback }) => {
  return (
    <div>
      <>
        <p>Good: {reviews.good}</p>
        <p>Neutral: {reviews.neutral}</p>
        <p>Bad: {reviews.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {percentages}%</p>
      </>
    </div>
  );
};

export default Feedback;
