import "../css/content.css";
import * as followup from "./content/followup.js";

var content = {
    init: function() {
        InboxSDK.load(2, "sdk_serkan_47dea3822e").then(function(sdk) {
            //Import Inboxsdk for gmail extension
            sdk.Compose.registerComposeViewHandler(function(composeView) {
                //Add bar under the Gmail Default Control Bar
                addContent(composeView);
            });
        });
    }
}
var myContent = Object.create(content);
myContent.init();

function addContent(composeView) {
    var statusBarView = composeView.addStatusBar({
        height: "10",
        el: el
    })
    var el = document.createElement("div");
    el.className += "followup";
    statusBarView.el = el;
    console.log(followup.createElement());
    statusBarView.el.innerHTML = followup.createElement();
}