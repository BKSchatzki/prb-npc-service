const dedupeList = (arr: unknown[]) => {
  const dedupedList = Array.from(new Set(arr));
  console.dir(dedupedList, { maxArrayLength: null });
  return dedupedList;
};

export default dedupeList;
