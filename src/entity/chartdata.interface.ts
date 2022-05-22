interface Datasets {
    name: string;
    data: any[];
    borderColor: string;
    backgroundColor: string;
}
export interface ChartData {
    datasets: Datasets[];
    name: [];
}