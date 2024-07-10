import React from 'react';
import {
    Container,
    Typography,
    Paper,
    Button
} from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function PrivacyPolicy() {
    return (
        <Container style={{paddingTop: "15rem"}}>
            <Paper sx={{p: 4}}>
                <Typography variant="h4" sx={{marginBottom: '20px'}}>
                    Privacy Policy
                </Typography>
                <Typography variant="body1" sx={{marginBottom: '20px'}}>
                    This privacy policy outlines how we collect, use, and protect your personal information on this
                    website.
                </Typography>

                <Typography variant="h5" sx={{marginBottom: '10px'}}>
                    Information We Collect
                </Typography>
                <Typography variant="body1" sx={{marginBottom: '20px'}}>
                    We collect limited data to select ads and store/access information on your device to enhance your
                    browsing experience.
                </Typography>

                <Typography variant="h5" sx={{marginBottom: '10px'}}>
                    Use of Cookies and Similar Technologies
                </Typography>
                <Typography variant="body1" sx={{marginBottom: '20px'}}>
                    We use cookies and similar technologies to store and access information on your device for ad
                    personalization.
                </Typography>

                <Typography variant="h5" sx={{marginBottom: '10px'}}>
                    How We Use Your Information
                </Typography>
                <Typography variant="body1" sx={{marginBottom: '20px'}}>
                    We use the collected data to deliver relevant ads and improve our website’s performance.
                </Typography>

                <Typography variant="h5" sx={{marginBottom: '10px'}}>
                    Third-Party Disclosure
                </Typography>
                <Typography variant="body1" sx={{marginBottom: '20px'}}>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent.
                </Typography>
                <Link to={`/`}><Button variant="contained"
                                       startIcon={<ArrowBackIcon/>}>Back</Button></Link>
            </Paper>
        </Container>
    );
}

export default PrivacyPolicy;
