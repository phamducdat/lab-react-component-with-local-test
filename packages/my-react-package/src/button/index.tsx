import {Button, ButtonProps} from "antd";
import React from "react";
import scssClasses from './styles.module.scss';


const CustomButton: React.FC<ButtonProps> = props => {
    return (
        <>
            <div className={scssClasses.datpd}>
                <Button {...props}/>
            </div>
        </>
    );
};
export default CustomButton;
