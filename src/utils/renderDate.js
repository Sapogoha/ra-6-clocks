export default function renderDate(timestamp, timeZone) {
  const date = new Date(timestamp + timeZone * 60 * 60 * 1000);
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const mins =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const secs =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return { hours, mins, secs };
}
