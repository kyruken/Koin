import React from 'react';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default function Star(props) {
    return (
        <div
        onClick={props.toggleFavorite}>
            {props.isFavorite ? <StarIcon></StarIcon> : <StarBorderIcon></StarBorderIcon>}
        </div>
        
    )
}