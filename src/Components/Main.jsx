import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import {useEffect, useState} from "react";

function Main(props) {
    const {posts, title} = props;
    let bodies = []
    const [loadedPosts, setLoadedPosts] = useState([])
    const [loading, setLoading] = useState(true)

    async function created (name) {
      const res = await fetch(`./${name}`)
      const md = await res.text();
      console.log(md)
      return md
    };

    for (let i = 0; i < posts.length; i++){
        let name = getMDName(posts[i])
        let body = created(name)
        bodies.push(body)
    }

    useEffect(() => {
    Promise.all(bodies).then(values => {
            setLoadedPosts(values)
            setLoading(false)
    })})
    if (!loading){
    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider/>
            {loadedPosts.map((post) => (
                <Markdown className="markdown" key={post.substring(0, 40)}>
                    {post}
                </Markdown>
            ))}
        </Grid>
    );
    } else {
        return (
            <Grid
                item
                xs={12}
                md={8}
                sx={{
                    '& .markdown': {
                        py: 3,
                    },
                }}
            >Loading...</Grid>
        )
    }
}

Main.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};

function getMDName (path){
    let currentWord = ''
    for (let i = 0; i < path.length; i++){
        if (path.charAt(i) === '/'){
            currentWord = ''
        } else {
            currentWord = currentWord.concat(path.charAt(i))
        }
    }
    return currentWord
}

export default Main;