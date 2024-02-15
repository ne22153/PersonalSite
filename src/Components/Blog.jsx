import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from '../Markdown/blog-post.1.md';
import background from '../assets/welcomeBackground.webp'
import {Alarm} from "@mui/icons-material";

const sections = [
    { title: "Drink Diary", url: '#' },
    { title: "Drag Race Opinions", url: '#'},
    { title: "All Blog Entries", url: '#'},
    { title: 'About', url: '#' },
];

const mainFeaturedPost = {
    title: 'Welcome!',
    description:
        "This site should be home to my messing around.",
    image: 'background',
    imageText: 'main image description',
};

{/*const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
];*/}

const posts = [post1];

const sidebar = {
    title: 'About',
    description:
        "Hi there, I'm Damien, a 2nd Computer Science student who is trying to gain more experience with web development.",
    social: [
        { name: 'GitHub', icon: GitHubIcon, link: "https://github.com/ne22153" },
        { name: 'TikTok', icon: Alarm , link: "https://www.tiktok.com/@that.one.dm?lang=en"},
    ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Damien McGeer" sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    {/*<Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>*/}
                    <Grid container spacing={5} sx={{ mt: 3 }}>
                        <Main title="From the firehose" posts={posts} />
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
            <Footer
                title="Want to get in contact?"
                description="Please don't"
            />
        </ThemeProvider>
    );
}