import React, { ReactNode } from 'react';
import clsx from "clsx";

import styles from "./Button.module.css";

type ButtonVariant = "conteined" | "outlined";

interface ButtonProps extends React.ComponentProps<"button">{
    variant:ButtonVariant;
    children: ReactNode;
}

export const Button = ({variant, children, className, ...props}:ButtonProps) => {
    return (
        <button className={clsx(styles.button, styles[variant], className)} {...props}>
            {children}
        </button>
    );
}



