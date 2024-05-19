import React, { useEffect } from "react";

const Chatbox = () => {
    useEffect(() => {
        (function (d, m) {
            var kommunicateSettings = {
                appId: "f845a93c1c942f4702f86074c02d6f68",
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
