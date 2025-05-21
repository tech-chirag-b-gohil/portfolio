"use client";

import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Button, Tooltip, useColorScheme } from "@mui/material";

export default function ThemeChanger() {
    const { mode, setMode } = useColorScheme();

    const getCurrentMode = () => {
        if (mode === "system") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return mode;
    }

    const changeMode = () => {
        setMode(getCurrentMode() === "dark" ? "light" : "dark");
    };

    if (!mode) {
        return null;
    }
    return (
        <Button
            variant="contained"
            sx={{ p: 0, minWidth: 0, borderRadius: "50%" }}
            size="large"
            onClick={changeMode}
        >
            <Tooltip title={`${getCurrentMode() === "dark" ? "Light" : "Dark"} mode`}>
            <span className="inline-block rounded-full border-2 p-2">
                {
                    getCurrentMode() === "dark" ? (
                        <LightModeOutlined fontSize="large" />
                    ) : (
                        <DarkModeOutlined fontSize="large" />
                    )
                }
            </span>
            </Tooltip>
        </Button>
    );
}