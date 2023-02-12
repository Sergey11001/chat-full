import classNames from "classnames";

import "./Message.scss"

import Time from "../Time";
import IconReaded from "../IconReaded";

import waveSvg from "../../assets/img/wave.png"
import pause from "../../assets/img/pause.svg"
import play from "../../assets/img/play.svg"
import {useEffect, useRef, useState} from "react";
import {convertVoiceTime} from "../../utils/helpers";

const Message = (
    {
        avatar,
        user,
        text,
        date,
        isMe,
        atachments,
        isReaded,
        isTyping,
        audio}) => {

    const [isPlaying, setPlaying] = useState(false)
    const [audioDuration, setAudioDuration] = useState(-1)
    const [audioDurationPlayed, setAudioDurationPlayed] = useState(0)
    const audioRef = useRef(null)

    const onLoadedMetadata = () => {
        if (audioRef.current) {
            setAudioDuration(audioRef.current.duration)
        }
    };

    const togglePlay = () => {
        if(audioRef.current){
            if(!isPlaying){
                audioRef.current.play()
            }
            else {
                audioRef.current.pause()
            }
        }
    }
    useEffect(() => {
        if(audioRef.current){
            audioRef.current.addEventListener('play', () => {
                setPlaying(true)
            })

            audioRef.current.addEventListener('ended', () => {
                setPlaying(false)
                setAudioDurationPlayed(0)
            })

            audioRef.current.addEventListener('pause', () => {
                setPlaying(false)
            })
            audioRef.current.addEventListener('timeupdate', () => {
                setAudioDurationPlayed(audioRef.current.currentTime)
            })
        }

    },[])

    return (
        <div className={classNames("message", {
            "message--isme": isMe,
            "message--typing": isTyping,
            "message--image": atachments && atachments.length === 1,
            "message--isaudio": audio
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
                        (text || isTyping || audio) &&
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
                            {
                                audio &&
                                <div className="message--audio">
                                    <audio ref={audioRef} src={audio} preload="auto"  onLoadedMetadata={onLoadedMetadata}></audio>
                                    {
                                        audioDuration!==-1 &&
                                        <div className="message--audio__progress" style={{width:(audioDurationPlayed/audioDuration)*100 + "%"}}>

                                        </div>
                                    }
                                    <div className="message--audio__info">
                                        <button className="message--audio__btn" onClick={togglePlay}>
                                            {
                                                !isPlaying ? <img src={play} alt="play"/> : <img src={pause} alt="pause"/>
                                            }
                                        </button>
                                        <div className="message--audio__wave">
                                            <img src={waveSvg} alt="Wave svg"/>
                                        </div>
                                        <div className="message--audio__duration">
                                            {
                                                audioDurationPlayed===0 ?
                                                    convertVoiceTime(audioDuration)
                                                    :
                                                    convertVoiceTime(audioDurationPlayed)
                                            }

                                        </div>
                                    </div>
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
                        <span className="message__date">
                            <Time date={date}/>
                        </span>
                    }
                </div>
                {
                    !isTyping && isMe &&
                    <IconReaded isReaded={isReaded}/>
                }
            </div>

        </div>
    )
}

export default Message