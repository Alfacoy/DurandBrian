/*HEADER-IMAGE*/
import day from '../images/header/day.png';
import night from '../images/header/night.png';
/*MENU-IMAGE*/
import sun from '../images/theme/sun.png';
import moon from '../images/theme/moon.png';
/*SOCIAL-IMAGE*/
import linkedinDay from '../images/social_media/linkedin_light.svg';
import linkedinNight from '../images/social_media/linkedin.svg';
import githubDay from '../images/social_media/github_light.svg';
import githubNight from '../images/social_media/github.svg';

const theme = {
    day: {
        imgHeader: day,
        imgMenu: moon,
        imgLinkedin: linkedinNight,
        imgGithub: githubNight
    },
    night: {
        imgHeader: night,
        imgMenu: sun,
        imgLinkedin: linkedinDay,
        imgGithub: githubDay
    }
}

export default theme;