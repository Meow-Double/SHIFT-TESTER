import React, { ReactNode } from 'react';
import clsx from "clsx";

import styles from "./Button.module.css";

type ButtonVariant = "conteined" | "outlined";

interface ButtonProps extends React.ComponentProps<"button">{
    loading?:boolean;
    variant:ButtonVariant;
    children: ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({variant, children, className, loading, ...props}, ref) => {
    return (
        <button className={clsx(styles.button, styles[variant], className)} {...props} ref={ref}>
            {loading ? <>Loading</> : <>{children}</>}
        </button>
    )
})



