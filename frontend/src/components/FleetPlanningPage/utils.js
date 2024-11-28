export function calculateTimeDifference(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const diffInMs = end - start;

  const diffInMinutes = diffInMs / 1000 / 60;
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = Math.floor(diffInMinutes % 60);
  return `${hours}hr${hours !== 1 ? "s" : ""} ${minutes}min`;
}
