import{_ as J,o as w,c as x,F as c9,d as u9,b as B,r as d9,a,e as p9,n as P9,g as K,h as q,i as F,j as T,k as H,l as q9,m as F9,q as U,s as H9,u as U9,v as Z9,x as b9}from"./index-093e9f2b.js";const W9={data(){return{host:"https://i.ytimg.com",defaultVersion:"maxresdefault",versions:["maxresdefault","sddefault","hqdefault",0,"mqdefault","default",1,2,3]}},props:{id:{type:String,required:!0},name:{type:String,required:!0}},name:"youtube-picture"},G9=["srcset"],J9=["srcset"],K9=["src","alt"];function Q9(e,n,l,r,s,m){return w(),x("picture",null,[(w(!0),x(c9,null,u9(s.versions,b=>(w(),x("source",{key:b,srcset:`${s.host}/vi_webp/${l.id}/${b}.webp`,type:"image/webp"},null,8,G9))),128)),(w(!0),x(c9,null,u9(s.versions,b=>(w(),x("source",{key:b,srcset:`${s.host}/vi/${l.id}/${b}.jpg`,type:"image/jpeg"},null,8,J9))),128)),B("img",{class:"youtube__media",src:`${s.host}/vi/${l.id}/${s.defaultVersion}.jpg`,alt:l.name},null,8,K9)])}const ee=J(W9,[["render",Q9]]),te={name:"youtube-svg"},oe={class:"youtube-svg",viewBox:"0 0 68 48"},ne=B("path",{class:"youtube-svg__shape",d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"},null,-1),le=B("path",{class:"youtube-svg__icon",d:"M 45,24 27,14 27,34"},null,-1),ae=[ne,le];function re(e,n,l,r,s,m){return w(),x("svg",oe,ae)}const ie=J(te,[["render",re]]),se={methods:{setPlayer(){this.type="api",this.instance=new window.YT.Player(this.$refs.iframe,{videoId:this.id,playerVars:{autoplay:1,showinfo:0,rel:0},events:{onReady:this.onReady,onStateChange:this.onStateChange}})},onReady(e){const{title:n}=e.target.getVideoData();this.$emit("onReady",n),this.$youtube.list.push({el:this.$refs.iframe,instance:e.target})},onStateChange(e){this.$emit("onStateChange",e.data),e.data===window.YT.PlayerState.PLAYING&&this.$youtube.list.filter(n=>n.instance!==e.target).forEach(n=>{n.instance.stopVideo()})}},mounted(){this.$youtube.init().then(()=>{this.type="js"})},beforeUnmount(){const e=this.$youtube.list.findIndex(n=>n.el===this.$refs.iframe);e>-1&&this.$youtube.list.splice(e,1)},data(){return{type:"nojs",instance:null}},props:{id:{type:String,required:!0},name:{type:String,required:!0}},emits:["onReady","onStateChange"],inject:["$youtube"],components:{YoutubePicture:ee,YoutubeSvg:ie},name:"youtube-video"},ce=["hidden"],ue=["href","aria-label"],de={class:"youtube-video__button",type:"button","aria-label":"Запустить видео"};function pe(e,n,l,r,s,m){const b=d9("youtube-picture"),p=d9("youtube-svg");return w(),x("div",{class:P9(["youtube-video",{"youtube-video--enabled":s.type==="js"}])},[B("i",{ref:"iframe",class:"youtube-video__media",hidden:s.type!=="api"},null,8,ce),s.type==="nojs"?(w(),x("a",{key:0,class:"youtube-video__link",href:`https://youtu.be/${l.id}`,target:"_blank","aria-label":l.name},[a(b,{id:l.id,name:l.name},null,8,["id","name"])],8,ue)):p9("",!0),s.type==="js"?(w(),x("div",{key:1,class:"youtube-video__link",onClick:n[0]||(n[0]=(..._)=>m.setPlayer&&m.setPlayer(..._))},[a(b,{id:l.id,name:l.name},null,8,["id","name"]),B("button",de,[a(p)])])):p9("",!0)],2)}const ke=J(se,[["render",pe]]);function C(e,n){n===void 0&&(n={});var l=n.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",l==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}C(".vel-fade-enter-active,.vel-fade-leave-active{-webkit-transition:all .3s ease;transition:all .3s ease}.vel-fade-enter-from,.vel-fade-leave-to{opacity:0}.vel-img-swiper{display:block;position:relative}.vel-modal{background:rgba(0,0,0,.5);bottom:0;left:0;margin:0;position:fixed;right:0;top:0;z-index:9998}.vel-img-wrapper{left:50%;margin:0;position:absolute;top:50%;-webkit-transform:translate(-50% -50%);transform:translate(-50% -50%);-webkit-transition:.3s linear;transition:.3s linear;will-change:transform opacity}.vel-img,.vel-img-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-img{background-color:rgba(0,0,0,.7);-webkit-box-shadow:0 5px 20px 2px rgba(0,0,0,.7);box-shadow:0 5px 20px 2px rgba(0,0,0,.7);display:block;max-height:80vh;max-width:80vw;position:relative;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}@media (max-width:750px){.vel-img{max-height:95vh;max-width:85vw}}.vel-btns-wrapper .btn__close,.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;font-size:32px;opacity:.6;outline:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.15s linear;transition:.15s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-btns-wrapper .btn__close:hover,.vel-btns-wrapper .btn__next:hover,.vel-btns-wrapper .btn__prev:hover{opacity:1}.vel-btns-wrapper .btn__close.disable,.vel-btns-wrapper .btn__close.disable:hover,.vel-btns-wrapper .btn__next.disable,.vel-btns-wrapper .btn__next.disable:hover,.vel-btns-wrapper .btn__prev.disable,.vel-btns-wrapper .btn__prev.disable:hover{cursor:default;opacity:.2}.vel-btns-wrapper .btn__next{right:12px}.vel-btns-wrapper .btn__prev{left:12px}.vel-btns-wrapper .btn__close{right:10px;top:24px}@media (max-width:750px){.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{font-size:20px}.vel-btns-wrapper .btn__close{font-size:24px}.vel-btns-wrapper .btn__next{right:4px}.vel-btns-wrapper .btn__prev{left:4px}}.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:12px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:12px}@media (max-width:750px){.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:4px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:4px}}.vel-modal.is-rtl .vel-img-title{direction:rtl}");C('.vel-loading{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-loading .ring{display:inline-block;height:64px;width:64px}.vel-loading .ring:after{-webkit-animation:ring 1.2s linear infinite;animation:ring 1.2s linear infinite;border-color:hsla(0,0%,100%,.7) transparent;border-radius:50%;border-style:solid;border-width:5px;content:" ";display:block;height:46px;margin:1px;width:46px}@-webkit-keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}');C(".vel-on-error{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-on-error .icon{color:#aaa;font-size:80px}");C(".vel-img-title{bottom:60px;color:#ccc;cursor:default;font-size:12px;left:50%;line-height:1;max-width:80%;opacity:.8;overflow:hidden;position:absolute;text-align:center;text-overflow:ellipsis;-webkit-transform:translate(-50%);transform:translate(-50%);-webkit-transition:opacity .15s;transition:opacity .15s;white-space:nowrap}.vel-img-title:hover{opacity:1}");C(".vel-icon{fill:currentColor;height:1em;overflow:hidden;vertical-align:-.15em;width:1em}");C(".vel-toolbar{border-radius:4px;bottom:8px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;opacity:.9;overflow:hidden;padding:0;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%)}.vel-toolbar,.vel-toolbar .toolbar-btn{background-color:#2d2d2d;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-toolbar .toolbar-btn{-ms-flex-negative:0;-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;flex-shrink:0;font-size:20px;outline:none;padding:6px 10px}.vel-toolbar .toolbar-btn:active,.vel-toolbar .toolbar-btn:hover{background-color:#3d3d3d}"),function(){if(typeof window<"u"){var e=window,n='<svg><symbol id="icon-rotate-right" viewBox="0 0 1024 1024"><path d="M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973z m282.559912-479.07185A509.887841 509.887841 0 0 0 511.99984 0.00032C229.215928 0.00032 0 229.216248 0 512.00016s229.215928 511.99984 511.99984 511.99984 511.99984-229.215928 511.99984-511.99984c0-3.743999-0.032-7.455998-0.128-11.167997-1.631999-11.295996-8.159997-27.103992-31.87199-27.103991-27.487991 0-31.67999 21.247993-32.03199 32.06399l0.032 4.127999a30.62399 30.62399 0 0 0 0.16 2.079999H959.9997c0 247.423923-200.575937 447.99986-447.99986 447.99986S63.99998 759.424083 63.99998 512.00016 264.575917 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 1 277.439913 96.22397l-94.91197 91.679971c-25.439992 24.607992-17.439995 44.991986 17.887994 45.599986l188.031942 3.295999a64.31998 64.31998 0 0 0 65.055979-62.84798l3.295999-188.127942C969.407697 15.040315 949.311703 5.792318 923.871711 30.368311l-87.999972 85.023973z" fill="" ></path></symbol><symbol id="icon-rotate-left" viewBox="0 0 1024 1024"><path d="M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973zM188.159941 115.392284A509.887841 509.887841 0 0 1 511.99984 0.00032c282.783912 0 511.99984 229.215928 511.99984 511.99984s-229.215928 511.99984-511.99984 511.99984S0 794.784072 0 512.00016c0-3.743999 0.032-7.455998 0.128-11.167997 1.631999-11.295996 8.159997-27.103992 31.87199-27.103991 27.487991 0 31.67999 21.247993 32.03199 32.06399L63.99998 509.920161a30.62399 30.62399 0 0 1-0.16 2.079999H63.99998c0 247.423923 200.575937 447.99986 447.99986 447.99986s447.99986-200.575937 447.99986-447.99986S759.423763 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 0-277.439913 96.22397l94.91197 91.679971c25.439992 24.607992 17.439995 44.991986-17.887994 45.599986L123.551961 300.800226a64.31998 64.31998 0 0 1-65.055979-62.84798l-3.295999-188.127942C54.591983 15.040315 74.687977 5.792318 100.127969 30.368311l87.999972 85.023973z" fill="" ></path></symbol><symbol id="icon-resize" viewBox="0 0 1024 1024"><path d="M456.036919 791.8108 270.553461 791.8108 460.818829 601.572038l-39.593763-39.567157L231.314785 751.915162l0.873903-183.953615c0-15.465227-12.515035-27.981285-27.981285-27.981285s-27.981285 12.515035-27.981285 27.981285l0 251.829516c0 8.3072 3.415796 14.975063 8.826016 19.564591 5.082762 5.192256 12.132318 8.416693 19.947308 8.416693l251.036453 0c15.46625 0 27.981285-12.514012 27.981285-27.981285C484.018204 804.325835 471.504192 791.8108 456.036919 791.8108zM838.945819 184.644347c-5.082762-5.191232-12.132318-8.416693-19.947308-8.416693L567.961034 176.227654c-15.46625 0-27.981285 12.515035-27.981285 27.981285 0 15.46625 12.514012 27.981285 27.981285 27.981285l185.483458 0L563.206754 422.427962l39.567157 39.567157 189.910281-189.910281-0.873903 183.953615c0 15.46625 12.514012 27.981285 27.981285 27.981285s27.981285-12.514012 27.981285-27.981285L847.772858 204.208938C847.771835 195.902762 844.356039 189.234899 838.945819 184.644347zM847.771835 64.303538 176.227142 64.303538c-61.809741 0-111.924115 50.115398-111.924115 111.924115l0 671.544693c0 61.809741 50.114374 111.924115 111.924115 111.924115l671.544693 0c61.809741 0 111.924115-50.114374 111.924115-111.924115l0-671.544693C959.69595 114.418936 909.581576 64.303538 847.771835 64.303538zM903.733381 847.772346c0 30.878265-25.056676 55.962569-55.962569 55.962569L176.227142 903.734916c-30.90487 0-55.962569-25.084305-55.962569-55.962569l0-671.544693c0-30.9325 25.056676-55.962569 55.962569-55.962569l671.544693 0c30.90487 0 55.962569 25.03007 55.962569 55.962569L903.734404 847.772346z"  ></path></symbol><symbol id="icon-img-broken" viewBox="0 0 1024 1024"><path d="M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m0 682.666667H213.333333v-195.413334l42.24 42.24 170.666667-170.666666 170.666667 170.666666 170.666666-170.24L810.666667 530.346667V810.666667z m0-401.493334l-43.093334-43.093333-170.666666 171.093333-170.666667-170.666666-170.666667 170.666666-42.24-42.666666V213.333333h597.333334v195.84z"  ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M784.652701 955.6957 346.601985 517.644983c-2.822492-2.822492-2.822492-7.902977 0-11.289967l439.179713-439.179713c6.77398-6.77398 10.725469-16.370452 10.725469-25.966924L796.507166 36.692393c0-20.32194-16.370452-36.692393-36.692393-36.692393l-4.515987 0c-9.596472 0-19.192944 3.951488-25.966924 10.725469L250.072767 489.420066c-12.418964 12.418964-12.418964 32.740904 0 45.159868l477.565601 477.565601c7.338479 7.338479 17.499449 11.854465 28.224917 11.854465l0 0c22.015436 0 40.079383-18.063947 40.079383-40.079383l0 0C796.507166 973.759647 791.99118 963.598677 784.652701 955.6957z"  ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M246.121279 955.6957l438.050717-438.050717c2.822492-2.822492 2.822492-7.902977 0-11.289967L244.992282 67.175303c-6.77398-6.77398-10.725469-16.370452-10.725469-25.966924L234.266814 36.692393C234.266814 16.370452 250.637266 0 270.959206 0l4.515987 0c9.596472 0 19.192944 3.951488 25.966924 10.725469l478.694598 478.694598c12.418964 12.418964 12.418964 32.740904 0 45.159868l-477.565601 477.565601c-7.338479 7.338479-17.499449 11.854465-28.224917 11.854465l0 0c-22.015436 0-40.079383-18.063947-40.079383-40.079383l0 0C234.266814 973.759647 238.7828 963.598677 246.121279 955.6957z"  ></path></symbol><symbol id="icon-zoomin" viewBox="0 0 1024 1024"><path d="M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"  ></path><path d="M235.712 369.92h390.72v127.104H235.712z"  ></path><path d="M367.488 238.144h127.104v390.72H367.488z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M570.24 512l259.2 259.2-58.88 58.24L512 570.24l-261.12 261.12-58.24-58.24L453.76 512 194.56 252.8l58.24-58.24L512 453.76l261.12-261.12 58.24 58.24z"  ></path></symbol><symbol id="icon-zoomout" viewBox="0 0 1024 1024"><path d="M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"  ></path><path d="M235.712 369.92h390.72v127.104H235.712z"  ></path></symbol></svg>';(function(l){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(l,0);else{var r=function(){document.removeEventListener("DOMContentLoaded",r,!1),l()};document.addEventListener("DOMContentLoaded",r,!1)}else document.attachEvent&&(m=l,b=e.document,p=!1,(_=function(){try{b.documentElement.doScroll("left")}catch{return void setTimeout(_,50)}s()})(),b.onreadystatechange=function(){b.readyState=="complete"&&(b.onreadystatechange=null,s())});function s(){p||(p=!0,m())}var m,b,p,_})(function(){var l,r,s,m,b,p;(l=document.createElement("div")).innerHTML=n,n=null,(r=l.getElementsByTagName("svg")[0])&&(r.setAttribute("aria-hidden","true"),r.style.position="absolute",r.style.width=0,r.style.height=0,r.style.overflow="hidden",s=r,(m=document.body).firstChild?(b=s,(p=m.firstChild).parentNode.insertBefore(b,p)):m.appendChild(s))})}}();const y=K({name:"SvgIcon",props:{type:{type:String,default:""}},setup:e=>()=>a("svg",{class:"vel-icon icon","aria-hidden":"true"},[a("use",{"xlink:href":`#icon-${e.type}`},null)])}),N=typeof window<"u",S=()=>{};let y9=!1;if(N)try{const e={};Object.defineProperty(e,"passive",{get(){y9=!0}}),window.addEventListener("test-passive",S,e)}catch{}const m9=function(e,n,l){let r=arguments.length>3&&arguments[3]!==void 0&&arguments[3];N&&e.addEventListener(n,l,!!y9&&{capture:!1,passive:r})},v9=(e,n,l)=>{N&&e.removeEventListener(n,l)},be=e=>{e.preventDefault()},me=Object.prototype.toString,Q=e=>n=>me.call(n).slice(8,-1)===e,w9=e=>!!e&&Q("String")(e);function ve(e){return e!=null}const ge=K({name:"Toolbar",props:{zoomIn:{type:Function,default:S},zoomOut:{type:Function,default:S},rotateLeft:{type:Function,default:S},rotateRight:{type:Function,default:S},resize:{type:Function,default:S}},setup:e=>()=>a("div",{class:"vel-toolbar"},[a("div",{role:"button","aria-label":"zoom in button",class:"toolbar-btn toolbar-btn__zoomin",onClick:e.zoomIn},[a(y,{type:"zoomin"},null)]),a("div",{role:"button","aria-label":"zoom out button",class:"toolbar-btn toolbar-btn__zoomout",onClick:e.zoomOut},[a(y,{type:"zoomout"},null)]),a("div",{role:"button","aria-label":"resize image button",class:"toolbar-btn toolbar-btn__resize",onClick:e.resize},[a(y,{type:"resize"},null)]),a("div",{role:"button","aria-label":"image rotate left button",class:"toolbar-btn toolbar-btn__rotate",onClick:e.rotateLeft},[a(y,{type:"rotate-left"},null)]),a("div",{role:"button","aria-label":"image rotate right button",class:"toolbar-btn toolbar-btn__rotate",onClick:e.rotateRight},[a(y,{type:"rotate-right"},null)])])}),fe=()=>a("div",{class:"vel-loading"},[a("div",{class:"ring"},null)]),he=()=>a("div",{class:"vel-on-error"},[a("div",{class:"ring"},null),a(y,{type:"img-broken"},null)]),ye=(e,n)=>{let{slots:l}=n;return a("div",{class:"vel-img-title"},[l.default?l.default():""])},E=N?window:global;let g9=Date.now();function we(e){const n=Date.now(),l=Math.max(0,16-(n-g9)),r=setTimeout(e,l);return g9=n+l,r}function Z(e){return(E.requestAnimationFrame||we).call(E,e)}function f9(e){(E.cancelAnimationFrame||E.clearTimeout).call(E,e)}function h9(e,n){const l=e.clientX-n.clientX,r=e.clientY-n.clientY;return Math.sqrt(l*l+r*r)}function W(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!U9(e)}function xe(e){return(n=>!!n&&Q("Object")(n))(e)&&w9(e.src)}var G=K({name:"VueEasyLightbox",props:{imgs:{type:[Array,String],default:()=>""},visible:{type:Boolean,default:!1},index:{type:Number,default:0},scrollDisabled:{type:Boolean,default:!0},escDisabled:{type:Boolean,default:!1},moveDisabled:{type:Boolean,default:!1},titleDisabled:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},teleport:{type:[String,Object],default:null},swipeTolerance:{type:Number,default:50},loop:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},zoomScale:{type:Number,default:.12},maxZoom:{type:Number,default:3},minZoom:{type:Number,default:.1}},emits:{hide:()=>!0,"on-error":e=>!0,"on-prev":(e,n)=>!0,"on-next":(e,n)=>!0,"on-prev-click":(e,n)=>!0,"on-next-click":(e,n)=>!0,"on-index-change":(e,n)=>!0,"on-rotate":e=>!0},setup(e,n){let{emit:l,slots:r}=n;const{imgRef:s,imgState:m,setImgSize:b}=(()=>{const t=q(),o=F({width:0,height:0,maxScale:1});return{imgRef:t,imgState:o,setImgSize:()=>{if(t.value){const{width:u,height:v,naturalWidth:f}=t.value;o.maxScale=f/u,o.width=u,o.height=v}}}})(),p=q(0),_=q(""),i=F({scale:1,lastScale:1,rotateDeg:0,top:0,left:0,initX:0,initY:0,lastX:0,lastY:0,touches:[]}),c=F({loadError:!1,loading:!1,dragging:!1,gesturing:!1,wheeling:!1}),g=T(()=>{return t=e.imgs,Q("Array")(t)?e.imgs.map(o=>typeof o=="string"?{src:o}:xe(o)?o:void 0).filter(ve):w9(e.imgs)?[{src:e.imgs}]:[];var t}),e9=T(()=>{var t;return(t=g.value[p.value])===null||t===void 0?void 0:t.src}),t9=T(()=>{var t;return(t=g.value[p.value])===null||t===void 0?void 0:t.title}),x9=T(()=>{var t;return(t=g.value[p.value])===null||t===void 0?void 0:t.alt}),_9=T(()=>({cursor:c.loadError?"default":e.moveDisabled?c.dragging?"grabbing":"grab":"move",top:`calc(50% + ${i.top}px)`,left:`calc(50% + ${i.left}px)`,transition:c.dragging||c.gesturing?"none":"",transform:`translate(-50%, -50%) scale(${i.scale}) rotate(${i.rotateDeg}deg)`})),$=()=>{l("hide")},o9=()=>{i.scale=1,i.lastScale=1,i.rotateDeg=0,i.top=0,i.left=0,c.loadError=!1,c.dragging=!1,c.loading=!0},O=(t,o)=>{const u=p.value;o9(),p.value=t,g.value[p.value]===g.value[t]&&b9(()=>{c.loading=!1}),e.visible&&u!==t&&(o&&o(u,t),l("on-index-change",u,t))},M=()=>{const t=p.value,o=e.loop?(t+1)%g.value.length:t+1;!e.loop&&o>g.value.length-1||O(o,(u,v)=>{l("on-next",u,v),l("on-next-click",u,v)})},L=()=>{const t=p.value;let o=t-1;if(t===0){if(!e.loop)return;o=g.value.length-1}O(o,(u,v)=>{l("on-prev",u,v),l("on-prev-click",u,v)})},n9=t=>{Math.abs(1-t)<.05?t=1:Math.abs(m.maxScale-t)<.05&&(t=m.maxScale),i.lastScale=i.scale,i.scale=t},X=()=>{const t=i.scale+e.zoomScale;t<m.maxScale*e.maxZoom&&n9(t)},j=()=>{const t=i.scale-e.zoomScale;t>e.minZoom&&n9(t)},l9=()=>{const t=i.rotateDeg%360;l("on-rotate",Math.abs(t<0?t+360:t))},Y=()=>{i.rotateDeg-=90,l9()},V=()=>{i.rotateDeg+=90,l9()},R=()=>{i.scale=1,i.top=0,i.left=0},I=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return!e.moveDisabled&&t===0},{onMouseDown:k9,onMouseMove:z9,onMouseUp:S9}=((t,o,u)=>{let v,f=!1;return{onMouseDown:d=>{t.initX=t.lastX=d.clientX,t.initY=t.lastY=d.clientY,o.dragging=!0,f=!1,d.stopPropagation()},onMouseUp:d=>{u(d.button)&&f9(v),o.dragging=!1,f=!1},onMouseMove:d=>{if(o.dragging)if(u(d.button)){if(f)return;f=!0,v=Z(()=>{const{top:z,left:h,lastY:A,lastX:P}=t;t.top=z-A+d.clientY,t.left=h-P+d.clientX,t.lastX=d.clientX,t.lastY=d.clientY,f=!1})}else t.lastX=d.clientX,t.lastY=d.clientY;d.stopPropagation()}}})(i,c,I),{onTouchStart:C9,onTouchMove:M9,onTouchEnd:L9}=((t,o,u,v)=>{let f,d=!1;return{onTouchStart:z=>{const{touches:h}=z;h.length>1?(u.gesturing=!0,o.touches=h):(o.initX=o.lastX=h[0].clientX,o.initY=o.lastY=h[0].clientY,u.dragging=!0),z.stopPropagation()},onTouchMove:z=>{if(d)return;const{touches:h}=z,{lastX:A,lastY:P,left:R9,top:I9,scale:A9}=o;if(!u.gesturing&&u.dragging){if(!h[0])return;const{clientX:D,clientY:k}=h[0];v()?f=Z(()=>{o.lastX=D,o.lastY=k,o.top=I9-P+k,o.left=R9-A+D,d=!1}):(o.lastX=D,o.lastY=k)}else u.gesturing&&o.touches.length>1&&h.length>1&&(f=Z(()=>{const D=(h9(o.touches[0],o.touches[1])-h9(h[0],h[1]))/t.width;o.touches=h;const k=A9-1.3*D;k>.5&&k<1.5*t.maxScale&&(o.scale=k),d=!1}))},onTouchEnd:()=>{f9(f),u.dragging=!1,u.gesturing=!1,d=!1}}})(m,i,c,I),Y9=()=>{i.scale!==m.maxScale?(i.lastScale=i.scale,i.scale=m.maxScale):i.scale=i.lastScale},D9=t=>{c.loadError||c.gesturing||c.loading||c.dragging||c.wheeling||!e.scrollDisabled||(c.wheeling=!0,setTimeout(()=>{c.wheeling=!1},80),t.deltaY<0?X():j())},a9=t=>{const o=t;e.visible&&(!e.escDisabled&&o.key==="Escape"&&e.visible&&$(),o.key==="ArrowLeft"&&(e.rtl?M():L()),o.key==="ArrowRight"&&(e.rtl?L():M()))},T9=()=>{e.maskClosable&&$()},E9=()=>{b()},B9=()=>{c.loading=!1},$9=t=>{c.loading=!1,c.loadError=!0,l("on-error",t)},r9=()=>{e.visible&&b()};H(()=>e.index,t=>{t<0||t>=g.value.length||O(t)}),H(()=>c.dragging,(t,o)=>{const u=!t&&o;if(!I()&&u){const v=i.lastX-i.initX,f=i.lastY-i.initY,d=e.swipeTolerance;Math.abs(v)>Math.abs(f)&&(v<-1*d?M():v>d&&L())}}),H(()=>e.visible,t=>{if(t){o9();const o=g.value.length;if(o===0)return p.value=0,c.loading=!1,void b9(()=>c.loadError=!0);p.value=e.index>=o?o-1:e.index<0?0:e.index,e.scrollDisabled&&X9()}else e.scrollDisabled&&i9()});const X9=()=>{document&&(_.value=document.body.style.overflowY,document.body.style.overflowY="hidden")},i9=()=>{document&&(document.body.style.overflowY=_.value)};q9(()=>{m9(document,"keydown",a9),m9(window,"resize",r9)}),F9(()=>{v9(document,"keydown",a9),v9(window,"resize",r9),i9()});const j9=()=>c.loading?r.loading?r.loading({key:"loading"}):a(fe,{key:"img-loading"},null):c.loadError?r.onerror?r.onerror({key:"onerror"}):a(he,{key:"img-on-error"},null):a("div",{class:"vel-img-wrapper",style:_9.value,key:"img-wrapper"},[a("img",{alt:x9.value,ref:s,draggable:"false",class:"vel-img",src:e9.value,onMousedown:k9,onMouseup:S9,onMousemove:z9,onTouchstart:C9,onTouchmove:M9,onTouchend:L9,onLoad:E9,onDblclick:Y9,onDragstart:t=>{t.preventDefault()}},null)]),N9=()=>{if(r["prev-btn"])return r["prev-btn"]({prev:L});if(g.value.length<=1)return;const t=!e.loop&&p.value<=0;return a("div",{role:"button","aria-label":"previous image button",class:"btn__prev "+(t?"disable":""),onClick:L},[e.rtl?a(y,{type:"next"},null):a(y,{type:"prev"},null)])},O9=()=>{if(r["next-btn"])return r["next-btn"]({next:M});if(g.value.length<=1)return;const t=!e.loop&&p.value>=g.value.length-1;return a("div",{role:"button","aria-label":"next image button",class:"btn__next "+(t?"disable":""),onClick:M},[e.rtl?a(y,{type:"prev"},null):a(y,{type:"next"},null)])},V9=()=>{if(t9.value&&!e.titleDisabled&&!c.loading&&!c.loadError)return r.title?r.title():a(ye,null,{default:()=>[t9.value]})},s9=()=>{let t;if(e.visible)return a("div",{onTouchmove:be,class:["vel-modal",e.rtl?"is-rtl":""],onClick:Z9(T9,["self"]),onWheel:D9},[a(U,{name:"vel-fade",mode:"out-in"},W(t=j9())?t:{default:()=>[t]}),a("img",{style:"display:none;",src:e9.value,onError:$9,onLoad:B9},null),a("div",{class:"vel-btns-wrapper"},[N9(),O9(),V9(),r["close-btn"]?r["close-btn"]({close:$}):a("div",{role:"button","aria-label":"close image preview button",class:"btn__close",onClick:$},[a(y,{type:"close"},null)]),r.toolbar?r.toolbar({toolbarMethods:{zoomIn:X,zoomOut:j,rotate:Y,rotateLeft:Y,rotateRight:V,resize:R},zoomIn:X,zoomOut:j,rotate:Y,rotateLeft:Y,rotateRight:V,resize:R}):a(ge,{zoomIn:X,zoomOut:j,resize:R,rotateLeft:Y,rotateRight:V},null)])])};return()=>{let t;if(e.teleport){let o;return a(H9,{to:e.teleport},{default:()=>[a(U,{name:"vel-fade"},W(o=s9())?o:{default:()=>[o]})]})}return a(U,{name:"vel-fade"},W(t=s9())?t:{default:()=>[t]})}}});const ze=Object.assign(G,{install:e=>{e.component(G.name,G)}});export{ze as N,ke as Y};
