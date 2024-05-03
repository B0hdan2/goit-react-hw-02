const Feedback = ({ reviews, totalFeedback }) => {
  return (
    <div>
      {totalFeedback > 0 ? (
        <>
          <p>Good: {reviews.good}</p>
          <p>Neutral: {reviews.neutral}</p>
          <p>Bad: {reviews.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>{Math.round((reviews.good / totalFeedback) * 100)}%</p>
        </>
      ) : (
        <p> No Feedback yet</p>
      )}
    </div>
  );
};

export default Feedback;
