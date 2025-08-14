import React from "react";
import { Grid, Typography, Button, Box, Grow } from "@mui/material";
import blogsData from "../data/blogsdata.json";

const BlogsSection = () => {
    return (
        <Grid container spacing={2} mt={4}>
            {blogsData.blogs.map((blog, index) => (
                <Grow key={blog.id} in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    timeout={500 + index * 100}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} >
                        <Box
                            sx={{
                                backgroundColor: "background.default",
                                borderRadius: '8px',
                                p: 2,
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box>
                                <Typography variant="h6"  gutterBottom>
                                    {blog.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        mb: 2,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden"
                                    }}
                                >
                                    {blog.description}
                                </Typography>
                            </Box>
                            <Button
                                size="small"
                                variant="contained"
                                sx={{
                                    alignSelf: "flex-start",
                                    mt: "auto",
                                    textTransform: "none",
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Grid>
                </Grow>

            ))}
        </Grid>
    );
};

export default BlogsSection;
