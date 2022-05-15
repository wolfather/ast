import { FC, ReactElement } from "react";
import { Container } from "./styles"

type ContainerProps = {
    children: ReactElement[];
}
export const WeatherContainer: FC<ContainerProps> = ({children}: ContainerProps) => {
    return <Container>{children}</Container>
}