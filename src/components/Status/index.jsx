import React from 'react';
import './Avatar.scss'
import {generateAvatarFromHash} from "../../utils/helpers";

const Avatar = ({user}) => {
    if (user.avatar) return (
        <div className="item-avatar">
            <div className="avatar">
            <img
                src={user.avatar}
                alt={`user avatar`}
            />
        </div></div>


    )
    else {
        const [color, colorLight] = generateAvatarFromHash(user._id)
        const firstCharName = user.fullName[0]
        return (
            <div className="item-avatar">
                <div style={{background: `linear-gradient(135deg, ${color}, ${colorLight})`}} className="avatar avatar--empty">
                    {firstCharName}
                </div>
            </div>

        )
    }
};

export default Avatar;