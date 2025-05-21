"use client";

import { Button, Grid, Paper } from "@mui/material";
import classes from "./styles.module.scss";
import { HomeRounded, Work } from '@mui/icons-material';
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeChanger from "../ThemeChanger/themeChanger";

export default function NavBar() {
    const pathName = usePathname();
    return (
        <Grid container justifyContent="space-between" alignItems="center" gap={2} className="md:mb-4">
            <Paper
                elevation={3}
                sx={{ borderRadius: "10px" }}
                className="flex-1 overflow-hidden fixed md:relative z-10 md:z-0 bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-auto"
            >
                <Grid
                    container
                    flex={1}
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Button className="flex-1" variant={pathName === "/" ? "contained" : "text"}>
                        <Link href="/" className={`${classes.nav_bar_link} flex-1`}>
                            <HomeRounded className={classes.nav_bar_icon} />
                            <br /> 
                            <>About Me</>
                        </Link>
                    </Button>
                    <Button className="flex-1" variant={pathName === "/experience" ? "contained" : "text"}>
                        <Link href="/experience" className={`${classes.nav_bar_link} flex-1`}>
                            <Work className={classes.nav_bar_icon} />
                            <br /> 
                            <>Experience</>
                        </Link>
                    </Button>
                </Grid>
            </Paper>
            <div className="absolute md:relative top-1 md:top-auto right-1 md:right-auto z-10 md:z-0">
                <ThemeChanger />
            </div>
        </Grid>
    );
}