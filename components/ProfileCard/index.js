import { Grid, Button, Stack, Divider, Link, Typography } from "@mui/material";
import classes from "./styles.module.scss";
import Image from "next/image";
import profile from "@/assets/profile.png";
import { LinkedIn, GitHub, InsertDriveFile, PhoneIphone, WhatsApp, Email, LocationPin } from "@mui/icons-material";

export default function ProfileCard() {
    return (
        <div className={`${classes.profile_card_wrapper} mt-14 md:mt-19`}>
            <div className={classes.profile_image_wrapper}>
                <Image 
                    src={profile}
                    alt="profile picture"
                    height={150}
                />
            </div>
            <div className={classes.profile_card} >
                <Typography variant="h5" className={classes.profile_name} color="primary">
                    Chirag Gohil
                </Typography>
                <div className={classes.profile_position}>
                    FullStack Web Developer
                </div>
                <Grid container justifyContent="center" className="py-3">
                    <Grid
                        container
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={1}
                    >
                        <Button
                            aria-label="Chirag Gohil LinkedIn"
                            size="large"
                            className={classes.profile_social_icon}
                            href="https://www.linkedin.com/in/chirag-b-gohil/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedIn />
                        </Button>
                        <Button
                            aria-label="Chirag Gohil GitHub"
                            size="large"
                            className={classes.profile_social_icon}
                            href="https://github.com/tech-chirag-b-gohil/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHub />
                        </Button>
                        <Button
                            aria-label="Chirag Gohil Resume"
                            size="large"
                            className={classes.profile_social_icon}
                            href="https://drive.google.com/file/d/1SK4XqFAmNKh5CzkL1YsHDpMtksSK1J-u/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InsertDriveFile />
                        </Button>
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
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <PhoneIphone color="primary" />
                        <div className="flex-1">
                            <p className={classes.profile_contact_info_label}>
                                Phone
                            </p>
                            <Link
                                href="tel:+918767876909"
                                underline="none"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.profile_contact_info_link}
                            >
                                +91 8767876909
                            </Link>
                        </div>
                        <Link
                            href="https://wa.me/918767876909"
                            underline="none"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.profile_contact_info_link}
                        >
                            <WhatsApp color="primary" />
                        </Link>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <Email color="primary" />
                        <div>
                            <p className={classes.profile_contact_info_label}>
                                Email
                            </p>
                            <Link
                                href="mailto:tech.chiraggohil@gmail.com"
                                underline="none"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.profile_contact_info_link}
                            >
                                tech.chiraggohil@gmail.com
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
                            <p className={classes.profile_contact_info_label}>
                                Email
                            </p>
                            <Link
                                href="https://maps.app.goo.gl/u7DfTcZT7Uvnt4q86"
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
        </div>
    );
};