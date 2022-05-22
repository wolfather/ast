export interface Weather {
    id: number;
    timestamp: number;
    temperature: string;
    data:number;
}

export interface WeatherBox {
    category: string;
    temperature: number;
    timestamp: string;
    value: number;
}