"use client";

import { Button, Grid, Paper } from "@mui/material";
import classes from "./styles.module.scss";
import { HomeRounded, Work } from '@mui/icons-material';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathName = usePathname();
    return (
        <Grid
            container
            justifyContent="flex-end"
            className="fixed md:relative z-10 md:z-0 bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-auto md:mb-8"
        >
            <Grid
                container
                flex={{ xs: 1, md: "none"}}
                className={classes.nav_bar_container}
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Button className="flex-1" variant={pathName === "/" ? "contained" : "text"}>
                    <Link href="/" className={classes.nav_bar_link}>
                        <HomeRounded className={classes.nav_bar_icon} />
                        <br /> 
                        <>About Me</>
                    </Link>
                </Button>
                <Button className="flex-1" variant={pathName === "/experience" ? "contained" : "text"}>
                    <Link href="/experience" className={classes.nav_bar_link}>
                        <Work className={classes.nav_bar_icon} />
                        <br /> 
                        <>Experience</>
                    </Link>
                </Button>
            </Grid>
        </Grid>
    );
}