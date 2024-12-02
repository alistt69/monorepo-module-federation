import React from "react";

const UserCard: React.FC<{ username?: string }> = ({ username }) => {

    return (
        <div>
            {username ? <strong>{username}</strong> : 'user'}
        </div>
    )
}

export default UserCard;
