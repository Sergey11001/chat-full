import "./DialogItem.scss"
import Time from "../Time";
import IconReaded from "../IconReaded";
import classNames from "classnames";

const getAvatar = avatar => {
    if (avatar) return (
            <img
                src={avatar}
                alt={`user avatar`}
            />
        )
    return <></>

}

const DialogItem = ({user, message, unreaded}) => {
    return (
        <div className={classNames("dialogs__item", {
            "dialogs__item-online": user?.isOnline
        })}>
            <div className="dialogs__item-avatar">
                <div className="avatar">
                    {getAvatar("https://sun2-4.userapi.com/s/v1/ig2/0u27iLVpA7wm1v1wMrzqlu2rRkjArJEnhBPBvTTXByBGActhMY7pE28IONETgCTR9-FG6lcoWw4moB7sGAUvJMog.jpg?size=100x100&quality=95&crop=172,285,620,620&ava=1")}
                </div>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullName}</b>
                    <span>
                        13:03
                        {/*<Time date={new Date()}/>*/}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>Всем привет, мои друзься рвмвм ывмвмв ца ца</p>
                    {unreaded>0 && <div className="noreaded--messages">3</div>}
                    {/*<IconReaded isMe={true} isReaded={false}></IconReaded>*/}
                </div>
            </div>
        </div>
    )
}

export default DialogItem