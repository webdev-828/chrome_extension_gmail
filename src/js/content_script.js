import "../css/content.css";
import * as followup from "./content/followup.js"; //Import Followup Bar dyanmically

var content = {
    init: function() { // Init Content Script for InboxSDK.
        window.onclick = function(event) {
                if (!event.target.matches('.dropbtn')) {
                    var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                }
            },

            InboxSDK.load(2, "sdk_serkan_47dea3822e").then(function(sdk) {
                //Import Inboxsdk for gmail extension
                sdk.Compose.registerComposeViewHandler(function(composeView) {
                    addContent(composeView);
                });
            });
    }
}
var myContent = Object.create(content);
myContent.init();

//Add bar under the Gmail Default Control Bar
function addContent(composeView) {
    var statusBarView = composeView.addStatusBar({
        height: "10",
        el: el
    })
    var el = document.createElement("div");
    el.setAttribute("class", "followup")
    statusBarView.el = el;
    statusBarView.el.appendChild(followup.create());
}