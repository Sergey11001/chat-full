import {formatDistanceToNow} from "date-fns";

import "./Message.scss"
import ruLocale from 'date-fns/locale/ru'
import classNames from "classnames";

import checked from "../../assets/img/checked.svg"
import unchecked from "../../assets/img/not-checked.svg"

const Message = ({avatar, user, text, date, isMe, atachments, isReaded, isTyping}) => {
    return (
        <div className={classNames("message", {
            "message--isme": isMe,
            "message--typing": isTyping,
            "message--image": atachments && atachments.length===1
        })}>
            <div className="message__avatar">
                <img
                    src={avatar}
                    alt={`Avatar ${user?.fullname}`}
                    className="user--avatar"/>
            </div>
            <div className="message__content">
                <div className="message__content--inf">
                    {
                        (text || isTyping) &&
                        <div className="message__bubble">
                            {
                                text &&
                                <p className="message__text">{text}</p>
                            }
                            {
                                isTyping &&
                                <div className="bubble--loading">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            }
                        </div>
                    }
                    {
                        atachments &&
                        <ul className="files">
                            {
                                atachments.map((item, i) => (
                                    <li className="files--item">
                                        <img src={item.imgUrl} alt={item.filename}/>
                                    </li>
                                ))
                            }
                        </ul>

                    }
                    {
                        date &&
                        <span className="message__date">{formatDistanceToNow(date, {locale: ruLocale})} назад</span>
                    }
                </div>
                {
                    !isTyping &&
                    <img src={isReaded ? checked : unchecked} width={20} height={20} alt="Message status"
                         className="message__check"/>
                }
            </div>

        </div>
    )
}

export default Message