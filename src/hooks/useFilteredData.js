const useFilteredData = (posts, query) => {
  console.log("Filtered test");
  const queryWords = query
    .toLowerCase()
    .split(" ")
    .filter((word) => word.length > 0);

  return posts.filter((post) =>
    queryWords.every(
      (word) =>
        post.name.toLowerCase().includes(word) ||
        post.body.toLowerCase().includes(word)
    )
  );
};

export default useFilteredData;
