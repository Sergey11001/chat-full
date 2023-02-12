import "./IconReaded.scss"
import checked from "../../assets/img/checked.svg";
import unchecked from "../../assets/img/not-checked.svg";

const IconReaded = ({isReaded}) => {
    return(
            isReaded ?
                <img src={ checked } width={20} height={20} alt="Readed message"
                     className="message__check"/>
                :
                <img src={ unchecked } width={20} height={20} alt="Unreaded message"
                     className="message__check"/>
        )

}

export default IconReaded