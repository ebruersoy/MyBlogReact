import React from "react";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteArticle()}>Add Upvotes</button>
      <h3>This post has been upvoted {upvotes} times</h3>
    </div>
  );
};
export default UpvotesSection;
