export const dateStringToDate = (dateString: string): Date => {
  //16/03/2019
  const dateParts = dateString
    .split('/')
    .map(
      (value: string): number => {
        return parseInt(value);
      }
    )
    .reverse()
    .join(',')
  //'16,03,2019'
  return new Date(dateParts);
}