"use client";

import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Button, Tooltip, useColorScheme } from "@mui/material";

export default function ThemeChanger() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }
    return (
        <Button
            variant="contained"
            sx={{ p: 0, minWidth: 0, borderRadius: "50%" }}
            size="large"
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        >
            <Tooltip title={`${mode === "dark" ? "Light" : "Dark"} mode`}>
            <span className="inline-block rounded-full border-2 p-2">
                {
                    mode === "dark" ? (
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