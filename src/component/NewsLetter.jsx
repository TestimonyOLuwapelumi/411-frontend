
import { useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import NewsletterForm from "./NewsletterForm";


const url = "https://gmail.us18.list-manage.com/subscribe/post?u=a801b269a502ea5d7eb174eff&amp;id=9ed10537e8&amp;f_id=001f28e7f0";
const SimpleForm = () => <MailchimpSubscribe url={url}/>

const NewsLetter = () => {
  return (
    <>
    
   <MailchimpSubscribe
      url={url}
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
          />
        );
      } }
    />
    </>
  )
}

export default NewsLetter