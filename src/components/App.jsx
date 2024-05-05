import { useState, useEffect } from "react";
import Description from "./Description/Description.jsx";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import Notification from "./Notification/Notification.jsx";

const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedClicks = JSON.parse(window.localStorage.getItem("feedback"));

    if (savedClicks !== null) {
      return savedClicks;
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify({ ...reviews }));
  }, [reviews]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      return setReviews({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }

    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const percentages = Math.round((reviews.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          reviews={reviews}
          percentages={percentages}
          totalFeedback={totalFeedback}
        />
      )}
    </>
  );
};
export default App;
