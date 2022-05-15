export const convertToDate = (value: number):string => {
    return String(new Date(value * 1000)).substring(0, 10);
}