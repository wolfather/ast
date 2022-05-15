import { FC, memo } from "react";
import { WeatherTitle } from "../Atoms/WeatherTitle";
import { WeatherValue } from "../Atoms/WeatherValue";
import { Container } from "./styles";

export type TempProps = {
    tempId: number;
    tempValue: string;
}

const _Weatherdisplay: FC<TempProps> = (props: TempProps) => {
    return (
        <Container>
            <WeatherTitle tempId={props.tempId} />
            <WeatherValue tempValue={props.tempValue} />
        </Container>
    )
}

export const Weatherdisplay = memo(_Weatherdisplay);