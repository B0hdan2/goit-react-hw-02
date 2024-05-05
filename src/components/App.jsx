import { useState, useEffect } from "react";
import SipHappensCafe from "./SipHappensCafe/SipHappensCafe.jsx";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";

const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedClicks = JSON.parse(window.localStorage.getItem('feedback'))

    if (savedClicks !== null) {
      return savedClicks;
    }
    
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

useEffect(()=>{
window.localStorage.setItem('feedback', JSON.stringify({...reviews}))
},[reviews])

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
