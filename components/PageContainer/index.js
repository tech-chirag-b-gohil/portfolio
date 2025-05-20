import { Typography } from "@mui/material";
import classes from "./styles.module.scss";

export default function PageContainer({ children, header }) {
    return (
        <div className={`${classes.page_container} py-4 px-7`}>
            <Typography variant="h4" className={classes.page_header} color="primary">
                {header}
            </Typography>
            {children}
        </div>
    );
};
