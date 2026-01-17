import { Grid, Button, Stack, Divider, Link, Typography, Tooltip, Paper } from "@mui/material";
import classes from "./styles.module.scss";
import Image from "next/image";
import { LinkedIn, GitHub, InsertDriveFile, Email, LocationPin } from "@mui/icons-material";
import { LINKEDIN_LINK, GITHUB_LINK, RESUME_LINK, EMAIL_LINK, LOCATION_LINK } from "@/constants/connectLinks";
// import profile from "@/assets/profile.png";

export default function ProfileCard() {
    return (
        <Paper elevation={0} className={`${classes.profile_card_wrapper}`}>
            {/* <div className={classes.profile_image_wrapper}>
                <Image 
                    src={profile}
                    alt="profile picture"
                    height={150}
                />
            </div> */}
            <div className={classes.profile_card} >
                <Typography variant="h5" fontWeight="bold" fontSize="24px" textAlign="center" lineHeight="40px" color="primary" fontFamily="var(--font-raleway), sans-serif">
                    Chirag Gohil
                </Typography>
                <Typography variant="body1" fontSize="16px" textAlign="center" lineHeight="40px" fontFamily="var(--font-raleway), sans-serif">
                    FullStack Web Developer
                </Typography>
                <Typography variant="body2" fontSize="14px" textAlign="center" lineHeight="24px" className="mt-2 px-2" fontFamily="var(--font-poppins), sans-serif" color="textSecondary">
                    React • TypeScript • Python • Django
                </Typography>
                <Grid container justifyContent="center" className="py-3">
                    <Grid
                        container
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={1}
                    >
                        <Tooltip title="LinkedIn">
                            <Button
                                aria-label="Chirag Gohil LinkedIn"
                                size="large"
                                className={classes.profile_social_icon}
                                href={LINKEDIN_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedIn />
                            </Button>
                        </Tooltip>
                        <Tooltip title="GitHub">
                            <Button
                                aria-label="Chirag Gohil GitHub"
                                size="large"
                                className={classes.profile_social_icon}
                                href={GITHUB_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHub />
                            </Button>
                        </Tooltip>
                        <Tooltip title="Resume">
                            <Button
                                aria-label="Chirag Gohil Resume"
                                size="large"
                                className={classes.profile_social_icon}
                                href={RESUME_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InsertDriveFile />
                            </Button>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Stack
                    direction="column"
                    divider={<Divider orientation="horizontal" variant="middle" flexItem />}
                    spacing={2}
                    className={`${classes.profile_contact_info} mx-1 md:mx-4 mt-3`}
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <Email color="primary" />
                        <div>
                            <Typography variant="subtitle2" fontWeight="bold" fontSize="14px">
                                Email
                            </Typography>
                            <Link
                                href={EMAIL_LINK}
                                underline="none"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.profile_contact_info_link}
                            >
                                {EMAIL_LINK.replace("mailto:", "")}
                            </Link>
                        </div>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <LocationPin color="primary" />
                        <div>
                            <Typography variant="subtitle2" fontWeight="bold" fontSize="14px">
                                Location
                            </Typography>
                            <Link
                                href={LOCATION_LINK}
                                underline="none"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.profile_contact_info_link}
                            >
                                Mumbai, Maharashtra, India
                            </Link>
                        </div>
                    </Stack>
                </Stack>
            </div>
        </Paper>
    );
};