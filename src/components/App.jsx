import { useState } from "react";
import SipHappensCafe from "./SipHappensCafe/SipHappensCafe.jsx";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";

const App = () => {
  const [reviews, setReviews] = useState(() => {
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

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
  return (
    <>
      <SipHappensCafe />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      <Feedback reviews={reviews} totalFeedback={totalFeedback} />
    </>
  );
};
export default App;
