import s from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className={s.Options}>
      <button
        className={s.good}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={s.neutral}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={s.bad}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={s.reset}
          onClick={() => {
            updateFeedback("reset");
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
