!function(){"use strict";function t(e,i){return t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},t(e,i)}let e=function(e){function i(t,i){var n;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=e.call(this)||this,s.mode=s.mode||"words",n.id=t,n.buttonLabel=document.createElement("div"),n.buttonLabel.classList.add("h5p-bingo-button-label"),n.buttonImage=document.createElement("div"),n.buttonImage.classList.add("h5p-bingo-button-image"),i&&(n.buttonImage.style.background=`no-repeat center/100% url('${i}')`),n.buttonImage.classList.add("h5p-button-transparent"),n.button=document.createElement("div"),n.button.classList.add("h5p-bingo-button"),n.button.classList.add(`${s.mode}`),n.button.setAttribute("role","button"),n.button.setAttribute("value",t),n.button.appendChild(n.buttonLabel),n.button.appendChild(n.buttonImage),n.button.addEventListener("click",(()=>{n.isBlocked()||(n.toggleActivated(),n.trigger("click",n.id))})),n}var n,s;s=e,(n=i).prototype=Object.create(s.prototype),n.prototype.constructor=n,t(n,s);var o=i.prototype;return o.getDOM=function(){return this.button},o.toggle=function(t,e,i){void 0===i&&(i=!t.contains(e)),!0===i?t.add(e):t.remove(e)},o.toggleBlocked=function(t){t=!(this.isBlocked()&&!t),this.toggle(this.button.classList,"h5p-button-blocked",t)},o.isBlocked=function(){return this.button.classList.contains("h5p-button-blocked")},o.toggleActivated=function(t){this.isBlocked()||this.toggle(this.button.classList,"h5p-button-activated",t)},o.isActivated=function(){return this.button.classList.contains("h5p-button-activated")},o.toggleFlipped=function(t){this.isBlocked()||(this.toggle(this.buttonLabel.classList,"h5p-button-transparent",t),this.toggle(this.buttonImage.classList,"h5p-button-transparent",!t))},o.isFlipped=function(){return this.button.classList.contains("h5p-button-flipped")},o.toggleBingo=function(t){this.toggle(this.button.classList,"h5p-button-bingo",t)},o.isBingo=function(){return this.button.classList.contains("h5p-button-bingo")},o.setLabel=function(t){this.buttonLabel.innerHTML=t},o.getLabel=function(){return this.buttonLabel.innerHTML},o.getLabelWidth=function(){return this.buttonLabel.offsetWidth},o.getLabelHeight=function(){return this.buttonLabel.offsetHeight},o.getWidth=function(){const t=window.getComputedStyle(this.button,null),e=parseFloat(t.getPropertyValue("border-left-width")),i=parseFloat(t.getPropertyValue("border-right-width"));return this.button.offsetWidth-e-i},o.getOffsetWidth=function(){return this.button.offsetWidth},o.setMaxHeight=function(t){this.button.style.maxHeight=t},o.setMinHeight=function(t){this.button.style.minHeight=t},o.reset=function(){this.toggleBlocked(!1),this.toggleActivated(!1),this.toggleFlipped(!1),this.toggleBingo(!1)},o.animate=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:400;this.button.classList.add("h5p-button-spinning"),setTimeout((()=>{this.button.classList.remove("h5p-button-spinning"),this.toggleBingo(!0)}),t)},i}(H5P.EventDispatcher);var i=e;function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}let s=function(t){function e(e,i,n){var s;(s=t.call(this)||this).params=e,s.previousState=n,s.words=s.generateWords(s.previousState).map((t=>s.addHTMLLineBreaks(t)));const o=e.visuals.buttonImage&&e.visuals.buttonImage.path?H5P.getPath(e.visuals.buttonImage.path,i):void 0;s.buttons=s.initButtons(s.params.size,o),s.setButtonLabels(s.words),n.length>0&&s.buttons.forEach(((t,e)=>{t.toggleActivated(n[e].flipped)})),s.setJoker(s.params.joker),s.board=document.createElement("div");for(let t=0;t<s.params.size;t++){const e=document.createElement("div");e.classList.add("h5p-bingo-column");for(let i=0;i<s.params.size;i++)e.appendChild(s.buttons[t*s.params.size+i].getDOM());s.board.appendChild(e)}if(s.board.classList.add("h5p-bingo-board"),""!==s.params.visuals.backgroundColor&&(s.board.style.background=s.params.visuals.backgroundColor),s.fontSizeBase=parseFloat(window.getComputedStyle(document.body,null).getPropertyValue("font-size")),s.params.hasSound){const t=document.createElement("button");t.classList.add("h5p-bingo-toggle-sound-button"),t.setAttribute("aria-label",s.params.a11y.mute),t.addEventListener("click",(()=>{t.classList.toggle("muted"),t.classList.contains("muted")?t.setAttribute("aria-label",s.params.a11y.unmute):t.setAttribute("aria-label",s.params.a11y.mute),s.params.onSoundToggled()})),s.board.appendChild(t)}return s.on("resize",(()=>{setTimeout((()=>{s.resizeButtons()}),0)})),s}var s,o;o=t,(s=e).prototype=Object.create(o.prototype),s.prototype.constructor=s,n(s,o);var a=e.prototype;return a.generateWords=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[];if(t.length>0)e=t.map((t=>t.label));else if("numbers"===this.params.mode)for(let t=1;t<=3*this.params.size*this.params.size;t++)e.push(t.toString());else e=this.params.words&&""!==this.params.words.trim()?this.params.words.split("\n"):["someone","forgot","to","set","some","words"];return e},a.addHTMLLineBreaks=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;e=e||Math.ceil(2*Math.sqrt(t.length)),t=t.split(" ");let i=[],n="";return t.forEach(((t,s)=>{n.length+1+t.length>e&&s>0&&(n=`${n}<br />`,i.push(n),n=""),n=`${n} ${t}`.trim()})),i.push(n),i.join("")},a.resizeButtons=function(){let{startFontSize:t=this.fontSizeBase,fontSizeMin:e=-1/0,fontSizeMax:i=1/0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!0===this.preventResize)return;const n=Math.min(Math.max(t,e),i);this.widestLabelId||(this.widestLabelId=this.buttons.map((t=>t.getLabelWidth())).reduce(((t,e,i,n)=>e>n[t]?i:t),0)),this.highestLabelId||(this.highestLabelId=this.buttons.map((t=>t.getLabelHeight())).reduce(((t,e,i,n)=>e>n[t]?i:t),0)),this.board.style.fontSize=n+"px";const s=this.buttons[this.widestLabelId].getWidth(),o=this.buttons[this.widestLabelId].getOffsetWidth();if(this.buttons.forEach((t=>{t.setMinHeight(`${o}px`)})),n>e){const e=this.buttons[this.widestLabelId].getLabelWidth(),i=this.buttons[this.highestLabelId].getLabelHeight();(e>s||i>s)&&this.resizeButtons({startFontSize:.9*t})}},a.getDOM=function(){return this.board},a.initButtons=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e=arguments.length>1?arguments[1]:void 0;const n=[];for(let s=0;s<t*t;s++){const t=new i(s,e,{mode:this.params.mode});t.on("click",(()=>this.params.buttonClicked())),n.push(t)}return n},a.setMaximumWidth=function(t){this.board.style.maxWidth="string"==typeof t?t:""},a.setButtonLabels=function(t){let e=[];this.buttons.forEach(((i,n)=>{let s;this.previousState.length>0?s=this.previousState[n].label:(0===e.length&&(e=t.slice()),s=e.splice(Math.floor(Math.random()*e.length),1)[0]),i.setLabel(s)}))},a.setJoker=function(t){if(!0!==t||this.params.size%2==0)return;const e=this.buttons[Math.floor(this.params.size/2)*(this.params.size+1)];e.toggleFlipped(!0),e.toggleBingo(!0),e.toggleActivated(!0),e.toggleBlocked(!0),e.setLabel("")},a.getMatches=function(t){const e=[];return t.forEach((t=>{t.every((t=>this.buttons[t].isActivated()))&&e.push(t)})),e},a.getActivatedButtonsLabels=function(){return this.buttons.filter((t=>t.isActivated()&&""!==t.getLabel())).map((t=>t.getLabel()))},a.getActivatedButtonsIDs=function(){return this.buttons.filter((t=>t.isActivated())).map((t=>t.id))},a.getXAPIChoices=function(){return this.buttons.map(((t,e)=>({id:e,description:{"en-US":t.getLabel()}})))},a.blockButtons=function(){this.buttons.forEach((t=>{t.toggleBlocked(!0)}))},a.unblockButtons=function(){this.buttons.forEach((t=>{t.toggleBlocked(!1)}))},a.reset=function(){this.buttons.forEach((t=>{t.reset()})),this.params.shuffleOnRetry&&(this.previousState=[],this.words=this.generateWords().map((t=>this.addHTMLLineBreaks(t))),this.setButtonLabels(this.words)),this.setJoker(this.params.joker),delete this.widestLabelId,delete this.highestLabelId,this.trigger("resize")},a.animatePatterns=function(t){var e=this;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;e.preventResize=!0,t.length>0?(e.buttons[t[0]].animate(),setTimeout((()=>{n(t.slice(1))}),i)):setTimeout((()=>{e.preventResize=!1}))};t.forEach((t=>{n(t,i)}))},a.getCurrentState=function(){return this.buttons.map((t=>({label:t.getLabel(),flipped:t.isActivated()})))},e}(H5P.EventDispatcher);var o=s;let a=function(){function t(){}return t.extend=function(){for(let t=1;t<arguments.length;t++)for(let e in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],e)&&("object"==typeof arguments[0][e]&&"object"==typeof arguments[t][e]?this.extend(arguments[0][e],arguments[t][e]):arguments[0][e]=arguments[t][e]);return arguments[0]},t.formatLanguageCode=function(t){if("string"!=typeof t)return t;const e=t.split("-");return e[0]=e[0].toLowerCase(),e.length>1&&(e[1]=e[1].toUpperCase()),t=e.join("-")},t.computeDisplayLimits=function(e){e="object"==typeof e?e:{};let i=t.getTopWindow(),n=t.isIOS()&&"landscape"===t.getOrientation()?{height:screen.width,width:screen.height}:{height:screen.height,width:screen.width};return i=i||{innerHeight:n.height,innerWidth:n.width},{height:Math.min(i.innerHeight,n.height),width:Math.min(i.innerWidth,n.width,e.offsetWidth||1/0)}},t.isIOS=function(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},t.getOrientation=function(){if(screen.orientation&&screen.orientation.type){if(screen.orientation.type.includes("portrait"))return"portrait";if(screen.orientation.type.includes("landscape"))return"landscape"}if("number"==typeof window.orientation){if(0===window.orientation||180===window.orientation)return"portrait";if(90===window.orientation||-90===window.orientation||270===window.orientation)return"landscape"}return"landscape"},t.getTopWindow=function(t){let e;t=t||window;try{e=t.parent.location.host===window.location.host}catch(t){e=null}return e?t.parent!==t&&t.parent?this.getTopWindow(t.parent):t:null},t}();var r=a;function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}let h=function(t){function e(e,i,n){var s;(s=t.call(this,"bingo")||this).params=r.extend({size:5,behaviour:{enableSolutionsButton:!1,enableRetry:!0,shuffleOnRetry:!0,joker:!1,heightLimitMode:"none"},sound:{soundSelected:[],soundCompleted:[]},visuals:{backgroundColor:""},tryAgain:"Retry",a11yTryAgain:"Retry the task. Reset all responses and start the task over again.",a11yMute:"Mute audio, currently unmuted",a11yUnmute:"Unmute audio, currently muted"},e),s.contentId=i,s.contentData=n,"custom"!==s.params.behaviour.heightLimitMode||s.params.behaviour.heightLimit||(s.params.behaviour.heightLimitMode="none");const o=s.contentData&&s.contentData.metadata&&s.contentData.metadata.defaultLanguage||"en";return s.languageTag=r.formatLanguageCode(o),s.audios={},s.registerAudios(s.params.sound),s.isMuted=!1,s.contentData.previousState&&Object.keys(s.contentData.previousState).length?s.isAnswerGiven=s.contentData.previousState.isAnswerGiven:s.isAnswerGiven=!1,s.winningPatterns=s.buildWinningPatterns(s.params.size),s}var i,n;n=t,(i=e).prototype=Object.create(n.prototype),i.prototype.constructor=i,u(i,n);var s=e.prototype;return s.registerAudio=function(t,e){return!!("string"==typeof t&&Array.isArray(e)&&e.length&&"string"==typeof e[0].path&&H5P.SoundJS.initializeDefaultPlugins())&&(H5P.SoundJS.registerSound(H5P.getPath(e[0].path,this.contentId),t),this.audios[t]={params:{interrupt:H5P.SoundJS.INTERRUPT_ANY}},!0)},s.registerAudios=function(t){if("object"!=typeof t||!H5P.SoundJS.initializeDefaultPlugins())return!1;H5P.SoundJS.alternateExtensions=["mp3","wav"];for(let e in t)this.registerAudio(e,t[e]);return!0},s.playAudio=function(t){!this.isMuted&&"string"==typeof t&&this.audios[t]&&(this.stopAudios(),H5P.SoundJS.play(t,this.audios[t].params))},s.stopAudios=function(){Object.keys(this.audios).length&&H5P.SoundJS.stop()},s.handleSoundToggled=function(){this.isMuted=!this.isMuted,this.isMuted&&this.stopAudios()},s.buildWinningPatterns=function(t){const e=[],i=[],n=[];for(let s=0;s<t;s++){const o=[],a=[];for(let e=0;e<t;e++)o.push(s*t+e),a.push(e*t+s);e.push(o),e.push(a),i.push(s*(t+1)),n.push((s+1)*(t-1))}return e.push(i),e.push(n),e},s.checkWon=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this.board.getMatches(this.winningPatterns);0!==e.length?(this.board.blockButtons(),this.board.animatePatterns(e),t.silent||this.playAudio("soundCompleted"),this.bingoState=!0,this.params.behaviour.enableRetry&&this.showButton("try-again")):t.silent||this.playAudio("soundSelected")},s.registerDomElements=function(){var t=this.params.media.type;if(t&&t.library){var e=t.library.split(" ")[0];"H5P.Image"===e?t.params.file&&this.setImage(t.params.file.path,{disableImageZooming:this.params.media.disableImageZooming,alt:t.params.alt,title:t.params.title,expandImage:t.params.expandImage,minimizeImage:t.params.minimizeImage}):"H5P.Video"===e?t.params.sources&&this.setVideo(t):t.library.includes("H5P.Audio")&&t.params.files&&this.setAudio(t)}this.params.taskDescription&&(this.introduction=document.createElement("div"),this.introduction.innerHTML=this.params.taskDescription,this.setIntroduction(this.introduction)),this.board=new o({mode:this.params.mode,words:this.params.words,size:this.params.size,shuffleOnRetry:this.params.behaviour.shuffleOnRetry,joker:this.params.behaviour.joker,buttonClicked:()=>{this.isAnswerGiven=!0,this.checkWon()},visuals:this.params.visuals,hasSound:Object.keys(this.audios).length>0,onSoundToggled:()=>{this.handleSoundToggled()},a11y:{mute:this.params.a11yMute,unmute:this.params.a11yUnmute}},this.contentId,this.contentData?.previousState?.board||[]),this.setContent(this.board.getDOM()),this.addButtons(),setTimeout((()=>{this.board.trigger("resize")}),0),this.contentData.previousState&&Object.keys(this.contentData.previousState).length&&setTimeout((()=>{this.checkWon({silent:!0})}),50),this.on("resize",(()=>{if("auto"===this.params.behaviour.heightLimitMode){const t=this.computeMaxBoardWidth();this.board.setMaximumWidth(`${t}px`)}else"custom"===this.params.behaviour.heightLimitMode&&this.board.setMaximumWidth(`${this.params.behaviour.heightLimit}px`);this.board.trigger("resize")}))},s.computeMaxBoardWidth=function(){if(!this.board)return null;const t=this.board.getDOM().closest(".h5p-container"),e=this.board.getDOM().closest(".h5p-question-content");if(!t||!e)return null;const i=r.computeDisplayLimits(t),n=window.getComputedStyle(e),s=parseInt(n.getPropertyValue("margin-left"))+parseInt(n.getPropertyValue("margin-right"));return Math.min(i.width,i.height)-s},s.addButtons=function(){this.addButton("try-again",this.params.tryAgain,(()=>{this.resetTask()}),!1,{"aria-label":this.params.a11yTryAgain},{})},s.getAnswerGiven=function(){return this.isAnswerGiven},s.getScore=function(){return this.hasBingo()?1:0},s.getMaxScore=function(){return 1},s.showSolutions=function(){},s.resetTask=function(){this.stopAudios(),this.bingoState=!1,this.hideButton("try-again"),this.board.reset(),this.isAnswerGiven=!1},s.getXAPIAnswerEvent=function(){const t=this.createBingoXAPIEvent("completed");return t.setScoredResult(this.getScore(),this.getMaxScore(),this,!0,this.hasBingo()),t.data.statement.result.response=this.board.getActivatedButtonsIDs().join("[,]"),t},s.createBingoXAPIEvent=function(t){const e=this.createXAPIEventTemplate(t);return r.extend(e.getVerifiedStatementValue(["object","definition"]),this.getxAPIDefinition()),e},s.getxAPIDefinition=function(){const t={name:{}};return t.name[this.languageTag]=this.getTitle(),t.name["en-US"]=t.name[this.languageTag],t.description={},t.description[this.languageTag]=this.getDescription(),t.description["en-US"]=t.description[this.languageTag],t.type="http://adlnet.gov/expapi/activities/cmi.interaction",t.interactionType="choice",t.choices=this.board.getXAPIChoices(),t.correctResponsesPattern=[Array.apply(null,{length:this.params.size*this.params.size}).map(Number.call,Number).join("[,]")],t},s.hasBingo=function(){return this.bingoState},s.getTitle=function(){let t;return this.contentData&&this.contentData.metadata&&(t=this.contentData.metadata.title),t=t||e.DEFAULT_DESCRIPTION,H5P.createTitle(t)},s.getDescription=function(){return this.params.taskDescription||e.DEFAULT_DESCRIPTION},s.getCurrentState=function(){return{isAnswerGiven:this.isAnswerGiven,board:this.board.getCurrentState()}},e}(H5P.Question);h.DEFAULT_DESCRIPTION="Bingo",H5P.Bingo=h}();