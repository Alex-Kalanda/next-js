import React, {useEffect, useState, KeyboardEvent} from "react";
import cn from 'classnames';
import styles from './Rating.module.css';
import {RatingProps} from "./Rating.props";
import StarIcon from './star.svg';

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(Array(5).fill(<></>));

    const constructRating = (currentRating: number): void => {
        const updatedArray = ratingArray.map((star: JSX.Element, index:number) => {
            return (
                <StarIcon
                    className={cn(styles.star, {
                        [styles.filled]: currentRating > index,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={()=> changeDisplay(index + 1)}
                    onMouseLeave={()=> changeDisplay(rating)}
                    onClick={()=> onClick(index + 1)}
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(event: KeyboardEvent<SVGAElement>) => {
                        isEditable && handleSpace(index + 1, event);
                    }}
                />
            );
        });
        setRatingArray(updatedArray);
    };

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const changeDisplay = (elementUnderMouse: number) => {
        if(!isEditable) return;
        constructRating(elementUnderMouse);
    };

    const onClick = (targetElement: number) => {
        if(!isEditable || !setRating) return;
        setRating(targetElement);
    };

    const handleSpace = (targetElement: number, event: KeyboardEvent<SVGElement>) => {
        if(event.code !== 'Space' || !setRating) return;
        setRating(targetElement);
    };


    return (
        <div {...props}>
            {ratingArray.map((star, index) => {
                return <span key={index}>{star}</span>;
            })}
        </div>
    );
};
