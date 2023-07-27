import "../../css-components/App.css";
import "../../css-components/Contacts.css";
import { Header } from '../Header';
import { Helmet } from "react-helmet-async";


export const VilaGingerlandiq = () => {
    
    return (
    <>
        <Helmet>
        <title>Вила Гингерландия</title>
        <meta name="description" content="Това е кратка статия за снимките на вила Гингерландия"></meta>
        <link rel="canonical" href="/sessions"></link>
        </Helmet>
        <Header boolean={true}/>

            <div className="yt-video-container">
            <iframe id="yt-video" src="https://www.youtube.com/embed/ClHjVP7Nqb8" title="YouTube video" allowFullScreen></iframe>
            </div>
    </>
    );
};

