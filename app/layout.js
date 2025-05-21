import { ThemeProvider } from "@mui/material/styles";
import theme from "@/lib/theme";
import { roboto, raleway, poppins } from "@/lib/font";
import "./globals.scss";
import NavBar from "@/components/NavBar";
import { Container, Grid, InitColorSchemeScript } from "@mui/material";
import ProfileCard from "@/components/ProfileCard";

export const metadata = {
  title: 'Chirag Gohil - FullStack Web Developer'
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className={`${roboto.className} ${raleway.variable} ${poppins.variable}`}>
      <head>
        <InitColorSchemeScript attribute="class" />
      </head>
      <body className="main_wrapper pt-6 pb-20 md:pb-6">
        <ThemeProvider theme={theme}>
          <div>
            <Container maxWidth="xl">
              <Grid
                container
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid
                  size={{ xs: 12, md: 5, lg: 4 }}
                >
                  <ProfileCard />
                </Grid>
                <Grid
                  size={{ xs: 12, md: 7, lg: 8 }}
                >
                  <NavBar />
                  {children}
                </Grid>

              </Grid>
            </Container>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};
