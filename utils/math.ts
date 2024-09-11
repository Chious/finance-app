export const formattedDate = (date: string) => {
  const d = new Date(date);

  return `${d.getDate()} ${d.toLocaleString("en-US", {
    month: "short",
  })} ${d.getFullYear()}`;
};
