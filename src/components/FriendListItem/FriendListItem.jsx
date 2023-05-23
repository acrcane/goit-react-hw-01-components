import PropTypes, { object } from 'prop-types';
import style from './FriendListItem.module.css'

function FriendListItem({friends}){
    return (
        <section>
            <ul className={style.friendsList}>
            {friends.map(({avatar, name, isOnline, id})=> (
                <li className={style.friendsListItem} key={id}>
                    <span className={isOnline ? style.status + ' ' + style.online: style.status + ' ' + style.offline}>{isOnline}</span>
                    <img src={avatar} alt={name} className={style.avatar} />
                    <p className={style.name}>{name}</p>
                </li>
            ) )}
            </ul>
        </section>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(object).isRequired,
};

export default FriendListItem