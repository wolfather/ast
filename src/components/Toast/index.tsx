import { FC, memo, useEffect, useState } from "react";
import { ToastValue } from "../Atoms/ToastValue";
import { ToastContainer } from "./styles"

export type ToastProps = {
    status: string;
}

const _Toast: FC<ToastProps> = (props: ToastProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    useEffect(() => {
        if(props.status.toLowerCase() === 'open' || props.status.toLowerCase() === 'closed') {
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
            }, 1500);
        }
    }, [props.status]);

    return (
        <>
        {visible ? 
            <ToastContainer status={props.status}>
                <ToastValue status={props.status} />
            </ToastContainer> : 
            <></>
        }
        </>
    )
};

export const Toast = memo(_Toast);