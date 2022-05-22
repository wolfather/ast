import { Title } from "./styles"


type TitleProps = {
    tempId: string;
}

export const WeatherTitle = ({tempId}: TitleProps) => {
    return (
        <Title>{tempId}</Title>
    )
}