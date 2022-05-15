import { Title } from "./styles"


type TitleProps = {
    tempId: number;
}

export const WeatherTitle = ({tempId}: TitleProps) => {
    return (
        <Title>ID {tempId}</Title>
    )
}