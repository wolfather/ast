export const groupBy = (list: any, key: any) => {
    return list.reduce((prev: any, current: any) => {
      (prev[`id-${String(current[key])}`] = prev[`id-${String(current[key])}`] || []).push(current);

      return prev;
    }, {});
};