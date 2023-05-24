import PropTypes from 'prop-types';
import Friends from './Friends';
import style from './FriendListItem.module.css'

function FriendListItem({friends}){
    return (
        <section>
            <ul className={style.friendsList}>
                {friends.map(({avatar, name, isOnline, id}) => {
                    return <Friends 
                        avatar = {avatar} 
                        name = {name} 
                        isOnline={isOnline} 
                        key={id}  />
                })}
            </ul>
        </section>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.string.isRequired
};

export default FriendListItem