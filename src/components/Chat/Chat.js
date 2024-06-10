import React, { useEffect } from "react";

const Chatbox = () => {
    useEffect(() => {
        (function (d, m) {
            var kommunicateSettings = {
                appId: "4cff9fdd05039e5fe856034af1445887",
                popupWidget: true,
                automaticChatOpenOnNavigation: true,
            };
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }, []);
    return <div></div>;
};

export default Chatbox;
