
import WhatsApp from "./WhatsAppIcon.svg"


export const WhatsAppButton = () => {
return(
            <a
              rel="noreferrer noopener"
              href={`https://wa.me/447725842775?text=` + encodeURI("Hi")}
              target="_blank"
              className={`border`}
            >
              <WhatsApp className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
)
}
