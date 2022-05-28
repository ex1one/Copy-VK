const formatDate = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes}`;
};

export default formatDate;
