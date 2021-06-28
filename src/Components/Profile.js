import React from "react";
import s from '../Components/Profile.module.css';

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/pgYGuW2X3wHni2PG3dLV0/80a2008f53a645da1db3c1b5260fd3fd/hero_spring_6.jpg?fit=fill&w=800&h=450'
                    className={s.mainImage}
                    alt="Main picture"
                />
            </div>
            <div>
                avatar+desc
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div className={s.posts}>
                    <div className={s.post}>post 1</div>
                    <div className={s.post}>post 2</div>
                    <div className={s.post}>post 3</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;