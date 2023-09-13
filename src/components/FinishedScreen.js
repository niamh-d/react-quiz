function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🏅";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 30 && percentage < 50) emoji = "🤨";
  if (percentage >= 15 && percentage < 30) emoji = "😹";
  if (percentage < 15) emoji = "🤦";

  return (
    <>
      <p className="result">
        {emoji} You scored
        <strong> {points}</strong> out of
        <strong> {maxPossiblePoints} </strong>points ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishedScreen;
