import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'

function Calculator() {
    return (
        <>
            <Box
                m={1}
                p={1} >
             
             <div >
                    <p><strong >Follow the instructions below to add a shortcut on the home screen of your iPad, iPhone, or Android devices.</strong></p>

                    <h2 ><span >iPad or iPhone</span></h2>
                    <ol  >
                        <li ><span >Launch “Safari” app. &nbsp;This does not work from the “Chrome” app.</span></li>
                        <li ><span >Enter into the address field the URL of the website you want to create a shortcut to. Tap “Go.”</span></li>
                        <li ><span >Tap the icon featuring a right-pointing arrow coming out of a box along the top of the Safari window to open a drop-down menu.</span></li>
                        <li ><span >Tap “Add to Home Screen.” The Add to Home dialog box will appear, with the icon that will be used for this website on the left side of the dialog box.</span></li>
                        <li ><span >Enter the name for the shortcut using the on-screen keyboard and tap “Add.” Safari will close automatically and you will be taken to where the icon is located on your iPad’s desktop.</span></li>
                    </ol>
                    <h2  ><span >Android</span></h2>
                    <ol >
                        <li ><span >Launch “Chrome” app.</span></li>
                        <li ><span >Open the website or web page you want to pin to your home screen.</span></li>
                        <li ><span >Tap the menu icon (3 dots in upper right-hand corner) and tap Install.</span></li>
                    </ol>
                </div>

            </Box>

            <Box display="flex"
                justifyContent="center"
                m={1}
                p={1} >
                <IconButton
                    component={Link}
                    to="/about"
                    aria-label="delete">
                    <ArrowBackIcon />
                </IconButton>
            </Box>

        </>
    );
}

export default Calculator;
