import "./DialogItem.scss"
import Time from "../Time";

const DialogItem = ({user, message}) => {
    return (
        <div className="dialogs__item">
            <div className="dialogs__item-avatar">
                <img
                    src={"https://sun2-4.userapi.com/s/v1/ig2/0u27iLVpA7wm1v1wMrzqlu2rRkjArJEnhBPBvTTXByBGActhMY7pE28IONETgCTR9-FG6lcoWw4moB7sGAUvJMog.jpg?size=100x100&quality=95&crop=172,285,620,620&ava=1"}
                    alt={`user avatar`}
                />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>Jack Postman</b>
                    <span>
                        <Time />
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>Всем привет, мои друзься</p>
                </div>
            </div>
        </div>
    )
}

export default Message