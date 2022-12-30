import Head from "next/head";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import Link from "next/link";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const ErrorEl =()=>(
    <>
    <Head>
      <title>404  - Codes With Chandan</title>
      <link rel="icon" type="image/png" href="/codes-with-chandan-logo.png" /> 
      <meta name="keywords" content="Codes With Chandan error, codes with chandan,web developer,HTML, CSS, JavaScript,Web Design,Advertising,Apps Design,google ads,codeswithchandan@gmail.com,website design/development" />
      <meta name="description" content="Codes With Chandan error , web and application,web developer,website design/development" />
      <meta name="subject" content="Education" />
      <meta name="copyright" content="https://codeswithchandan.com" />
      <meta name="abstract" content="web and application" />
      <meta name="topic" content="web design and application" />
      <meta name="summary" content="codes with chandan,web developer,HTML, CSS, JavaScript,Web Design,Advertising,Apps Design,google ads,codeswithchandan@gmail.com,website design/development" />
      <meta name="Classification" content="Business" />
      <meta name="author" content="Codes With Chandan" />
      <meta name="designer" content="Codes With Chandan" /> 
      <meta name="reply-to" content="codeswithchandan@gmail.com" />
      <meta name="owner" content="Chandan Raj" />
      <meta name="url" content="https://www.codeswithchandan.com" />
      <meta name="identifier-URL" content="https://www.codeswithchandan.com" />
      <meta name="directory" content="submission" />
      <meta name="category" content="Education" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />              
    </Head>
    <Stack sx={{height:"100vh"}} spacing={1} justifyContent='center' alignItems="center">
        <Image 
            src='/not-found.gif'
            alt='not-found'
            width={300}
            height={300}
        />
        <Typography variant="h1" color="error" display={{xs:'none',md:'block'}}>
            Page Not Found | 404
        </Typography>
        <Typography variant="h6" color="error" className='animate__animated animate__pulse animate__infinite' display={{xs:'block',md:'none'}}>
            Page Not Found | 404
        </Typography>
        <Box>
            <Link href="/" passHref>
                <Button
                variant="outlined"
                color="secondary"
                sx={{py: 1, px: 2, bgcolor: 'white'}}
                >
                <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                    <HomeOutlinedIcon />
                    <Typography>
                        Go back to home
                    </Typography>                    
                </Stack>                
                </Button>
            </Link>
        </Box>
    </Stack>
    </>
);
export default ErrorEl;