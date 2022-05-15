import { Value } from "./styles"

type ToastValueProps = {
    status: string;
}

export const ToastValue = ({status}: ToastValueProps) => {
    return (
        <Value>{status}</Value>
    )
}