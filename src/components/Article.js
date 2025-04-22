import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadingTime = () => {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const repeat =
      minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
    return `${emoji.repeat(repeat)} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {/* BONUS FEATURE: put reading time in a separate paragraph to avoid test conflicts */}
      <p>{renderReadingTime()}</p>
    </article>
  );
}

export default Article;
