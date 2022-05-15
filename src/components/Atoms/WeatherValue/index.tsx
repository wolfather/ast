import { Value } from "./styles"

type WeatherValueProps = {
    tempValue: string;
}

export const WeatherValue = ({tempValue}: WeatherValueProps) => {
    return (
        <Value>Temp: {tempValue} C</Value>
    )
}