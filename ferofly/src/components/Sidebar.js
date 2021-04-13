import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react'

export const Sidebar = () => {
    return (
        <div id='sidebar'>
            <img style={{ height:'4vh' }} alt="Black TripAdvisor Icon" src="https://static.wixstatic.com/media/17cf82e0d3fc4c11a370a8eedfefa0fb.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/17cf82e0d3fc4c11a370a8eedfefa0fb.webp"></img>
            <img style={{ height:'4vh' }} alt="Black Facebook Icon" src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"></img>
            <InstagramIcon/>
        </div>
    )
}
