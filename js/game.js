
var SITE_XTHOST = "https://wormateserkanconnect.github.io/wormateserkanconnect6";
window.detectLog = null;
const _wrmxt = {
    BETAisSkinCustom(input) {
        var templateStartAlphaRegex = /[a-zA-Z]/;
        return "string" === typeof input && templateStartAlphaRegex.test(input);
    },
    testSkinCustom: function (value) {
        return _wrmxt.BETAisSkinCustom(value) ? 34 || 33 : value;
    },
    testSkinMod: function (a22) {
        return 399 <= a22 && 999 > a22;
    },
    testWear: function (canCreateDiscussions) {
        return 399 <= canCreateDiscussions && 999 > canCreateDiscussions;
    },
    isNumberValid: function (id) {
        return "" !== id && null !== id && void 0 !== id && !isNaN(id);
    },
    validInput: function (e) {
        if (!_wrmxt.testSkinMod(e) && !_wrmxt.BETAisSkinCustom(e)) {
            return e;
        }
        try {
            let duration = $("#inputReplaceSkin").val();
            return encodeURI(_wrmxt.isNumberValid(duration) ? duration : 35);
        } catch (q) {
            return encodeURI(35);
        }
    },
    aload: false,
    aId: 0
};

var inputReplaceSkin = localStorage.getItem('inputReplaceSkin');
var hoisinhnhanh;
var PilotoAutomatico = null;
var isPlaying = false;
var pwrups = {};
window.keyMove = 81;
var theoEvents = {
    'eventoPrincipal': null,
    joystick: {
        positionMode: "L",
        checked: !0,
        size: 90,
        mode: "dynamic",
        position: {
            left: "110px",
            bottom: "110px"
        },
        color: "#FF3B3B",
        pxy: 110
    },
}
var theoKzObjects = {
    FB_UserID: "",
    smoothCamera: .5,
    eat_animation: .0025,
    flag: "https://i.imgur.com/EkbSd65.png",
    PortionSize: localStorage.PotenciadorSize || 2,
    PortionAura: localStorage.PotenciadorAura || 1.2,
    PortionTransparent: .8,
    FoodTransparent: .3,
    ModeStremer: false,

    ModeStremerbatop: false,
    ModeStremeremoj: false,
    ModeStremerheadshot: false,
    ModeStremersaveheadshot: false,
    arrow: false,
    KeyCodeRespawn: localStorage.KeyRespawn || 82,
    KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
    AbilityZ: false,
    FoodShadow: localStorage.ComidaShadow || 2,
    FoodSize: localStorage.ComidaSize || 2,
    headshot: 0,
    visibleSkin: [],
    pL: [],
    gamePad: theoEvents.joystick,
    mobile: !1,
    loading: false,
    kill: 0,
    totalKills: 0,
    totalHeadshots: 0,
    adblock: false,
    CLIENTE_ADMIN: 1,
    CLIENTE_ACTIVO: 3,
    CLIENTE_INACTIVO: 4,
}
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && "null" !== saveGameLocal) {
    let t = JSON.parse(saveGameLocal);
    for (let e in t)
        theoKzObjects[e] = t[e]
}
theoKzObjects.loading = true;

const PhoneChecked = function () {
    let k = false;
    theoKzObjects.mobile = false;
    var q = navigator.userAgent || navigator.vendor || window.opera;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(q) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(q.substr(0,
        4))) {
        /** @type {boolean} */
        theoKzObjects.mobile = true;
        k = true;
    }
    return k;
};
const RechekingPhone = function () {
    let check = false;
    var q = navigator.userAgent || navigator.vendor || window.opera;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(q) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(q.substr(0,
        4))) {
        /** @type {boolean} */
        check = true;
    }
    return check;
};
const loadJoy = function (found) {
    let q;
    try {
        console.log(found);
        return theoKzObjects.gamePad || (theoKzObjects.gamePad = theoEvents.joystick), RechekingPhone() && (found || theoKzObjects.gamePad.checked) && (q = nipplejs.create(theoKzObjects.gamePad), q.on("move", function (canCreateDiscussions, obj) {
            /** @type {number} */
            theoEvents.eventoPrincipal.sk = obj.angle.radian <= Math.PI ? -1 * obj.angle.radian : Math.PI - (obj.angle.radian - Math.PI);
            console.log(obj);
        })), q;
    } catch (jiveUser) {
        console.log(jiveUser);
    }
};


let clientes = {
    clientesVencidos: [],
    clientesActivos: []
};
let servers = {
    Api_listServer: []
}


async function loadUsers() {
    await fetch("https://wormateserkanconnect.github.io/wormateserkanconnect6/api/users.php")
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                let allClients = response.Users;

                clientes.clientesActivos = allClients.filter(cliente => {
                    return cliente.cliente_ID
                });

            } else {
                clientes = {
                    clientesVencidos: [],
                    clientesActivos: []
                };
                alert("An error occurred while loading clients");
            }
        })
}

async function loadServers() {
    await fetch("https://wormateserkanconnect.github.io/wormateserkanconnect6/api/server.php")
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                let allServers = response.servers;

                servers.Api_listServer = allServers.filter(server_ => {
                    return server_.serverUrl
                });
            } else {
                servers = {
                    Api_listServer: []
                };
                alert("An error occurred while loading the servers");
            }
        })
}
loadUsers();
loadServers();


$(".store-view-cont").append('<div id="idReplaceSkin"></div>');
var StoreSkinID = $("#idReplaceSkin");
const ctx = {
    fontStyle: {
        name: new PIXI.TextStyle({
            fill: "#FFFF00",
            fontSize: 12,
            lineJoin: "round",
            stroke: "#EFFA45",
            fontFamily: "vuonghiep",
            fontWeight: "bold"

        }),
        blanco: new PIXI.TextStyle({
            align: "center",
            fill: "#FFF",
            fontSize: 12,
            lineJoin: "round",
            stroke: "#FFF",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontWeight: "bold",
            wordWrap: true
        }),
        morado: new PIXI.TextStyle({
            align: "center",
            fill: "#FFFF00",
            fontSize: 10,
            lineJoin: "round",
            stroke: "#FAA845",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontFamily: "vuonghiep",
            fontWeight: "bold",
            wordWrap: true
        }),
        morado1: new PIXI.TextStyle({
            align: "center",
            fill: "#FFF",
            fontSize: 10,
            lineJoin: "round",
            stroke: "#FAA845",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontFamily: "vuonghiep",
            fontWeight: "bold",
            wordWrap: true
        }),
        amarillo: new PIXI.TextStyle({
            align: "center",
            fill: "#FFFF00",
            fontSize: 10,
            lineJoin: "round",
            stroke: "#FAA845",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontFamily: "vuonghiep",
            fontWeight: "bold",
            wordWrap: true
        }),
        amarillo1: new PIXI.TextStyle({
            align: "center",
            fill: "#FFF",
            fontSize: 10,
            lineJoin: "round",
            stroke: "#FAA845",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontFamily: "vuonghiep",
            fontWeight: "bold",
            wordWrap: true
        }),
        
        
        anheadshot: new PIXI.TextStyle({
            align: "center",
            fill: "#FFF",
            fontSize: 0,
            lineJoin: "round",
            stroke: "#FAA845",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontFamily: "vuonghiep",
            fontWeight: "bold",
            wordWrap: true
        }),
        
        keysColor: new PIXI.TextStyle({
            align: "center",
            fill: "#fff009",
            fontSize: 10,
            lineJoin: "round",
            stroke: "#fff009",
            strokeThickness: 1,
            whiteSpace: "normal",
            fontWeight: "bold",
            fontFamily: "vuonghiep",
            wordWrap: true
        }),
    }
};
ctx.clock = PIXI.Sprite.fromImage("https://i.imgur.com/v6szE9c.png");
ctx.clock.width = 100;
ctx.clock.height = 100;
ctx.clock.x = -50;
ctx.clock.y = -50;




/*server name */
ctx.value_server = new PIXI.Text("WSC", ctx.fontStyle.name);
ctx.value_server.x = 25;
ctx.value_server.y = -18;




ctx.label_hs = new PIXI.Text("HS", ctx.fontStyle.amarillo);
ctx.value1_hs = new PIXI.Text("0", ctx.fontStyle.amarillo);

ctx.label_kill = new PIXI.Text("KL", ctx.fontStyle.morado);
ctx.value1_kill = new PIXI.Text("0", ctx.fontStyle.morado);



if(theoKzObjects.ModeStremersaveheadshot){
                  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarillo1);  
ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.morado1);      
                }
                
                else{
                  ctx.value2_hs = new PIXI.Text("", ctx.fontStyle.amarillo1);  
ctx.value2_kill = new PIXI.Text("", ctx.fontStyle.morado1); 
                };




ctx.label_hs.x = 65;
ctx.label_hs.y = 100;

ctx.label_kill.x = 15;
ctx.label_kill.y = 100;


ctx.value1_hs.x = 65;
ctx.value1_hs.y = 116;



ctx.value1_kill.x = 15;
ctx.value1_kill.y = 116;


ctx.value2_hs.x = 65;
ctx.value2_hs.y = 133;

ctx.value2_kill.x = 15;
ctx.value2_kill.y = 133;



//if (!theoKzObjects.SaveGameXT) {
//ctx.value2_hs.alpha = 0;
//ctx.value2_kill.alpha = 0;
//}
ctx.containerCountInfo = new PIXI.Container;
ctx.containerCountInfo.x = -45;
ctx.containerCountInfo.y = -52;
ctx.containerCountInfo.addChild(ctx.value_server);

ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.value2_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
ctx.containerCountInfo.addChild(ctx.value2_kill);

ctx.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");

ctx.onclickServer = PIXI.Texture.fromImage(theoKzObjects.flag);

ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0;
ctx.containerImgS.y = -10;
ctx.containerImgS.width = 25;
ctx.containerImgS.height = 20;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -2;
ctx.borderImg.y = 78;
ctx.borderImg.width = 110;
ctx.borderImg.height = 60;
ctx.setServer = function (name) {
    ctx.value_server.text = name || "WFC"
};
ctx.setCountGame = function (killHTML, headShotHTML, totalKills, totalHeadshots) {
    //if (!theoKzObjects.SaveGameXT) {
    //  ctx.value2_hs.alpha = 0;
    //  ctx.value2_kill.alpha = 0;
    //}

    ctx.value1_hs.text = headShotHTML;
    
    ctx.value1_kill.text = killHTML;
    ;

if(theoKzObjects.ModeStremersaveheadshot){
                  ctx.value2_hs.text = totalHeadshots;
                  ctx.value2_kill.text = totalKills;
                }
                
                else{
                 
                };


};



"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
} : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
},
    GoogleAuth;
! function () {
    try {
        console.log(function (t, e) {
            for (var i = 0; i < e.length; i += 2) t = t.replaceAll(e[i], e[i + 1]);
            return t
        }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]))
    } catch (t) { }
}(), window.addEventListener("load", function () {
    function isBrowserCompatible() {
        return function (t, e, i) {
            function o(t, e) {
                return (void 0 === t ? "undefined" : _typeof(t)) === e
            }

            function n() {
                return "function" != typeof e.createElement ? e.createElement(arguments[0]) : u ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
            }
            var r = [],
                s = [],
                a = {
                    _version: "3.3.1",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function (t, e) {
                        var i = this;
                        setTimeout(function () {
                            e(i[t])
                        }, 0)
                    },
                    addTest: function (t, e, i) {
                        s.push({
                            name: t,
                            fn: e,
                            options: i
                        })
                    },
                    addAsyncTest: function (t) {
                        s.push({
                            name: null,
                            fn: t
                        })
                    }
                },
                h = function () { };
            h.prototype = a, h = new h;
            var l = !1;
            try {
                l = "WebSocket" in t && 2 === t.WebSocket.CLOSING
            } catch (t) { }
            h.addTest("websockets", l);
            var p = e.documentElement,
                u = "svg" === p.nodeName.toLowerCase();
            h.addTest("canvas", function () {
                var t = n("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            }), h.addTest("canvastext", function () {
                return !1 !== h.canvas && "function" == typeof n("canvas").getContext("2d").fillText
            }),
                function () {
                    var t, e, i, n, a, l, p;
                    for (var u in s)
                        if (s.hasOwnProperty(u)) {
                            if (t = [], e = s[u], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                                for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                            for (n = o(e.fn, "function") ? e.fn() : e.fn, a = 0; a < t.length; a++) l = t[a], p = l.split("."), 1 === p.length ? h[p[0]] = n : (!h[p[0]] || h[p[0]] instanceof Boolean || (h[p[0]] = new Boolean(h[p[0]])), h[p[0]][p[1]] = n), r.push((n ? "" : "no-") + p.join("-"))
                        }
                }(),
                function (t) {
                    var e = p.className,
                        i = h._config.classPrefix || "";
                    if (u && (e = e.baseVal), h._config.enableJSClass) {
                        var o = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                        e = e.replace(o, "$1" + i + "js$2")
                    }
                    h._config.enableClasses && (e += " " + i + t.join(" " + i), u ? p.className.baseVal = e : p.className = e)
                }(r), delete a.addTest, delete a.addAsyncTest;
            for (var c = 0; c < h._q.length; c++) h._q[c]();
            t.Modernizr = h
        }(window, document), Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
    }
    /*add functions new*/
    function powerUpsTimer(msg, i, data) {
        const timePWR = [38, 38, 38, 120, 38, 25, 38];
        const colors = ["#FFD500", '#FFC75A', '#00B2ED', "#FF4544", '#0094D7', '#CCCF81', '#ff0999'];
        let countTime = timePWR[i] - parseInt((0.99 == data ? 1 : data) * timePWR[i] / 1);
        const inputTextV1 = new PIXI.TextStyle({
            "align": "center",
            "fill": colors[i],
            "fontSize": 25,
            "lineJoin": 'round',
            "whiteSpace": 'normal',
            "wordWrap": true,
            
            "fontFamily": "vuonghiep",
            "fontWeight": 'bold'
        });
        let changePWR = 'pwr_clock' + i;
        if (!pwrups[changePWR] && timePWR[i] === countTime) {
            pwrups[changePWR] = new PIXI.Text(countTime, inputTextV1);
            pwrups[changePWR]["y"] = 61;
            msg["Tf"][i]['addChild'](pwrups[changePWR]);
        }
        if (pwrups[changePWR]) {
            pwrups[changePWR]["x"] = countTime >= 100 ? 11 : countTime >= 10 ? 18 : 26;
            pwrups[changePWR]['text'] = countTime;
            if (countTime === 0) {
                delete pwrups[changePWR];
            }
        }
    }


    if (document.getElementById("game-wrap").style.display = "block", !isBrowserCompatible()) return void (document.getElementById("error-view").style.display = "block");
    ! function () {
        function getApp() {
            return window.anApp = _anApp
        }
        function getCookie(name) {
            const cookiePrefix = name + "=";
            const cookieArray = document.cookie.split(";");
            for (let i = 0; i < cookieArray.length; i++) {
                let cookie = cookieArray[i];
                while (cookie.charAt(0) === " ") {
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(cookiePrefix) === 0) {
                    return cookie.substring(cookiePrefix.length, cookie.length);
                }
            }
            return "";
        }
        function setCookie(name, value, days) {
            var expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (86400000 * days));
            var expires = "expires=" + expirationDate.toUTCString();
            document.cookie = name + "=" + value + "; " + expires + "; path=/";
        }
        function i18n(t) {
            return window.I18N_MESSAGES[t]
        }

        function i18nCustomBundle(t) {
            return t[LANG] ? t[LANG] : t.en ? t.en : t.x
        }

        function timeSecsToIntervalText(t) {
            var e = (Math.floor(t) % 60).toString(),
                i = (Math.floor(t / 60) % 60).toString(),
                o = (Math.floor(t / 3600) % 24).toString(),
                n = Math.floor(t / 86400).toString(),
                r = i18n("util.time.days"),
                s = i18n("util.time.hours"),
                a = i18n("util.time.min"),
                h = i18n("util.time.sec");
            return n > 0 ? n + " " + r + " " + o + " " + s + " " + i + " " + a + " " + e + " " + h : o > 0 ? o + " " + s + " " + i + " " + a + " " + e + " " + h : i > 0 ? i + " " + a + " " + e + " " + h : e + " " + h
        }

        function convertI18nStringToHTML(t) {
            return t.includes("href") ? t.replaceAll("href", 'target="_black" href') : t
        }

        function loadScript(t, e, i) {
            var o = document.createElement("script"),
                n = !0;
            e && (o.id = e), o.async = "async", o.type = "text/javascript", o.src = t, i && (o.onload = o.onreadystatechange = function () {
                n = !1;
                try {
                    i()
                } catch (t) {
                    console.log(t)
                }
                o.onload = o.onreadystatechange = null
            }), (document.head || document.getElementsByTagName("head")[0]).appendChild(o)
        }

        function extend(t, e) {
            var i = e;
            return i.prototype = Object.create(t.prototype), i.prototype.constructor = i, i.parent = t, i
        }

        function normDir(t) {
            return t %= _2PI, t < 0 ? t + _2PI : t
        }

        function minmax(t, e, i) {
            return clamp(i, t, e)
        }

        function clamp(t, e, i) {
            return t > i ? i : t < e ? e : Number.isFinite(t) ? t : .5 * (e + i)
        }

        function timeDeltaIncrement(t, e, i, o) {
            return e > t ? Math.min(e, t + i * o) : Math.max(e, t - i * o)
        }

        function linearApproach(t, e, i, o, n) {
            return e + (t - e) * Math.pow(1 - o, i / n)
        }

        function lerp(t, e, i) {
            return t * (1 - i) + e * i
        }

        function arraycopy(t, e, i, o) {
            var n = i,
                r = e,
                s = e + o;
            if (null == t) throw new TypeError("this is null or not defined");
            var a = t.length >>> 0,
                h = n >> 0,
                l = h < 0 ? Math.max(a + h, 0) : Math.min(h, a),
                p = r >> 0,
                u = p < 0 ? Math.max(a + p, 0) : Math.min(p, a),
                c = void 0 === s ? a : s >> 0,
                f = c < 0 ? Math.max(a + c, 0) : Math.min(c, a),
                d = Math.min(f - u, a - l),
                g = 1;
            for (u < l && l < u + d && (g = -1, u += d - 1, l += d - 1); d > 0;) u in t ? t[l] = t[u] : delete t[l], u += g, l += g, d--;
            return t
        }

        function init2DContext(t) {
            return t.getContext("2d")
        }

        function pixijs_removeFromParent(t) {
            null != t.parent && t.parent.removeChild(t)
        }

        function any(t) {
            return t[parseInt(Math.random() * t.length)]
        }

        function randStr() {
            return Math.random().toString(36).substring(2, 15)
        }

        function convertHSLtoRGB(t, e, i) {
            var o = (1 - Math.abs(2 * i - 1)) * e,
                n = o * (1 - Math.abs(t / 60 % 2 - 1)),
                r = i - o / 2;
            return 0 <= t && t < 60 ? [r + o, r + n, r + 0] : 60 <= t && t < 120 ? [r + n, r + o, r + 0] : 120 <= t && t < 180 ? [r + 0, r + o, r + n] : 180 <= t && t < 240 ? [r + 0, r + n, r + o] : 240 <= t && t < 300 ? [r + n, r + 0, r + o] : [r + o, r + 0, r + n]
        }

        function ADINPLAY_PREROLL_PLAYER() {
            function t() {
                let time = theoKzObjects.adblock ? 1 : 5;
                $("#adbl-1").text(i18n("index.game.antiadblocker.msg1")), $("#adbl-2").text(i18n("index.game.antiadblocker.msg2")), $("#adbl-3").text(i18n("index.game.antiadblocker.msg3")), $("#adbl-4").text(i18n("index.game.antiadblocker.msg4").replace("{0}", 10)), $("#adbl-continue span").text(i18n("index.game.antiadblocker.continue")), $("#adbl-continue").hide(), $("#" + n).fadeIn(500);
                //for (var t = 10, e = 0; e < 10; e++) setTimeout(function() {
                for (var t = time, e = 0; e < time; e++) setTimeout(function () {
                    if (t--, $("#adbl-4").text(i18n("index.game.antiadblocker.msg4").replace("{0}", t)), 0 === t) {
                        console.log("aipAABC");
                        try {
                            ga("send", "event", "antiadblocker", window.runtimeHash + "_complete")
                        } catch (t) { }
                        $("#adbl-continue").fadeIn(200)
                    }
                }, 1e3 * (e + 1))
            }
            var e = !1,
                i = function () { },
                o = {},
                n = "JDHnkHtYwyXyVgG9";
            return $("#adbl-continue").click(function () {
                $("#" + n).fadeOut(500), i(!1)
            }), o.a = function (t) {
                if (i = t, !e) try {
                    aiptag.cmd.player.push(function () {
                        aiptag.adplayer = new aipPlayer({
                            AD_WIDTH: 960,
                            AD_HEIGHT: 540,
                            AD_FULLSCREEN: !0,
                            AD_CENTERPLAYER: !1,
                            LOADING_TEXT: "loading advertisement",
                            PREROLL_ELEM: function () {
                                return document.getElementById("1eaom01c3pxu9wd3")
                            },
                            AIP_COMPLETE: function (t) {
                                console.log("aipC"), i(!0), $("#1eaom01c3pxu9wd3").hide(), $("#" + n).hide();
                                try {
                                    ga("send", "event", "preroll", window.runtimeHash + "_complete")
                                } catch (t) { }
                            },
                            AIP_REMOVE: function () { }
                        })
                    }), e = !0
                } catch (t) { }
            }, o.b = function () {
                if (void 0 !== aiptag.adplayer) {
                    console.log("aipS");
                    try {
                        ga("send", "event", "preroll", window.runtimeHash + "_request")
                    } catch (t) { }
                    t()
                    /*$("#1eaom01c3pxu9wd3").show(), aiptag.cmd.player.push(function() {
                        aiptag.adplayer.startPreRoll()
                    })*/
                } else {
                    console.log("aipAABS");
                    try {
                        ga("send", "event", "antiadblocker", window.runtimeHash + "_start")
                    } catch (t) { }
                    t()
                }
            }, o
        }

        function ADINPLAY_BANNER(t, e) {
            var i = $("#" + t),
                o = e,
                n = {},
                r = !1;
            return n.a = function () {
                if (!r) {
                    i.empty(), i.append("<div id='" + o + "'></div>");
                    try {
                        try {
                            ga("send", "event", "banner", window.runtimeHash + "_display")
                        } catch (t) { }
                        aiptag.cmd.display.push(function () {
                            aipDisplayTag.display(o)
                        }), r = !0
                    } catch (t) { }
                }
            }, n.c = function () {
                try {
                    try {
                        ga("send", "event", "banner", window.runtimeHash + "_refresh")
                    } catch (t) { }
                    aiptag.cmd.display.push(function () {
                        aipDisplayTag.display(o)
                    })
                } catch (t) { }
            }, n
        }

        function Application() {
            function register(t) {
                var uid = t + 37 * Math.floor(65535 * Math.random());
                setCookie(Cookies.d, uid, 30);
            }

            function log() {
                return parseInt(getCookie(Cookies.d)) % 37;
            }
            return function () {
                var i = log();
                console.log("init1 pSC: " + i);
                if (!(i >= 0 && i < env.e)) {
                    i = Math.max(0, env.e - 2);
                    console.log("init2 pSC: " + i);
                }
                var item = {};
                _anApp = item;
                item.f = env;
                item.g = false;
                item.i = Date.now();
                item.j = 0;
                item.k = 0;
                item.l = null;
                item.m = LOCALE;
                item.n = LANG;
                item.o = null;
                item.p = null;
                item.q = null;
                item.r = null;
                item.s = null;
                item.t = null;
                item.u = null;
                try {
                    if (navigator && navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (boundInfo) {
                            if (void 0 !== boundInfo.coords) {
                                var coords = boundInfo.coords;
                                if (void 0 !== coords.latitude && void 0 !== coords.longitude) {
                                    item.l = boundInfo;
                                }
                            }
                        }, function (canCreateDiscussions) { });
                    }
                } catch (t) { }
                return item.v = function () {
                    item.p = new AssetsJsonManager;
                    item.q = new ResourceManager;
                    item.r = new AudioManager;
                    item.s = new ScenesManager;
                    item.t = new PropertyManager;
                    item.u = new UserManager;
                    item.o = new Engine;
                    item.o.z = new MessageProcessor(item.o);
                    item.a();
                }, item.a = function () {
                    try {
                        ga("send", "event", "app", window.runtimeHash + "_init");
                    } catch (t) { }
                    item.o.A = function () {
                        item.o.B();
                    };
                    item.o.C = function () {
                        var thisID = item.s.F.D();
                        try {
                            ga("send", "event", "game", window.runtimeHash + "_start", thisID);
                        } catch (t) { }
                        item.r.G(AudioManager.AudioState.H);
                        item.s.I(item.s.H.J());
                    };
                    item.o.B = function () {
                        try {
                            ga("send", "event", "game", window.runtimeHash + "_end");
                        } catch (t) { }
                        if ($("body").height() >= 430) {
                            item.f.K.c();
                        }
                        item.p.L();
                        (function () {
                            var vdom = Math.floor(item.o.N.M);
                            var i = item.o.O;
                            if (item.u.P()) {
                                item.u.Q(function () {
                                    item.R(vdom, i);
                                });
                            } else {
                                item.R(vdom, i);
                            }
                        })();
                    };
                    item.o.S = function (fn) {
                        fn(item.s.H.T(), item.s.H.U());
                    };
                    item.u.V(function () {
                        if (item.p.W && (item.r.G(AudioManager.AudioState.F), item.s.I(item.s.F)), item.u.P()) {
                            try {
                                var NULL_VALUE = item.u.X();
                                ga("set", "userId", NULL_VALUE);
                            } catch (t) { }
                        }
                        if (item.Y() && item.u.P() && !item.u.Z()) {
                            item.$(false, false);
                            item.s.aa._(new ConsentAcceptanceToasterViewController);
                        } else {
                            item.ba(true);
                        }
                    });
                    item.p.ca(function () {
                        item.r.G(AudioManager.AudioState.F);
                        item.s.I(item.s.F);
                    });
                    item.q.a(function () {
                        item.o.a();
                        item.r.a();
                        item.s.a();
                        item.t.a();
                        item.p.a();
                        item.u.a();
                        if (item.Y() && !item.Z()) {
                            item.s.aa._(new ConsentAcceptanceToasterViewController);
                        } else {
                            item.ba(true);
                        }
                    });
                }, item.da = function (value) {
                    if (item.u.P()) {
                        var e = item.u.ea();
                        $.get(GATEWAY_HOST + "/pub/wuid/" + e + "/consent/change?value=" + encodeURI(value), function (canCreateDiscussions) { });
                    }
                }, item.fa = function (req) {
                    var e = item.u.ea();
                    var testPostcode = item.s.F.D(); // gameMode
                    var originPhoto = item.s.F.ga(); // nickname
                    var primaryKeyId = item.t.ha(PropertyType.ia); // skinId
                    var fileRelPath = item.t.ha(PropertyType.ja); // eyesId = ojos
                    var newSearchboxValue = item.t.ha(PropertyType.ka); // mouthId = boca
                    var eventLabel = item.t.ha(PropertyType.la); // glassesId = lentes
                    var srcAtt = item.t.ha(PropertyType.ma); // hatId = sombrero
                    var p = 0;
                    if (null != item.l) {
                        var lat = item.l.coords.latitude;
                        var lon = item.l.coords.longitude;
                        p = 1 | Math.max(0, Math.min(32767, (lat + 90) / 180 * 32768)) << 1 | Math.max(0, Math.min(65535, (lon + 180) / 360 * 65536)) << 16;
                    }
                    _wrmxt.testSkinCustom(primaryKeyId);
                    
                    let u = "x" + (9999 < primaryKeyId ? "0000" : primaryKeyId.toString().padStart(4, 0)) + (999 < srcAtt ? "000" : srcAtt.toString().padStart(3, 0)) + (999 < fileRelPath ? "000" : fileRelPath.toString().padStart(3, 0)) + (999 < newSearchboxValue ? "000" : newSearchboxValue.toString().padStart(3, 0));
                    //originPhoto = (32 <= originPhoto.length ? originPhoto.substr(0, 16) : originPhoto.substr(0, 16).padEnd(16)) + u;
                    originPhoto = (32 <= originPhoto.length ? originPhoto.substr(0, 16) : originPhoto.substr(0, 16).padEnd(16, "_")) + u;
                          originPhoto = originPhoto.trim();
                    
                    console.log(originPhoto);
                    // InvocaciÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n a server
                    var urlRequest = GATEWAY_HOST + "/pub/wuid/" + e + "/start?gameMode=" + encodeURI(testPostcode) + "&gh=" + p + "&nickname=" + encodeURI(originPhoto) + "&skinId=" + _wrmxt.validInput(primaryKeyId) + "&eyesId=" + encodeURI(fileRelPath) + "&mouthId=" + encodeURI(newSearchboxValue) + "&glassesId=" + encodeURI(eventLabel) + "&hatId=" + encodeURI(srcAtt);

                    console.log("urlRequest: " + urlRequest);

                    $.get(urlRequest, function (server) {
                        var host = server.server_url;
                        req(host);
                    });
                }, item.na = function () {
                    i++;
                    console.log("start pSC: " + i);
                    if (!item.f.oa && i >= item.f.e) {
                        item.s.I(item.s.pa);
                        item.r.G(AudioManager.AudioState.qa);
                        item.f.ra.b();
                    } else {
                        register(i);
                        item.sa();
                    }
                },item.sa = function (server_url) {
                    if (item.o.ta()) {
                        item.s.I(item.s.ua);
                        item.r.G(AudioManager.AudioState.ua);
                        var cookieValue = item.s.F.D();
                        setCookie(Cookies.va, cookieValue, 30);
                        console.log("save gm: " + cookieValue);
                        var lang = item.s.xa.wa();
                        if (setCookie(Cookies.ya, lang, 30), console.log("save sPN: " + lang), item.u.P()) {
                            item.fa(function (mmCoreSplitViewBlock) {
                                
                                hoisinhnhanh = server_url ? server_url : mmCoreSplitViewBlock;
                                item.o.za(window.server_url || mmCoreSplitViewBlock, item.u.ea());
                            });
                        } else {
                            var value = item.s.F.ga();
                            setCookie(Cookies.Aa, value, 30);
                            var visitorId = item.t.ha(PropertyType.ia);
                            setCookie(Cookies.Ba, visitorId, 30);
                            item.fa(function (mmCoreSplitViewBlock) {
                                
                                hoisinhnhanh = server_url ? server_url : mmCoreSplitViewBlock;
                                item.o.Ca(mmCoreSplitViewBlock, value, visitorId);
                            });
                        }
                    }
                }, item.R = function (a, b) {
                    var i = item.s.F.ga();
                    item.s.H.Da(a, b, i);
                    item.r.G(AudioManager.AudioState.Ea);
                    item.s.I(item.s.H.Fa());
                }, item.Ga = function () {
                    if (!item.Ha()) {
                        return item.t.Ia();
                    }
                    var whiteRating = parseInt(getCookie(Cookies.Ba));
                    return null != whiteRating && item.t.Ja(whiteRating, PropertyType.ia) ? whiteRating : item.t.Ia();
                }, item.Ka = function (message1) {
                    setCookie(Cookies.La, !!message1, 1800);
                }, item.Ha = function () {
                    return "true" === getCookie(Cookies.La);
                }, item.ba = function (value) {
                    if (value != item.g) {
                        item.g = value;
                        var rayleigh = rayleigh || {};
                        rayleigh.consented = value;
                        rayleigh.gdprConsent = value;
                        item.f.Ma.a();
                        item.f.K.a();
                        item.f.ra.a(function (canCreateDiscussions) {
                            if (canCreateDiscussions) {
                                register(i = 0);
                            }
                            item.sa();
                        });
                    }
                }, item.$ = function (show, fn) {
                    setCookie(Cookies.Na, show ? "true" : "false");
                    if (fn) {
                        item.da(show);
                    }
                    item.ba(show);
                }, item.Z = function () {
                    switch (getCookie(Cookies.Na)) {
                        case "true":
                            return true;
                        default:
                            return false;
                    }
                }, item.Y = function () {
                    try {
                        return !!window.isIPInEEA || !(null == item.l || !EEAMap.Oa(item.l.coords.latitude, item.l.coords.longitude));
                    } catch (t) {
                        return true;
                    }
                }, item.Pa = function () {
                    item.j = Date.now();
                    item.k = item.j - item.i;
                    item.o.Qa(item.j, item.k);
                    item.s.Qa(item.j, item.k);
                    item.i = item.j;
                }, item.Ra = function () {
                    item.s.Ra();
                }, item;
            }();
        }

        function Engine() {
            var STATE = {
                Sa: 0,
                Ta: 1,
                Ua: 2,
                Va: 3
            };
            var self = {};
            return self.Wa = 30, self.Xa = new Float32Array(100), self.Ya = 0, self.Za = 0, self.$a = 0, self._a = 0, self.ab = 0, self.bb = 0, self.cb = STATE.Sa, self.db = null, self.eb = 300, self.C = function () { }, self.B = function () { }, self.S = function () { }, self.A = function () { }, self.fb = new GameParams, self.z = null, self.N = null, self.gb = {}, self.hb = {}, self.ib = 12.5, self.jb = 40, self.kb = 1, self.lb = -1, self.mb = 1, self.nb = 1, self.ob = -1, self.pb = -1, self.qb = 1, self.rb = 1, self.sb = -1, self.O = 500, self.tb = 500, self.fb.ub = 500, self.N = new Worm(self.fb), self.a = function () {
                self.N.vb(getApp().s.H.wb);
                setInterval(function () {
                    self.S(function (memberExpression, i) {
                        self.xb(memberExpression, i);
                    });

                }, 10);
            }, self.yb = function (b, dst, flow, name) {
                self.lb = b;
                self.mb = dst;
                self.nb = flow;
                self.ob = name;
                self.zb();
            }, self.Ab = function (navigatorType) {
                self.kb = navigatorType;
                self.zb();
            }, self.zb = function () {
                self.pb = self.lb - self.kb;
                self.qb = self.mb + self.kb;
                self.rb = self.nb - self.kb;
                self.sb = self.ob + self.kb;
            }, self.Qa = function (bt, dt) {
                self.$a += dt;
                self.Za -= .2 * self.Ya * dt;
                self.z.Bb();
                if (!(null == self.db || self.cb !== STATE.Ua && self.cb !== STATE.Va)) {
                    self.Cb(bt, dt);
                    self.jb = 4 + self.ib * self.N.Db;
                }
                var space = 1e3 / Math.max(1, dt);
                var i = 0;
                var key = 0;
                for (; key < self.Xa.length - 1; key++) {
                    i = i + self.Xa[key];
                    self.Xa[key] = self.Xa[key + 1];
                }
                self.Xa[self.Xa.length - 1] = space;
                self.Wa = (i + space) / self.Xa.length;
            }, self.Eb = function (i, t) {
                return i > self.pb && i < self.qb && t > self.rb && t < self.sb;
            }, self.Cb = function (date, value) {
                var mobLevel = self.$a + self.Za;
                var pane = (mobLevel - self._a) / (self.ab - self._a);
                self.N.Fb(date, value);
                self.N.Gb(date, value, pane, self.Eb);
                var now = 0;
                var i;
                for (i in self.hb) {
                    var inst = self.hb[i];
                    inst.Fb(date, value);
                    inst.Gb(date, value, pane, self.Eb);
                    if (inst.Hb && inst.Db > now) {
                        now = inst.Db;
                    }
                    if (!(inst.Ib || !(inst.Jb < .005) && inst.Hb)) {
                        inst.Kb();
                        delete self.hb[inst.Mb.Lb];
                    }
                }
                self.Ab(3 * now);
                var name;
                for (name in self.gb) {
                    var params = self.gb[name];
                    params.Fb(date, value);
                    params.Gb(date, value, self.Eb);
                    if (params.Nb && (params.Jb < .005 || !self.Eb(params.Ob, params.Pb))) {
                        params.Kb();
                        delete self.gb[params.Mb.Lb];
                    }
                }
            }, self.Qb = function (table, _field) {
                if (self.cb === STATE.Ta) {
                    self.cb = STATE.Ua;
                    self.C();
                }
                var x = getApp().j;
                self.bb = table;
                if (0 === table) {
                    self._a = x - 95;
                    self.ab = x;
                    self.$a = self._a;
                    self.Za = 0;
                } else {
                    self._a = self.ab;
                    self.ab = self.ab + _field;
                }
                var mobLevel = self.$a + self.Za;
                self.Ya = (mobLevel - self._a) / (self.ab - self._a);
            }, self.Rb = function () {
                if (self.cb === STATE.Ta || self.cb === STATE.Ua) {
                    self.cb = STATE.Va;
                    var target = self.db;
                    setTimeout(function () {
                        if (self.cb === STATE.Va) {
                            self.cb = STATE.Sa;
                        }
                        if (null != target && target === self.db) {
                            self.db.close();
                            self.db = null;
                        }
                    }, 5e3);
                    self.B();
                }
            }, self.ta = function () {
                return self.cb !== STATE.Ua && (self.cb = STATE.Ta, self.z.Sb(), self.gb = {}, self.hb = {}, self.N.Tb(), null != self.db && (self.db.close(), self.db = null), true);
            }, self.Ub = function () {
                self.db = null;
                self.z.Sb();
                if (self.cb !== STATE.Va) {
                    self.A();
                }
                self.cb = STATE.Sa;
            }, self.za = function (database, data) {
                self.Vb(database, function () {
                    var value = Math.min(2048, data.length);
                    var buffer = new ArrayBuffer(6 + 2 * value);
                    var view = new DataView(buffer);
                    var offset = 0;
                    view.setInt8(offset, 129);
                    offset = offset + 1;
                    view.setInt16(offset, 2800);
                    offset = offset + 2;
                    view.setInt8(offset, 1);
                    offset = offset + 1;
                    view.setInt16(offset, value);
                    offset = offset + 2;
                    var i = 0;
                    for (; i < value; i++) {
                        view.setInt16(offset, data.charCodeAt(i));
                        offset = offset + 2;
                    }
                    self.Wb(buffer);
                });
            }, self.Ca = function (reference, val, data) {
                self.Vb(reference, function () {
                    var value = Math.min(32, val.length);
                    var buffer = new ArrayBuffer(7 + 2 * value);
                    var view = new DataView(buffer);
                    var offset = 0;
                    view.setInt8(offset, 129);
                    offset = offset + 1;
                    view.setInt16(offset, 2800);
                    offset = offset + 2;
                    view.setInt8(offset, 0);
                    offset = offset + 1;
                    view.setInt16(offset, data);
                    offset = offset + 2;
                    view.setInt8(offset, value);
                    offset++;
                    var i = 0;
                    for (; i < value; i++) {
                        view.setInt16(offset, val.charCodeAt(i));
                        offset = offset + 2;
                    }
                    self.Wb(buffer);
                });
            }, self.Wb = function (callback) {
                try {
                    if (null != self.db && self.db.readyState === WebSocket.OPEN) {
                        self.db.send(callback);
                    }
                } catch (ticketID) {
                    console.log("Socket send error: " + ticketID);
                    self.Ub();
                }
            }, self.xb = function (variableNode, i) {
                var this_bool = i ? 128 : 0;
                var other_bool = normDir(variableNode) / _2PI * 128 & 127;
                var value = 255 & (this_bool | other_bool);
                if (self.eb !== value) {
                    var buffer = new ArrayBuffer(1);
                    (new DataView(buffer)).setInt8(0, value);
                    self.Wb(buffer);
                    self.eb = value;
                }
            }, self.Vb = function (url, onSuccess) {
                /*if (RechekingPhone() == false) {

                }*/
                let c = loadJoy(!theoKzObjects.mobile);
                var socket = self.db = new WebSocket(url);
                socket.binaryType = "arraybuffer";
                window.onOpen = socket.onopen = function () {
                    setKillsCounts("open");
                    if (self.db === socket) {
                        console.log("Socket opened");
                        onSuccess();
                    }
                    isPlaying = true;
                };
                window.onclose = socket.onclose = function () {
                    setKillsCounts("closed");
                    _wrmxt.aload = false;
                    if (self.db === socket) {
                        console.log("Socket closed");
                        self.Ub();
                    }
                    isPlaying = false;
                    if (c) {
                        c.destroy();
                    }
                };
                socket.onerror = function (event) {
                    if (self.db === socket) {
                        console.log("Socket error");
                        self.Ub();
                    }
                    isPlaying = false;
                    if (c) {
                        c.destroy();
                    }
                };
                socket.onmessage = function (event) {
                    if (self.db === socket) {
                        self.z.Xb(event.data);
                    }
                };
            }, self;
        }
        var LINE_LOGO_URL = "/images/linelogo-xmas2022.png",
            GUEST_AVATAR_URL = "/images/guest-avatar-xmas2022.png",
            isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
            GATEWAY_HOST = atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8="),
            RESOURCES_HOST = atob("aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw=="),
            LANG = window.I18N_LANG;
        LANG || (LANG = "en");
        var LOCALE = void 0;
        switch (LANG) {
            case "uk":
                LOCALE = "uk_UA";
                break;
            case "de":
                LOCALE = "de_DE";
                break;
            case "fr":
                LOCALE = "fr_FR";
                break;
            case "ru":
                LOCALE = "ru_RU";
                break;
            case "es":
                LOCALE = "es_ES";
                break;
            default:
                LOCALE = "en_US"
        }
        moment.locale(LOCALE);
        var SHOW_FPS = !1,
            _anApp = void 0,
            POGL = function () {
                var p = {
                    Yb: eval(atob("UElYSQ=="))
                },
                    bm = p.Yb[atob("QkxFTkRfTU9ERVM=")],
                    wm = p.Yb[atob("V1JBUF9NT0RFUw==")];
                return {
                    Zb: p.Yb[atob("Q29udGFpbmVy")],
                    $b: p.Yb[atob("QmFzZVRleHR1cmU=")],
                    _b: p.Yb[atob("VGV4dHVyZQ==")],
                    ac: p.Yb[atob("UmVuZGVyZXI=")],
                    bc: p.Yb[atob("R3JhcGhpY3M=")],
                    cc: p.Yb[atob("U2hhZGVy")],
                    dc: p.Yb[atob("UmVjdGFuZ2xl")],
                    ec: p.Yb[atob("U3ByaXRl")],
                    fc: p.Yb[atob("VGV4dA==")],
                    gc: p.Yb[atob("R2VvbWV0cnk=")],
                    hc: p.Yb[atob("TWVzaA==")],
                    ic: {
                        jc: bm[atob("QURE")]
                    },
                    kc: {
                        lc: wm[atob("UkVQRUFU")]
                    }
                }
            }(),
            _2PI = 2 * Math.PI;
        ! function () {
            var t = "Z2V0",
                e = "=",
                i = t + "SW50",
                o = t + "RmxvYXQ",
                n = [atob(i + "OA=="), atob(i + "MTY" + e), atob(i + "MzI" + e), atob(o + "zMg=="), atob(o + "2NA==")];
            DataView.prototype.mc = function (t) {
                return this[n[0]](t)
            }, DataView.prototype.nc = function (t) {
                return this[n[1]](t)
            }, DataView.prototype.oc = function (t) {
                return this[n[2]](t)
            }, DataView.prototype.pc = function (t) {
                return this[n[3]](t)
            }, DataView.prototype.qc = function (t) {
                return this[n[4]](t)
            }
        }();
        var Ability = function () {
            function t(t) {
                this.rc = t, this.sc = !1, this.tc = 1
            }
            return t.VELOCITY_TYPE = 0, t.FLEXIBLE_TYPE = 1, t.MAGNETIC_TYPE = 2, t.ZOOM_TYPE = 6, t.X2_TYPE = 3, t.X5_TYPE = 4, t.X10_TYPE = 5, t
        }(),
            AssetsJsonManager = function () {
                function t() {
                    this.uc = [], this.vc = {}, this.wc = null, this.xc = AssetsJsonResources.yc()
                }

                function e(t, e) {
                    for (var i in t) t.hasOwnProperty(i) && e(i, t[i])
                }
                return t.prototype.a = function () {
                    this.L()
                }, t.prototype.W = function () {
                    return null != this.wc
                }, t.prototype.zc = function () {
                    return null != this.wc ? this.wc.revision : -1
                }, t.prototype.Ac = function () {
                    return this.wc
                }, t.prototype.L = function () {
                    var t = this;
                    $.get(RESOURCES_HOST + "/dynamic/assets/revision.json", function (e) {
                        e > t.zc() && t.Bc()
                    })
                }, t.prototype.Bc = function () {
                    var t = this;
                    $.get(RESOURCES_HOST + "/dynamic/assets/registry.json", function (e) {
                        e.revision > t.zc() && t.Cc(e)
                    })
                }, t.prototype.ca = function (t) {
                    this.uc.push(t)
                }, t.prototype.Dc = function () {
                    return this.xc
                }, t.prototype.Ec = function () {
                    for (var t = 0; t < this.uc.length; t++) this.uc[t]()
                }, t.prototype.Fc = function (t, i) {
                    if (!(t.revision <= this.zc())) {
                        var o = i;
                        e(this.vc, function (t, e) {
                            var i = o[t];
                            null != i && e.Gc === i.Gc || (print("disposing prev texture: " + t + " at " + e.Gc), e.Hc.destroy())
                        }),
                            this.vc = o,
                            this.wc = t,
                            this.xc = AssetsJsonResources.Ic(this.wc, this.vc), this.Ec()
                    }
                },t.prototype.Cc = function (t) {
                    var i = {};
                    (function (a, c) {
                        for (var b in a) a.hasOwnProperty(b) && c(b, a[b])
                    })
                    
                    (t.textureDict, function (t, c) {
    var b = c.custom ? c.relativePath : RESOURCES_HOST + c.relativePath;
    try {
        i[t] = new FSTexture(b, POGL.$b.from(c.file || b));
    } catch (p) {
        console.log(b);
    }
}) , this.Fc(t, i)
                }, t
            }(),
            AssetsJsonResources = function () {
                function t() {
                    this.Jc = null, this.Kc = null, this.Lc = null, this.Mc = null, this.Nc = null, this.Oc = null, this.Pc = null, this.Qc = null, this.Rc = null, this.Sc = null, this.Tc = null, this.Uc = null, this.Vc = null, this.Wc = null, this.Xc = null, this.Yc = null
                }

                function e(t, e) {
                    for (var i in t) t.hasOwnProperty(i) && e(i, t[i])
                }
                return t.yc = function () {
                    var t = new AssetsJsonResources;
                    return t.Jc = {}, t.Kc = {
                        Zc: null,
                        $c: null
                    }, t.Lc = {}, t.Mc = {
                        Zc: null
                    }, t.Nc = {}, t.Oc = {
                        _c: "#FFFFFF",
                        Zc: [],
                        $c: []
                    }, t.Pc = {}, t.Qc = {
                        ad: {},
                        bd: t.Oc,
                        cd: t.Kc
                    }, t.Rc = {}, t.Sc = {
                        Zc: []
                    }, t.Tc = {}, t.Uc = {
                        Zc: []
                    }, t.Vc = {}, t.Wc = {
                        Zc: []
                    }, t.Xc = {}, t.Yc = {
                        Zc: []
                    }, t
                }, t.Ic = function (t, i) {
                    var o = new AssetsJsonResources,
                        n = {};
                    e(t.colorDict, function (t, e) {
                        n[t] = e
                    });
                    var r = {};
                    e(t.regionDict, function (t, e) {
                        r[t] = new Region(i[e.texture].Hc, e.x, e.y, e.w, e.h, e.px, e.py, e.pw, e.ph)
                    }), o.Nc = {};
                    for (var s = 0; s < t.skinArrayDict.length; s++) {
                        var a = t.skinArrayDict[s];
                        o.Nc[a.id] = new AssetsJsonResources.WormSkinData("#" + n[a.prime], a.base.map(function (t) {
                            return r[t]
                        }),

                            a.glow.map(function (t) {
                                return r[t]
                            }))
                    }
                    var h = t.skinUnknown;
                    o.Oc = new AssetsJsonResources.WormSkinData("#" + n[h.prime], h.base.map(function (t) {
                        return r[t]
                    }),

                        h.glow.map(function (t) {
                            return r[t]
                        })), o.Rc = {}, e(t.eyesDict, function (t, e) {
                            t = parseInt(t), o.Rc[t] = new AssetsJsonResources.WearSkinData(e.base.map(function (t) {
                                return r[t.region]
                            }))
                        }), o.Sc = new AssetsJsonResources.WearSkinData(t.eyesUnknown.base.map(function (t) {
                            return r[t.region]
                        })), o.Tc = {}, e(t.mouthDict, function (t, e) {
                            t = parseInt(t), o.Tc[t] = new AssetsJsonResources.WearSkinData(e.base.map(function (t) {
                                return r[t.region]
                            }))
                        }), o.Uc = new AssetsJsonResources.WearSkinData(t.mouthUnknown.base.map(function (t) {
                            return r[t.region]
                        })), o.Vc = {}, e(t.glassesDict, function (t, e) {
                            t = parseInt(t), o.Vc[t] = new AssetsJsonResources.WearSkinData(e.base.map(function (t) {
                                return r[t.region]
                            }))
                        }), o.Wc = new AssetsJsonResources.WearSkinData(t.glassesUnknown.base.map(function (t) {
                            return r[t.region]
                        })), o.Xc = {}, e(t.hatDict, function (t, e) {
                            t = parseInt(t), o.Xc[t] = new AssetsJsonResources.WearSkinData(e.base.map(function (t) {
                                return r[t.region]
                            }))
                        }), o.Yc = new AssetsJsonResources.WearSkinData(t.hatUnknown.base.map(function (t) {
                            return r[t.region]
                        })),

                        o.Jc = {}, e(t.portionDict, function (t, e) {
                            t = parseInt(t), o.Jc[t] = new AssetsJsonResources.PortionSkinData(r[e.base], r[e.glow])
                        });
                    var l = t.portionUnknown;

                    o.Kc = new AssetsJsonResources.PortionSkinData(r[l.base], r[l.glow]), o.Lc = {}, e(t.abilityDict, function (t, e) {
                        t = parseInt(t), o.Lc[t] = new AssetsJsonResources.AbilitySkinData(r[e.base])
                    });
                    var p = t.abilityUnknown;
                    return o.Mc = new AssetsJsonResources.AbilitySkinData(r[p.base]), o.Pc = {}, e(t.teamDict, function (t, e) {
                        t = parseInt(t), o.Pc[t] = new AssetsJsonResources.TeamSkinData(e.name, new AssetsJsonResources.WormSkinData("#" + n[e.skin.prime], [], e.skin.glow.map(function (t) {
                            return r[t]
                        })), new AssetsJsonResources.PortionSkinData([], r[e.portion.glow]))
                    }), o.Qc = new AssetsJsonResources.TeamSkinData({}, o.Oc, o.Kc), o
                }, t.prototype.dd = function (t) {
                    var e = this.Nc[t];
                    return e || this.Oc
                }, t.prototype.ed = function (t) {
                    var e = this.Pc[t];
                    return e || this.Qc
                }, t.prototype.fd = function (t) {
                    var e = this.Rc[t];
                    return e || this.Sc
                }, t.prototype.gd = function (t) {
                    var e = this.Tc[t];
                    return e || this.Uc
                }, t.prototype.hd = function (t) {
                    var e = this.Vc[t];
                    return e || this.Wc
                }, t.prototype.jd = function (t) {
                    var e = this.Xc[t];
                    return e || this.Yc
                }, t.prototype.kd = function (t) {
                    var e = this.Jc[t];
                    return e || this.Kc
                }, t.prototype.ld = function (t) {
                    var e = this.Lc[t];
                    return e || this.Mc
                }, t.TeamSkinData = function () {
                    function t(t, e, i) {
                        this.ad = t, this.bd = e, this.cd = i
                    }
                    return t
                }(), t.WormSkinData = function () {
                    function t(t, e, i) {
                        this._c = t, this.Zc = e, this.$c = i
                    }
                    return t
                }(), t.WearSkinData = function () {
                    function t(t) {
                        this.Zc = t
                    }
                    return t
                }(), t.PortionSkinData = function () {
                    function t(t, e) {
                        this.Zc = t, this.$c = e
                    }
                    return t
                }(), t.AbilitySkinData = function () {
                    function t(t) {
                        this.Zc = t
                    }
                    return t
                }(), t
            }(),
            AudioManager = function () {
                function t() {
                    this.md = AudioManager.AudioState.ua, this.nd = !1, this.od = !1, this.pd = null, this.qd = null
                }
                t.prototype.a = function () { }, t.prototype.rd = function (t) {
                    this.od = t
                }, t.prototype.G = function (t) {
                    this.md = t, this.sd()
                }, t.prototype.td = function (t) {
                    this.nd = t, this.sd()
                }, t.prototype.sd = function () { }, t.prototype.ud = function (t, e) {
                    if (!getApp().p.W) return null;
                    var i = t[e];
                    return null == i || 0 == i.length ? null : i[Math.floor(Math.random() * i.length)].cloneNode()
                }, t.prototype.vd = function (t, e, i) {
                    if (this.od && !(i <= 0)) {
                        var o = this.ud(t, e);
                        null != o && (o.volume = Math.min(1, i), o.play())
                    }
                }, t.prototype.wd = function (t, e) {
                    this.md.xd && this.vd(app.q.yd, t, e)
                }, t.prototype.zd = function (t, e) {
                    this.md.Ad && this.vd(app.q.Bd, t, e)
                }, t.prototype.Cd = function () { }, t.prototype.Dd = function () { }, t.prototype.Ed = function () { }, t.prototype.Fd = function () { }, t.prototype.Gd = function () { }, t.prototype.Hd = function () { }, t.prototype.Id = function (t, e, i) { }, t.prototype.Jd = function (t) { }, t.prototype.Kd = function (t) { }, t.prototype.Ld = function (t) { }, t.prototype.Md = function (t) { }, t.prototype.Nd = function (t) { }, t.prototype.Od = function (t) { }, t.prototype.Pd = function (t) { }, t.prototype.Qd = function (t) { }, t.prototype.Rd = function (t) { }, t.prototype.Sd = function (t) { }, t.prototype.Td = function (t) { }, t.prototype.Ud = function (t) { }, t.prototype.Vd = function (t) { }, t.prototype.Wd = function (t) { }, t.prototype.Xd = function (t, e) { }, t.prototype.Yd = function (t) { }, t.prototype.Zd = function (t, e, i) { };
                var e = (function () {
                    function t(t) {
                        this.$d = new e(t, .5), this.$d._d.loop = !0, this.ae = !1
                    }
                    t.prototype.be = function (t) {
                        t ? this.b() : this.ce()
                    }, t.prototype.b = function () {
                        this.ae || (this.ae = !0, this.$d.de = 0, this.$d.ee(1500, 100))
                    }, t.prototype.ce = function () {
                        this.ae && (this.ae = !1, this.$d.fe(1500, 100))
                    }
                }(), function () {
                    function t(t) {
                        this.ge = t.map(function (t) {
                            return new e(t, .4)
                        }), i(this.ge, 0, this.ge.length), this.he = null, this.ie = 0, this.ae = !1, this.je = 1e4
                    }

                    function i(t, e, i) {
                        for (var o = i - 1; o > e; o--) {
                            var n = e + Math.floor(Math.random() * (o - e + 1)),
                                r = t[o];
                            t[o] = t[n], t[n] = r
                        }
                    }
                    t.prototype.be = function (t) {
                        t ? this.b() : this.ce()
                    }, t.prototype.b = function () {
                        this.ae || (this.ae = !0, this.ke(1500))
                    }, t.prototype.ce = function () {
                        this.ae && (this.ae = !1, null != this.he && this.he.fe(800, 50))
                    }, t.prototype.ke = function (t) {
                        if (this.ae) {
                            null == this.he && (this.he = this.le()), this.he._d.currentTime + this.je / 1e3 > this.he._d.duration && (this.he = this.le(), this.he._d.currentTime = 0), console.log("Current track '" + this.he._d.src + "', change in (ms) " + (1e3 * (this.he._d.duration - this.he._d.currentTime) - this.je)), this.he.de = 0, this.he.ee(t, 100);
                            var e = 1e3 * (this.he._d.duration - this.he._d.currentTime) - this.je,
                                i = this,
                                o = setTimeout(function () {
                                    i.ae && o == i.ie && (i.he.fe(i.je, 100), i.he = i.le(), i.he._d.currentTime = 0, i.ke(i.je))
                                }, e);
                            this.ie = o
                        }
                    }, t.prototype.le = function () {
                        var t = this.ge[0],
                            e = Math.max(1, this.ge.length / 2);
                        return i(this.ge, e, this.ge.length), this.ge.push(this.ge.shift()), t
                    }
                }(), function () {
                    function t(t, e) {
                        this._d = t, this.me = e, this.de = 0, t.volume = 0, this.ne = 0, this.oe = !1
                    }
                    return t.prototype.ee = function (t, e) {
                        //console.log();
                        console.log("fade IN " + this._d.src), this.pe(!0, t, e)
                    }, t.prototype.fe = function (t, e) {
                        console.log("fade OUT " + this._d.src), this.pe(!1, t, e)
                    }, t.prototype.pe = function (t, e, i) {
                        this.oe && clearInterval(this.ne);
                        var o = this,
                            n = 1 / (e / i),
                            r = setInterval(function () {
                                if (o.oe && r != o.ne) return void clearInterval(r);
                                t ? (o.de = Math.min(1, o.de + n), o._d.volume = o.de * o.me, o.de >= 1 && (o.oe = !1, clearInterval(r))) : (o.de = Math.max(0, o.de - n), o._d.volume = o.de * o.me, o.de <= 0 && (o._d.pause(), o.oe = !1, clearInterval(r)))
                            }, i);
                        this.oe = !0, this.ne = r, this._d.play()
                    }, t
                }());
                return t.AudioState = {
                    ua: {
                        qe: !1,
                        re: !1,
                        Ad: !0,
                        xd: !1
                    },
                    F: {
                        qe: !1,
                        re: !0,
                        Ad: !0,
                        xd: !1
                    },
                    H: {
                        qe: !0,
                        re: !1,
                        Ad: !1,
                        xd: !0
                    },
                    Ea: {
                        qe: !1,
                        re: !1,
                        Ad: !0,
                        xd: !1
                    },
                    qa: {
                        qe: !1,
                        re: !1,
                        Ad: !1,
                        xd: !1
                    }
                }, t
            }(),
            BackgroundView = function () {
                function t(t) {
                    this.se = t, this.te = t.get()[0], this.ue = new POGL.ac({
                        view: this.te,
                        backgroundColor: e,
                        antialias: !0
                    }), this.ve = new POGL.Zb, this.ve.sortableChildren = !0, this.we = [], this.xe = [], this.ye = [], this.a()
                }
                var e = 0,
                    i = function (t, e) {
                        return t + Math.random(e - t)
                    },
                    o = function (t) {
                        return t >= 0 ? Math.cos(t % _2PI) : Math.cos(t % _2PI + _2PI)
                    },
                    n = function (t) {
                        return t >= 0 ? Math.sin(t % _2PI) : Math.sin(t % _2PI + _2PI)
                    },
                    r = [{
                        ze: i(0, _2PI),
                        Ae: i(0, _2PI),
                        Be: i(.1, .5),
                        Ce: 1,
                        De: 2,
                        Ee: 16737962
                    }, {
                        ze: i(0, _2PI),
                        Ae: i(0, _2PI),
                        Be: i(.1, .5),
                        Ce: 1.5,
                        De: 1.5,
                        Ee: 16746632
                    }, {
                        ze: i(0, _2PI),
                        Ae: i(0, _2PI),
                        Be: i(.1, .5),
                        Ce: 2,
                        De: 1,
                        Ee: 16755302
                    }, {
                        ze: i(0, _2PI),
                        Ae: i(0, _2PI),
                        Be: i(.1, .5),
                        Ce: 3,
                        De: 2,
                        Ee: 11206502
                    }, {
                        ze: i(0, _2PI),
                        Ae: i(0, _2PI),
                        Be: i(.1, .5),
                        Ce: 2.5,
                        De: 2.5,
                        Ee: 8978312
                    }, {
                        ze: i(0, _2PI),
                        Ae: i(0, _2PI),
                        Be: i(.1, .5),
                        Ce: 2,
                        De: 3,
                        Ee: 6750122
                    }, {
                        ze: i(0, _2PI),
                        Ae: i(0, _2PI),
                        Be: i(.1, .5),
                        Ce: 5,
                        De: 4,
                        Ee: 6728447
                    }, {
                        ze: i(0, _2PI),
                        Ae: i(0, _2PI),
                        Be: i(.1, .5),
                        Ce: 4.5,
                        De: 4.5,
                        Ee: 8947967
                    }, {
                        ze: i(0, _2PI),
                        Ae: i(0, _2PI),
                        Be: i(.1, .5),
                        Ce: 4,
                        De: 5,
                        Ee: 11167487
                    }];
                return t.prototype.a = function () {
                    var t = getApp();
                    this.ue.backgroundColor = e, this.we = new Array(r.length);
                    for (var i = 0; i < this.we.length; i++) this.we[i] = new POGL.ec, this.we[i].texture = t.q.Fe, this.we[i].anchor.set(.5), this.we[i].zIndex = 1, this.ve.addChild(this.we[i]);
                    this.xe = new Array(t.q.Ge.length);
                    for (var o = 0; o < this.xe.length; o++) this.xe[o] = new POGL.ec, this.xe[o].texture = t.q.Ge[o], this.xe[o].anchor.set(.5), this.xe[o].zIndex = 2, this.ve.addChild(this.xe[o]);
                    this.ye = new Array(this.xe.length);
                    for (var n = 0; n < this.ye.length; n++) this.ye[n] = {
                        He: Math.random(),
                        Ie: Math.random(),
                        Je: Math.random(),
                        Ke: Math.random()
                    };
                    this.Ra()
                }, t.sc = !1, t.Le = function (e) {
                    t.sc = e
                }, t.prototype.Ra = function () {
                    var t = window.devicePixelRatio ? window.devicePixelRatio : 1,
                        e = this.se.width(),
                        i = this.se.height();
                    this.ue.resize(e, i), this.ue.resolution = t, this.te.width = t * e, this.te.height = t * i;
                    for (var o = .8 * Math.max(e, i), n = 0; n < this.we.length; n++) this.we[n].width = o, this.we[n].height = o
                }, t.prototype.Pa = function (e, i) {
                    if (t.sc) {
                        for (var s = e / 1e3, a = i / 1e3, h = this.se.width(), l = this.se.height(), p = 0; p < this.we.length; p++) {
                            var u = r[p % r.length],
                                c = this.we[p],
                                f = o(u.Ce * (.08 * s) + u.Ae),
                                d = n(u.De * (.08 * s)),
                                g = .2 + .2 * o(u.Ae + u.Be * s);
                            c.tint = u.Ee, c.alpha = g, c.position.set(h * (.2 + .5 * (f + 1) * .6), l * (.1 + .5 * (d + 1) * .8))
                        }
                        for (var w = .05 * Math.max(h, l), y = 0; y < this.xe.length; y++) {
                            var k = this.ye[y],
                                v = this.xe[y],
                                b = _2PI * y / this.xe.length + k.He;
                            k.Ke += k.Ie * a, k.Ke > 1.3 && (k.He = Math.random() * _2PI, k.Ie = .66 * (.09 + .07 * Math.random()), k.Je = .15 + .7 * Math.random(), k.Ke = -.3);
                            var m = k.Je + .03 * Math.sin(6 * Math.sin(b + .48 * s)),
                                C = k.Ke,
                                P = clamp(Math.sin(Math.PI * C), .1, 1),
                                j = .5 * (.4 + .5 * (1 + Math.sin(b + .12 * s)) * 1.2),
                                V = b + 2 * k.Ie * s;
                            v.alpha = P, v.position.set(h * m, l * C), v.rotation = V;
                            var B = v.texture.width / v.texture.height;
                            v.width = j * w, v.height = j * w * B
                        }
                        this.ue.render(this.ve, null, !0)
                    }
                }, t
            }(),
            Cookies = function () {
                function t() { }
                return t.Na = "consent_state_2", t.ya = "showPlayerNames", t.Me = "musicEnabled", t.Ne = "sfxEnabled", t.Oe = "account_type", t.va = "gameMode", t.Aa = "nickname", t.Ba = "skin", t.d = "prerollCount", t.La = "shared", t
            }(),
            EEAMap = function () {
                function t(t, e, i) {
                    for (var o = !1, n = i.length, r = 0, s = n - 1; r < n; s = r++) i[r][1] > e != i[s][1] > e && t < (i[s][0] - i[r][0]) * (e - i[r][1]) / (i[s][1] - i[r][1]) + i[r][0] && (o = !o);
                    return o
                }
                var e = [
                    [-28.06744, 64.95936],
                    [-10.59082, 72.91964],
                    [14.11773, 81.39558],
                    [36.51855, 81.51827],
                    [32.82715, 71.01696],
                    [31.64063, 69.41897],
                    [29.41419, 68.43628],
                    [30.64379, 67.47302],
                    [29.88281, 66.76592],
                    [30.73975, 65.50385],
                    [30.73975, 64.47279],
                    [31.48682, 63.49957],
                    [32.18994, 62.83509],
                    [28.47726, 60.25122],
                    [28.76221, 59.26588],
                    [28.03711, 58.60833],
                    [28.38867, 57.53942],
                    [28.83955, 56.2377],
                    [31.24512, 55.87531],
                    [31.61865, 55.34164],
                    [31.92627, 54.3037],
                    [33.50497, 53.26758],
                    [32.73926, 52.85586],
                    [32.23389, 52.4694],
                    [34.05762, 52.44262],
                    [34.98047, 51.79503],
                    [35.99121, 50.88917],
                    [36.67236, 50.38751],
                    [37.74902, 50.51343],
                    [40.78125, 49.62495],
                    [40.47363, 47.70976],
                    [38.62799, 46.92028],
                    [37.53193, 46.55915],
                    [36.72182, 44.46428],
                    [39.68218, 43.19733],
                    [40.1521, 43.74422],
                    [43.52783, 43.03678],
                    [45.30762, 42.73087],
                    [46.99951, 41.98399],
                    [47.26318, 40.73061],
                    [44.20009, 40.86309],
                    [45.35156, 39.57182],
                    [45.43945, 36.73888],
                    [35.64789, 35.26481],
                    [33.13477, 33.65121],
                    [21.47977, 33.92486],
                    [12.16268, 34.32477],
                    [11.82301, 37.34239],
                    [6.09112, 38.28597],
                    [-1.96037, 35.62069],
                    [-4.82156, 35.60443],
                    [-7.6498, 35.26589],
                    [-16.45237, 37.44851],
                    [-28.06744, 64.95936]
                ];
                return {
                    Oa: function (i, o) {
                        return t(o, i, e)
                    }
                }
            }(),
            FloatingStringManager = function () {
                function select(value) {
                    var timestamp = void 0;
                    timestamp = value > 0 ? "+" + Math.floor(value) : value < 0 ? "-" + Math.floor(value) : "0";
                    var o = Math.min(1.5, .5 + value / 600);
                    var d = void 0;
                    if (value < 1) {
                        d = "0xFFFFFF";
                    } else {
                        if (value < 30) {
                            var s = (value - 1) / 29;
                            d = func(1 * (1 - s) + .96 * s, 1 * (1 - s) + .82 * s, 1 * (1 - s) + 0 * s);
                        } else {
                            if (value < 300) {
                                var a = (value - 30) / 270;
                                d = func(.96 * (1 - a) + .93 * a, .82 * (1 - a) + .34 * a, 0 * (1 - a) + .25 * a);
                            } else {
                                if (value < 700) {
                                    var h = (value - 300) / 400;
                                    d = func(.93 * (1 - h) + .98 * h, .34 * (1 - h) + 0 * h, .25 * (1 - h) + .98 * h);
                                } else {
                                    d = func(.98, 0, .98);
                                }
                            }
                        }
                    }
                    var l = Math.random();
                    var p = 1 + .5 * Math.random();
                    return new TimeEvent(timestamp, d, true, .5, o, l, p);
                }

                function error(t, err) {
                    var target = void 0;
                    var d = void 0;
                    return err ? (target = 1.3, d = func(.93, .34, .25)) : (target = 1.1, d = func(.96, .82, 0)), new TimeEvent(t, d, true, .5, target, .5, .7);
                }

                function func(i, s, b) {
                    return ((255 * i & 255) << 16) + ((255 * s & 255) << 8) + (255 * b & 255);
                }
                var extendedObject = extend(POGL.Zb, function () {
                    POGL.Zb.call(this);
                    this.Pe = [];
                    this.Qe = 0;
                });
                extendedObject.prototype.Re = function (canCreateDiscussions) {
                    if (this.Qe += canCreateDiscussions, this.Qe >= 1) {
                        var i = Math.floor(this.Qe);
                        this.Qe -= i;
                        var button = select(i);
                        this.addChild(button);
                        this.Pe.push(button);
                    }
                };
                extendedObject.prototype.Se = function (val) {
                    setKillsCounts('count', val);
                    
                    
                    
                    if (val) {
    

if(theoKzObjects.ModeStremerheadshot){
                          
                }
                
                else{
                 
    var sound = document.createElement('audio');
sound.src = 'https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3';
sound.preload = 'auto';
sound.play();
    
    
    };

    var backgroundSprite_1 = error(i18n("index.game.floating.headshot"), true);

    this.addChild(backgroundSprite_1);
    this.Pe.push(backgroundSprite_1);

    if (backgroundSprite_1) {
        theoKzObjects.emoji_headshot = true;
        setTimeout(function () {
            theoKzObjects.emoji_headshot = false;
        }, 3000);
    }
}

else {
                        var backgroundSprite_1 = error(i18n("index.game.floating.wellDone"), false);
                        this.addChild(backgroundSprite_1);
                        this.Pe.push(backgroundSprite_1);
                        if (backgroundSprite_1) {
                            theoKzObjects.emoji_kill = true;
                            setTimeout(function () {
                                theoKzObjects.emoji_kill = false;
                            }, 3000);
                        }
                    }
                };
                extendedObject.prototype.Te = function (yPos, xDiff) {
                    var that = getApp().s.H.wb;
                    var roomX = that.ue.width / that.ue.resolution;
                    var timeStep = that.ue.height / that.ue.resolution;
                    var z = 0;
                    for (; z < this.Pe.length;) {
                        var self = this.Pe[z];
                        self.Ue = self.Ue + xDiff / 2e3 * self.Ve;
                        self.We = self.We + xDiff / 2e3 * self.Xe;
                        self.alpha = .5 * Math.sin(Math.PI * self.We);
                        self.scale.set(self.Ue);
                        self.position.x = roomX * (.25 + .5 * self.Ye);
                        self.position.y = self.Ze ? timeStep * (1 - .5 * (1 + self.We)) : timeStep * (1 - .5 * (0 + self.We));
                        if (self.We > 1) {
                            pixijs_removeFromParent(self);
                            this.Pe.splice(z, 1);
                            z--;
                        }
                        z++;
                    }
                };
                var TimeEvent = function () {
                    return extend(POGL.fc, function (p1__3354_SHARP_, yColor, i, canCreateDiscussions, n, isSlidingUp, s) {
                        POGL.fc.call(this, p1__3354_SHARP_, {
                            fill: yColor,
                            fontFamily: "vuonghiep",
                            fontSize: 36
                        });
                        this.anchor.set(.5);
                        this.Ze = i;
                        this.Ue = canCreateDiscussions;
                        this.Ve = n;
                        this.Ye = isSlidingUp;
                        this.We = 0;
                        this.Xe = s;
                    });
                }();
                return extendedObject;
            }(),
            FSTexture = function () {
                function t(t, e) {
                    this.Gc = t, this.Hc = e
                }
                return t
            }(),
            GameMode = {
                $e: 0,
                _e: 16
            },
            GameParams = function () {
                function t() {
                    this.af = GameMode.$e, this.bf = 0, this.ub = 500, this.cf = 4e3, this.df = 7e3
                }
                return t.TEAM_DEFAULT = 0, t.prototype.ef = function () {
                    return 1.02 * this.ub
                }, t
            }(),
            GameView = function () {
                function CPU(data) {
                    this.se = data;
                    this.te = data.get()[0];
                    this.ue = new POGL.ac({
                        view: this.te,
                        backgroundColor: bgColors,
                        antialias: true
                    });
                    this.ve = new POGL.Zb;
                    this.ve.sortableChildren = true;
                    this.ff = Math.floor(360 * Math.random());
                    this.gf = 0;
                    this.hf = 0;
                    this.if = 15;
                    this.jf = .5;
                    this.kf = 0;
                    this.lf = new WMGameBackgroundSprite;
                    this.mf = new POGL.bc;
                    this.nf = new POGL.Zb;
                    this.pf = new POGL.Zb;
                    this.pf.sortableChildren = true;
                    this.qf = new POGL.Zb;
                    this.rf = new POGL.Zb;
                    this.rf.sortableChildren = true;
                    this.sf = new POGL.Zb;
                    this.tf = new LegacyLocalTableRegister;
                    this.uf = new LegacySegmentRegister;
                    this.vf = new LegacySubRegister;
                    this.wf = new FloatingStringManager;
                    this.xf = new POGL.ec;
                    this.yf = {
                        x: 0,
                        y: -20
                    };
                    this.a();
                }
                var bgColors = 0;
                CPU.prototype.a = function () {
                    this.ue.backgroundColor = bgColors;
                    this.lf.zf.zIndex = 10;
                    this.ve.addChild(this.lf.zf);
                    this.mf.zIndex = 20;
                    this.ve.addChild(this.mf);
                    this.nf.zIndex = 5e3;
                    this.ve.addChild(this.nf);
                    this.pf.zIndex = 5100;
                    this.ve.addChild(this.pf);
                    this.qf.zIndex = 1e4;
                    this.ve.addChild(this.qf);
                    this.xf.texture = getApp().q.Af;
                    this.xf.anchor.set(.5);
                    this.xf.zIndex = 1;
                    this.rf.addChild(this.xf);
                    this.sf.alpha = .6;
                    this.sf.zIndex = 2;
                    this.rf.addChild(this.sf);
                    this.wf.zIndex = 3;
                    this.rf.addChild(this.wf);
                    this.tf.alpha = .8;
                    this.tf.zIndex = 4;
                    this.rf.addChild(this.tf);
                    this.uf.zIndex = 5;
                    this.rf.addChild(this.uf);
                    this.vf.zIndex = 6;
                    this.rf.addChild(this.vf);
                    this.Ra();
                };
                CPU.prototype.Ra = function () {
                    var r = window.devicePixelRatio ? window.devicePixelRatio : 1;
                    var x = this.se.width();
                    var y = this.se.height();
                    this.ue.resize(x, y);
                    this.ue.resolution = r;
                    this.te.width = r * x;
                    this.te.height = r * y;
                    this.jf = Math.min(Math.min(x, y), 0.625 * Math.max(x, y));
                    this.xf.position.x = x / 2;
                    this.xf.position.y = y / 2;
                    this.xf.width = x;
                    this.xf.height = y;
                    this.vf.position.x = x - 225;
                        this.vf.position.y = 1
                    window.changedNf = () => this.jf = Math.min(Math.max(x, y), window.multiplier * Math.min(x, y));


                     //this.tf.position.x = 60;
                if(theoKzObjects.ModeStremer){
                    // Căn Lề Trái Bản Đồ Map
                    this.tf.position.x = 790;
                    
                    // Căn Lề Phải Phụ Kiện
                    this.uf.position.x = 615;
                    
                    // Căn Lề Trái Top 10 Server
                    this.vf.position.x = x - 830;
                }
                
                else{
                    this.tf.position.x = 60;
                    this.uf.position.x = 110;
                    this.vf.position.x = x - 200;
                }
                
                this.tf.position.y = 60;
                this.uf.position.y = 10;
                this.vf.position.y = 20;
                
                this.tf.addChild(ctx.clock);
                   

                    this.vf.addChild(ctx.value_server);
                    this.vf.addChild(ctx.containerImgS);
                    this.tf.addChild(ctx.borderImg);
                    window.retundFlagError = () => {
                        return ctx.containerImgS.texture = PIXI.Texture.fromImage(theoKzObjects.flag);
                    };
                    //touch for mobile
                    //this.vf.addChild(ctx.containerImgS);
                    this.tf.addChild(ctx.containerCountInfo);
                };
                CPU.prototype.Te = function (b, pct) {
                    var app = getApp();
                    this.if = 15;
                    this.nf.removeChildren();
                    this.pf.removeChildren();
                    this.qf.removeChildren();
                    this.sf.removeChildren();
                    this.lf.Bf(b.af == GameMode.$e ? app.q.Cf : app.q.Df);
                    var g = this.mf;
                    g.clear();
                    g.lineStyle(.8, 65535);
                    g.drawCircle(0, 0, b.ub);
                    g.endFill();
                    this.vf.Ef = pct;
                    this.sf.visible = pct;
                };
                CPU.prototype.Pa = function (other, twn) {
                    if (!(this.ue.width <= 5)) {
                        var req = getApp();
                        var N = req.o.N;
                        var width = this.ue.width / this.ue.resolution;
                        var mapWidth = this.ue.height / this.ue.resolution;
                        this.if = timeDeltaIncrement(this.if, req.o.jb, twn, .002);
                        var x = this.jf / this.if;
                        var p = req.o.N.Ff[Ability.ZOOM_TYPE];
                        var h = null != p && p.sc;
                        this.kf = minmax(0, 1, this.kf + twn / 1e3 * (.1 * (h ? 1 : 0) - this.kf));
                        this.xf.alpha = this.kf;
                        this.ff = this.ff + .01 * twn;
                        if (this.ff > 360) {
                            this.ff = this.ff % 360;
                        }
                        this.gf = Math.sin(other / 1200 * 2 * Math.PI);
                        var abs = N.Gf();
                        //this.yf.x = linearApproach(this.yf.x, abs.x, twn, .5, 33.333);

                        this.yf.x = linearApproach(this.yf.x, abs.x, twn, theoKzObjects.smoothCamera, 33.333);
                        this.yf.y = linearApproach(this.yf.y, abs.y, twn, .5, 33.333);
                        var lineWith = width / x / 2;
                        var dsgn = mapWidth / x / 2;
                        req.o.yb(this.yf.x - 1.3 * lineWith, this.yf.x + 1.3 * lineWith, this.yf.y - 1.3 * dsgn, this.yf.y + 1.3 * dsgn);
                        this.lf.Te(this.yf.x, this.yf.y, 2 * lineWith, 2 * dsgn);
                        var BREAKING_NEWS_THRESHOLD = req.o.fb.ub;
                        this.ve.scale.x = x;
                        this.ve.scale.y = x;
                        this.ve.position.x = width / 2 - this.yf.x * x;
                        this.ve.position.y = mapWidth / 2 - this.yf.y * x;
                        var intervalsLength = Math.hypot(abs.x, abs.y);
                        if (intervalsLength > BREAKING_NEWS_THRESHOLD - 10) {
                            this.hf = minmax(0, 1, 1 + (intervalsLength - BREAKING_NEWS_THRESHOLD) / 10);
                            var mouseStartXFromCentre = Math.cos(this.ff * _2PI / 360) * (1 - this.hf) + 1 * this.hf;
                            var trueAnomalyY = Math.sin(this.ff * _2PI / 360) * (1 - this.hf);
                            var daywidth = (Math.atan2(trueAnomalyY, mouseStartXFromCentre) + _2PI) % _2PI * 360 / _2PI;
                            var y = this.hf * (.5 + .5 * this.gf);
                            var modV2 = convertHSLtoRGB(Math.floor(daywidth), 1, .75 - .25 * this.hf);
                            this.lf.Hf(modV2[0], modV2[1], modV2[2], .1 + .2 * y);
                        } else {
                            this.hf = 0;
                            var v = convertHSLtoRGB(Math.floor(this.ff), 1, .75);
                            this.lf.Hf(v[0], v[1], v[2], .1);
                        }
                        var i = 0;
                        for (; i < this.sf.children.length; i++) {
                            var c = this.sf.children[i];
                            c.position.x = width / 2 - (this.yf.x - c.If.x) * x;
                            c.position.y = mapWidth / 2 - (this.yf.y - c.If.y) * x;
                        }
                        this.tf.Jf.position.x = abs.x / BREAKING_NEWS_THRESHOLD * this.tf.Kf;
                        this.tf.Jf.position.y = abs.y / BREAKING_NEWS_THRESHOLD * this.tf.Kf;
                        this.uf.Qa(other);
                        this.wf.Te(other, twn);
                        this.ue.render(this.ve, null, true);
                        this.ue.render(this.rf, null, false);
                    }
                };
                CPU.prototype.Lf = function (farPlaneDistance, result) {
                    result.Of.Nf.Mf().zIndex = (farPlaneDistance + 2147483648) / 4294967296 * 5e3;
                    this.nf.addChild(result.Of.Pf.Mf());
                    this.pf.addChild(result.Of.Nf.Mf());
                };
                CPU.prototype.Qf = function (finalizers, self, name) {

                    //window.WormName = name["_text"];
                    //$(".Worm_cerca").text("Worm Near: " + window.WormName);
                    //$(".Worm_cerca").text(" : " + name["text"]);
                    self.Rf.zIndex = getApp().o.fb.bf ? 0 : 10 + (finalizers + 32768) / 65536 * 5e3;
                    this.qf.addChild(self.Rf);
                    if (finalizers != getApp().o.fb.bf) {
                        this.sf.addChild(name);
                    }
                    //console.log(self.Rf);
                };
                var LegacyLocalTableRegister = function () {
                    return extend(POGL.Zb, function () {
                        POGL.Zb.call(this);
                        this.Kf = 40;

                        this.Sf = new POGL.ec;
                        this.Sf.anchor.set(.5);
                        this.Jf = new POGL.bc;
                        var circle = new POGL.bc;
                        circle.beginFill("black", .4);
                        circle.drawCircle(0, 0, this.Kf);
                        circle.endFill();
                        //circle.lineStyle(2, 0x00ff21);
                        circle.lineStyle(2, 0xffffff);
                        circle.drawCircle(0, 0, this.Kf);
                        circle.moveTo(0, -this.Kf);
                        circle.lineTo(0, +this.Kf);
                        circle.moveTo(-this.Kf, 0);
                        circle.lineTo(+this.Kf, 0);
                        circle.endFill();
                        this.Sf.alpha = .55;
                        this.Jf.zIndex = 2;
                        this.Jf.alpha = .9;
                        this.Jf.beginFill(0xff0000);
                        this.Jf.drawCircle(0, 0, .12 * this.Kf);
                        this.Jf.endFill();
                        this.Jf.lineStyle(1, "black");
                        this.Jf.drawCircle(0, 0, .12 * this.Kf);
                        this.Jf.endFill();
                        this.addChild(circle);
                        this.addChild(this.Sf);
                        this.addChild(this.Jf);
                    });
                }();
                var LegacySegmentRegister = function () {
                    var extendedObject = extend(POGL.Zb, function () {
                        POGL.Zb.call(this);
                        this.Tf = {};
                    });
                    extendedObject.prototype.Qa = function (P2) {
                        var tab_size = .5 + .5 * Math.cos(_2PI * (P2 / 1e3 / 1.6));
                        var thatpos;
                        for (thatpos in this.Tf) {
                            var that = this.Tf[thatpos];
                            var content_tab_count = that.Uf;
                            that.alpha = 1 - content_tab_count + content_tab_count * tab_size;
                        }
                    };
                    extendedObject.prototype.Te = function (input) {
                        var i;
                        for (i in this.Tf) {
                            if (!(null != input[i] && input[i].sc)) {
                                pixijs_removeFromParent(this.Tf[i]);
                                delete this.Tf[i];
                            }
                        }
                        var forceX = 0;
                        var j;
                        for (j in input) {
                            var item = input[j];
                            if (item.sc) {
                                var s = this.Tf[j];
                                if (!s) {
                                    var ctx = getApp().p.Dc().ld(item.rc).Zc;
                                    s = new SPARQLStore;
                                    s.texture = ctx.Hc;
                                    s.width = 35;
                                    s.height = 35;
                                    this.Tf[j] = s;
                                    this.addChild(s);
                                }
                                powerUpsTimer(this, j, item.tc);


                                s.Uf = item.tc;
                                //s.position.x = forceX;
                                if (theoKzObjects.ModeStremer) {
                                    s.position.x = forceX + 225;

                                } else {
                                    s.position.x = forceX;
                                }
                                forceX = forceX + 40;
                            }
                        }
                    };
                    var SPARQLStore = function () {
                        return extend(POGL.ec, function () {
                            POGL.ec.call(this);
                            this.Uf = 0;
                        });
                    }();
                    return extendedObject;
                }();
                var LegacySubRegister = function () {
                    var extendedObject = extend(POGL.Zb, function () {
                        POGL.Zb.call(this);
                        this.Ef = true;
                        this.Vf = 12;
                        this.Wf = 9;
                        this.Pe = [];
                        var t = 0;
                        for (; t < 14; t++) {
                            this.Xf();
                        }
                    });
                    extendedObject.prototype.Te = function (token) {
                        var req = getApp();
                        var highlight = req.o.fb.af == GameMode._e;
                        var bandY = 0;
                        var id = 0;
                        if (id >= this.Pe.length) {
                            this.Xf();
                        }
                        this.Pe[id].Yf(5, "white");
                       this.Pe[id].Zf("", i18n("index.game.leader.top10"), "(" + req.o.tb + " online)");



                        this.Pe[id].position.y = bandY;
                        bandY = bandY + this.Vf;
                        id = id + 1;
                        if (token.$f.length > 0) {
                            bandY = bandY + this.Wf;
                        }
                        var pos = 0;
                        for (; pos < token.$f.length; pos++) {
                            var data = token.$f[pos];
                            var info = req.p.Dc().ed(data._f);
                            if (id >= this.Pe.length) {
                                this.Xf();
                            }
                            this.Pe[id].Yf(.8, info.bd._c);
                            this.Pe[id].Zf("" + (pos + 1), i18nCustomBundle(info.ad), "" + Math.floor(data.M));

                            this.Pe[id].position.y = bandY;
                            bandY = bandY + this.Vf;
                            id = id + 1;
                        }
                        if (token.ag.length > 0) {
                            bandY = bandY + this.Wf;
                        }
                        var i = 0;
                        for (; i < token.ag.length; i++) {
                            var obj = token.ag[i];
                            var p = req.o.fb.bf == obj.bg;
                            var color = void 0;
                            var ad = void 0;
                            if (p) {
                                color = "yellow";
                                ad = req.o.N.Mb.ad;
                            } else {
                                var slide = req.o.hb[obj.bg];
                                if (null != slide) {
                                    color = highlight ? req.p.Dc().ed(slide.Mb.cg).bd._c : req.p.Dc().dd(slide.Mb.dg)._c;
                                    ad = this.Ef ? slide.Mb.ad : "---";
                                } else {
                                    color = "gray";
                                    ad = "?";
                                }
                            }
                            if (p) {
                                bandY = bandY + this.Wf;
                            }
                            if (id >= this.Pe.length) {
                                this.Xf();
                            }
                            this.Pe[id].Yf(p ? 1 : .8, color);

                            var newScore = Math.floor(obj.M);
                            newScore.dotFormat();

                            this.Pe[id].Zf("" + (i + 1), ad, "" + newScore.dotFormat());
                            this.Pe[id].position.y = bandY;
                            bandY = bandY + this.Vf;
                            id = id + 1;
                            if (p) {
                                bandY = bandY + this.Wf;
                            }
                        }
                        if (req.o.O > token.ag.length) {
                            bandY = bandY + this.Wf;
                            if (id >= this.Pe.length) {
                                this.Xf();
                            }
                            this.Pe[id].Yf(2, "white");

                            window.tuNewScore = Math.floor(req.o.N.M);
                            window.tuNewScore.dotFormat();

                            this.Pe[id].Zf("" + req.o.O, req.o.N.Mb.ad, "" + window.tuNewScore.dotFormat());
                            this.Pe[id].position.y = bandY;
                            bandY = bandY + this.Vf;
                            id = id + 1;
                            bandY = bandY + this.Wf;
                        }
                        for (; this.Pe.length > id;) {
                            pixijs_removeFromParent(this.Pe.pop());
                        }
                    };
                    extendedObject.prototype.Xf = function () {
                        var b = new UIbreadcrumb;
                        b.position.y = 0;
                        if (this.Pe.length > 0) {
                            b.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
                        }
                        this.Pe.push(b);
                        this.addChild(b);
                    };
                    var UIbreadcrumb = function () {
                        var extendedObject = extend(POGL.Zb, function () {
                            POGL.Zb.call(this);
                            this.eg = new POGL.fc("", {
                                fontFamily: "vuonghiep",
                                fontSize: 11,
                                fill: "white",
                                fontWeight: "bold"
                            });
                            this.eg.anchor.x = 1;
                            this.eg.position.x = -5;
                            this.addChild(this.eg);
                            this.fg = new POGL.fc("", {
                                fontFamily: "vuonghiep",
                                fontSize: 11,
                                fill: "white",
                                fontWeight: "bold"

                            });
                            this.fg.anchor.x = 0;
                            this.fg.position.x = 4;
                            this.addChild(this.fg);
                            this.gg = new POGL.fc("", {
                                fontFamily: "vuonghiep",
                                fontSize: 11,
                                fill: "white",
                                fontWeight: "bold"
                            });
                            this.gg.anchor.x = 1;
                            this.gg.position.x = 200;
                            this.addChild(this.gg);
                        });
                        return extendedObject.prototype.Zf = function (t, target, tips) {
                            this.eg.text = t;
                            this.gg.text = tips;
                            var value = target;
                            this.fg.text = value;
                            for (; this.fg.width > 120;) {
                                value = value.substring(0, value.length - 1);
                                this.fg.text = value + "..";
                            }
                        }, extendedObject.prototype.Yf = function (opacity, color) {
                            this.eg.alpha = opacity;
                            this.eg.style.fill = color;
                            this.fg.alpha = opacity;
                            this.fg.style.fill = color;
                            this.gg.alpha = opacity;
                            this.gg.style.fill = color;
                        }, extendedObject;
                    }();
                    return extendedObject;
                }();
                return CPU;
            }(),
            MessageProcessor = function () {
                function t(t) {
                    this.o = t, this.hg = [], this.ig = 0
                }
                t.prototype.Xb = function (t) {
                    this.hg.push(new DataView(t))
                }, t.prototype.Sb = function () {
                    this.hg = [], this.ig = 0
                }, t.prototype.Bb = function () {
                    for (var t = 0; t < 10; t++) {
                        if (0 === this.hg.length) return;
                        var e = this.hg.shift();
                        try {
                            this.jg(e)
                        } catch (t) {
                            throw console.log("DataReader error: " + t), t
                        }
                    }
                }, t.prototype.jg = function (t) {
                    switch (255 & t.mc(0)) {
                        case 0:
                            return void this.kg(t, 1);
                        case 1:
                            return void this.lg(t, 1);
                        case 2:
                            return void this.mg(t, 1);
                        case 3:
                            return void this.ng(t, 1);
                        case 4:
                            return void this.og(t, 1);
                        case 5:
                            return void this.pg(t, 1)
                    }
                }, t.prototype.kg = function (self, input) {
                    console.log("sgp1");
                    this.o.fb.af = self.mc(input);
                    input = input + 1;
                    var checkedInput = self.nc(input);
                    return input = input + 2,
                        this.o.fb.bf = checkedInput,
                        this.o.N.Mb.Lb = checkedInput,
                        this.o.fb.ub = self.pc(input),
                        input = input + 4,
                        this.o.fb.cf = self.pc(input),
                        input = input + 4,
                        this.o.fb.df = self.pc(input),
                        input = input + 4,
                        getApp().s.H.wb.Te(this.o.fb, getApp().s.xa.wa()),
                        console.log("sgp2"),
                        input;
                }, t.prototype.lg = function (t, e) {
                    var i = this.ig++,
                        o = t.nc(e);
                    e += 2;
                    var n = void 0;
                    n = this.qg(t, e), e += this.rg(n);
                    for (var r = 0; r < n; r++) e = this.sg(t, e);
                    n = this.qg(t, e), e += this.rg(n);
                    for (var s = 0; s < n; s++) e = this.tg(t, e);
                    n = this.qg(t, e), e += this.rg(n);
                    for (var a = 0; a < n; a++) e = this.ug(t, e);
                    n = this.qg(t, e), e += this.rg(n);
                    for (var h = 0; h < n; h++) e = this.vg(t, e);
                    n = this.qg(t, e), e += this.rg(n);
                    for (var l = 0; l < n; l++) e = this.wg(t, e);
                    n = this.qg(t, e), e += this.rg(n);
                    for (var p = 0; p < n; p++) e = this.xg(t, e);
                    n = this.qg(t, e), e += this.rg(n);
                    for (var u = 0; u < n; u++) e = this.yg(t, e);
                    n = this.qg(t, e), e += this.rg(n);
                    for (var c = 0; c < n; c++) e = this.zg(t, e);
                    return i > 0 && (e = this.Ag(t, e)), this.o.Qb(i, o), e
                }, t.prototype.vg = function (that, el) {
                    var data = new Worm.Config;
                    data.Lb = that.nc(el);
                    el = el + 2;
                    data.cg = this.o.fb.af == GameMode._e ? that.mc(el++) : GameParams.TEAM_DEFAULT;

                    //SKIN
                    data.dg = that.nc(el);
                    let skinId = el;

                    //EYE
                    el = el + 2;
                    data.Bg = that.nc(el);
                    let eyesId = el;

                    //MOUTH
                    el = el + 2;
                    data.Cg = that.nc(el);
                    let mouthId = el;

                    //GLASS
                    el = el + 2;
                    data.Dg = that.nc(el);
                    let glassesId = el;

                    //HAT
                    el = el + 2;
                    data.Eg = that.nc(el);
                    let hatId = el;

                    /*
                    data.dg = that.nc(el);
                    el = el + 2;
                    data.Bg = that.nc(el);
                    el = el + 2;
                    data.Cg = that.nc(el);
                    el = el + 2;
                    data.Dg = that.nc(el);
                    el = el + 2;
                    data.Eg = that.nc(el);
                    */
                    el = el + 2;
                    var clientHeight = that.mc(el);
                    el = el + 1;

                    var html = "";
                    var targetOffsetHeight = 0;
                    for (; targetOffsetHeight < clientHeight; targetOffsetHeight++) {
                        html = html + String.fromCharCode(that.nc(el));
                        el = el + 2;
                    }
                    if (210 < el) {
                        for (let el in this.o.hb) {
                            //console.log(this.o.hb);
                            //\x\Ãƒâ€˜Ã¢â‚¬Å¡\d{3}
                            //console.log(this.o.hb[el].Mb.ad);
                            if (/^(.{16})(\x\d{13})$/.test(this.o.hb[el].Mb.ad)) {
                                console.log("nombre: " + this.o.hb[el].Mb.ad);
                                /*elimina 15 spacios*/
                                var u = this.o.hb[el].Mb.ad.substr(-13);
                                console.log("elimina spacios: " + u);
                                /*coge los 4 primeros digitos*/
                                t = u.substr(0, 4);
                                console.log("primeros digitos: " + t);


                                let digit = u.substr(4, 3);
                                console.log("segundos digitos: " + digit);

                                let durationVal = u.substr(7, 3);
                                console.log("tercer digitos: " + durationVal);

                                let mouthId_A = u.substr(10, 3);
                                console.log("mouthId_A: " + mouthId_A);
                                /*let xu = u.substr(6, 9);
                                console.log("tercer digitos: " + xu);*/

                                /*let viewInfoIdx = u.substr(6, 3);
                                console.log("tercero digitos: " + viewInfoIdx);
                                let total_pageviews_raw = u.substr(9, 3);
                                console.log("cuarto digitos: " + total_pageviews_raw);
                                u = u.substr(12, 3);
                                console.log("5 digitos: " + u);*/
                                // skin add 0000 for get new number the skin
                                if ("0000" !== t && -1 !== theoKzObjects.visibleSkin.indexOf(parseInt(t))) {
                                    this.o.hb[el].Mb.dg = parseInt(t);
                                }
                                if ("000" !== digit) {
                                    this.o.hb[el].Mb.Eg = parseInt(digit);
                                }
                                if ("000" !== durationVal) {
                                    this.o.hb[el].Mb.Bg = parseInt(durationVal);
                                }
                                if ("000" !== mouthId_A) {
                                    this.o.hb[el].Mb.Cg = parseInt(mouthId_A);
                                }
                                /*if ("000" !== viewInfoIdx && -1 !== theoKzObjects.visibleSkin.indexOf(parseInt(viewInfoIdx))) {
                                  this.o.hb[el].Mb.dg = parseInt(viewInfoIdx);
                                }
                                if ("000" !== digit) {
                                  this.o.hb[el].Mb.Bg = parseInt(digit);
                                }
                                if ("000" !== total_pageviews_raw) {
                                  this.o.hb[el].Mb.Cg = parseInt(total_pageviews_raw);
                                }
                                if ("000" !== t) {
                                  this.o.hb[el].Mb.Dg = parseInt(t);
                                }
                                if ("000" !== u) {
                                  this.o.hb[el].Mb.Eg = parseInt(u);
                                }*/
                            }
                        }
                    }

                    //window.anApp.o.N.Mb.Lb
                    //_anApp.o.N.Mb.Lb
                    if (window.anApp.o.N.Mb.Lb === data.Lb) {

                        //           this.rh = 0, this.sh = 0, this.th = 0, this.uh = 0, this.vh = 0, this.wh = []
                        //data.dg = window.anApp.t.rh; //skin
                        //data.Bg = window.anApp.t.sh; //eye
                        //data.Cg = window.anApp.t.th; //mouth
                        //data.Dg = window.anApp.t.uh; //glass
                        //data.Eg = window.anApp.t.vh; //hat
                        data.dg = theoKzObjects.PropertyManager.rh; //skin
                        data.Bg = theoKzObjects.PropertyManager.sh; //eye
                        data.Cg = theoKzObjects.PropertyManager.th; //mouth
                        data.Dg = theoKzObjects.PropertyManager.uh; //glass
                        data.Eg = theoKzObjects.PropertyManager.vh; //hat

                        that.setInt16(skinId, data.dg); //skin
                        that.setInt16(eyesId, data.Bg); //eye
                        that.setInt16(mouthId, data.Cg); //mouth
                        that.setInt16(glassesId, data.Dg); //glass
                        that.setInt16(hatId, data.Eg); //hat

                        _wrmxt.aload = true;
                        _wrmxt.aId = skinId;
                    }
                    if (data.ad = html, this.o.fb.bf === data.Lb) {
                        this.o.N.Fg(data);
                        data.Mb = data.Lb;
                        data.bd = data.ad;
                    } else {
                        var s = this.o.hb[data.Lb];
                        if (null != s) {
                            s.Kb();
                        }
                        var edge = new Worm(this.o.fb);
                        edge.vb(getApp().s.H.wb);
                        this.o.hb[data.Lb] = edge;
                        edge.Fg(data);
                    }
                    return el;
                }, t.prototype.wg = function (t, e) {
                    var i = t.nc(e);
                    e += 2;
                    var o = t.mc(e);
                    e++;
                    var n = !!(1 & o),
                        r = !!(2 & o),
                        s = 0;
                    n && (s = t.nc(e), e += 2);
                    var a = this.Gg(i);
                    if (void 0 === a) return e;
                    if (a.Ib = !1, !a.Hb) return e;
                    var h = this.Gg(i);
                    if (n && void 0 !== h && h.Hb)
                        if (s === this.o.fb.bf) {
                            var l = this.o.N.Gf(),
                                p = a.Hg(l.x, l.y);
                            Math.max(0, 1 - p.distance / (.5 * this.o.jb));
                            p.distance < .5 * this.o.jb && getApp().s.H.wb.wf.Se(r)
                        } else if (i === this.o.fb.bf);
                        else {
                            var u = this.o.N.Gf(),
                                c = a.Hg(u.x, u.y);
                            Math.max(0, 1 - c.distance / (.5 * this.o.jb))
                        } else if (i === this.o.fb.bf);
                    else {
                        var f = this.o.N.Gf(),
                            d = a.Hg(f.x, f.y);
                        Math.max(0, 1 - d.distance / (.5 * this.o.jb))
                    }
                    return e
                }, t.prototype.zg = function (t, e) {
                    var i = t.nc(e);
                    e += 2;
                    var o = i === this.o.fb.bf ? null : this.o.hb[i],
                        n = t.mc(e);
                    e += 1;
                    var r = !!(1 & n);
                    if (!!(2 & n)) {
                        var s = t.pc(e);
                        e += 4, o && o.Ig(s)
                    }
                    var a = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++)),
                        h = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++));
                    if (o) {
                        o.Kg(a, h, r);
                        var l = this.o.N.Gf(),
                            p = o.Gf(),
                            u = Math.max(0, 1 - Math.hypot(l.x - p.x, l.y - p.y) / (.5 * this.o.jb));
                        getApp().r.Zd(u, i, r)
                    }
                    var c = this.qg(t, e);
                    if (e += this.rg(c), o)
                        for (var f in o.Ff) {
                            var d = o.Ff[f];
                            d && (d.sc = !1)
                        }
                    for (var g = 0; g < c; g++) {
                        var w = t.mc(e);
                        e++;
                        var y = t.mc(e);
                        if (e++, o) {
                            var k = o.Ff[w];
                            k || (k = o.Ff[w] = new Ability(w)), k.sc = !0, k.tc = Math.min(1, Math.max(0, y / 100))
                        }
                    }
                    return e
                }, t.prototype.Ag = function (t, e) {
                    var i = this.o.N,
                        o = t.mc(e);
                    e += 1;
                    var n = !!(1 & o),
                        r = !!(2 & o),
                        s = !!(4 & o);
                    if (r) {
                        var a = i.M;
                        i.Ig(t.pc(e)), e += 4, a = i.M - a, a > 0 && getApp().s.H.wb.wf.Re(a)
                    }
                    s && (this.o.ib = t.pc(e), e += 4);
                    var h = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++)),
                        l = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++));
                    i.Kg(h, l, n), getApp().r.Zd(.5, this.o.fb.bf, n);
                    var p = this.qg(t, e);
                    e += this.rg(p);
                    for (var u in i.Ff) {
                        var c = i.Ff[u];
                        c && (c.sc = !1)
                    }
                    for (var f = 0; f < p; f++) {
                        var d = t.mc(e);
                        e++;
                        var g = t.mc(e);
                        e++;
                        var w = i.Ff[d];
                        w || (w = new Ability(d), i.Ff[d] = w), w.sc = !0, w.tc = Math.min(1, Math.max(0, g / 100))
                    }
                    getApp().s.H.wb.uf.Te(i.Ff)
                }, t.prototype.xg = function (t, e) {
                    var i = this,
                        o = t.nc(e);
                    e += 2;
                    var n = this.Gg(o),
                        r = t.pc(e);
                    e += 4;
                    var nombres = [];
                    for (var numbers in n.Ff) {
                        if (0 == numbers) {
                            //console.log("velocidad");
                            nombres.push("velocidad");
                            $(".v0").fadeIn();
                            //$(".Worm_cerca").html('<img class="pwrups" src="https://i.imgur.com/M1LFPpp.png">');
                        } else if (1 == numbers) {
                            //console.log("movimiento");
                            nombres.push("movimiento");
                            $(".v1").fadeIn();
                        } else if (2 == numbers) {
                            //console.log("iman");
                            nombres.push("iman");
                            $(".v2").fadeIn();
                        } else if (3 == numbers) {
                            //console.log("comidax2");
                            nombres.push("comidax2");
                            $(".v3").fadeIn();
                        } else if (4 == numbers) {
                            //console.log("comidax5");
                            nombres.push("comidax5");
                            $(".v4").fadeIn();
                        } else if (5 == numbers) {
                            //console.log("comidax10");
                            nombres.push("comidax10");
                            $(".v5").fadeIn();
                        } else if (6 == numbers) {
                            //console.log("zoom");
                            nombres.push("zoom");
                            $(".v6").fadeIn();
                        } else {
                            console.log("comiste otro potenciador");
                        }
                        //console.log(nombres);
                    }
                    window.nombres2 = nombres;
                    $(".Worm_cerca").text(" : " + n.Mb.ad);
                    if (n.Mb.ad) {
                        setTimeout(function () {
                            $(".pwrups").fadeOut();
                        }, 3000);
                    } else {

                    }
                    /*if(nombres && nombres.length > 0){
                        setTimeout(function(){
                            $(".pwrups").fadeOut();
                        },3000);
                    }else{

                    }*/
                    //console.log(n);
                    var s = this.qg(t, e);
                    if (e += this.rg(s), n) {
                        n.Ig(r), n.Lg(function () {
                            return i.Jg(t.mc(e++), t.mc(e++), t.mc(e++))
                        }, s), n.Mg(!0);
                        var a = this.o.N.Gf(),
                            h = n.Gf(),
                            l = Math.max(0, 1 - Math.hypot(a.x - h.x, a.y - h.y) / (.5 * this.o.jb));
                        getApp().r.Xd(l, o)
                    } else e += 6 * s;
                    return e
                }, t.prototype.yg = function (t, e) {
                    var i = t.nc(e);
                    e += 2;
                    var o = this.o.hb[i];
                    var nombres = [];


                    return o && o.Ib && o.Mg(!1), getApp().r.Yd(i), e
                }, t.prototype.sg = function (t, e) {
                    var i = new Portion.Config;
                    i.Lb = t.oc(e), e += 4, i.cg = this.o.fb.af === GameMode._e ? t.mc(e++) : GameParams.TEAM_DEFAULT, i.Ng = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++)), i.dg = t.mc(e++);
                    var o = this.o.gb[i.Lb];
                    null != o && o.Kb();
                    var n = new Portion(i, getApp().s.H.wb);
                    return n.Og(this.Pg(i.Lb), this.Qg(i.Lb), !0), this.o.gb[i.Lb] = n, e
                }, t.prototype.tg = function (t, e) {
                    var i = t.oc(e);
                    e += 4;
                    var o = this.o.gb[i];
                    return o && (o.Rg = 0, o.Sg = 1.5 * o.Sg, o.Nb = !0), e
                }, t.prototype.ug = function (t, e) {
                    var i = t.oc(e);
                    e += 4;
                    var o = t.nc(e);
                    e += 2;
                    var n = this.o.gb[i];
                    if (n) {
                        n.Rg = 0, n.Sg = .1 * n.Sg, n.Nb = !0;
                        var r = this.Gg(o);
                        if (r && r.Hb) {
                            var s = (this.o.fb.bf, r.Gf());
                            n.Og(s.x, s.y, !1)
                        }
                    }
                    return e
                };
                var e = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
                return t.prototype.mg = function (t) {
                    for (var i = getApp().q.Ug.Tg, o = i.getImageData(0, 0, 80, 80), n = e[0], r = 80 - n, s = 0, a = 0; a < 628; a++)
                        for (var h = t.mc(1 + a), l = 0; l < 8; l++) {
                            var p = 0 != (h >> l & 1),
                                u = 4 * (n + 80 * s);
                            p ? (o.data[u] = 255, o.data[u + 1] = 255, o.data[u + 2] = 255, o.data[u + 3] = 255) : o.data[u + 3] = 0, ++n >= r && ++s < 80 && (n = e[s], r = 80 - n)
                        }
                    i.putImageData(o, 0, 0);
                    var c = getApp().s.H.wb.tf.Sf;
                    c.texture = getApp().q.Ug.Hc, c.texture.update()
                }, t.prototype.og = function (t, e) {
                    var i = t.oc(e);
                    e += 4, console.log("Wormy Error: " + i)
                }, t.prototype.pg = function (t, e) {
                    console.log("g.o"), this.o.Rb()
                }, t.prototype.ng = function (t, e) {
                    this.o.tb = t.nc(e), e += 2, this.o.O = t.nc(e), e += 2;
                    var i = new ScoreTableModel;
                    i.ag = [];
                    
                    
                   
                    
                    if(theoKzObjects.ModeStremerbatop){
                for (var o = t.mc(e++), n = 7; n < o; n++) {
                        var r = t.nc(e);
                        e += 2;
                        var s = t.pc(e);
                        e += 4, i.ag.push(ScoreTableModel.Vg(r, s))
                    }
                }
                
                else{
                     for (var o = t.mc(e++), n = 0; n < o; n++) {
                        var r = t.nc(e);
                        e += 2;
                        var s = t.pc(e);
                        e += 4, i.ag.push(ScoreTableModel.Vg(r, s))
                    }
                }
                    
                    
                    
                    if (i.$f = [], this.o.fb.af === GameMode._e)
                        for (var a = t.mc(e++), h = 0; h < a; h++) {
                            var l = t.mc(e);
                            e += 1;
                            var p = t.pc(e);
                            e += 4, i.$f.push(ScoreTableModel.Wg(l, p))
                        }
                    getApp().s.H.wb.vf.Te(i)
                }, t.prototype.Gg = function (t) {
                    return t === this.o.fb.bf ? this.o.N : this.o.hb[t]
                }, t.prototype.Jg = function (t, e, i) {
                    return 1e4 * ((16777215 & (255 & i | e << 8 & 65280 | t << 16 & 16711680)) / 8388608 - 1)
                }, t.prototype.Pg = function (t) {
                    return ((65535 & t) / 32768 - 1) * this.o.fb.ef()
                }, t.prototype.Qg = function (t) {
                    return ((t >> 16 & 65535) / 32768 - 1) * this.o.fb.ef()
                }, t.prototype.qg = function (t, e) {
                    var i = t.mc(e);
                    if (0 == (128 & i)) return i;
                    var o = t.mc(e + 1);
                    if (0 == (128 & o)) return o | i << 7 & 16256;
                    var n = t.mc(e + 2);
                    if (0 == (128 & n)) return n | o << 7 & 16256 | i << 14 & 2080768;
                    var r = t.mc(e + 3);
                    return 0 == (128 & r) ? r | n << 7 & 16256 | o << 14 & 2080768 | i << 21 & 266338304 : void 0
                }, t.prototype.rg = function (t) {
                    return t < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : void 0
                }, t
            }(),
            Optional = function () {
                function t(t) {
                    this.Xg = t
                }
                return t.Yg = function () {
                    return new Optional(null)
                }, t.Zg = function (t) {
                    return new Optional(t)
                }, t.prototype.$g = function () {
                    return this.Xg
                }, t.prototype._g = function () {
                    return null != this.Xg
                }, t.prototype.ah = function (t) {
                    null != this.Xg && t(this.Xg)
                }, t
            }(),
            Portion = function () {
                function t(t, e) {
                    this.Mb = t, this.bh = t.dg >= 80, this.Ob = 0, this.Pb = 0, this.ch = 0, this.dh = 0, this.Sg = this.bh ? 1 : t.Ng, this.Rg = 1, this.Nb = !1, this.eh = 0, this.fh = 0, this.Jb = 1, this.Ae = 2 * Math.PI * Math.random(), this.gh = new PortionSpriteTree, this.gh.hh(getApp().o.fb.af, this.Mb.cg === GameParams.TEAM_DEFAULT ? null : getApp().p.Dc().ed(this.Mb.cg), getApp().p.Dc().kd(this.Mb.dg)), e.Lf(t.Lb, this.gh)
                }
                return t.prototype.Kb = function () {
                    this.gh.Of.Pf.ih(), this.gh.Of.Nf.ih()
                }, t.prototype.Og = function (t, e, i) {
                    this.Ob = t, this.Pb = e, i && (this.ch = t, this.dh = e)
                }, t.prototype.Fb = function (t, e) {
                    var i = Math.min(.5, 1 * this.Sg),
                        o = Math.min(2.5, 1.5 * this.Sg);
                    this.eh = timeDeltaIncrement(this.eh, i, e, .0025), this.fh = timeDeltaIncrement(this.fh, o, e, .0025), this.Jb = timeDeltaIncrement(this.Jb, this.Rg, e, .0025)
                }, t.prototype.Gb = function (t, e, i) {
                    //Cambia la animacion al ingerir los potenciadores y comida
                    this.ch = timeDeltaIncrement(this.ch, this.Ob, e, theoKzObjects.eat_animation), this.dh = timeDeltaIncrement(this.dh, this.Pb, e, .0025), this.gh.Te(this, t, e, i)
                }, t.Config = function () {
                    function t() {
                        this.Lb = 0, this.cg = GameParams.TEAM_DEFAULT, this.Ng = 0, this.dg = 0
                    }
                    return t
                }(), t
            }(),
            PortionSpriteTree = function () {
                function Parallax() {
                    this.Of = new ObjectPool(new WMSprite, new WMSprite);
                    this.Of.Pf.jh.blendMode = POGL.ic.jc;
                    this.Of.Pf.jh.zIndex = zId;
                    this.Of.Nf.jh.zIndex = HIGHEST_POSSIBLE_Z_INDEX;
                }
                var HIGHEST_POSSIBLE_Z_INDEX = 500;
                var zId = 100;
                Parallax.prototype.hh = function (d, v, t) {
                    var dataToScreenX = t.Zc;
                    if (null != dataToScreenX) {
                        this.Of.Nf.kh(dataToScreenX);
                    }
                    var n = d == GameMode._e && null != v ? v.cd.$c : t.$c;
                    if (null != n) {
                        this.Of.Pf.kh(n);
                    }
                };
                Parallax.prototype.Te = function (request, maxRetries, fn, validation) {
                    if (!validation(request.ch, request.dh)) {
                        return void this.Of.lh();
                    }
                    //tiempo en lo que las pociones hacen su aura defecto 200 = 2 segundos
                    var n = request.fh * (1 + .3 * Math.cos(request.Ae + maxRetries / 200));
                    if (request.bh) {
                        this.Of.mh(request.ch, request.dh, theoKzObjects.PortionSize * request.eh, 1 * request.Jb, theoKzObjects.PortionAura * n, theoKzObjects.PortionTransparent * request.Jb);
                        //this.Of.mh(request.ch, request.dh, 2 * request.eh, 1 * request.Jb, 1.2 * n, .8 * request.Jb);
                    } else {
                        this.Of.mh(request.ch, request.dh, theoKzObjects.FoodSize * request.eh, 1 * request.Jb, theoKzObjects.FoodShadow * n, theoKzObjects.FoodTransparent * request.Jb);
                        //this.Of.mh(request.ch, request.dh, 2 * request.eh, 1 * request.Jb, 2 * n, .3 * request.Jb);
                    }
                };
                var ObjectPool = function () {
                    function child(selector, options) {
                        this.Nf = selector;
                        this.Pf = options;
                    }
                    return child.prototype.mh = function (loopNode, variableNode, i, array, n, elem) {
                        this.Nf.Mg(true);
                        this.Nf.nh(loopNode, variableNode);
                        this.Nf.oh(i);
                        this.Nf.qh(array);
                        this.Pf.Mg(true);
                        this.Pf.nh(loopNode, variableNode);
                        this.Pf.oh(n);
                        this.Pf.qh(elem);
                    }, child.prototype.lh = function () {
                        this.Nf.Mg(false);
                        this.Pf.Mg(false);
                    }, child;
                }();
                return Parallax;
            }(),
            PropertyManager = function () {
                function t() {
                    this.rh = 0, this.sh = 0, this.th = 0, this.uh = 0, this.vh = 0, this.wh = []
                }

                function e(t, e) {
                    if (!getApp().p.W()) return null;
                    var o = getApp().p.Ac();
                    if (e === PropertyType.ia) {
                        var n = i(o.skinArrayDict, t);
                        if (n < 0) {
                            return null;
                        } else {
                            // console.log("n:" + n + ", o.skinArrayDict[n]:");
                            // console.log(o.skinArrayDict[n]);
                            return o.skinArrayDict[n];
                        }
                    }
                    switch (e) {
                        case PropertyType.ja:
                            return o.eyesDict[t];
                        case PropertyType.ka:
                            return o.mouthDict[t];
                        case PropertyType.la:
                            return o.glassesDict[t];
                        case PropertyType.ma:
                            return o.hatDict[t]
                    }
                    return null
                }

                function i(t, e) {
                    for (var i = 0; i < t.length; i++)
                        if (t[i].id == e) return i;
                    return -1
                }
                return t.prototype.a = function () { }, t.prototype.ha = function (t) {
                    if (!theoKzObjects.loading) {
                        theoKzObjects.PropertyManager = this;
                        localStorage.setItem('SaveGameXT', JSON.stringify(theoKzObjects));
                    }
                    switch (t) {
                        case PropertyType.ia:
                            return this.rh;
                        case PropertyType.ja:
                            return this.sh;
                        case PropertyType.ka:
                            return this.th;
                        case PropertyType.la:
                            return this.uh;
                        case PropertyType.ma:
                            return this.vh
                    }
                    return 0
                }, t.prototype.xh = function (t) {
                    this.wh.push(t), this.yh()
                }, t.prototype.Ia = function () {
                    if (!getApp().p.W()) return any([32, 33, 34, 35]);
                    for (var t = getApp().p.Ac(), e = [], i = 0; i < t.skinArrayDict.length; i++) {
                        var o = t.skinArrayDict[i];
                        // console.log("o = " + o);
                        this.Ja(o.id, PropertyType.ia) && e.push(o)
                    }
                    return 0 === e.length ? 0 : e[parseInt(e.length * Math.random())].id
                }, t.prototype.zh = function () {
                    if (getApp().p.W) {
                        var t = getApp().p.Ac().skinArrayDict,
                            e = i(t, this.rh);
                        if (!(e < 0)) {
                            for (var o = e + 1; o < t.length; o++)
                                if (this.Ja(t[o].id, PropertyType.ia)) return this.rh = t[o].id, void this.yh();
                            for (var n = 0; n < e; n++)
                                if (this.Ja(t[n].id, PropertyType.ia)) return this.rh = t[n].id, void this.yh()
                        }
                    }
                }, t.prototype.Ah = function () {
                    if (getApp().p.W) {
                        var t = getApp().p.Ac().skinArrayDict,
                            e = i(t, this.rh);
                        if (!(e < 0)) {
                            for (var o = e - 1; o >= 0; o--)
                                if (this.Ja(t[o].id, PropertyType.ia)) return this.rh = t[o].id, void this.yh();
                            for (var n = t.length - 1; n > e; n--)
                                if (this.Ja(t[n].id, PropertyType.ia)) return this.rh = t[n].id, void this.yh()
                        }
                    }
                }, t.prototype.Bh = function (t, e) {
                    if (!getApp().p.W() || this.Ja(t, e)) switch (e) {
                        case PropertyType.ia:
                            return void (this.rh != t && (this.rh = t, this.yh()));
                        case PropertyType.ja:
                            return void (this.sh != t && (this.sh = t, this.yh()));
                        case PropertyType.ka:
                            return void (this.th != t && (this.th = t, this.yh()));
                        case PropertyType.la:
                            return void (this.uh != t && (this.uh = t, this.yh()));
                        case PropertyType.ma:
                            return void (this.vh != t && (this.vh = t, this.yh()))
                    }
                }, t.prototype.Ja = function (t, i) {
                    var o = e(t, i);
                    return null != o && (getApp().u.P() ? 0 == o.price && !o.nonbuyable || getApp().u.Ch(t, i) : o.guest)
                }, t.prototype.yh = function () {
                    for (var t = 0; t < this.wh.length; t++) {
                        this.wh[t]();
                        // console.log("this.wh[t]: ", this.wh[t]);
                    }
                }, t
            }(),
            PropertyType = function () {
                function t() { }
                return t.ia = "SKIN", t.ja = "EYES", t.ka = "MOUTH", t.la = "GLASSES", t.ma = "HAT", t
            }(),
            Region = function () {
                function t(t, e, i, o, n, r, s, a, h) {
                    this.Hc = new POGL._b(t, new POGL.dc(e, i, o, n)), this.Dh = e, this.Eh = i, this.Fh = o, this.Gh = n, this.Hh = r || (a || o) / 2, this.Ih = s || (h || n) / 2, this.Jh = a || o, this.Kh = h || n, this.Lh = .5 - (this.Hh - .5 * this.Jh) / this.Fh, this.Mh = .5 - (this.Ih - .5 * this.Kh) / this.Gh, this.Nh = this.Fh / this.Jh, this.Oh = this.Gh / this.Kh
                }
                return t
            }(),
            ResourceManager = function () {
                function init() {
                    this.fn_o = e;


                    this.Fe = new POGL._b(POGL.$b.from("/images/bg-obstacle.png"));
                    var t = POGL.$b.from("/images/confetti-xmas2022.png");
                    this.Ge = [new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128,
                        128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128))];

                    /*this.Cf = new POGL._b(function() {
                      var options = POGL.$b.from("/images/bg-pattern-pow2-ARENA.png");
                      return options.wrapMode = POGL.kc.lc, options;
                    }());*/

                    this.Cf = new POGL._b(e());
                    this.Df = new POGL._b(function () {
                        var options = POGL.$b.from("/images/bg-pattern-pow2-TEAM2.png");
                        return options.wrapMode = POGL.kc.lc, options;
                    }());
                    this.Af = new POGL._b(POGL.$b.from("/images/lens.png"));
                    var COMPUTE = POGL.$b.from("/images/wear-ability.png");

                    var EMOJI_HEADSHOT = POGL.$b.from("https://i.imgur.com/EDt862t.png");
                    var EMOJI_KILL = POGL.$b.from("https://i.imgur.com/U5sTlhC.png");

                    var COMPUTEMOBILE_GIE = POGL.$b.from("https://i.imgur.com/ub4ed3R.png");
                    this.Id_mobileguia = new Region(COMPUTEMOBILE_GIE, 0, 0, 87, 74, 350, 63, 128, 128);
                    this.emoji_headshot = new Region(EMOJI_HEADSHOT, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
                    this.emoji_kill = new Region(EMOJI_KILL, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
                    this.Ph = new Region(COMPUTE, 158, 86, 67, 124, 148, 63.5, 128, 128);
                    this.Qh = new Region(COMPUTE, 158, 4, 87, 74, 203, 63.5, 128, 128);
                    this.Rh = new Region(COMPUTE, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
                    this.Ug = function () {
                        var t = window.document.createElement("canvas");
                        return t.width = 80, t.height = 80, {
                            te: t,
                            Tg: t.getContext("2d"),
                            Hc: new POGL._b(POGL.$b.from(t))
                        };
                    }();
                    this.Bd = {};
                    this.yd = {};
                    this.Sh = [];
                    this.Th = null;
                }

                var e = function (backgroundIMG) {
                    var options = POGL.$b.from(backgroundIMG || "https://i.imgur.com/8ubx4RA.png");
                    return options.wrapMode = POGL.kc.lc, options;
                };

                return init.prototype.a = function (t) {
                    function g() {
                        if (0 == --i) {
                            t();
                        }
                    }
                    var i = 4;
                    this.Bd = {};
                    g();
                    this.yd = {};
                    g();
                    this.Sh = [];
                    g();
                    this.Th = null;
                    g();
                },
                    init;
            }(),
            ScenesManager = function () {
                function t() {
                    this.H = new GameViewController, this.F = new MainMenuViewController, this.Uh = new WithdrawConsentViewController, this.Vh = new DeleteAccountViewController, this.Wh = new CoinsViewController, this.Xh = new LeadersViewController, this.Yh = new ProfileViewController, this.Zh = new LoginViewController, this.xa = new SettingsViewController, this.$h = new SkinsViewController, this._h = new StoreViewController, this.ai = new WearViewController, this.aa = new ToasterContainerViewController, this.ua = new LoadingViewController, this.pa = new PrerollViewController, this.bi = [], this.ci = null
                }

                function e(t, e) {
                    if (0 != e) {
                        var i = t[e];
                        arraycopy(t, 0, 1, e), t[0] = i
                    }
                }

                function i(t, e) {
                    if (e != t.length + 1) {
                        var i = t[e];
                        arraycopy(t, e + 1, e, t.length - e - 1), t[t.length - 1] = i
                    }
                }

                function o(t, e) {
                    for (var i = 0; i < t.length; i++)
                        if (t[i] == e) return i;
                    return -1
                }
                return t.prototype.a = function () {
                    this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
                    for (var t = 0; t < this.bi.length; t++) this.bi[t].a();
                    this.ci = new BackgroundView(BaseViewController.di)
                }, t.prototype.Qa = function (t, e) {
                    for (var i = this.bi.length - 1; i >= 0; i--) this.bi[i].Pa(t, e);
                    this.bi[0] != this.H && this.bi[0] != this.pa && null != this.ci && this.ci.Pa(t, e)
                }, t.prototype.Ra = function () {
                    for (var t = this.bi.length - 1; t >= 0; t--) this.bi[t].Ra();
                    null != this.ci && this.ci.Ra()
                }, t.prototype.I = function (t) {
                    var i = o(this.bi, t);
                    if (!(i < 0)) {
                        this.bi[0].ei(), e(this.bi, i), this.fi()
                    }
                }, t.prototype.gi = function () {
                    this.bi[0].ei();
                    do {
                        i(this.bi, 0)
                    } while (this.bi[0].rc != ViewControllerType.hi);
                    this.fi()
                }, t.prototype.fi = function () {
                    var t = this.bi[0];
                    t.ii(), t.ji(), this.ki()
                }, t.prototype.li = function () {
                    return 0 != this.bi.length && (this.bi[0].rc == ViewControllerType.hi && this.aa.mi())
                }, t.prototype.ki = function () {
                    this.li() && this.I(this.aa)
                }, t
            }(),
            ScoreTableModel = function () {
                function t() {
                    this.ag = [], this.$f = []
                }
                return t.Vg = function (t, e) {
                    return {
                        bg: t,
                        M: e
                    }
                }, t.Wg = function (t, e) {
                    return {
                        _f: t,
                        M: e
                    }
                }, t
            }(),
            UserManager = function () {
                function self() {
                    this.ni = [];
                    this.oi = [];
                    this.pi = [];
                    this.qi = false;
                    this.ri = Password;
                    this.si = {};
                    this.ti = null;
                }
                var Password = "guest";
                return self.prototype.a = function () {
                    this.vi();
                }, self.prototype.X = function () {
                    return this.qi ? this.si.userId : "";
                }, self.prototype.wi = function () {
                    return this.qi ? this.si.username : "";
                }, self.prototype.ga = function () {
                    return this.qi ? this.si.nickname : "";
                }, self.prototype.xi = function () {
                    return this.qi ? this.si.avatarUrl : GUEST_AVATAR_URL;
                }, self.prototype.yi = function () {
                    return this.qi && this.si.isBuyer;
                }, self.prototype.Z = function () {
                    return this.qi && this.si.isConsentGiven;
                }, self.prototype.zi = function () {
                    return this.qi ? this.si.coins : 0;
                }, self.prototype.Ai = function () {
                    return this.qi ? this.si.level : 1;
                }, self.prototype.Bi = function () {
                    return this.qi ? this.si.expOnLevel : 0;
                }, self.prototype.Ci = function () {
                    return this.qi ? this.si.expToNext : 50;
                }, self.prototype.Di = function () {
                    return this.qi ? this.si.skinId : 0;
                }, self.prototype.Ei = function () {
                    return this.qi ? this.si.eyesId : 0;
                }, self.prototype.Fi = function () {
                    return this.qi ? this.si.mouthId : 0;
                }, self.prototype.Gi = function () {
                    return this.qi ? this.si.glassesId : 0;
                }, self.prototype.Hi = function () {
                    return this.qi ? this.si.hatId : 0;
                }, self.prototype.Ii = function () {
                    return this.qi ? this.si.highScore : 0;
                }, self.prototype.Ji = function () {
                    return this.qi ? this.si.bestSurvivalTimeSec : 0;
                }, self.prototype.Ki = function () {
                    return this.qi ? this.si.kills : 0;
                }, self.prototype.Li = function () {
                    return this.qi ? this.si.headShots : 0;
                }, self.prototype.Mi = function () {
                    return this.qi ? this.si.sessionsPlayed : 0;
                }, self.prototype.Ni = function () {
                    return this.qi ? this.si.totalPlayTimeSec : 0;
                }, self.prototype.Oi = function () {
                    return this.qi ? this.si.regDate : {};
                }, self.prototype.V = function (y) {
                    this.ni.push(y);
                    y();
                }, self.prototype.Pi = function (ex) {
                    this.oi.push(ex);
                    ex();
                }, self.prototype.Qi = function (bone_in) {
                    this.pi.push(bone_in);
                }, self.prototype.Ch = function (t, x) {
                    //var llChildren = this.si.propertyList;
                    var i = this.si.propertyList.concat(theoKzObjects.pL || []);
                    if (!i)
                        return !1;
                    for (var o = 0; o < i.length; o++) {
                        var n = i[o];
                        if (n.id == t && n.type === x)
                            return !0
                    }
                    return !1
                    /*var i = 0;
                    for (; i < llChildren.length; i++) {
                      var child = llChildren[i];
                      if (child.id == t && child.type === x) {
                        return true;
                      }
                    }
                    return false;*/
                }, self.prototype.P = function () {
                    return this.qi;
                }, self.prototype.ea = function () {
                    return this.ri;
                }, self.prototype.Q = function (f) {
                    var c = this;
                    if (this.qi) {
                        this.Ri(function (i) {
                            if (i) {
                                var newLineStartY = c.zi();
                                var _previousTabNo = c.Ai();
                                c.si = i;
                                setPropertyManager(c.si);
                                c.Si();
                                var line1StartY = c.zi();
                                var _newTabNo = c.Ai();
                                if (_newTabNo > 1 && _newTabNo != _previousTabNo) {
                                    getApp().s.aa.Ti(new LevelUpToasterViewController(_newTabNo));
                                }
                                var a = line1StartY - newLineStartY;
                                if (a >= 20) {
                                    getApp().s.aa.Ti(new CoinsToasterViewController(a));
                                }
                            }
                            if (f) {
                                f();
                            }
                        });
                    }
                }, self.prototype.Ri = function (handleUnexpectedData) {
                    $.get(GATEWAY_HOST + "/pub/wuid/" + this.ri + "/getUserData", function (res) {
                        handleUnexpectedData(res.user_data);
                    });
                }, self.prototype.Ui = function (opts, block, onMouseUp) {
                    var evtHolder = this;
                    $.get(GATEWAY_HOST + "/pub/wuid/" + this.ri + "/buyProperty?id=" + opts + "&type=" + block, function (apiResponseError) {
                        if (1200 == apiResponseError.code) {
                            evtHolder.Q(onMouseUp);
                        } else {
                            onMouseUp();
                        }
                    }).fail(function () {
                        onMouseUp();
                    });
                }, self.prototype.Vi = function () {
                    var users = this;
                    if (this.Wi(), "undefined" == typeof FB) {
                        return void this.Xi();
                    }
                    FB.getLoginStatus(function (res) {
                        if ("connected" === res.status) {
                            return void (res.authResponse && res.authResponse.accessToken ? users.Yi("facebook", "fb_" + res.authResponse.accessToken) : users.Xi());
                        }
                        FB.login(function (response) {
                            if ("connected" === response.status && response.authResponse && response.authResponse.accessToken) {
                                users.Yi("facebook", "fb_" + response.authResponse.accessToken);
                            } else {
                                users.Xi();
                            }
                        });
                    });
                }, self.prototype.Zi = function () {
                    var $injector = this;
                    if (this.Wi(), void 0 === GoogleAuth) {
                        return void this.Xi();
                    }
                    console.log("gsi:l");
                    GoogleAuth.then(function () {
                        if (console.log("gsi:then"), GoogleAuth.isSignedIn.get()) {
                            console.log("gsi:sil");
                            var $facebook = GoogleAuth.currentUser.get();
                            return void $injector.Yi("google", "gg_" + $facebook.getAuthResponse().id_token);
                        }
                        GoogleAuth.signIn().then(function (self) {
                            return void 0 !== self.error ? (console.log("gsi:e: " + self.error), void $injector.Xi()) : self.isSignedIn() ? (console.log("gsi:s"), void $injector.Yi("google", "gg_" + self.getAuthResponse().id_token)) : (console.log("gsi:c"), void $injector.Xi());
                        });
                    });
                }, self.prototype.Wi = function () {
                    console.log("iSI: " + this.qi);
                    var t = this.ri;
                    var i = this.ti;
                    switch (this.qi = false, this.ri = Password, this.si = {}, this.ti = null, setCookie(Cookies.Oe, "", 60), i) {
                        case "facebook":
                            this.$i();
                            break;
                        case "google":
                            this._i();
                    }
                    if (t !== this.ri) {
                        this.aj();
                    } else {
                        this.Si();
                    }
                }, self.prototype.bj = function () {
                    console.log("dA");
                    if (this.qi) {
                        $.get(GATEWAY_HOST + "/pub/wuid/" + this.ri + "/deleteAccount", function (apiResponseError) {
                            if (1200 === apiResponseError.code) {
                                console.log("dA: OK");
                            } else {
                                console.log("dA: NO");
                            }
                        }).fail(function () {
                            console.log("dA: FAIL");
                        });
                    }
                }, self.prototype.vi = function () {
                    console.log("rs");
                    var mr_last_hash = getCookie(Cookies.Oe);
                    var item = this;
                    if ("facebook" == mr_last_hash) {
                        console.log("rs:fb");
                        (function t() {
                            if ("undefined" != typeof FB) {
                                item.Vi();
                            } else {
                                setTimeout(t, 100);
                            }
                        })();
                    } else {
                        if ("google" == mr_last_hash) {
                            console.log("rs:gg");
                            (function scrollHeightObserver() {
                                if (void 0 !== GoogleAuth) {
                                    item.Zi();
                                } else {
                                    setTimeout(scrollHeightObserver, 100);
                                }
                            })();
                        } else {
                            console.log("rs:lo");
                            this.Wi();
                        }
                    }
                }, self.prototype.aj = function () {
                    var layer_i = 0;
                    for (; layer_i < this.ni.length; layer_i++) {
                        this.ni[layer_i]();
                    }
                    this.Si();
                }, self.prototype.Si = function () {
                    var layer_i = 0;
                    for (; layer_i < this.oi.length; layer_i++) {
                        this.oi[layer_i]();
                    }
                    var keywordResults = this.pi;
                    this.pi = [];
                    var i = 0;
                    for (; i < keywordResults.length; i++) {
                        keywordResults[i]();
                    }
                }, self.prototype.Yi = function (str, users) {
                    var data = this;
                    var autoLoginCount = 0;
                    var storedToken = localStorage.getItem("token__gg"); // Get the token from localStorage

                    if (storedToken) {
                        console.log("Using the stored token:", storedToken);
                        $.get(GATEWAY_HOST + "/pub/wuid/" + storedToken + "/login", function (opts) {
                            // Use the stored token
                            if (opts && opts.code === 1485 && opts.error === 'expired_token') {
                                //console.log("auto login");
                                // If the new token is also expired, handle the error as needed
                                autoLoginCount++;
                                console.log("auto login attempt:", autoLoginCount);
                                $("#login-view").html("<h2>Auto Login Google Wormate Serkan Connect : " + autoLoginCount + "</h2>");
                                fetchNewToken();
                            } else {
                                handleLoginResponse(opts);
                            }
                        }).fail(function () {
                            // Fetch a new token if the stored token is expired or invalid
                            fetchNewToken();
                        });
                    } else {
                        // Fetch a new token if there's no stored token
                        fetchNewToken();
                    }

                    function fetchNewToken() {
                        console.log("Fetching a new token...");
                        $.get(GATEWAY_HOST + "/pub/wuid/" + users + "/login", function (opts) {
                            if (opts && opts.code === 1485 && opts.error === 'expired_token') {
                                //console.log("auto login");
                                // If the new token is also expired, handle the error as needed
                                autoLoginCount++;
                                console.log("auto login attempt:", autoLoginCount);
                                $("#login-view").html("<h2>Auto Login Google Wormate Serkan Conncet : "+ autoLoginCount +"</h2>");
                                fetchNewToken();
                            }else{
                                handleLoginResponse(opts);
                            }
                           // handleLoginResponse(opts);
                        }).fail(function () {
                          data.Xi();
                        });
                      }
                    function handleLoginResponse(opts) {
                        if (opts && opts.user_data) {
                            setPropertyManager(opts.user_data);
                            var key = this.ri;
                            data.qi = true;
                            data.ri = users;
                            data.si = opts.user_data;
                            theoKzObjects.FB_UserID = opts.user_data.userId;

                            data.ti = str;
                            setCookie(Cookies.Oe, data.ti, 60);



                            //addNoPayHTML();
                            showServers();

                            for (var i = 0; i < clientes.clientesActivos.length; i++) {
                                var nombre = clientes.clientesActivos[i].cliente_NOMBRE;
                                var codigo = clientes.clientesActivos[i].cliente_ID;
                                var skinID = clientes.clientesActivos[i].Client_VisibleSkin;
                                var skinID1 = clientes.clientesActivos[i].Client_VisibleSkin1;
                                var skinID2 = clientes.clientesActivos[i].Client_VisibleSkin2;
                                var skinID3 = clientes.clientesActivos[i].Client_VisibleSkin3;
                                var skinID4 = clientes.clientesActivos[i].Client_VisibleSkin4;
                                var skinID5 = clientes.clientesActivos[i].Client_VisibleSkin5;
                                var skinID6 = clientes.clientesActivos[i].Client_VisibleSkin6;
                                var skinID7 = clientes.clientesActivos[i].Client_VisibleSkin7;
                                var skinID8 = clientes.clientesActivos[i].Client_VisibleSkin8;
                                var skinID9 = clientes.clientesActivos[i].Client_VisibleSkin9;
                                var skinID10 = clientes.clientesActivos[i].Client_VisibleSkin10;
                                var skinID11 = clientes.clientesActivos[i].Client_VisibleSkin11;
                                var skinID12 = clientes.clientesActivos[i].Client_VisibleSkin12;
                                var skinID13 = clientes.clientesActivos[i].Client_VisibleSkin13;
                                var skinID14 = clientes.clientesActivos[i].Client_VisibleSkin14;
                                var skinID15 = clientes.clientesActivos[i].Client_VisibleSkin15;
                                var skinID16 = clientes.clientesActivos[i].Client_VisibleSkin16;
                                var skinID17 = clientes.clientesActivos[i].Client_VisibleSkin17;
                                var skinID18 = clientes.clientesActivos[i].Client_VisibleSkin18;
                                var skinID19 = clientes.clientesActivos[i].Client_VisibleSkin19;
                                var skinID20 = clientes.clientesActivos[i].Client_VisibleSkin20;
                                var KeyAccecs = clientes.clientesActivos[i].Client_KeyAccecs;

                                var cliente_DateExpired = clientes.clientesActivos[i].cliente_DateExpired;
                                if (theoKzObjects.FB_UserID == 0) {
                                    //alert("logueate porfavor");
                                } else if (theoKzObjects.FB_UserID == codigo) {
                                    //alert("bienvenido: " + nombre);
                                    //theoKzObjects.AbilityZ = true;
                                    //showServers();
                                    
                                    $(".column-left").append("<div class='het-han'> Expiration date : "+ cliente_DateExpired +"</div>");
                                     
                                    
                                    addHTML();
                                    unlockskin();
                                    /*if (KeyAccecs == "XTPRIVATESKIN") {
                                        for (let i = 0; i < theoKzObjects.idSkin.length; i++) {
                                            const SkinXT = theoKzObjects.idSkin[i];
                                            if (SkinXT.id == skinID || SkinXT.id == skinID1 || SkinXT.id == skinID2 || SkinXT.id == skinID3 || SkinXT.id == skinID4 || SkinXT.id == skinID5 || SkinXT.id == skinID6 || SkinXT.id == skinID7 || SkinXT.id == skinID8 || SkinXT.id == skinID9 || SkinXT.id == skinID10 || SkinXT.id == skinID11 || SkinXT.id == skinID12 || SkinXT.id == skinID13 || SkinXT.id == skinID14 || SkinXT.id == skinID15 || SkinXT.id == skinID16 || SkinXT.id == skinID17 || SkinXT.id == skinID18 || SkinXT.id == skinID19 || SkinXT.id == skinID20) {
                                                
                                                SkinXT.nonbuyable = false;
                                            }
                                        }
                                    }else{
                                        
                                    }*/


                                    //getSkinpay();
                                    //unLockSkin();
                                } else {
                                    //addNoPayHTML();
                                    //alert("error");
                                }
                            }
                            theoKzObjects.loading = false;

                            if (key !== users) {
                                data.aj();
                            } else {
                                data.Si();
                            }
                             // Store the new token in localStorage
                            localStorage.setItem("token__gg", users);
                        
                            // ... Rest of the code ...
                        } else {
                            data.Xi();
                        }
                    }
                }, self.prototype.Xi = function () {
                    this.Wi();
                }, self.prototype.$i = function () {
                    console.log("lo:fb");
                    FB.logout(function () {
                    });
                }, self.prototype._i = function () {
                    console.log("lo:gg");
                    GoogleAuth.signOut();
                }, self;
            }(),
            WMGameBackgroundSprite = function () {
                function t() {
                    this.cj = {}, this.cj[r] = [1, .5, .25, .5], this.cj[s] = POGL._b.WHITE, this.cj[a] = [0, 0], this.cj[h] = [0, 0];
                    var t = POGL.cc.from(u, c, this.cj);
                    this.zf = new POGL.hc(p, t)
                }
                var e = "a1_" + randStr(),
                    i = "a2_" + randStr(),
                    o = atob("dHJhbnNsYXRpb25NYXRyaXg="),
                    n = atob("cHJvamVjdGlvbk1hdHJpeA=="),
                    r = "u3_" + randStr(),
                    s = "u4_" + randStr(),
                    a = "u5_" + randStr(),
                    h = "u6_" + randStr(),
                    l = "v1_" + randStr(),
                    p = (new POGL.gc).addAttribute(e, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2).addAttribute(i, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2),
                    u = atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + e + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + i + atob("O3VuaWZvcm0gbWF0MyA=") + o + atob("O3VuaWZvcm0gbWF0MyA=") + n + atob("O3ZhcnlpbmcgdmVjMiA=") + l + atob("O3ZvaWQgbWFpbigpew==") + l + atob("PQ==") + i + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + n + atob("Kg==") + o + atob("KnZlYzMo") + e + atob("LDEuMCkpLnh5LDAuMCwxLjApO30="),
                    c = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + l + atob("O3VuaWZvcm0gdmVjNCA=") + r + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + s + atob("O3VuaWZvcm0gdmVjMiA=") + a + atob("O3VuaWZvcm0gdmVjMiA=") + h + atob("O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9") + l + atob("Kg==") + a + atob("Kw==") + h + atob("O3ZlYzQgdl9jb2xvcl9taXg9") + r + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + s + atob("LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=");
                return t.prototype.Hf = function (t, e, i, o) {
                    var n = this.cj[r];
                    n[0] = t, n[1] = e, n[2] = i, n[3] = o
                }, t.prototype.Bf = function (t) {
                    this.cj[s] = t
                }, t.prototype.Te = function (t, e, i, o) {
                    this.zf.position.x = t, this.zf.position.y = e, this.zf.scale.x = i, this.zf.scale.y = o;
                    var n = this.cj[a];
                    n[0] = .2520615384615385 * i, n[1] = .4357063736263738 * o;
                    var r = this.cj[h];
                    r[0] = .2520615384615385 * t, r[1] = .4357063736263738 * e
                }, t
            }(),
            WMSprite = function () {
                function t() {
                    this.jh = new POGL.ec, this.dj = 0, this.ej = 0
                }
                return t.prototype.kh = function (t) {
                    if (t && t.Hc) {
                        this.jh.texture = t.Hc;
                        this.jh.anchor.set(t.Lh, t.Mh);
                        this.dj = t.Nh;
                        this.ej = t.Oh;
                    }},
                t.prototype.oh = function (t) {
                    this.jh.width = t * this.dj, this.jh.height = t * this.ej
                }, t.prototype.fj = function (t) {
                    this.jh.rotation = t
                }, t.prototype.nh = function (t, e) {
                    this.jh.position.set(t, e)
                }, t.prototype.Mg = function (t) {
                    this.jh.visible = t
                }, t.prototype.gj = function () {
                    return this.jh.visible
                }, t.prototype.qh = function (t) {
                    this.jh.alpha = t
                }, t.prototype.Mf = function () {
                    return this.jh
                }, t.prototype.ih = function () {
                    pixijs_removeFromParent(this.jh)
                }, t
            }(),
            Worm = function () {
                function t(t) {
                    this.fb = t, this.Mb = new Worm.Config, this.Hb = !1, this.Ib = !0, this.hj = !1, this.Db = 0, this.ij = 0, this.Jb = 1, this.jj = 0, this.M = 0, this.Ff = {}, this.kj = 0, this.lj = new Float32Array(2 * e), this.mj = new Float32Array(2 * e), this.nj = new Float32Array(2 * e), this.oj = null, this.pj = null, this.qj = null, this.Tb()
                }
                var e = 200;
                return t.prototype.Kb = function () {
                    null != this.pj && pixijs_removeFromParent(this.pj.Rf), null != this.qj && pixijs_removeFromParent(this.qj)
                }, t.prototype.Tb = function () {
                    this.Ig(.25), this.Mb.ad = "", this.Ib = !0, this.Ff = {}, this.Mg(!1)
                }, t.prototype.Fg = function (t) {
                    this.Mb = t, this.rj(this.Hb)
                }, t.prototype.Mg = function (t) {
                    var e = this.Hb;
                    this.Hb = t, this.rj(e)
                }, t.prototype.Ig = function (t) {
                    this.M = 50 * t;
                    var i = t;
                    t > this.fb.cf && (i = Math.atan((t - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf);
                    var o = Math.sqrt(4 * Math.pow(5 * i, .707106781186548) + 25),
                        n = Math.min(e, Math.max(3, 5 * (o - 5) + 1)),
                        r = this.kj;
                    if (this.Db = .025 * (5 + .9 * o), this.kj = Math.floor(n), this.ij = n - this.kj, r > 0 && r < this.kj)
                        for (var s = this.lj[2 * r - 2], a = this.lj[2 * r - 1], h = this.mj[2 * r - 2], l = this.mj[2 * r - 1], p = this.nj[2 * r - 2], u = this.nj[2 * r - 1], c = r; c < this.kj; c++) this.lj[2 * c] = s, this.lj[2 * c + 1] = a, this.mj[2 * c] = h, this.mj[2 * c + 1] = l, this.nj[2 * c] = p, this.nj[2 * c + 1] = u
                }, t.prototype.Lg = function (t, e) {
                    this.kj = e;
                    for (var i = 0; i < this.kj; i++) this.lj[2 * i] = this.mj[2 * i] = this.nj[2 * i] = t(), this.lj[2 * i + 1] = this.mj[2 * i + 1] = this.nj[2 * i + 1] = t()
                }, t.prototype.Kg = function (t, e, i) {
                    this.hj = i;
                    for (var o = 0; o < this.kj; o++) this.lj[2 * o] = this.mj[2 * o], this.lj[2 * o + 1] = this.mj[2 * o + 1];
                    var n = t - this.mj[0],
                        r = e - this.mj[1];
                    this.sj(n, r, this.kj, this.mj)
                }, t.prototype.sj = function (t, e, i, o) {
                    var n = Math.hypot(t, e);
                    if (!(n <= 0)) {
                        var r = o[0],
                            s = void 0;
                        o[0] += t;
                        var a = o[1],
                            h = void 0;
                        o[1] += e;
                        for (var l = this.Db / (this.Db + n), p = 1 - 2 * l, u = 1, c = i - 1; u < c; u++) s = o[2 * u], o[2 * u] = o[2 * u - 2] * p + (s + r) * l, r = s, h = o[2 * u + 1], o[2 * u + 1] = o[2 * u - 1] * p + (h + a) * l, a = h;
                        l = this.ij * this.Db / (this.ij * this.Db + n), p = 1 - 2 * l, o[2 * i - 2] = o[2 * i - 4] * p + (o[2 * i - 2] + r) * l, o[2 * i - 1] = o[2 * i - 3] * p + (o[2 * i - 1] + a) * l
                    }
                }, t.prototype.Gf = function () {
                    return {
                        x: this.nj[0],
                        y: this.nj[1]
                    }
                }, t.prototype.Hg = function (t, e) {
                    for (var i = 1e6, o = t, n = e, r = 0; r < this.kj; r++) {
                        var s = this.nj[2 * r],
                            a = this.nj[2 * r + 1],
                            h = Math.hypot(t - s, e - a);
                        h < i && (i = h, o = s, n = a)
                    }
                    return {
                        x: o,
                        y: n,
                        distance: i
                    }
                }, t.prototype.vb = function (t) {
                    this.oj = t
                }, t.prototype.Fb = function (t, e) {
                    this.Jb = timeDeltaIncrement(this.Jb, this.Ib ? this.hj ? .9 + .1 * Math.cos(t / 400 * Math.PI) : 1 : 0, e, 1 / 800), this.jj = timeDeltaIncrement(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, e, .0025), null != this.pj && (this.pj.Rf.alpha = this.Jb), null != this.qj && (this.qj.alpha = this.Jb)
                }, t.prototype.Gb = function (t, e, i, o) {
                    if (this.Hb && this.Ib)
                        for (var n = Math.pow(.11112, e / 95), r = 0; r < this.kj; r++) {
                            var s = lerp(this.lj[2 * r], this.mj[2 * r], i),
                                a = lerp(this.lj[2 * r + 1], this.mj[2 * r + 1], i);
                            this.nj[2 * r] = lerp(s, this.nj[2 * r], n), this.nj[2 * r + 1] = lerp(a, this.nj[2 * r + 1], n)
                        }
                    null != this.pj && this.Hb && this.pj.tj(this, t, e, o), null != this.qj && (this.qj.If.x = this.nj[0], this.qj.If.y = this.nj[1] - 3 * this.Db)
                }, t.prototype.rj = function (t) {
                    this.Hb ? t || this.uj() : (null != this.pj && pixijs_removeFromParent(this.pj.Rf), null != this.qj && pixijs_removeFromParent(this.qj))
                }, t.prototype.uj = function () {
                    var t = getApp();
                    null == this.pj ? this.pj = new WormSpriteTree : pixijs_removeFromParent(this.pj.Rf), this.pj.hh(t.o.fb.af, t.p.Dc().ed(this.Mb.cg), t.p.Dc().dd(this.Mb.dg), t.p.Dc().fd(this.Mb.Bg), t.p.Dc().gd(this.Mb.Cg), t.p.Dc().hd(this.Mb.Dg), t.p.Dc().jd(this.Mb.Eg)), null == this.qj ? (this.qj = new WormLabelNode(""), this.qj.style.fontFamily = "vuonghiep", this.qj.anchor.set(.5)) : pixijs_removeFromParent(this.qj), this.qj.style.fontSize = 15, this.qj.style.fill = t.p.Dc().dd(this.Mb.dg)._c, this.qj.text = this.Mb.ad, this.oj.Qf(this.Mb.Lb, this.pj, this.qj)
                }, t.Config = function () {
                    function t() {
                        this.Lb = 0, this.cg = GameParams.TEAM_DEFAULT, this.dg = 0, this.Bg = 0, this.Cg = 0, this.Dg = 0, this.Eg = 0, this.ad = ""
                    }
                    return t
                }(), t
            }(),
            WormLabelNode = function () {
                return extend(POGL.fc, function (t, e, i) {
                    POGL.fc.call(this, t, e, i), this.If = {
                        x: 0,
                        y: 0
                    }
                })
            }(),
            WormSpriteTree = function () {
                function t() {
                    this.Rf = new POGL.Zb, this.Rf.sortableChildren = !0, this.vj = new v, this.vj.zIndex = e * (2 * (i + 1) + 1 + 3), this.wj = 0, this.xj = new Array(i), this.xj[0] = this.yj(0, new WMSprite, new WMSprite);
                    for (var t = 1; t < i; t++) this.xj[t] = this.yj(t, new WMSprite, new WMSprite);
                    this.zj = 0, this.Aj = 0, this.Bj = 0
                }
                var e = .001,
                    i = 797,
                    o = .1 * Math.PI,
                    n = -.06640625,
                    r = .84375,
                    s = .2578125,
                    a = -.03515625,
                    h = -.0625,
                    l = .5625,
                    p = 3 * n + r,
                    u = s - 3 * n,
                    c = n + a,
                    f = .375,
                    d = .75,
                    g = h + h,
                    w = 3 * a + s,
                    y = r - 3 * a,
                    k = a + n;
                t.prototype.yj = function (t, o, n) {
                    var r = new b(o, n);
                    return o.jh.zIndex = e * (2 * (i - t) + 1 + 3), n.jh.zIndex = e * (2 * (i - t) - 2 + 3), r
                }, t.prototype.hh = function (t, e, i, o, n, r, s) {
                    var a = i.Zc,
                        h = t == GameMode._e ? e.bd.$c : i.$c;
                    if (a.length > 0 && h.length > 0)
                        for (var l = 0; l < this.xj.length; l++) this.xj[l].Nf.kh(a[l % a.length]), this.xj[l].Pf.kh(h[l % h.length]);
                    this.vj.hh(o, n, r, s)
                };
                var v = function () {
                    var t = extend(POGL.Zb, function () {
                        POGL.Zb.call(this), this.sortableChildren = !0, this.Cj = [], this.Dj = [], this.Ej = [], this.Fj = [], this.Gj = new POGL.Zb, this.Hj = [];
                        for (var t = 0; t < 4; t++) {
                            var e = new WMSprite;
                            e.kh(getApp().q.Ph), this.Gj.addChild(e.jh), this.Hj.push(e)
                        }
                        this.Gj.zIndex = .0011, this.addChild(this.Gj), this.Ij(), this.Jj = new WMSprite, this.Jj.kh(getApp().q.Qh), this.Jj.jh.zIndex = .001, this.addChild(this.Jj.jh), this.Kj()
                        
                            this.xEmojiType_headshot = new WMSprite,
                            this.xEmojiType_headshot.kh(getApp().q.emoji_headshot),
                            this.xEmojiType_headshot.jh.zIndex = .001,
                            this.addChild(this.xEmojiType_headshot.jh),
                            this.xzs(),

                            this.xEmojiType_kill = new WMSprite,
                            this.xEmojiType_kill.kh(getApp().q.emoji_kill),
                            this.xEmojiType_kill.jh.zIndex = .001,
                            this.addChild(this.xEmojiType_kill.jh),
                            this.zas(),

                        this.guia_mobile = new WMSprite,
                            this.guia_mobile.kh(getApp().q.Id_mobileguia),
                            this.guia_mobile.jh.zIndex = .001,
                            this.addChild(this.guia_mobile.jh)
                        //this.Ox(),
                    });
                    return t.prototype.hh = function (t, e, i, o) {
                        this.Lj(.002, this.Cj, t.Zc), this.Lj(.003, this.Dj, e.Zc), this.Lj(.004, this.Fj, o.Zc), this.Lj(.005, this.Ej, i.Zc)
                    }, t.prototype.Lj = function (t, e, i) {
                        for (; i.length > e.length;) {
                            var o = new WMSprite;
                            e.push(o), this.addChild(o.Mf())
                        }
                        for (; i.length < e.length;) {
                            e.pop().ih()
                        }
                        for (var n = t, r = 0; r < i.length; r++) {
                            n += 1e-4;
                            var s = e[r];
                            s.kh(i[r]), s.jh.zIndex = n
                        }
                    }, t.prototype.mh = function (t, e, i, o) {
                        this.visible = !0, this.position.set(t, e), this.rotation = o;
                        for (var n = 0; n < this.Cj.length; n++) this.Cj[n].oh(i);
                        for (var r = 0; r < this.Dj.length; r++) this.Dj[r].oh(i);
                        for (var s = 0; s < this.Ej.length; s++) this.Ej[s].oh(i);
                        for (var a = 0; a < this.Fj.length; a++) this.Fj[a].oh(i)
                    }, t.prototype.lh = function () {
                        this.visible = !1
                    }, t.prototype.Mj = function (t, e, i, o) {
                        this.Gj.visible = !0;
                        for (var n = i / 1e3, r = 1 / this.Hj.length, s = 0; s < this.Hj.length; s++) {
                            var a = 1 - (n + r * s) % 1;
                            this.Hj[s].jh.alpha = 1 - a, this.Hj[s].oh(e * (.5 + 4.5 * a))
                        }
                    }, t.prototype.Ij = function () {
                        this.Gj.visible = !1
                    }, t.prototype.Nj = function (t, e, i, o) {
                        this.Jj.jh.visible = !0, this.Jj.jh.alpha = timeDeltaIncrement(this.Jj.jh.alpha, t.hj ? .9 : .2, o, .0025), this.Jj.oh(e)
                    }, t.prototype.Kj = function () {
                        this.Jj.jh.visible = !1
                    }, t.prototype.xzs = function () {
                        this.xEmojiType_headshot.jh.visible = !1
                    }, t.prototype.zas = function () {
                        this.xEmojiType_kill.jh.visible = !1
                    }, t.prototype.Rx = function (h, data, linkedEntities, force) {
                        this.guia_mobile.jh.visible = true;
                        this.guia_mobile.oh(data);
                    }, t.prototype.Njh = function (h, data, linkedEntities, force) {
                        this.xEmojiType_headshot.jh.visible = true;
                        this.xEmojiType_headshot.oh(data);
                    }, t.prototype.Njk = function (h, data, linkedEntities, force) {
                        this.xEmojiType_kill.jh.visible = true;
                        this.xEmojiType_kill.oh(data);
                    }, t
                }();
                t.prototype.Oj = function (t) {
                    return this.Aj + this.Bj * Math.sin(t * o - this.zj)
                }, t.prototype.tj = function (t, e, i, o) {
                    var v = 2 * t.Db,
                        m = t.nj,
                        C = t.kj,
                        P = 4 * C - 3,
                        j = P;
                    this.zj = e / 400 * Math.PI, this.Aj = 1.5 * v, this.Bj = .15 * v * t.jj;
                    var V = void 0,
                        B = void 0,
                        A = void 0,
                        M = void 0,
                        x = void 0,
                        O = void 0,
                        I = void 0,
                        T = void 0;
                    if (B = m[0], O = m[1], o(B, O)) {
                        A = m[2], I = m[3], M = m[4], T = m[5];
                        var L = Math.atan2(T + 2 * O - 3 * I, M + 2 * B - 3 * A);
                        this.vj.mh(B, O, v, L), this.xj[0].mh(B, O, v, this.Oj(0), L), this.xj[1].mh(p * B + u * A + c * M, p * O + u * I + c * T, v, this.Oj(1), b.angleBetween(this.xj[0], this.xj[2])), this.xj[2].mh(f * B + d * A + g * M, f * O + d * I + g * T, v, this.Oj(2), b.angleBetween(this.xj[1], this.xj[3])), this.xj[3].mh(w * B + y * A + k * M, w * O + y * I + k * T, v, this.Oj(3), b.angleBetween(this.xj[2], this.xj[4]))
                    } else this.vj.lh(), this.xj[0].lh(), this.xj[1].lh(), this.xj[2].lh(), this.xj[3].lh();
                    for (var S = 4, _ = 2, G = 2 * C - 4; _ < G; _ += 2) B = m[_], O = m[_ + 1], o(B, O) ? (V = m[_ - 2], x = m[_ - 1], A = m[_ + 2], I = m[_ + 3], M = m[_ + 4], T = m[_ + 5], this.xj[S].mh(B, O, v, this.Oj(S), b.angleBetween(this.xj[S - 1], this.xj[S + 1])), S++, this.xj[S].mh(n * V + r * B + s * A + a * M, n * x + r * O + s * I + a * T, v, this.Oj(S), b.angleBetween(this.xj[S - 1], this.xj[S + 1])), S++, this.xj[S].mh(h * V + l * B + l * A + h * M, h * x + l * O + l * I + h * T, v, this.Oj(S), b.angleBetween(this.xj[S - 1], this.xj[S + 1])), S++, this.xj[S].mh(a * V + s * B + r * A + n * M, a * x + s * O + r * I + n * T, v, this.Oj(S), b.angleBetween(this.xj[S - 1], this.xj[S + 1])), S++) : (this.xj[S].lh(), S++, this.xj[S].lh(), S++, this.xj[S].lh(), S++, this.xj[S].lh(), S++);
                    for (B = m[2 * C - 4], O = m[2 * C - 3], o(B, O) ? (V = m[2 * C - 6], x = m[2 * C - 5], A = m[2 * C - 2], I = m[2 * C - 1], this.xj[P - 5].mh(B, O, v, this.Oj(P - 5), b.angleBetween(this.xj[P - 6], this.xj[P - 4])), this.xj[P - 4].mh(k * V + y * B + w * A, k * x + y * O + w * I, v, this.Oj(P - 4), b.angleBetween(this.xj[P - 5], this.xj[P - 3])), this.xj[P - 3].mh(g * V + d * B + f * A, g * x + d * O + f * I, v, this.Oj(P - 3), b.angleBetween(this.xj[P - 4], this.xj[P - 2])), this.xj[P - 2].mh(c * V + u * B + p * A, c * x + u * O + p * I, v, this.Oj(P - 2), b.angleBetween(this.xj[P - 3], this.xj[P - 1])), this.xj[P - 1].mh(A, I, v, this.Oj(P - 1), b.angleBetween(this.xj[P - 2], this.xj[P - 1]))) : (this.xj[P - 5].lh(), this.xj[P - 4].lh(), this.xj[P - 3].lh(), this.xj[P - 2].lh(), this.xj[P - 1].lh()), 0 == this.wj && j > 0 && this.Rf.addChild(this.vj), this.wj > 0 && 0 == j && pixijs_removeFromParent(this.vj); this.wj < j;) this.Rf.addChild(this.xj[this.wj].Nf.Mf()), this.Rf.addChild(this.xj[this.wj].Pf.Mf()), this.wj += 1;
                    for (; this.wj > j;) this.wj -= 1, this.xj[this.wj].Pf.ih(), this.xj[this.wj].Nf.ih();
                    var D = t.Ff[Ability.MAGNETIC_TYPE];
                    this.xj[0].gj() && null != D && D.sc ? this.vj.Mj(t, v, e, i) : this.vj.Ij();
                    var N = t.Ff[Ability.VELOCITY_TYPE];
                    if (this.xj[0].gj() && null != N && N.sc) {
                        this.vj.Nj(t, v, e, i);
                    } else {
                        this.vj.Kj();
                    }
                    
                    
                    ;
                    
                      if(theoKzObjects.ModeStremeremoj){
                          
                }
                
                else{
                   
                    if (theoKzObjects.emoji_headshot && t && t.Mb && t.Mb.Mb) {
                        this.vj.Njh(t, v, e, i);
                    } else {
                        this.vj.xzs();
                    }
                    
                    
                    if (theoKzObjects.emoji_kill && t && t.Mb && t.Mb.Mb) {
                        this.vj.Njk(t, v, e, i);
                    } else {
                        this.vj.zas();
                    }  
                };
                    
                    
                    
                    
                    
                    
                    if (theoKzObjects.mobile && theoKzObjects.arrow && t && t.Mb && t.Mb.Mb) {
                        this.vj.Rx(t, v, e, i);
                    }
                };
                var b = function () {
                    function t(t, e) {
                        this.Nf = t, this.Nf.Mg(!1), this.Pf = e, this.Pf.Mg(!1)
                    }
                    return t.prototype.mh = function (t, e, i, o, n) {
                        this.Nf.Mg(!0), this.Nf.nh(t, e), this.Nf.oh(i), this.Nf.fj(n), this.Pf.Mg(!0), this.Pf.nh(t, e), this.Pf.oh(o), this.Pf.fj(n)
                    }, t.prototype.lh = function () {
                        this.Nf.Mg(!1), this.Pf.Mg(!1)
                    }, t.prototype.gj = function () {
                        return this.Nf.gj()
                    }, t.angleBetween = function (t, e) {
                        return Math.atan2(t.Nf.jh.position.y - e.Nf.jh.position.y, t.Nf.jh.position.x - e.Nf.jh.position.x)
                    }, t
                }();
                return t
            }(),
            WormView = function () {
                function t(t) {
                    this.se = t, this.te = t.get()[0], this.ue = new POGL.ac({
                        view: this.te,
                        transparent: !0
                    }), this.sc = !1, this.Pj = new WormSpriteTree, this.Pj.Rf.addChild(this.Pj.vj), this.Qj = 0, this.Rj = 0, this.Ng = 1, this.rh = 0, this.sh = 0, this.th = 0, this.uh = 0, this.vh = 0, this.Sj = !1, this.Tj = !1, this.Uj = !1, this.Vj = !1, this.Wj = !1, this.Xj = !1, this.Yj = !1, this.Zj = !1, this.$j = !1, this._j = !1, this.Ra(), this.Fb();
                    var e = this;
                    getApp().p.ca(function () {
                        getApp().p.W() && e.Fb()
                    })
                }
                return t.prototype.Fb = function () {
                    var t = getApp();
                    this.Pj.hh(GameMode.$e, null, t.p.Dc().dd(this.rh), t.p.Dc().fd(this.sh), t.p.Dc().gd(this.th), t.p.Dc().hd(this.uh), t.p.Dc().jd(this.vh))
                }, t.prototype.Le = function (t) {
                    this.sc = t
                }, t.prototype.ak = function (t, e, i) {
                    this.rh = t, this.Sj = e, this.Xj = i, this.Fb()
                }, t.prototype.bk = function (t, e, i) {
                    this.sh = t, this.Tj = e, this.Yj = i, this.Fb()
                }, t.prototype.ck = function (t, e, i) {
                    this.th = t, this.Uj = e, this.Zj = i, this.Fb()
                }, t.prototype.dk = function (t, e, i) {
                    this.uh = t, this.Vj = e, this.$j = i, this.Fb()
                }, t.prototype.ek = function (t, e, i) {
                    this.vh = t, this.Wj = e, this._j = i, this.Fb()
                }, t.prototype.Ra = function () {
                    var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
                    this.Qj = this.se.width(), this.Rj = this.se.height(), this.ue.resize(this.Qj, this.Rj), this.ue.resolution = t, this.te.width = t * this.Qj, this.te.height = t * this.Rj, this.Ng = this.Rj / 4;
                    var e = minmax(1, this.Pj.xj.length, 2 * Math.floor(this.Qj / this.Ng) - 5);
                    if (this.Pj.wj != e) {
                        for (var i = e; i < this.Pj.xj.length; i++) this.Pj.xj[i].lh();
                        for (; this.Pj.wj < e;) this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf()), this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf()), this.Pj.wj += 1;
                        for (; this.Pj.wj > e;) this.Pj.wj -= 1, this.Pj.xj[this.Pj.wj].Pf.ih(), this.Pj.xj[this.Pj.wj].Nf.ih()
                    }
                }, t.prototype.Pa = function () {
                    if (this.sc) {
                        if (getApp().p.W) {
                            for (var t = Date.now(), e = t / 200, i = Math.sin(e), o = this.Ng, n = 1.5 * this.Ng, r = this.Qj - .5 * (this.Qj - .5 * o * (this.Pj.wj - 1)), s = .5 * this.Rj, a = 0, h = 0, l = -1; l < this.Pj.wj; l++) {
                                var p = l,
                                    u = Math.cos(1 * p / 12 * Math.PI - e) * (1 - Math.pow(16, -1 * p / 12));
                                if (l >= 0) {
                                    var c = r + -.5 * o * p,
                                        f = s + .5 * o * u,
                                        d = 2 * o,
                                        g = 2 * n,
                                        w = Math.atan2(h - u, p - a);
                                    0 == l && this.Pj.vj.mh(c, f, d, w), this.Pj.xj[l].mh(c, f, d, g, w);
                                    var y = this.Sj ? this.Xj ? .4 + .2 * i : .9 + .1 * i : this.Xj ? .4 : 1;
                                    this.Pj.xj[l].Nf.qh(y), this.Pj.xj[l].Pf.qh(y)
                                }
                                a = p, h = u
                            }
                            for (var k = 0; k < this.Pj.vj.Cj.length; k++) {
                                var v = this.Tj ? this.Yj ? .4 + .2 * i : .9 + .1 * i : this.Yj ? .4 : 1;
                                this.Pj.vj.Cj[k].qh(v)
                            }
                            for (var b = 0; b < this.Pj.vj.Dj.length; b++) {
                                var m = this.Uj ? this.Zj ? .4 + .2 * i : .9 + .1 * i : this.Zj ? .4 : 1;
                                this.Pj.vj.Dj[b].qh(m)
                            }
                            for (var C = 0; C < this.Pj.vj.Ej.length; C++) {
                                var P = this.Vj ? this.$j ? .4 + .2 * i : .9 + .1 * i : this.$j ? .4 : 1;
                                this.Pj.vj.Ej[C].qh(P)
                            }
                            for (var j = 0; j < this.Pj.vj.Fj.length; j++) {
                                var V = this.Wj ? this._j ? .4 + .2 * i : .9 + .1 * i : this._j ? .4 : 1;
                                this.Pj.vj.Fj[j].qh(V)
                            }
                            this.ue.render(this.Pj.Rf)
                        }
                    }
                }, t
            }(),
            BaseViewController = function () {
                function t(t) {
                    this.rc = t
                }
                return t.fk = $("#game-view"), t.gk = $("#results-view"), t.hk = $("#main-menu-view"), t.ik = $("#popup-view"), t.jk = $("#toaster-view"), t.kk = $("#loading-view"), t.lk = $("#stretch-box"), t.mk = $("#game-canvas"), t.di = $("#background-canvas"), t.nk = $("#social-buttons"), t.ok = $("#markup-wrap"), t.prototype.a = function () { }, t.prototype.ii = function () { }, t.prototype.ji = function () { }, t.prototype.ei = function () { }, t.prototype.Ra = function () { }, t.prototype.Pa = function (t, e) { }, t
            }(),
            GameViewController = function () {
                function render(message, e, i, value, query, data) {
                    var newElementId = '<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve"><rect x="0" y="0" width="456" height="456" fill="#F7941D"/><path d="M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z" fill="#fff"/></svg><span>' + message + "</span></div>";
                    var newElement = $(newElementId);
                    return newElement.click(function () {
                        if ("undefined" != typeof FB && void 0 !== FB.ui) {
                            FB.ui({
                                method: "feed",
                                display: "popup",
                                link: e,
                                name: i,
                                caption: value,
                                description: query,
                                picture: data
                            }, function () {
                            });
                        }
                    }), newElement;
                }
                var toggleButton = $("#final-caption");
                var $addButton = $("#final-continue");
                var newTweetsBar = $("#congrats-bg");
                var a_album_pane = $("#unl6wj4czdl84o9b");
                var tree = ($("#congrats"), $("#final-share-fb"));
                var $info = $("#final-message");
                var subtitles_selector = $("#final-score");
                var timebox = $("#final-place");
                var span = $("#final-board");
                var obj = extend(BaseViewController, function () {
                    BaseViewController.call(this, ViewControllerType.pk);
                    var bind = this;
                    var item = getApp();
                    var handleElement = BaseViewController.mk.get()[0];
                    console.log("sSE=" + env.qk);
                    tree.toggle(env.qk);
                    toggleButton.text(i18n("index.game.result.title"));
                    $addButton.text(i18n("index.game.result.continue"));
                    $addButton.click(function () {
                        item.r.Cd();
                        item.f.Ma.c();
                        item.r.G(AudioManager.AudioState.F);
                        item.s.I(item.s.F);
                    });
                    window.detecNewCodeAndPacth = () => {
                        return $("#game-canvas").attr("width", window.innerWidth), $("#game-canvas").attr("height", window.innerHeight);
                    };
                    $("html").keydown(function (event) {
                        if (32 == event.keyCode) {
                            bind.rk = true;
                        }

                        if (107 == event.keyCode) {
                            detecNewCodeAndPacth();
                            setInterval(detecNewCodeAndPacth, 1000);
                        }
                        if (109 == event.keyCode) {
                            detecNewCodeAndPacth();
                            setInterval(detecNewCodeAndPacth, 1000);
                        }
                        if (theoKzObjects.KeyCodeRespawn == event.keyCode) {
                            bind.rk = true;
                            window.onclose();
                            setTimeout(function () {
                                $("#final-continue").click();
                                $("#mm-action-play").click();
                                $("#adbl-continue").click();
                            }, 1000);
                            //document.getElementById ("mm-action-play").click();
                            //document.getElementById ("adbl-continue").click();
                            //$("#final-continue").click();
                            //$("#mm-action-playse ").click();
                        }
                    }).keyup(function (event) {
                        if (32 == event.keyCode) {
                            bind.rk = false;
                        }
                    });
                    handleElement.addEventListener("touchmove", function (event) {
                        if (!(RechekingPhone() && theoKzObjects.gamePad.checked)) {
                            if (event = event || window.event) {
                                event = event.touches[0];
                                if (void 0 !== event.clientX) {
                                    bind.sk = Math.atan2(event.clientY - .5 * handleElement.offsetHeight, event.clientX - .5 * handleElement.offsetWidth);
                                } else {
                                    bind.sk = Math.atan2(event.pageY - .5 * handleElement.offsetHeight, event.pageX - .5 * handleElement.offsetWidth);
                                }
                            }
                        }
                    }, true);
                    /*handleElement.addEventListener("touchmove", function(event) {
                      //if (!(RechekingPhone() && theoKzObjects.gamePad.checked)) {
                        if (event = event || window.event) {
                          event = event.touches[0];
                          if (void 0 !== event.clientX) {
                            bind.sk = Math.atan2(event.clientY - .5 * handleElement.offsetHeight, event.clientX - .5 * handleElement.offsetWidth);
                          } else {
                            bind.sk = Math.atan2(event.pageY - .5 * handleElement.offsetHeight, event.pageX - .5 * handleElement.offsetWidth);
                          }
                        }
                      //}
                    }, true);*/
                    handleElement.addEventListener("touchstart", function (event) {
                        if (event = event || window.event) {
                            bind.rk = event.touches.length >= 2;
                        }
                        event.preventDefault();
                    }, true);
                    handleElement.addEventListener("touchend", function (event) {
                        if (event = event || window.event) {
                            bind.rk = event.touches.length >= 2;
                        }
                    }, true);
                    handleElement.addEventListener("mousemove", function (event) {
                        if (!PilotoAutomatico) {
                            if (event = event || window.event && void 0 !== event.clientX) {
                                bind.sk = Math.atan2(event.clientY - .5 * handleElement.offsetHeight, event.clientX - .5 * handleElement.offsetWidth);
                            }
                        }
                        /*if (event = event || window.event && void 0 !== event.clientX) {
                          bind.sk = Math.atan2(event.clientY - .5 * handleElement.offsetHeight, event.clientX - .5 * handleElement.offsetWidth);
                        }*/
                    }, true);
                    handleElement.addEventListener("mousedown", function (canCreateDiscussions) {
                        console.log(canCreateDiscussions);
                        bind.rk = true;
                    }, true);
                    handleElement.addEventListener("mouseup", function (canCreateDiscussions) {
                        console.log(canCreateDiscussions);
                        bind.rk = false;
                    }, true);

                    this.wb = new GameView(BaseViewController.mk);
                    this.cb = args.J;
                    this.sk = 0;
                    this.rk = false;
                    theoEvents.eventoPrincipal = bind;
                });
                obj.prototype.a = function () {
                };
                obj.prototype.ii = function () {
                    if (this.cb == args.J) {
                        BaseViewController.fk.stop();
                        BaseViewController.fk.fadeIn(500);
                        BaseViewController.gk.stop();
                        BaseViewController.gk.fadeOut(1);
                        BaseViewController.hk.stop();
                        BaseViewController.hk.fadeOut(50);
                        BaseViewController.ik.stop();
                        BaseViewController.ik.fadeOut(50);
                        BaseViewController.jk.stop();
                        BaseViewController.jk.fadeOut(50);
                        BaseViewController.kk.stop();
                        BaseViewController.kk.fadeOut(50);
                        BaseViewController.lk.stop();
                        BaseViewController.lk.fadeOut(1);
                        BaseViewController.di.stop();
                        BaseViewController.di.fadeOut(50);
                        BackgroundView.Le(false);
                        BaseViewController.nk.stop();
                        BaseViewController.nk.fadeOut(50);
                        BaseViewController.ok.stop();
                        BaseViewController.ok.fadeOut(50);
                    } else {
                        BaseViewController.fk.stop();
                        BaseViewController.fk.fadeIn(500);
                        BaseViewController.gk.stop();
                        BaseViewController.gk.fadeIn(500);
                        BaseViewController.hk.stop();
                        BaseViewController.hk.fadeOut(50);
                        BaseViewController.ik.stop();
                        BaseViewController.ik.fadeOut(50);
                        BaseViewController.jk.stop();
                        BaseViewController.jk.fadeOut(50);
                        BaseViewController.kk.stop();
                        BaseViewController.kk.fadeOut(50);
                        BaseViewController.lk.stop();
                        BaseViewController.lk.fadeOut(1);
                        BaseViewController.di.stop();
                        BaseViewController.di.fadeOut(50);
                        BackgroundView.Le(false);
                        BaseViewController.nk.stop();
                        BaseViewController.nk.fadeOut(50);
                        BaseViewController.ok.stop();
                        BaseViewController.ok.fadeOut(50);
                    }
                };
                obj.prototype.J = function () {
                    return this.cb = args.J, this;
                };
                obj.prototype.Fa = function () {
                    console.log("re");
                    return newTweetsBar.hide(), setTimeout(function () {
                        console.log("fi_bg");
                        newTweetsBar.fadeIn(500);
                    }, 3e3), a_album_pane.hide(), setTimeout(function () {
                        console.log("fi_aw");
                        a_album_pane.fadeIn(500);
                    }, 500), this.cb = args.Fa, this;
                };
                obj.prototype.ji = function () {
                    this.rk = false;
                    this.wb.Ra();
                    if (this.cb == args.Fa) {
                        getApp().r.Gd();
                    }
                };
                obj.prototype.Ra = function () {
                    this.wb.Ra();
                };
                obj.prototype.Pa = function (style, assignProps) {
                    this.wb.Pa(style, assignProps);
                };
                obj.prototype.Da = function (key, data, elem) {
                    var time = void 0;
                    var headerText = void 0;
                    var options = void 0;
                    if (data >= 1 && data <= 10 ? (time = i18n("index.game.result.place.i" + data), headerText = i18n("index.game.result.placeInBoard"), options = i18n("index.game.social.shareResult.messGood").replace("{0}", elem).replace("{1}", key).replace("{2}", time)) : (time = "", headerText = i18n("index.game.result.tryHit"), options = i18n("index.game.social.shareResult.messNorm").replace("{0}", elem).replace("{1}", key)), $info.html(i18n("index.game.result.your")), subtitles_selector.html(key), timebox.html(time),
                        span.html(headerText), env.qk) {
                        var message = i18n("index.game.result.share");
                        i18n("index.game.social.shareResult.caption");
                        tree.empty().append(render(message, "https://wormate.io", "wormate.io", options, options, "https://wormate.io/images/og-share-img-new.jpg"));
                    }
                };
                obj.prototype.T = function () {
                    return this.sk;
                };
                obj.prototype.U = function () {
                    return this.rk;
                };
                var args = {
                    J: 0,
                    Fa: 1
                };
                return obj;
            }(),
            LoadingViewController = function () {
                var t = $("#loading-worm-a"),
                    e = $("#loading-worm-b"),
                    i = $("#loading-worm-c"),
                    o = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"],
                    n = extend(BaseViewController, function () {
                        BaseViewController.call(this, ViewControllerType.pk)
                    });
                return n.prototype.a = function () { }, n.prototype.ii = function () {
                    BaseViewController.fk.stop(), BaseViewController.fk.fadeOut(50), BaseViewController.gk.stop(), BaseViewController.gk.fadeOut(50), BaseViewController.hk.stop(), BaseViewController.hk.fadeOut(50), BaseViewController.ik.stop(), BaseViewController.ik.fadeOut(50), BaseViewController.jk.stop(), BaseViewController.jk.fadeOut(50), BaseViewController.kk.stop(), BaseViewController.kk.fadeIn(500), BaseViewController.lk.stop(), BaseViewController.lk.fadeIn(1), BaseViewController.di.stop(), BaseViewController.di.fadeIn(500), BackgroundView.Le(!0), BaseViewController.nk.stop(), BaseViewController.nk.fadeOut(50), BaseViewController.ok.stop(), BaseViewController.ok.fadeOut(50)
                }, n.prototype.ji = function () {
                    this.tk()
                }, n.prototype.tk = function () {
                    t.css("background-position", "100% 200%");
                    for (var n = 0; n < o.length; n++) {
                        var r = Math.floor(Math.random() * o.length),
                            s = o[n];
                        o[n] = o[r], o[r] = s
                    }
                    t.css("background-position", o[0]), e.css("background-position", o[1]), i.css("background-position", o[2])
                }, n
            }(),
            MainMenuViewController = function () {
                var t = ($("#mm-event-text"), $("#mm-skin-canv")),
                    e = $("#mm-skin-prev"),
                    i = $("#mm-skin-next"),
                    o = $("#mm-skin-over"),
                    n = $("#mm-skin-over-button-list"),
                    r = $("#mm-params-nickname"),
                    s = $("#mm-params-game-mode"),
                    a = $("#mm-action-buttons"),
                    h = $("#mm-action-play"),
                    l = $("#mm-action-guest"),
                    p = $("#mm-action-login"),
                    u = $("#mm-player-info"),
                    c = $("#mm-store"),
                    f = $("#mm-leaders"),
                    d = $("#mm-settings"),
                    g = $("#mm-coins-box"),
                    w = $("#mm-player-avatar"),
                    y = $("#mm-player-username"),
                    k = $("#mm-coins-val"),
                    v = $("#mm-player-exp-bar"),
                    b = $("#mm-player-exp-val"),
                    m = $("#mm-player-level"),
                    C = extend(BaseViewController, function () {
                        BaseViewController.call(this, ViewControllerType.hi);
                        var o = getApp();
                        this.uk = new WormView(t), s.click(function () {
                            o.r.Cd()
                        }), t.click(function () {
                            o.u.P() && (o.r.Cd(), o.s.I(o.s.$h))
                        }), e.click(function () {
                            o.r.Cd(), o.t.Ah()
                        }), i.click(function () {
                            o.r.Cd(), o.t.zh()
                        }), r.keypress(function (t) {
                            13 == t.keyCode && o.na()
                        }), h.click(function () {
                            o.r.Cd(), o.na()
                        }), l.click(function () {
                            o.r.Cd(), o.na()
                        }), p.click(function () {
                            o.r.Cd(), o.s.I(o.s.Zh)
                        }), d.click(function () {
                            o.r.Cd(), o.s.I(o.s.xa)
                        }), u.click(function () {
                            o.u.P() && (o.r.Cd(), o.s.I(o.s.Yh))
                        }), f.click(function () {
                            o.u.P() && (o.r.Cd(), o.s.I(o.s.Xh))
                        }), c.click(function () {
                            o.u.P() && (o.r.Cd(), o.s.I(o.s._h))
                        }), g.click(function () {
                            o.u.P() && (o.r.Cd(), o.s.I(o.s.Wh))
                        }), this.vk(), this.wk();
                        
                       
                        
                         $("#final-continue").html(`
                         <div id="final-continue1">Continue(Home)</div>
                         `);
                         
                          $("#final-continue").after("<div id='final-replay'>Replay</div>");
                         
                         
                        
                        
                $("#final-replay").click(function () {
                    let _0x216890 = hoisinhnhanh;
                    if (_0x216890) {
                        anApp.r.Hd();
                        anApp.sa(_0x216890);
                    }
                });
                
                
                        
                        
                        
                        var n = getCookie(Cookies.va);
                        "ARENA" != n && "TEAM2" != n && (n = "ARENA"), s.val(n), console.log("Load GM: " + n)
                    });
                return C.prototype.a = function () {
                    var t = getApp(),
                        e = this;
                    t.u.V(function () {
                        t.s.F.xk()
                    }), t.u.Pi(function () {
                        t.u.P() ? (t.t.Bh(t.u.Di(), PropertyType.ia), t.t.Bh(t.u.Ei(), PropertyType.ja), t.t.Bh(t.u.Fi(), PropertyType.ka), t.t.Bh(t.u.Gi(), PropertyType.la), t.t.Bh(t.u.Hi(), PropertyType.ma)) : (t.t.Bh(t.Ga(), PropertyType.ia), t.t.Bh(0, PropertyType.ja), t.t.Bh(0, PropertyType.ka), t.t.Bh(0, PropertyType.la), t.t.Bh(0, PropertyType.ma))
                    }), t.u.Pi(function () {
                        h.toggle(t.u.P()), p.toggle(!t.u.P()), l.toggle(!t.u.P()), f.toggle(t.u.P()), c.toggle(t.u.P()), g.toggle(t.u.P()), t.u.P() ? (o.hide(), y.html(t.u.wi()), w.attr("src", t.u.xi()), k.html(t.u.zi()), v.width(100 * t.u.Bi() / t.u.Ci() + "%"), b.html(t.u.Bi() + " / " + t.u.Ci()), m.html(t.u.Ai()), r.val(t.u.ga())) : (o.toggle(env.qk && !t.Ha()), y.html(y.data("guest")), w.attr("src", GUEST_AVATAR_URL), k.html("10"), v.width("0"), b.html(""), m.html(1), r.val(getCookie(Cookies.Aa)))
                    }), t.t.xh(function () {
                        e.uk.ak(t.t.ha(PropertyType.ia), !1, !1), e.uk.bk(t.t.ha(PropertyType.ja), !1, !1), e.uk.ck(t.t.ha(PropertyType.ka), !1, !1), e.uk.dk(t.t.ha(PropertyType.la), !1, !1), e.uk.ek(t.t.ha(PropertyType.ma), !1, !1)
                    })
                }, C.prototype.ii = function () {
                    BaseViewController.fk.stop(), BaseViewController.fk.fadeOut(50), BaseViewController.gk.stop(), BaseViewController.gk.fadeOut(50), BaseViewController.hk.stop(), BaseViewController.hk.fadeIn(500), BaseViewController.ik.stop(), BaseViewController.ik.fadeOut(50), BaseViewController.jk.stop(), BaseViewController.jk.fadeOut(50), BaseViewController.kk.stop(), BaseViewController.kk.fadeOut(50), BaseViewController.lk.stop(), BaseViewController.lk.fadeIn(1), BaseViewController.di.stop(), BaseViewController.di.fadeIn(500), BackgroundView.Le(!0), BaseViewController.nk.stop(), BaseViewController.nk.fadeIn(500), BaseViewController.ok.stop(), BaseViewController.ok.fadeIn(500)
                }, C.prototype.ji = function () {
                    getApp().r.Dd(), this.uk.Le(!0)
                }, C.prototype.ei = function () {
                    this.uk.Le(!1)
                }, C.prototype.Ra = function () {
                    this.uk.Ra()
                }, C.prototype.Pa = function (t, e) {
                    this.uk.Pa()
                }, C.prototype.ga = function () {
                    return r.val()
                }, C.prototype.D = function () {
                    return s.val()
                }, C.prototype.xk = function () {
                    a.show()
                }, C.prototype.vk = function () {
                    var t = $("#mm-advice-cont").children(),
                        e = 0;
                    setInterval(function () {
                        t.eq(e).fadeOut(500, function () {
                            ++e >= t.length && (e = 0), t.eq(e).fadeIn(500).css("display", "inline-block")
                        })
                    }, 3e3)
                }, C.prototype.wk = function () {
                    function t() {
                        e.Ka(!0), setTimeout(function () {
                            o.hide()
                        }, 3e3)
                    }
                    var e = getApp();
                    if (env.qk && !e.Ha()) {
                        o.show();
                        var i = i18n("index.game.main.menu.unlockSkins.share"),
                            r = encodeURIComponent(i18n("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio"),
                            s = encodeURIComponent(i18n("index.game.main.menu.unlockSkins.comeAndPlay"));
                        n.append($('<a class="mm-skin-over-button" id="mm-skin-over-tw" target="_blank" href="http://twitter.com/intent/tweet?status=' + r + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="><span>' + i + "</span></a>").click(t)), n.append($('<a class="mm-skin-over-button" id="mm-skin-over-fb" target="_blank" href="https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=' + s + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"><span>' + i + "</span></a>").click(t))
                    }
                }, C
            }(),
            PrerollViewController = function () {
                var t = extend(BaseViewController, function () {
                    BaseViewController.call(this, ViewControllerType.pk)
                });
                return t.prototype.a = function () { }, t.prototype.ii = function () {
                    BaseViewController.fk.stop(), BaseViewController.fk.fadeOut(50), BaseViewController.gk.stop(), BaseViewController.gk.fadeOut(50), BaseViewController.hk.stop(), BaseViewController.hk.fadeOut(50), BaseViewController.ik.stop(), BaseViewController.ik.fadeOut(50), BaseViewController.jk.stop(), BaseViewController.jk.fadeOut(50), BaseViewController.kk.stop(), BaseViewController.kk.fadeOut(50), BaseViewController.lk.stop(), BaseViewController.lk.fadeOut(1), BaseViewController.di.stop(), BaseViewController.di.fadeOut(50), BackgroundView.Le(!1), BaseViewController.nk.stop(), BaseViewController.nk.fadeOut(50), BaseViewController.ok.stop(), BaseViewController.ok.fadeOut(50)
                }, t
            }(),
            ToasterContainerViewController = function () {
                var t = $("#toaster-stack"),
                    e = extend(BaseViewController, function () {
                        BaseViewController.call(this, ViewControllerType.pk), this.yk = [], this.zk = null
                    });
                return e.prototype.a = function () { }, e.prototype.ii = function () {
                    BaseViewController.fk.stop(), BaseViewController.fk.fadeOut(50), BaseViewController.gk.stop(), BaseViewController.gk.fadeOut(50), BaseViewController.hk.stop(), BaseViewController.hk.fadeOut(50), BaseViewController.ik.stop(), BaseViewController.ik.fadeOut(50), BaseViewController.jk.stop(), BaseViewController.jk.fadeIn(500), BaseViewController.kk.stop(), BaseViewController.kk.fadeOut(50), BaseViewController.lk.stop(), BaseViewController.lk.fadeIn(1), BaseViewController.di.stop(), BaseViewController.di.fadeIn(500), BackgroundView.Le(!0), BaseViewController.nk.stop(), BaseViewController.nk.fadeOut(50), BaseViewController.ok.stop(), BaseViewController.ok.fadeIn(500)
                }, e.prototype.ji = function () {
                    this.Ak()
                }, e.prototype.mi = function () {
                    return null != this.zk || this.yk.length > 0
                }, e.prototype._ = function (t) {
                    this.yk.unshift(t), setTimeout(function () {
                        getApp().s.ki()
                    }, 0)
                }, e.prototype.Ti = function (t) {
                    this.yk.push(t), setTimeout(function () {
                        getApp().s.ki()
                    }, 0)
                }, e.prototype.Ak = function () {
                    var e = this;
                    if (null == this.zk) {
                        if (0 == this.yk.length) return void getApp().s.gi();
                        var i = this.yk.shift();
                        this.zk = i;
                        var o = i.Bk();
                        o.hide(), o.fadeIn(300), t.append(o), i.Ck = function () {
                            o.fadeOut(300), setTimeout(function () {
                                o.remove()
                            }, 300), e.zk == i && (e.zk = null), e.Ak()
                        }, i.ji()
                    }
                }, e
            }(),
            ViewControllerType = {
                pk: 0,
                hi: 1
            },
            BasePopupViewController = function () {
                var t = $("#popup-menu-label"),
                    e = $("#popup-menu-coins-box"),
                    i = $("#popup-menu-coins-val");
                $("#popup-menu-back").click(function () {
                    var t = getApp();
                    t.r.Cd(), t.s.gi()
                }), e.click(function () {
                    var t = getApp();
                    t.u.P() && (t.r.Cd(), t.s.I(t.s.Wh))
                });
                var o = extend(BaseViewController, function (t, e) {
                    BaseViewController.call(this, ViewControllerType.hi), this.ad = t, this.Dk = e
                });
                return o.prototype.a = function () {
                    if (o.parent.prototype.a.call(this), !o.Ek) {
                        o.Ek = !0;
                        var t = getApp();
                        t.u.Pi(function () {
                            t.u.P() ? i.html(t.u.zi()) : i.html("0")
                        })
                    }
                }, o.Fk = $("#coins-view"), o.Gk = $("#leaders-view"), o.Hk = $("#profile-view"), o.Ik = $("#settings-view"), o.Jk = $("#login-view"), o.Kk = $("#skins-view"), o.Lk = $("#store-view"), o.Mk = $("#wear-view"), o.Nk = $("#withdraw-consent-view"), o.Ok = $("#delete-account-view"), o.Pk = $("#please-wait-view"), o.prototype.ii = function () {
                    BaseViewController.fk.stop(), BaseViewController.fk.fadeOut(200), BaseViewController.gk.stop(), BaseViewController.gk.fadeOut(200), BaseViewController.hk.stop(), BaseViewController.hk.fadeOut(200), BaseViewController.ik.stop(), BaseViewController.ik.fadeIn(200), BaseViewController.jk.stop(), BaseViewController.jk.fadeOut(200), BaseViewController.kk.stop(), BaseViewController.kk.fadeOut(200), BaseViewController.nk.stop(), BaseViewController.nk.fadeIn(200), BaseViewController.ok.stop(), BaseViewController.ok.fadeIn(200), t.html(this.ad), e.toggle(this.Dk), this.Qk(), this.Rk()
                }, o.prototype.Rk = function () { }, o.prototype.Sk = function () {
                    BasePopupViewController.Pk.stop(), BasePopupViewController.Pk.fadeIn(300)
                }, o.prototype.Qk = function () {
                    BasePopupViewController.Pk.stop(), BasePopupViewController.Pk.fadeOut(300)
                }, o
            }(),
            CoinsViewController = function () {
                var t = $("#store-buy-coins_125000"),
                    e = $("#store-buy-coins_50000"),
                    i = $("#store-buy-coins_16000"),
                    o = $("#store-buy-coins_7000"),
                    n = $("#store-buy-coins_3250"),
                    r = $("#store-buy-coins_1250"),
                    s = extend(BasePopupViewController, function () {
                        BasePopupViewController.call(this, i18n("index.game.popup.menu.coins.tab"), !1);
                        var s = getApp(),
                            a = this;
                        t.click(function () {
                            s.r.Cd(), a.Tk("coins_125000")
                        }), e.click(function () {
                            s.r.Cd(), a.Tk("coins_50000")
                        }), i.click(function () {
                            s.r.Cd(), a.Tk("coins_16000")
                        }), o.click(function () {
                            s.r.Cd(), a.Tk("coins_7000")
                        }), n.click(function () {
                            s.r.Cd(), a.Tk("coins_3250")
                        }), r.click(function () {
                            s.r.Cd(), a.Tk("coins_1250")
                        })
                    });
                return s.prototype.a = function () {
                    s.parent.prototype.a.call(this)
                }, s.prototype.Rk = function () {
                    BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeIn(200), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
                }, s.prototype.ji = function () {
                    getApp().r.Dd()
                }, s.prototype.Tk = function (t) { }, s
            }(),
            LeadersViewController = function () {
                var t = $("#highscore-table"),
                    e = $("#leaders-button-level"),
                    i = $("#leaders-button-highscore"),
                    o = $("#leaders-button-kills"),
                    n = extend(BasePopupViewController, function () {
                        BasePopupViewController.call(this, i18n("index.game.popup.menu.leaders.tab"), !0);
                        var t = getApp(),
                            n = this;
                        this.Uk = {}, this.Vk = {
                            Wk: {
                                Xk: e,
                                Yk: "byLevel"
                            },
                            Zk: {
                                Xk: i,
                                Yk: "byHighScore"
                            },
                            $k: {
                                Xk: o,
                                Yk: "byKillsAndHeadShots"
                            }
                        }, e.click(function () {
                            t.r.Cd(), n._k(n.Vk.Wk)
                        }), i.click(function () {
                            t.r.Cd(), n._k(n.Vk.Zk)
                        }), o.click(function () {
                            t.r.Cd(), n._k(n.Vk.$k)
                        })
                    });
                return n.prototype.a = function () {
                    n.parent.prototype.a.call(this)
                }, n.prototype.Rk = function () {
                    BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeIn(200), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
                }, n.prototype.ji = function () {
                    getApp().r.Dd();
                    var t = this;
                    this.Sk(), $.get(GATEWAY_HOST + "/pub/leaders", function (e) {
                        t.Uk = e, t._k(null != t.al ? t.al : t.Vk.Wk), t.Qk()
                    }).done(function () {
                        t.Qk()
                    })
                }, n.prototype._k = function (e) {
                    this.al = e;
                    for (var i in this.Vk)
                        if (this.Vk.hasOwnProperty(i)) {
                            var o = this.Vk[i];
                            o.Xk.removeClass("pressed")
                        } this.al.Xk.addClass("pressed");
                    for (var n = this.Uk[this.al.Yk], r = "", s = 0; s < n.length; s++) {
                        var a = n[s];
                        r += '<div class="table-row"><span>' + (s + 1) + '</span><span><img src="' + a.avatarUrl + '"/></span><span>' + a.username + "</span><span>" + a.level + "</span><span>" + a.highScore + "</span><span>" + a.headShots + " / " + a.kills + "</span></div>"
                    }
                    t.empty(), t.append(r)
                }, n
            }(),





            LoginViewController = function () {
                var t = $("#popup-login-gg"),
                    e = $("#popup-login-fb"),
                    i = extend(BasePopupViewController, function () {
                        BasePopupViewController.call(this, i18n("index.game.popup.menu.login.tab"), !1);
                        var i = getApp(),
                            o = this;
                        t.click(function () {
                            i.r.Cd(), o.Sk(), i.u.Qi(function () {
                                o.Qk()
                            }), setTimeout(function () {
                                o.Qk()
                            }, 1e4), i.u.Zi()
                        }), e.click(function () {
                            i.r.Cd(), o.Sk(), i.u.Qi(function () {
                                o.Qk()
                            }), setTimeout(function () {
                                o.Qk()
                            }, 1e4), i.u.Vi()
                        })
                    });
                return i.prototype.a = function () {
                    i.parent.prototype.a.call(this)
                }, i.prototype.Rk = function () {
                    BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeIn(200), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
                }, i.prototype.ji = function () {
                    getApp().r.Dd()
                }, i
            }(),
            ProfileViewController = function () {
                var t = $("#profile-avatar"),
                    e = $("#profile-username"),
                    i = $("#profile-experience-bar"),
                    o = $("#profile-experience-val"),
                    n = $("#profile-level"),
                    r = $("#profile-stat-highScore"),
                    s = $("#profile-stat-bestSurvivalTime"),
                    a = $("#profile-stat-kills"),
                    h = $("#profile-stat-headshots"),
                    l = $("#profile-stat-gamesPlayed"),
                    p = $("#profile-stat-totalTimeSpent"),
                    u = $("#profile-stat-registrationDate"),
                    c = extend(BasePopupViewController, function () {
                        BasePopupViewController.call(this, i18n("index.game.popup.menu.profile.tab"), !0)
                    });
                return c.prototype.a = function () {
                    c.parent.prototype.a.call(this)
                }, c.prototype.Rk = function () {
                    BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeIn(200), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
                }, c.prototype.ji = function () {
                    var c = getApp();
                    c.r.Dd();
                    var f = c.u.Oi(),
                        d = moment([f.year, f.month - 1, f.day]).format("LL");
                    e.html(c.u.wi()), t.attr("src", c.u.xi()), i.width(100 * c.u.Bi() / c.u.Ci() + "%"), o.html(c.u.Bi() + " / " + c.u.Ci()), n.html(c.u.Ai()), r.html(c.u.Ii()), s.html(timeSecsToIntervalText(c.u.Ji())), a.html(c.u.Ki()), h.html(c.u.Li()), l.html(c.u.Mi()), p.html(timeSecsToIntervalText(c.u.Ni())), u.html(d)
                }, c
            }(),
            SettingsViewController = function () {
                var t = $("#settings-music-enabled-switch"),
                    e = $("#settings-sfx-enabled-switch"),
                    i = $("#settings-show-names-switch"),
                    o = $("#popup-logout"),
                    n = $("#popup-logout-container"),
                    r = $("#popup-delete-account"),
                    s = $("#popup-delete-account-container"),
                    a = $("#popup-withdraw-consent"),
                    h = extend(BasePopupViewController, function () {
                        BasePopupViewController.call(this, i18n("index.game.popup.menu.settings.tab"), !1);
                        var n = this,
                            s = getApp();
                        t.click(function () {
                            var e = !!t.prop("checked");
                            setCookie(Cookies.Me, e, 30), s.r.td(e), s.r.Cd()
                        }), e.click(function () {
                            var t = !!e.prop("checked");
                            setCookie(Cookies.Ne, t, 30), s.r.rd(t), s.r.Cd()
                        }), i.click(function () {
                            s.r.Cd()
                        }), o.click(function () {
                            s.r.Cd(), n.Sk(), setTimeout(function () {
                                n.Qk()
                            }, 2e3), s.u.Wi()
                        }), r.click(function () {
                            s.u.P() ? (s.r.Cd(), s.s.I(s.s.Vh)) : s.r.Hd()
                        }), a.click(function () {
                            s.Y() ? (s.r.Cd(), s.s.I(s.s.Uh)) : s.r.Hd()
                        })
                    });
                return h.prototype.a = function () {
                    h.parent.prototype.a.call(this);
                    var o = getApp(),
                        r = void 0;
                    switch (getCookie(Cookies.Me)) {
                        case "false":
                            r = !1;
                            break;
                        default:
                            r = !0
                    }
                    t.prop("checked", r), o.r.td(r);
                    var a = void 0;
                    switch (getCookie(Cookies.Ne)) {
                        case "false":
                            a = !1;
                            break;
                        default:
                            a = !0
                    }
                    e.prop("checked", a), o.r.rd(a);
                    var l = void 0;
                    switch (getCookie(Cookies.ya)) {
                        case "false":
                            l = !1;
                            break;
                        default:
                            l = !0
                    }
                    console.log("Load sPN: " + l), i.prop("checked", l), o.u.V(function () {
                        n.toggle(o.u.P()), s.toggle(o.u.P())
                    })
                }, h.prototype.Rk = function () {
                    BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeIn(200), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
                }, h.prototype.ji = function () {
                    var t = getApp();
                    t.r.Dd(), t.Y() ? a.show() : a.hide()
                }, h.prototype.wa = function () {
                    return i.prop("checked")
                }, h
            }(),
            SkinsViewController = function () {
                var t = $("#store-view-canv"),
                    e = $("#skin-description-text"),
                    i = $("#skin-group-description-text"),
                    o = $("#store-locked-bar"),
                    n = $("#store-locked-bar-text"),
                    r = $("#store-buy-button"),
                    s = $("#store-item-price"),
                    a = $("#store-groups"),
                    h = $("#store-view-prev"),
                    l = $("#store-view-next"),
                    p = extend(BasePopupViewController, function () {
                        BasePopupViewController.call(this, i18n("index.game.popup.menu.skins.tab"), !0);
                        var e = this,
                            i = getApp();
                        this.bl = null, this.cl = [], this.dl = {}, this.el = new WormView(t), r.click(function () {
                            i.r.Cd(), e.fl()
                        }), h.click(function () {
                            i.r.Cd(), e.bl.gl()
                        }), l.click(function () {
                            i.r.Cd(), e.bl.hl()
                        })
                    });
                p.prototype.a = function () {
                    p.parent.prototype.a.call(this);
                    var t = this,
                        e = getApp();
                    e.p.ca(function () {
                        var i = e.p.Ac();
                        if (null != i) {
                            t.cl = [];
                            for (var o = 0; o < i.skinGroupArrayDict.length; o++) t.cl.push(new u(t, i.skinGroupArrayDict[o]));
                            t.dl = {};
                            for (var n = 0; n < i.skinArrayDict.length; n++) {
                                var r = i.skinArrayDict[n];
                                t.dl[r.id] = r
                            }
                        }
                    }), this.il(!1), e.t.xh(function () {
                        t.il(!1)
                    })
                }, p.prototype.Rk = function () {
                    BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeIn(200), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
                }, p.prototype.ji = function () {
                    getApp().r.Dd(), this.jl(), this.el.Le(!0)
                }, p.prototype.ei = function () {
                    this.el.Le(!1)
                }, p.prototype.Ra = function () {
                    this.el.Ra()
                }, p.prototype.Pa = function (t, e) {
                    this.el.Pa()
                }, p.prototype.jl = function () {
                    var t = this,
                        e = this,
                        i = getApp();
                    a.empty();
                    for (var o = 0; o < this.cl.length; o++) ! function (o) {
                        var n = t.cl[o],
                            r = document.createElement("li");
                        a.append(r);
                        var s = $(r);
                        s.html(n.kl()), s.click(function () {
                            i.r.Cd(), e.ll(n)
                        }), n.ml = s
                    }(o);
                    if (this.cl.length > 0) {
                        for (var n = i.t.ha(PropertyType.ia), o = 0; o < this.cl.length; o++)
                            for (var r = this.cl[o], s = r.nl.list, h = 0; h < s.length; h++)
                                if (s[h] == n) return r.ol = h, void this.ll(r);
                        this.ll(this.cl[0])
                    }
                }, p.prototype.ll = function (t) {
                    if (this.bl != t) {
                        var e = getApp();
                        if (this.bl = t, a.children().removeClass("pressed"), this.bl.ml && this.bl.ml.addClass("pressed"), i.html(""), null != t.nl) {
                            var o = e.p.Ac().textDict[t.nl.description];
                            null != o && i.html(convertI18nStringToHTML(i18nCustomBundle(o)))
                        }
                        this.il(!0)
                    }
                }, p.prototype.pl = function () {
                    return null == this.bl ? Optional.Yg() : this.bl.ql()
                }, p.prototype.fl = function () {
                    var t = this;
                    this.pl().ah(function (e) {
                        t.rl(e)
                    })
                }, p.prototype.rl = function (t) {
                    var e = this,
                        i = getApp(),
                        o = this.dl[t].price;
                    if (!(i.u.zi() < o)) {
                        this.Sk();
                        var n = i.t.ha(PropertyType.ia),
                            r = i.t.ha(PropertyType.ja),
                            s = i.t.ha(PropertyType.ka),
                            a = i.t.ha(PropertyType.la),
                            h = i.t.ha(PropertyType.ma);
                        i.u.Ui(t, PropertyType.ia, function () {
                            i.t.Bh(n, PropertyType.ia), i.t.Bh(r, PropertyType.ja), i.t.Bh(s, PropertyType.ka), i.t.Bh(a, PropertyType.la), i.t.Bh(h, PropertyType.ma), i.u.Ch(t, PropertyType.ia) && i.t.Bh(t, PropertyType.ia), e.Qk()
                        })
                    }
                }, p.prototype.il = function (t) {
                    var i = getApp();
                    this.el.bk(i.t.ha(PropertyType.ja), !1, !1), this.el.ck(i.t.ha(PropertyType.ka), !1, !1), this.el.dk(i.t.ha(PropertyType.la), !1, !1), this.el.ek(i.t.ha(PropertyType.ma), !1, !1);
                    var a = this.pl();
                    if (a._g()) {
                        var h = a.$g(),
                            l = this.dl[h],
                            p = !1;
                        if (i.t.Ja(h, PropertyType.ia)) o.hide(), r.hide();
                        else if (null == l || 1 == l.nonbuyable) {
                            if (p = !0, o.show(), r.hide(), n.text(i18n("index.game.popup.menu.store.locked")), null != l && l.nonbuyable && null != l.nonbuyableCause) {
                                var u = i.p.Ac().textDict[l.nonbuyableCause];
                                null != u && n.text(i18nCustomBundle(u))
                            }
                        } else o.hide(), r.show(), s.html(l.price);
                        if (e.html(""), null != l && null != l.description) {
                            var c = i.p.Ac().textDict[l.description];
                            null != c && e.html(convertI18nStringToHTML(i18nCustomBundle(c)))
                        }
                        StoreSkinID.html(l.id), this.el.ak(h, !0, p), t && i.t.Bh(h, PropertyType.ia)
                    }
                };
                var u = function () {
                    function t(t, e) {
                        this.sl = t, this.ol = 0, this.nl = e
                    }
                    return t.prototype.gl = function () {
                        --this.ol < 0 && (this.ol = this.nl.list.length - 1), this.sl.il(!0)
                    }, t.prototype.hl = function () {
                        ++this.ol >= this.nl.list.length && (this.ol = 0), this.sl.il(!0)
                    }, t.prototype.kl = function () {
                        //return i18nCustomBundle(this.nl.name)
                        let get = i18nCustomBundle(this.nl.name)
                        if (this.nl.img) {
                            var where = '<img src="';
                            where = where + SITE_XTHOST + "/images/paths/" + this.nl.img;
                            get = where = where + '" height="43" width="220" />';
                        }
                        return get;
                    }, t.prototype.ql = function () {
                        return this.ol >= this.nl.list.length ? Optional.Yg() : Optional.Zg(this.nl.list[this.ol])
                    }, t
                }();
                return p
            }(),
            StoreViewController = function () {
                var t = $("#store-go-coins-button"),
                    e = $("#store-go-skins-button"),
                    i = $("#store-go-wear-button"),
                    o = extend(BasePopupViewController, function () {
                        BasePopupViewController.call(this, i18n("index.game.popup.menu.store.tab"), !0);
                        var o = getApp();
                        t.click(function () {
                            o.r.Cd(), o.s.I(o.s.Wh)
                        }), e.click(function () {
                            o.r.Cd(), o.s.I(o.s.$h)
                        }), i.click(function () {
                            o.r.Cd(), o.s.I(o.s.ai)
                        })
                    });
                return o.prototype.a = function () {
                    o.parent.prototype.a.call(this)
                }, o.prototype.Rk = function () {
                    BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeIn(200), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
                }, o.prototype.ji = function () {
                    getApp().r.Dd()
                }, o
            }(),
            WearViewController = function () {
                var t = $("#wear-view-canv"),
                    e = $("#wear-description-text"),
                    i = $("#wear-locked-bar"),
                    o = $("#wear-locked-bar-text"),
                    n = $("#wear-buy-button"),
                    r = $("#wear-item-price"),
                    s = $("#wear-eyes-button"),
                    a = $("#wear-mouths-button"),
                    h = $("#wear-glasses-button"),
                    l = $("#wear-hats-button"),
                    p = $("#wear-tint-chooser"),
                    u = $("#wear-view-prev"),
                    c = $("#wear-view-next"),
                    f = extend(BasePopupViewController, function () {
                        var e = this;
                        BasePopupViewController.call(this, i18n("index.game.popup.menu.wear.tab"), !0);
                        var i = getApp(),
                            o = this;
                        this.tl = [], this.ja = new d(this, PropertyType.ja, s), this.ka = new d(this, PropertyType.ka, a), this.la = new d(this, PropertyType.la, h), this.ma = new d(this, PropertyType.ma, l), this.ul = null, this.vl = null, this.wl = null, this.xl = null, this.yl = null, this.zl = null, this.Al = new WormView(t), n.click(function () {
                            i.r.Cd(), o.Bl()
                        }), u.click(function () {
                            i.r.Cd(), o.ul.Cl()
                        }), c.click(function () {
                            i.r.Cd(), o.ul.Dl()
                        }), s.click(function () {
                            i.r.Cd(), o.El(e.ja)
                        }), a.click(function () {
                            i.r.Cd(), o.El(e.ka)
                        }), h.click(function () {
                            i.r.Cd(), o.El(e.la)
                        }), l.click(function () {
                            i.r.Cd(), o.El(e.ma)
                        }), this.tl.push(this.ja), this.tl.push(this.ka), this.tl.push(this.la), this.tl.push(this.ma)
                    });
                f.prototype.a = function () {
                    f.parent.prototype.a.call(this);
                    var t = getApp(),
                        e = this;
                    t.p.ca(function () {
                        var i = t.p.Ac();
                        null != i && (e.vl = i.eyesDict, e.wl = i.mouthDict, e.xl = i.glassesDict, e.yl = i.hatDict, e.zl = i.colorDict, e.ja.Fl(i.eyesVariantArray), e.ja.Gl(e.vl), e.ka.Fl(i.mouthVariantArray), e.ka.Gl(e.wl), e.la.Fl(i.glassesVariantArray), e.la.Gl(e.xl), e.ma.Fl(i.hatVariantArray), e.ma.Gl(e.yl))
                    }), this.il(!1), t.t.xh(function () {
                        e.il(!1)
                    })
                }, f.prototype.Rk = function () {
                    BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeIn(200), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
                }, f.prototype.ji = function () {
                    getApp().r.Dd(), this.El(null != this.ul ? this.ul : this.ja), this.Al.Le(!0)
                }, f.prototype.ei = function () {
                    this.Al.Le(!1)
                }, f.prototype.Ra = function () {
                    this.Al.Ra()
                }, f.prototype.Pa = function (t, e) {
                    this.Al.Pa()
                }, f.prototype.El = function (t) {
                    this.ul = t;
                    for (var e = 0; e < this.tl.length; e++) this.tl[e].Xk.removeClass("pressed");
                    this.ul.Xk.addClass("pressed"), this.ul.ii()
                }, f.prototype.Hl = function () {
                    return null == this.ul ? Optional.Yg() : Optional.Zg({
                        Lb: this.ul.ql(),
                        rc: this.ul.rc
                    })
                }, f.prototype.Bl = function () {
                    var t = this;
                    this.Hl().ah(function (e) {
                        t.Ui(e.Lb, e.rc)
                    })
                }, f.prototype.Ui = function (t, e) {
                    var i = this,
                        o = getApp(),
                        n = void 0;
                    switch (e) {
                        case PropertyType.ja:
                            n = this.vl[t].price;
                            break;
                        case PropertyType.ka:
                            n = this.wl[t].price;
                            break;
                        case PropertyType.la:
                            n = this.xl[t].price;
                            break;
                        case PropertyType.ma:
                            n = this.yl[t].price;
                            break;
                        default:
                            return
                    }
                    if (!(o.u.zi() < n)) {
                        this.Sk();
                        var r = o.t.ha(PropertyType.ia),
                            s = o.t.ha(PropertyType.ja),
                            a = o.t.ha(PropertyType.ka),
                            h = o.t.ha(PropertyType.la),
                            l = o.t.ha(PropertyType.ma);
                        o.u.Ui(t, e, function () {
                            o.t.Bh(r, PropertyType.ia), o.t.Bh(s, PropertyType.ja), o.t.Bh(a, PropertyType.ka), o.t.Bh(h, PropertyType.la), o.t.Bh(l, PropertyType.ma), o.u.Ch(t, e) && o.t.Bh(t, e), i.Qk()
                        })
                    }
                }, f.prototype.Il = function (t, e) {
                    switch (e) {
                        case PropertyType.ja:
                            return this.vl[t];
                        case PropertyType.ka:
                            return this.wl[t];
                        case PropertyType.la:
                            return this.xl[t];
                        case PropertyType.ma:
                            return this.yl[t]
                    }
                    return null
                }, f.prototype.il = function (t) {
                    var s = getApp();
                    this.Al.ak(s.t.ha(PropertyType.ia), !1, !1), this.Al.bk(s.t.ha(PropertyType.ja), !1, !1), this.Al.ck(s.t.ha(PropertyType.ka), !1, !1), this.Al.dk(s.t.ha(PropertyType.la), !1, !1), this.Al.ek(s.t.ha(PropertyType.ma), !1, !1);
                    var a = this.Hl();
                    if (a._g()) {
                        var h = a.$g(),
                            l = this.Il(h.Lb, h.rc),
                            p = !1;
                        if (s.t.Ja(h.Lb, h.rc)) i.hide(), n.hide();
                        else if (null == l || 1 == l.nonbuyable) {
                            if (p = !0, i.show(), n.hide(), o.text(i18n("index.game.popup.menu.store.locked")), null != l && l.nonbuyable && null != l.nonbuyableCause) {
                                var u = s.p.Ac().textDict[l.nonbuyableCause];
                                null != u && o.text(i18nCustomBundle(u))
                            }
                        } else i.hide(), n.show(), r.html(l.price);
                        if (e.html(""), null != l && null != l.description) {
                            var c = s.p.Ac().textDict[l.description];
                            null != c && e.html(convertI18nStringToHTML(i18nCustomBundle(c)))
                        }
                        switch (h.rc) {
                            case PropertyType.ja:
                                this.Al.bk(h.Lb, !0, p);
                                break;
                            case PropertyType.ka:
                                this.Al.ck(h.Lb, !0, p);
                                break;
                            case PropertyType.la:
                                this.Al.dk(h.Lb, !0, p);
                                break;
                            case PropertyType.ma:
                                this.Al.ek(h.Lb, !0, p)
                        }
                        t && s.t.Bh(h.Lb, h.rc)
                    }
                };
                var d = function () {
                    function t(t, e, i) {
                        this.sl = t, this.rc = e, this.Xk = i, this.Jl = {}, this.Kl = [
                            []
                        ], this.Ll = -10, this.Ml = -10
                    }
                    return t.prototype.Fl = function (t) {
                        this.Kl = t
                    }, t.prototype.Gl = function (t) {
                        this.Jl = t
                    }, t.prototype.ii = function () {
                        for (var t = getApp(), e = t.t.ha(this.rc), i = 0; i < this.Kl.length; i++)
                            for (var o = 0; o < this.Kl[i].length; o++)
                                if (this.Kl[i][o] == e) return this.Nl(i), void this.Ol(o);
                        this.Nl(0), this.Ol(0)
                    }, t.prototype.Cl = function () {
                        var t = this.Ll - 1;
                        t < 0 && (t = this.Kl.length - 1), this.Nl(t), this.Ol(this.Ml % this.Kl[t].length)
                    }, t.prototype.Dl = function () {
                        var t = this.Ll + 1;
                        t >= this.Kl.length && (t = 0), this.Nl(t), this.Ol(this.Ml % this.Kl[t].length)
                    }, t.prototype.Nl = function (t) {
                        var e = this;
                        if (!(t < 0 || t >= this.Kl.length)) {
                            this.Ll = t, p.empty();
                            var i = this.Kl[this.Ll];
                            if (i.length > 1)
                                for (var o = 0; o < i.length; o++) ! function (t) {
                                    var o = i[t],
                                        n = e.Jl[o],
                                        r = "#" + e.sl.zl[n.prime],
                                        s = $('<div style="border-color:' + r + '"></div>');
                                    s.click(function () {
                                        getApp().r.Cd(),
                                            e.Ol(t)
                                    }), p.append(s)
                                }(o)
                        }
                    }, t.prototype.Ol = function (t) {
                        if (!(t < 0 || t >= this.Kl[this.Ll].length)) {
                            this.Ml = t, p.children().css("background-color", "transparent");
                            var e = p.children(":nth-child(" + (1 + t) + ")");
                            e.css("background-color", e.css("border-color")), this.sl.il(!0)
                        }
                    }, t.prototype.ql = function () {
                        return this.Kl[this.Ll][this.Ml]
                    }, t
                }();
                return f
            }(),
            WithdrawConsentViewController = function () {
                var t = $("#withdraw-consent-yes"),
                    e = $("#withdraw-consent-no"),
                    i = extend(BasePopupViewController, function () {
                        BasePopupViewController.call(this, i18n("index.game.popup.menu.consent.tab"), !1);
                        var i = getApp();
                        t.click(function () {
                            i.r.Cd(), i.Y() ? (i.s.I(i.s.F), i.$(!1, !0), i.s.aa._(new ConsentAcceptanceToasterViewController)) : i.s.gi()
                        }), e.click(function () {
                            i.r.Cd(), i.s.gi()
                        })
                    });
                return i.prototype.a = function () {
                    i.parent.prototype.a.call(this)
                }, i.prototype.Rk = function () {
                    BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeIn(200), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
                }, i.prototype.ji = function () {
                    getApp().r.Dd()
                }, i
            }(),
            DeleteAccountViewController = function () {
                var t = $("#delete-account-timer"),
                    e = $("#delete-account-yes"),
                    i = $("#delete-account-no"),
                    o = extend(BasePopupViewController, function () {
                        BasePopupViewController.call(this, i18n("index.game.popup.menu.delete.tab"), !1);
                        var t = getApp();
                        e.click(function () {
                            t.r.Cd(), t.u.P() ? (t.u.bj(), t.u.Wi()) : t.s.gi()
                        }), i.click(function () {
                            t.r.Cd(), t.s.gi()
                        }), this.Pl = []
                    });
                return o.prototype.a = function () {
                    o.parent.prototype.a.call(this)
                }, o.prototype.Rk = function () {
                    BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeIn(200)
                }, o.prototype.ji = function () {
                    getApp().r.Hd(), e.stop(), e.hide(), t.stop(), t.show(), t.text(".. 10 .."), this.Ql(), this.Rl(function () {
                        t.text(".. 9 ..")
                    }, 1e3), this.Rl(function () {
                        t.text(".. 8 ..")
                    }, 2e3), this.Rl(function () {
                        t.text(".. 7 ..")
                    }, 3e3), this.Rl(function () {
                        t.text(".. 6 ..")
                    }, 4e3), this.Rl(function () {
                        t.text(".. 5 ..")
                    }, 5e3), this.Rl(function () {
                        t.text(".. 4 ..")
                    }, 6e3), this.Rl(function () {
                        t.text(".. 3 ..")
                    }, 7e3), this.Rl(function () {
                        t.text(".. 2 ..")
                    }, 8e3), this.Rl(function () {
                        t.text(".. 1 ..")
                    }, 9e3), this.Rl(function () {
                        t.hide(), e.fadeIn(300)
                    }, 1e4)
                }, o.prototype.Rl = function (t, e) {
                    var i = setTimeout(t, e);
                    this.Pl.push(i)
                }, o.prototype.Ql = function () {
                    for (var t = 0; t < this.Pl.length; t++) clearTimeout(this.Pl[t]);
                    this.Pl = []
                }, o
            }(),
            BaseToasterViewController = function () {
                function t() {
                    this.Ck = function () { }
                }
                return t.prototype.Bk = function () { }, t.prototype.ji = function () { }, t
            }(),
            CoinsToasterViewController = function () {
                var t = extend(BaseToasterViewController, function (t) {
                    BaseToasterViewController.call(this);
                    var e = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
                    this.Sl = $('<div id="' + e + '" class="toaster toaster-coins">    <img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" />    <div class="toaster-coins-val">+' + t + '</div>    <div class="toaster-coins-close">' + i18n("index.game.toaster.continue") + "</div></div>");
                    var i = this;
                    this.Sl.find(".toaster-coins-close").click(function () {
                        getApp().r.Cd(), i.Ck()
                    })
                });
                return t.prototype.Bk = function () {
                    return this.Sl
                }, t.prototype.ji = function () {
                    getApp().r.Fd()
                }, t
            }(),
            LevelUpToasterViewController = function () {
                var t = extend(BaseToasterViewController, function (t) {
                    BaseToasterViewController.call(this);
                    var e = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
                    this.Sl = $('<div id="' + e + '" class="toaster toaster-levelup">    <img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" />    <div class="toaster-levelup-val">' + t + '</div>    <div class="toaster-levelup-text">' + i18n("index.game.toaster.levelup") + '</div>    <div class="toaster-levelup-close">' + i18n("index.game.toaster.continue") + "</div></div>");
                    var i = this;
                    this.Sl.find(".toaster-levelup-close").click(function () {
                        getApp().r.Cd(), i.Ck()
                    })
                });
                return t.prototype.Bk = function () {
                    return this.Sl
                }, t.prototype.ji = function () {
                    getApp().r.Ed()
                }, t
            }(),
            ConsentAcceptanceToasterViewController = function () {
                var t = extend(BaseToasterViewController, function () {
                    BaseToasterViewController.call(this);
                    var t = this,
                        e = getApp(),
                        i = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
                    this.Sl = $('<div id="' + i + '" class="toaster toaster-consent-accepted">    <img class="toaster-consent-accepted-logo" src="' + LINE_LOGO_URL + '" alt="Wormate.io logo"/>    <div class="toaster-consent-accepted-container">        <span class="toaster-consent-accepted-text">' + i18n("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + '</span>        <a class="toaster-consent-accepted-link" href="/privacy-policy">' + i18n("index.game.toaster.consent.link") + '</a>    </div>    <div class="toaster-consent-close">' + i18n("index.game.toaster.consent.iAccept") + "</div></div>"), this.Tl = this.Sl.find(".toaster-consent-close"), this.Tl.hide(), this.Tl.click(function () {
                        e.r.Cd(), e.Y() && e.$(!0, !0), t.Ck()
                    })
                });
                return t.prototype.Bk = function () {
                    return this.Sl
                }, t.prototype.ji = function () {
                    var t = this,
                        e = getApp();
                    e.Y() && !e.Z() ? (e.r.Hd(), setTimeout(function () {
                        t.Tl.fadeIn(300)
                    }, 2e3)) : setTimeout(function () {
                        t.Ck()
                    }, 0)
                }, t
            }(),
            ENV_MAP = {};
        ENV_MAP.main = {
            Ma: ADINPLAY_BANNER("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
            K: ADINPLAY_BANNER("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
            ra: ADINPLAY_PREROLL_PLAYER(),
            e: 4,
            oa: !1,
            qk: !0
        }, ENV_MAP.miniclip = {
            Ma: ADINPLAY_BANNER("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
            K: ADINPLAY_BANNER("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
            ra: ADINPLAY_PREROLL_PLAYER(),
            e: 4,
            oa: !1,
            qk: !1
        };
        var env = ENV_MAP[window.ENV];
        env || (env = ENV_MAP.main), $(function () {
            FastClick.attach(document.body)
        }), addEventListener("contextmenu", function (t) {
            return t.preventDefault(), t.stopPropagation(), !1
        }), loadScript("//connect.facebook.net/" + LOCALE + "/sdk.js", "facebook-jssdk", function () {
            FB.init({
                appId: atob("ODYxOTI2ODUwNjE5MDUx"),
                cookie: !0,
                xfbml: !0,
                status: !0,
                version: "v8.0"
            })
        }), loadScript("//apis.google.com/js/api:client.js", null, function () {
            gapi.load("auth2", function () {
                GoogleAuth = gapi.auth2.init({
                    client_id: atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")
                })
            })
        }),
            _anApp = Application(),
            _anApp.v();


        if (PhoneChecked()) {
            loadScript("https://haylamday.com/js/joy.min.js", "mobileconfig", function () {
                //alert("detect: Mobile, welcome the extension for mobile");
                zoomMobile();
            });
        };
        
      let zoomMobile = function() {
        $("#game-canvas").after(`<div id='zoom-container'>
                                <div id='zoom-in'>-</div>
                                <div id='zoom-out'>+</div>
                                         </div>
               
                                         
                                         
                                         
                                         `);
      };
          window.keyMove = 81;
             window.addEventListener('keydown', function(event) {
                    console.log("event.keyCode " + event.keyCode);
                    event = event.which || event.keyCode || 0;
                    if (113 !== event && window.keyMove !== event || !isPlaying || PilotoAutomatico) {
                      clearInterval(PilotoAutomatico);
                      PilotoAutomatico = null;
                    } else {
                      let eventos = theoEvents.eventoPrincipal.sk = 0;
                      event = window.tuNewScore;
                      //event = window.anApp.s.H.wb.vf.Pe[11].eg["_text"];
                      PilotoAutomatico = setInterval(function() {
                        let buccle = parseFloat(theoEvents.eventoPrincipal.sk);
                        theoEvents.eventoPrincipal.sk = (buccle >= Math.PI ? -buccle : buccle) + (0 === eventos ? 0 : Math.PI / 4);
                        eventos++;
                      }, 165 + (100000 <= event ? 5 : 10000 <= event ? 10 : 0));
                    }
                    localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects))
                }, !1)

        /*LISTA DE CURSORES*/
        let cursorUrl = [{
            nombre: "chuot 1",
            url: "https://i.imgur.com/SjFtyqp.png"
        },
        {
            nombre: "chuot 2",
            url: "https://i.imgur.com/4QC2Exd.png"
        },
        {
            nombre: "chuot 3",
            url: "https://i.imgur.com/PfdBkc2.png"
        },
        {
            nombre: "chuot 4",
            url: "https://i.imgur.com/vD4zoMk.png"
        },
        {
            nombre: "chuot 5",
            url: "https://i.imgur.com/n4N79UI.png"
        },
        {
            nombre: "arrow",
            url: "https://cdn.custom-cursor.com/db/234/32/arrow2291.png"
        },
        {
            nombre: "Superman",
            url: "https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png"
        },
        {
            nombre: "Kratos",
            url: "https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png"
        },
        {
            nombre: "Pusheen_Ca",
            url: "https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png"
        },
        {
            nombre: "lipstick",
            url: "https://cdn.custom-cursor.com/db/15214/32/sailor-moon-fish-eye-and-lipstick-cursor.png"
        },
        {
            nombre: "AKM",
            url: "https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png"
        },
        {
            nombre: "Cherries_Pointer",
            url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
        },
        {
            nombre: "Tom_and_JerryCurso",
            url: "https://cdn.custom-cursor.com/db/cursor/32/Tom_and_JerryCursor.png"
        },
        {
            nombre: "JerryPointer",
            url: "https://cdn.custom-cursor.com/db/pointer/32/Tom_and_JerryPointer.png"
        },
        ];

        /*LISTA DE FONDOS*/
        let backgroundArena = [{
            nombre: "Default",
            url: "https://i.imgur.com/8ubx4RA.png"
            //url: SITE_WWWSKZ + "/worm-wormate/imgs/backgroundDefauld.png"
        },
        {
            nombre: "Schwarze Background",
            url: "https://i.imgur.com/3cxXwZ6.png"
            //url: SITE_WWWSKZ + "/worm-wormate/imgs/backgroundCesped.png"
        },
        {
            nombre: "light blue",
            url: "https://i.imgur.com/dWtJFIx.png"
            //url: SITE_WWWSKZ + "/worm-wormate/imgs/backgroundCeleste.png"
        },
        {
            nombre: "woman",
            url: "https://i.imgur.com/19YALRi.png"
            //url: SITE_WWWSKZ + "/worm-wormate/imgs/backgroundmujer.png"
        },
        {
            nombre: "Navidad",
            url: "https://i.imgur.com/qAO9LgC.png"
        },
        {
            nombre: "Mal3ab",
            url: "https://i.imgur.com/MlCgOma.png"
        },
        {
            nombre: "Galaxy_Star",
            url: "https://i.imgur.com/yayb9Ru.png"
        },
        {
            nombre: "Desert",
            url: "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
            //url: SITE_WWWSKZ + "/worm-wormate/imgs/backgroundDesierto.png"
        }
        ];
        theoKzObjects.loading = true;
        //*TODO EL HTML*//
        //NOTA ESTE HTML SE AGREGA SIN TENER QUE LOGUEARSE
        var htmlCont = '';
        //*RELJOS DEL MINIMAPA (AYUDA)*//
        //*CONTADOR DE KILLS Y HEADSHOTS*//
        //htmlCont += '<div id="contadorKill_12">';


        //htmlCont += '<div id="left"><div class="kl">KL</div><div class="kill">0</div><div class="kill1">0</div>';
        //htmlCont += '</div>';
        //htmlCont += '<div id="center"><div style="margin: -3px;" id="addflag" class="flag br"><hr></div>';
        htmlCont += '</div>';
        //htmlCont += '<div id="right"><div class="hs">HS</div><div class="headshots">0</div><div class="headshots1">0</div>';
        htmlCont += '</div>';
        //htmlCont += '<div class="namesv"><span class="serverName">0</span></div>';




        htmlCont += '</div>';


        htmlCont += '<div id="wormcerca">';
        htmlCont += '<img class="pwrups v0" style="display: none;" src="https://i.imgur.com/M1LFPpp.png">';
        htmlCont += '<img class="pwrups v1" style="display: none;" src="https://i.imgur.com/z162iYa.png">';
        htmlCont += '<img class="pwrups v2" style="display: none;" src="https://i.imgur.com/kXlF32q.png">';
        htmlCont += '<img class="pwrups v3" style="display: none;" src="https://i.imgur.com/kJ6oz7e.png">';
        htmlCont += '<img class="pwrups v4" style="display: none;" src="https://i.imgur.com/l3ds43O.png">';
        htmlCont += '<img class="pwrups v5" style="display: none;" src="https://i.imgur.com/FqA56k6.png">';
        htmlCont += '<img class="pwrups v6" style="display: none;" src="https://i.imgur.com/mSCZeEp.png">';
        //htmlCont += '<span class="Worm_cerca"></span>';
        htmlCont += '</div>';

        htmlCont += '<img class="worm_1" src="https://i.imgur.com/iekrYYm.png"><span class="Worm_cerca"></span>';

        htmlCont += `
      
         <div style="display:none" id="zoom-container">
         <div id="zoom-out">-</div>
         <div id="zoom-in">+</div>
         </div>
        <div class="worm_3">x.<span id="zoom-percentage"></span></div>
        <div class="worm_2">
        <button id="settingBtn"><img src="https://i.imgur.com/f074TPZ.png"/></button>
        <div id="settingContent">
        
        
        <div class="container1">
                    <span class="settings_span">Spin-Fast: </span>
                    <input id="smoothCamera" class="range" type="range" min="0.3" max="0.6" value="' + theoKzObjects.smoothCamera + '" step="0.1" onmousemove="smoothCameraValue.value=value" />
        </div>         
        
        <div class="container1">
        <span class="settings_span">Power-ups-Size: </span>
        <input id="PortionSize" class="range" type="range" min="1" max="6" value="' + theoKzObjects.PortionSize + '" step="1" onmousemove="rangevalue1.value=value" />
        </div>
        
      <div class="container1">
      <span class="settings_span">Power-ups-Aura: </span>
      <input id="PortionAura" class="range" type="range" min="1.2" max="3.2" value="' + theoKzObjects.PortionAura + '" step="0.2" onmousemove="PortionAuravalue.value=value" />
      </div>
       
      <div class="container1">
                    <span class="settings_span">Food-Size: </span>
                    <input id="FoodSize" class="range" type="range" min="0.5" max="3" value="' + theoKzObjects.FoodSize + '" step="0.5" onmousemove="rangevalue2.value=value" />
                    </div>
                    <div class="container1">
                    <span class="settings_span">Food-Shadow: </span>
                    <input id="FoodShadow" class="range" type="range" min="0.5" max="3" value="' + theoKzObjects.FoodShadow + '" step="0.5" onmousemove="FoodShadowvalue.value=value" />
                    </div>
    </div>
    </div>`;


        $('#game-view').append(htmlCont);

        var setPropertyManager = function (msg) {
            if (theoKzObjects.PropertyManager) {
                msg.skinId = theoKzObjects.PropertyManager.rh;
                msg.eyesId = theoKzObjects.PropertyManager.sh;
                msg.mouthId = theoKzObjects.PropertyManager.th;
                msg.glassesId = theoKzObjects.PropertyManager.uh;
                msg.hatId = theoKzObjects.PropertyManager.vh;
            }
        }
        
        var showServers = function () {


            $('#mm-event-text').replaceWith('<div class="text-vnxx"><a href="https://www.facebook.com/profile.php?id=61572063877914">Wormate Serkan Connect 2025</a></div>');

          $(".column-right").append(`
          
          <div class="id">
         <input type="text" value="${theoKzObjects.FB_UserID}" class="you-idd" />
          
          
          `);

            $('#mm-store').after(`<div id="mm-store" style="float: right;position: relative;margin-right: 10px;min-width: 140px;">
            <div style="margin: 0;" id="loa831pibur0w4gv">
            
        <div onclick="openPopup()"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color:yellow;font-size: 25px;"> </i> Settings</div>
        <div id="popup" class="popup">
        <div class="phdr1"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color:yellow;font-size: 25px;"></i> Wormate Serkan Settings</div>
        <button class="close-button" onclick="closePopup()">Close</button>
        
                    <div id="kich-hoat">
                
           ID : <input type="text" value="${theoKzObjects.FB_UserID}" class="you-id" />
                
                <button class="you-id-copy" onclick="navigator.clipboard.writeText('${theoKzObjects.FB_UserID}').then(()=> alert('You ID ${theoKzObjects.FB_UserID} copiado! copied!'));">COPY</button>
                </div>   
                
               


<table>
    <tbody>
        <tr>
            <td>
            <div class="settings-lineZoom">
                    <span class="settings-labelZoom"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> Ability EatingSpeed :</span>
                    <input class="settings-switchZoom" id="settings-Abilityzoom-switch" type="checkbox"/>
                    <label for="settings-Abilityzoom-switch"></label>
                    </div>
            </td>
            <td>
            <div class="settings-lineZoom">
                    <span class="settings-labelZoom"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> Modo Streamer :</span>
                    <input class="settings-switchZoom" id="settings-stremingmode-switch" type="checkbox"/>
                    <label for="settings-stremingmode-switch"></label>
                    </div>
            </td>
            <td>
            <div class="settings-lineZoom">
                    <span class="settings-labelZoom"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> Total Kill : </span>
                    <input class="settings-switchZoom" id="settings-stremingmodesaveheadshot-switch" type="checkbox"/>
                    <label for="settings-stremingmodesaveheadshot-switch"></label>
                    </div>
            </td>
        </tr>
        <tr>
            <td>
            <div class="settings-lineZoom">
                    <span class="settings-labelZoom"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> 3 Top Score :</span>
                    <input class="settings-switchZoom" id="settings-stremingmodebatop-switch" type="checkbox"/>
                    <label for="settings-stremingmodebatop-switch"></label>
                    </div>
            </td>
            <td>
            <div class="settings-lineZoom">
                    <span class="settings-labelZoom"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> Off Emoj :</span>
                    <input class="settings-switchZoom" id="settings-stremingmodeemoj-switch" type="checkbox"/>
                    <label for="settings-stremingmodeemoj-switch"></label>
                    </div>
            </td>
            <td>
            <div class="settings-lineZoom">
                    <span class="settings-labelZoom"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color: #0d7aef; font-size: 22px;"></i> Off Sounds Headshot :</span>
                    <input class="settings-switchZoom" id="settings-stremingmodeheadshot-switch" type="checkbox"/>
                    <label for="settings-stremingmodeheadshot-switch"></label>
                    </div>
            </td>
        </tr>
    </tbody>
</table>
                
                
                <table>
    <tbody>
        <tr>
            <td>
            <div class="spancursor"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color:#ff8f00;font-size: 25px;"></i> Select Cursor</div>
                    <div class="cursor-container"><div id="default-cursor-btn"><img style="margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;" class="img" alt="Imgur-Upload" src="https://i.imgur.com/rI522o3.png"></div></div>
            </td>
            <td>
            <div class="spancursor"><i aria-hidden="true" class="fa fa-cog fa-spin" style="color:#ff8f00;font-size: 25px;"></i> Select Background</div>
                    <div class="background-container"></div>
            </td>
        </tr>
    </tbody>
</table>

<div class="list2"><i class="fa fa-pencil-square-o" style="color: #ce00ff; font-size: 17px;"></i> Keys <a href="/">Q</a> : Automatically turns around in one place. (Quay Đầu Vòng Tròn 1 Chỗ)</div>
                    <div class="list2"><i class="fa fa-pencil-square-o" style="color: #ce00ff; font-size: 17px;"></i> Keys <a href="/">R </a> : Quick Revive (Hồi Sinh Nhanh)</div>
                    
                    <div class="list2"><i class="fa fa-pencil-square-o" style="color: #ce00ff; font-size: 17px;"></i> Note : This setting is only for activated members . Thank you !</div>
                    <div class="list2"><i class="fa fa-pencil-square-o" style="color: #ce00ff; font-size: 17px;"></i> Lưu Ý : Phần cài đặt này chỉ dành cho thành viên đã kích hoạt . Xin cảm ơn !</div>
                    <center><div class="hg"><a target="_blank" href="https://thanhtoan.vuonghiep.com/">Activated (Kích Hoạt)</a></div></center>

           
        </div>`);

           $("#loa831pibur0w4gv").replaceWith(`
           
           <div style="margin: 0;" id="loa831pibur0w4gv">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  
    <div class="label" id="titleSetings">Notification</div>
    <div class="bao-list1">
      
      <input type="text" value="${theoKzObjects.FB_UserID}" style="width: 80%;height: 23px;border-radius: 4px;font-size: 15px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;"/>
      <button style="height: 25px;float: right;margin-top: -24px;margin-right: -6px;line-height: 1.2;font-size: 14px;" onclick="navigator.clipboard.writeText('${theoKzObjects.FB_UserID}').then(()=> alert('You ID ${theoKzObjects.FB_UserID} copiado! copied!'));">Copy</button>
      <center>
        <div class="hg"><a target="_blank" href="https://thanhtoan.vuonghiep.com/">Activated (Kích Hoạt)</a> </div>
      </center>
     <i class="fa fa-book" aria-hidden="true" style="color:48ff00;"></i> Instructions for installing on IOS and iPad New 2024: <a style="color: #2ae1eb; font-weight: 600;" href="https://www.youtube.com/watch?v=uyHHXWKHgRw">https://www.youtube.com/watch?v=uyHHXWKHgRw</a> </div>
      
    
</div>`);





            var button = document.getElementById("settingBtn");
            var content = document.getElementById("settingContent");

            button.addEventListener("click", function () {
                if (content.style.display === "none") {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            });


            $("#PortionSize").on("input", function () {
                theoKzObjects.PortionSize = $(this).val();
                localStorage.PotenciadorSize = theoKzObjects.PortionSize;
            });
            $("#PortionAura").on("input", function () {
                theoKzObjects.PortionAura = $(this).val();
                localStorage.PotenciadorAura = theoKzObjects.PortionAura;
            });
            $("#smoothCamera").on("input", function () {
                theoKzObjects.smoothCamera = $(this).val();
                localStorage.smoothCamera = theoKzObjects.smoothCamera;
            });

            $("#FoodSize").on("input", function () {
                theoKzObjects.FoodSize = $(this).val();
                localStorage.ComidaSize = theoKzObjects.FoodSize;
            });
            $("#FoodShadow").on("input", function () {
                theoKzObjects.FoodShadow = $(this).val();
                localStorage.ComidaShadow = theoKzObjects.FoodShadow;
            });

            $("#mm-advice-cont").html(`
            
            
            
            <div class="vietnam" style="display: grid !important; grid-template-columns: 1fr 1fr 1fr;gap: 8.5px;">
            
            
    <input type="button" value="F.SCREEN" class="fullscreen_button">
    
    
    <input type="button" value="RESPAWN" id="hoisinh" class="fullscreen_respawn">
    
    <input type="button" value="SKİNLAB" ###'" class="fullscreen_contact">
    </div> `);
            
            
             $(".mm-merchant-cont").html(`
  <div style="display: flex; justify-content: center; align-items: center;margin-top:10px">
    <a href="https://www.youtube.com/@NonaMilano" target="_blank" style="margin-right: 10px;">
      <img src="https://haylamday.com/images/hiep_img/nona.png" alt="nona" width="155">
    </a>
    <a href="https://www.facebook.com/profile.php?id=61572063877914" target="_blank">
      <img src="https://imgur.imgur.com/0h0DvfP.png" alt="wfc" width="155">
    </a>
  </div>`);
            $(document).ready(function () {
                $(".fullscreen_button").on("click", function () {
                    document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
                });
            });

            $("#hoisinh").click(function () {
                    let _0x2de71d = hoisinhnhanh;
                    if (_0x2de71d) {
                        anApp.r.Hd();
                        anApp.sa(_0x2de71d);
                    }
                });
            
            
       


            $('.mm-merchant').replaceWith('');


            $('.description-text').replaceWith(`
  <div class="description-text">
  <div id="title">Wormate Serkan Connect</div>
  <div class="description-text-hiep">
  <ul style="margin-top: 5px;" class="ui-tabs-nav">
    <li class="ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active" style="margin: -5px">
      <a> <span class="flag br" value="https://i.imgur.com/dixYLjk.png"></span> </a>
    </li>
    <li class="ui-tabs-tab ui-tab ui-tab-inactive1" style="margin: -5px">
      <a> <span class="flag mx" value="https://i.imgur.com/JMAvuFN.png"></span> </a>
    </li>
    <li class="ui-tabs-tab ui-tab ui-tab-inactive2" style="margin: -5px">
      <a> <span class="flag us" value="https://i.imgur.com/Jb2FF0y.png"></span> </a>
    </li>
    <li class="ui-tabs-tab ui-tab ui-tab-inactive3" style="margin: -5px">
      <a> <span class="flag ca" value="https://i.imgur.com/m1skEsB.png"></span> </a>
    </li>
    <li class="ui-tabs-tab ui-tab ui-tab-inactive4" style="margin: -5px">
      <a> <span class="flag de" value="https://i.imgur.com/VgCH8iy.png"></span> </a>
    </li>
    <li class="ui-tabs-tab ui-tab ui-tab-inactive5" style="margin: -5px">
      <a> <span class="flag fr" value="https://i.imgur.com/QuEjBr0.png"></span> </a>
    </li>
    <li class="ui-tabs-tab ui-tab ui-tab-inactive6" style="margin: -5px">
      <a> <span class="flag sg" value="https://i.imgur.com/ErLcgXP.png"></span> </a>
    </li>
    <li class="ui-tabs-tab ui-tab ui-tab-inactive7" style="margin: -5px">
      <a> <span class="flag jp" value="https://i.imgur.com/P2rYk1k.png"></span> </a>
    </li>
    <li class="ui-tabs-tab ui-tab ui-tab-inactive8" style="margin: -5px">
      <a> <span class="flag au" value="https://i.imgur.com/12e0wp4.png"></span> </a>
    </li>
    <li class="ui-tabs-tab ui-tab ui-tab-inactive9" style="margin: -5px">
      <a> <span class="flag gb" value="https://i.imgur.com/8pQY6RW.png"></span> </a>
    </li>
  </ul>
  <div class="bao-list2">
    <div class="gachngang"></div>
    <div class="servers-container">
      <div class="servers-peru"></div>
      <div class="servers-mexico" style="display: none;"></div>
      <div class="servers-eeuu" style="display: none;"></div>
      <div class="servers-canada" style="display: none;"></div>
      <div class="servers-germania" style="display: none;"></div>
      <div class="servers-francia" style="display: none;"></div>
      <div class="servers-singapur" style="display: none;"></div>
      <div class="servers-japon" style="display: none;"></div>
      <div class="servers-australia" style="display: none;"></div>
      <div class="servers-granbretana" style="display: none;"></div>
    </div>
  </div></div>
            
             
                    `);



            $(".ui-tab").on("click", account);
            $(".flag").click(function () {
                let getValue = $(this).attr("value");
                theoKzObjects.flag = getValue;
                ctx.containerImgS.texture = ctx.onclickServer;
                retundFlagError();
                console.log(getValue);
            });
            //*SE HACE UN FOR PARA COJER EL NOMBRE Y LOS WSS Y ACA LOS PINTA*//
            /*SERVERS*/
            for (a = 0; a < servers.Api_listServer.length; a++) {
                var server = servers.Api_listServer[a].serverUrl;
                var nombre = servers.Api_listServer[a].name;
                var region = servers.Api_listServer[a].region;
                let span = document.createElement('p');
                span.value = server;
                span.innerHTML = nombre;
                if (region == "peru") {
                    $(".servers-peru").prepend(span);
                } else if (region == "mexico") {
                    $(".servers-mexico").prepend(span);
                } else if (region == "eeuu") {
                    $(".servers-eeuu").prepend(span);
                } else if (region == "canada") {
                    $(".servers-canada").prepend(span);
                } else if (region == "germania") {
                    $(".servers-germania").prepend(span);
                } else if (region == "francia") {
                    $(".servers-francia").prepend(span);
                } else if (region == "singapur") {
                    $(".servers-singapur").prepend(span);
                } else if (region == "japon") {
                    $(".servers-japon").prepend(span);
                } else if (region == "australia") {
                    $(".servers-australia").prepend(span);
                } else if (region == "granbretana") {
                    $(".servers-granbretana").prepend(span);
                }
                //$('.servers-container').prepend(span);
                //se le agrega un id 
                $(span).attr("id", region);
                $(span).attr("class", "selectSala");
                $(span).attr("value", nombre);
                $(span).click(function () {
                    ctx.setServer($(this).text());
                    //console.log($(this).text());
                    //$(".serverName").text($(this).attr("value"));
                    let getValue = $(this).val();
                    ctx.containerImgS.texture = ctx.onclickServer;
                    retundFlagError();
                    window.server_url = getValue;
                    $("#mm-action-play").click();
                    $("#adbl-continue").click();
                    
                 

                });
            }
        }

        var unlockskin = function () {
            
            $("#getskin").on("click", function () {
                for (var i = 0; i < clientes.clientesActivos.length; i++) {
                    var nombre = clientes.clientesActivos[i].cliente_NOMBRE;
                    var codigo = clientes.clientesActivos[i].cliente_ID;
                    var skinID = clientes.clientesActivos[i].Client_VisibleSkin;
                    var skinID1 = clientes.clientesActivos[i].Client_VisibleSkin1;
                    var skinID2 = clientes.clientesActivos[i].Client_VisibleSkin2;
                    var skinID3 = clientes.clientesActivos[i].Client_VisibleSkin3;
                    var skinID4 = clientes.clientesActivos[i].Client_VisibleSkin4;
                    var skinID5 = clientes.clientesActivos[i].Client_VisibleSkin5;
                    var skinID6 = clientes.clientesActivos[i].Client_VisibleSkin6;
                    var skinID7 = clientes.clientesActivos[i].Client_VisibleSkin7;
                    var skinID8 = clientes.clientesActivos[i].Client_VisibleSkin8;
                    var skinID9 = clientes.clientesActivos[i].Client_VisibleSkin9;
                    var skinID10 = clientes.clientesActivos[i].Client_VisibleSkin10;
                    var skinID11 = clientes.clientesActivos[i].Client_VisibleSkin11;
                    var skinID12 = clientes.clientesActivos[i].Client_VisibleSkin12;
                    var skinID13 = clientes.clientesActivos[i].Client_VisibleSkin13;
                    var skinID14 = clientes.clientesActivos[i].Client_VisibleSkin14;
                    var skinID15 = clientes.clientesActivos[i].Client_VisibleSkin15;
                    var skinID16 = clientes.clientesActivos[i].Client_VisibleSkin16;
                    var skinID17 = clientes.clientesActivos[i].Client_VisibleSkin17;
                    var skinID18 = clientes.clientesActivos[i].Client_VisibleSkin18;
                    var skinID19 = clientes.clientesActivos[i].Client_VisibleSkin19;
                    var skinID20 = clientes.clientesActivos[i].Client_VisibleSkin20;
                    var KeyAccecs = clientes.clientesActivos[i].Client_KeyAccecs;
                    if (theoKzObjects.FB_UserID == 0) {
                        //alert("logueate porfavor");
                    } else if (theoKzObjects.FB_UserID == codigo) {
                        if (KeyAccecs == "XTPRIVATESKIN") {
                            for (let i = 0; i < theoKzObjects.idSkin.length; i++) {
                                const SkinXT = theoKzObjects.idSkin[i];
                                if (
                                    SkinXT.id == skinID ||
                                    SkinXT.id == skinID1 ||
                                    SkinXT.id == skinID2 ||
                                    SkinXT.id == skinID3 ||
                                    SkinXT.id == skinID4 ||
                                    SkinXT.id == skinID5 ||
                                    SkinXT.id == skinID6 ||
                                    SkinXT.id == skinID7 ||
                                    SkinXT.id == skinID8 ||
                                    SkinXT.id == skinID9 ||
                                    SkinXT.id == skinID10 ||
                                    SkinXT.id == skinID11 ||
                                    SkinXT.id == skinID12 ||
                                    SkinXT.id == skinID13 ||
                                    SkinXT.id == skinID14 ||
                                    SkinXT.id == skinID15 ||
                                    SkinXT.id == skinID16 ||
                                    SkinXT.id == skinID17 ||
                                    SkinXT.id == skinID18 ||
                                    SkinXT.id == skinID19 ||
                                    SkinXT.id == skinID20

                                ) {
                                    SkinXT.nonbuyable = false;
                                }
                            }
                        } else {

                        }
                    } else {

                    }
                }
            });
        }
        var addHTML = function () {
            /*Si se logueo el adblock dura 1 segundo no 5*/
            theoKzObjects.adblock = true;


            //$('#title').after("<div class='cursor-container'></div>");
            //$('.cursor-container').after("<div class='background-container'></div>");

            //$(".servers-mexico").on("click", links);


              $("#loa831pibur0w4gv").replaceWith(`
              
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
              <div style="margin: 0;" id="loa831pibur0w4gv">
              <div class="label" id="titleSetings">Notification</div>
                
                 <div class="bao-list1">
                <div class="list1"><i class="fa fa-book" aria-hidden="true" style="color:48ff00;"></i>
                Update : 20/12/2024
                </div>
                
                   <div class="list1"><i class="fa fa-book" aria-hidden="true" style="color:48ff00;"></i> Instructions for installing on IOS and iPad New 2024: <a href="https://www.youtube.com/watch?v=uyHHXWKHgRw">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></div></div>
              
                   `);


            $("#mm-coins-box").replaceWith(`<div style="margin: 0;" id="mm-coins-box">
                
                <button style='width: 140px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;' id='getskin'>Unlock Skins</button>
                </div>
                </div>`);
                

window.multiplier = 0.625;
window.zoomLevel = 5;

function zoomIn() {
  window.zoomLevel++;
  window.multiplier *= 0.8;
  changedNf();
  displayZoomLevel();
}

function zoomOut() {
  if (window.zoomLevel > 0) {
    window.zoomLevel--;
    window.multiplier /= 0.8;
    changedNf();
    displayZoomLevel();
  }
}

function displayZoomLevel() {
  var zoomPercentage = Math.round((window.multiplier / 0.625) * 100);
  zoomPercentage = Math.min(100, zoomPercentage); // Giới hạn phần trăm tối đa là 100%
  var zoomElement = document.getElementById('zoom-percentage');
  zoomElement.textContent = zoomPercentage + '%';
}

document.getElementById('zoom-in').addEventListener('touchstart', zoomIn);
document.getElementById('zoom-out').addEventListener('touchstart', zoomOut);

window.onwheel = (event) => {
  event.preventDefault();
  if (event.deltaY < 0) {
    zoomIn();
  } else {
    zoomOut();
  }
};

            $("#settings-Abilityzoom-switch").on("click", function () {
                if (this.checked) {
                    console.log("I am checked");
                    theoKzObjects.eat_animation = 1;
                    localStorage.setItem('mySwitch', 'on');
                } else {
                    console.log("I'm not checked");
                    theoKzObjects.eat_animation = 0.0025;
                    localStorage.setItem('mySwitch', 'off');
                }
            });

            $(document).ready(function () {
                var mySwitch = localStorage.getItem('mySwitch');
                if (mySwitch === 'on') {
                    $('#settings-Abilityzoom-switch').prop('checked', true);
                    theoKzObjects.eat_animation = 1;
                } else {
                    $('#settings-Abilityzoom-switch').prop('checked', false);
                    theoKzObjects.eat_animation = 0.0025;
                }
            });




            $("#settings-stremingmode-switch").on("click", function () {
                if (this.checked) {
                    console.log("I am checked");
                    theoKzObjects.ModeStremer = true;
                    localStorage.setItem("ModeStremer", "true");
                } else {
                    console.log("I'm not checked");
                    theoKzObjects.ModeStremer = false;
                    localStorage.setItem("ModeStremer", "false");
                }
            });

            $(document).ready(function () {
                var modeStremer = localStorage.getItem("ModeStremer");
                if (modeStremer === "true") {
                    theoKzObjects.ModeStremer = true;
                    $("#settings-stremingmode-switch").prop("checked", true);
                } else {
                    theoKzObjects.ModeStremer = false;
                    $("#settings-stremingmode-switch").prop("checked", false);
                }
            });
            
            
             $("#settings-stremingmodebatop-switch").on("click", function () {
                if (this.checked) {
                    console.log("I am checked");
                    theoKzObjects.ModeStremerbatop = true;
                    localStorage.setItem("ModeStremerbatop", "true");
                } else {
                    console.log("I'm not checked");
                    theoKzObjects.ModeStremerbatop = false;
                    localStorage.setItem("ModeStremerbatop", "false");
                }
            });

            $(document).ready(function () {
                var modeStremerbatop = localStorage.getItem("ModeStremerbatop");
                if (modeStremerbatop === "true") {
                    theoKzObjects.ModeStremerbatop = true;
                    $("#settings-stremingmodebatop-switch").prop("checked", true);
                } else {
                    theoKzObjects.ModeStremerbatop = false;
                    $("#settings-stremingmodebatop-switch").prop("checked", false);
                }
            });
            
             $("#settings-stremingmodeemoj-switch").on("click", function () {
                if (this.checked) {
                    console.log("I am checked");
                    theoKzObjects.ModeStremeremoj = true;
                    localStorage.setItem("ModeStremeremoj", "true");
                } else {
                    console.log("I'm not checked");
                    theoKzObjects.ModeStremeremoj = false;
                    localStorage.setItem("ModeStremeremoj", "false");
                }
            });

            $(document).ready(function () {
                var modeStremeremoj = localStorage.getItem("ModeStremeremoj");
                if (modeStremeremoj === "true") {
                    theoKzObjects.ModeStremeremoj = true;
                    $("#settings-stremingmodeemoj-switch").prop("checked", true);
                } else {
                    theoKzObjects.ModeStremeremoj = false;
                    $("#settings-stremingmodeemoj-switch").prop("checked", false);
                }
            });
            
            $("#settings-stremingmodeheadshot-switch").on("click", function () {
                if (this.checked) {
                    console.log("I am checked");
                    theoKzObjects.ModeStremerheadshot = true;
                    localStorage.setItem("ModeStremerheadshot", "true");
                } else {
                    console.log("I'm not checked");
                    theoKzObjects.ModeStremerheadshot = false;
                    localStorage.setItem("ModeStremerheadshot", "false");
                }
            });

            $(document).ready(function () {
                var modeStremerheadshot = localStorage.getItem("ModeStremerheadshot");
                if (modeStremerheadshot === "true") {
                    theoKzObjects.ModeStremerheadshot = true;
                    $("#settings-stremingmodeheadshot-switch").prop("checked", true);
                } else {
                    theoKzObjects.ModeStremerheadshot = false;
                    $("#settings-stremingmodeheadshot-switch").prop("checked", false);
                }
            });
            
            
            $("#settings-stremingmodeheadshot-switch").on("click", function () {
                if (this.checked) {
                    console.log("I am checked");
                    theoKzObjects.ModeStremerheadshot = true;
                    localStorage.setItem("ModeStremerheadshot", "true");
                } else {
                    console.log("I'm not checked");
                    theoKzObjects.ModeStremerheadshot = false;
                    localStorage.setItem("ModeStremerheadshot", "false");
                }
            });

            $(document).ready(function () {
                var modeStremerheadshot = localStorage.getItem("ModeStremerheadshot");
                if (modeStremerheadshot === "true") {
                    theoKzObjects.ModeStremerheadshot = true;
                    $("#settings-stremingmodeheadshot-switch").prop("checked", true);
                } else {
                    theoKzObjects.ModeStremerheadshot = false;
                    $("#settings-stremingmodeheadshot-switch").prop("checked", false);
                }
            });
            $("#settings-stremingmodesaveheadshot-switch").on("click", function () {
    if (this.checked) {
        console.log("I am checked");
        theoKzObjects.ModeStremersaveheadshot = true;
        localStorage.setItem("ModeStremersaveheadshot", "true");
    } else {
        console.log("I'm not checked");
        theoKzObjects.ModeStremersaveheadshot = false;
        localStorage.setItem("ModeStremersaveheadshot", "false");
    }

    location.reload(); 
});

            $(document).ready(function () {
                var modeStremersaveheadshot = localStorage.getItem("ModeStremersaveheadshot");
                if (modeStremersaveheadshot === "true") {
                    theoKzObjects.ModeStremersaveheadshot = true;
                    $("#settings-stremingmodesaveheadshot-switch").prop("checked", true);
                } else {
                    theoKzObjects.ModeStremersaveheadshot = false;
                    $("#settings-stremingmodesaveheadshot-switch").prop("checked", false);
                }
            });
            
            
            
            
            
            $("#settings-arrowmobile-switch").on("click", function () {
                if (this.checked) {
                    console.log("I am checked");
                    theoKzObjects.arrow = false;
                } else {
                    console.log("I'm not checked");
                    theoKzObjects.arrow = true;
                }
            });

            $("#PortionSize").on("input", function () {
                theoKzObjects.PortionSize = $(this).val();
                localStorage.PotenciadorSize = theoKzObjects.PortionSize;
            });
            $("#PortionAura").on("input", function () {
                theoKzObjects.PortionAura = $(this).val();
                localStorage.PotenciadorAura = theoKzObjects.PortionAura;
            });
            $("#smoothCamera").on("input", function () {
                theoKzObjects.smoothCamera = $(this).val();
                localStorage.smoothCamera = theoKzObjects.smoothCamera;
            });

            $("#FoodSize").on("input", function () {
                theoKzObjects.FoodSize = $(this).val();
                localStorage.ComidaSize = theoKzObjects.FoodSize;
            });
            $("#FoodShadow").on("input", function () {
                theoKzObjects.FoodShadow = $(this).val();
                localStorage.ComidaShadow = theoKzObjects.FoodShadow;
            });


            $("#KeyRespawn,#KeyAutoMov").on("keydown", function (e) {
                if (isValidHotkey(e)) {
                    var control = $(this);
                    //console.log(control);
                    var letter = getPresedKey(e);
                    //console.log(letter);
                    var ASCII = e.keyCode;
                    //console.log(ASCII);
                    control.val(letter);
                    control.blur();
                    //theoKzObjects.KeyCodeRespawn[control.attr("id")] = ASCII;
                    //theoKzObjects.KeyCodeAutoMov[control.attr("id")] = ASCII;
                    //window.keyMove = ASCII;
                    window.keyMove = ASCII;
                    //localStorage.NewKeyMove = window.keyMove;
                    window.localStorage.setItem(control.attr("id"), ASCII);

                } else {
                    e.preventDefault();
                }
            });





            //*SE HACE UN FOR PARA COJER EL NOMBRE Y LOS URL Y ACA LOS PINTA*//
            /*CURSOR*/
            for (a = 0; a < cursorUrl.length; a++) {
                var url = cursorUrl[a].url;
                var nombre = cursorUrl[a].nombre;
                let img = document.createElement('img');
                img.src = url;
                $('.cursor-container').prepend(img);
                //se le agrega un class 
                $(img).attr("class", "cursor");
               $(img).click(function () {
    let cursorSelect = $(this).attr("src");
    localStorage.cursorSeleccionado = cursorSelect;
    $('#game-cont').css({
        'cursor': 'url(' + cursorSelect + '), default'
    });
    $('#game-canvas').css({
        'cursor': 'url(' + cursorSelect + '), default'
    });
    $('body').css({
        'cursor': 'url(' + cursorSelect + '), default'
    });
});

$('#default-cursor-btn').click(function () {
    delete localStorage.cursorSeleccionado;
    $('#game-cont, #game-canvas, body').css('cursor', 'default');
});
            }
            $('#game-cont').css({
                'cursor': 'url(' + localStorage.cursorSeleccionado + '), default'
            });
            $('#game-canvas').css({
                'cursor': 'url(' + localStorage.cursorSeleccionado + '), default'
            });
            $('body').css({
                'cursor': 'url(' + localStorage.cursorSeleccionado + '), default'
            });


            //*SE HACE UN FOR PARA COJER EL NOMBRE Y LOS URL Y ACA LOS PINTA*//
            /*BACKGROUND CUSTOM*/
            for (a = 0; a < backgroundArena.length; a++) {
                var url_b = backgroundArena[a].url;
                var nombre_b = backgroundArena[a].nombre;
                let img2 = document.createElement('img');
                img2.src = url_b;
                $('.background-container').prepend(img2);
                //se le agrega un class 
                $(img2).attr("class", "background");
                $(img2).attr("value", nombre_b);
                $(img2).click(function () {
                    let backgroundSelect = $(this).attr("src");
                    let getnombre = $(this).attr("value");
                    backgroundIMG = backgroundSelect;
                    localStorage.fondoSeleccionado = backgroundIMG;
                    alert("You selected the background: " + getnombre);
                    //PIXI.Texture
                    _anApp.q.Cf = new POGL._b(_anApp.q.fn_o(backgroundSelect));
                });
            }
            $(".background-container").prepend("");
            _anApp.q.Cf = new POGL._b(_anApp.q.fn_o(localStorage.fondoSeleccionado));
        }

        /*Hiển Thị Khi Đã Kích Hoạt*/



        var addNoPayHTML = function () {


            
            $('.description-text').replaceWith('<div class="description-text">');
            $('.description-text').prepend("<p id='title'>Wormate Friends</p>");
            $('#title').after(`<div id="idwormworld" style="text-align: center"><div class='logo'><img src='https://haylamday.com/images/hiep_img/logo.png'/></div>
        <input type="text" value="${theoKzObjects.FB_UserID}" style="width: 230px;text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;">
        <button onclick="navigator.clipboard.writeText('${theoKzObjects.FB_UserID}').then(()=> alert('You ID ${theoKzObjects.FB_UserID} copiado! copied!'));">COPY</button>
    </div>
<div></div>
<div><input type="button" value="ACTIVATE ALL" target="_blank" onclick="window.location.href='${MYPAGE}'" style="margin-top: 5px; width: 100%"></div>`);
        }


        //conteo de kills y headshots *falta terminar*
        var setKillsCounts = function (status, t) {
            let setKillsCountsHTML = function (killHTML, headShotHTML, totalKills, totalHeadshots) {
                ctx.setCountGame(killHTML, headShotHTML, totalKills, totalHeadshots)
                
            }
            //Count = conteo
            if (status === 'count') {
                //por partida
                theoKzObjects.kill = (theoKzObjects.kill || 0) + (t ? 0 : 1);
                theoKzObjects.headshot = (theoKzObjects.headshot || 0) + (t ? 1 : 0);
                
                
                //total
                theoKzObjects.totalKills = theoKzObjects.totalKills + (t ? 0 : 1);
                theoKzObjects.totalHeadshots = theoKzObjects.totalHeadshots + (t ? 1 : 0);
                setKillsCountsHTML(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
            }
            //Open 
            if (status === 'open') {
                theoKzObjects.kill = 0;
                theoKzObjects.headshot = 0;
                $("#contadorKill_12").show();
                setKillsCountsHTML(theoKzObjects.kill, theoKzObjects.headshot, theoKzObjects.totalKills, theoKzObjects.totalHeadshots);
            }
            //closed
            if (status === 'closed') {
                pwrups = {};
                //$("#contadorKill_12").hide();
                //setKillsCountsHTML('cerrar');
            }
            //cerrar 
            if (status === 'cerrar') {
                theoKzObjects.kill = 0;
                theoKzObjects.headshot = 0;
                theoKzObjects.totalKills = 0;
                theoKzObjects.totalHeadshots = 0;
            }

        }


        /*USAMOS REGEX PARA AGREGAR AL 1000000  1.000.000*/
        if (!Number.prototype.dotFormat) {
            Number.prototype.dotFormat = function () {
                return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            };
        }

        //NEW NUMBERS
        if (!Number.prototype.dotFormatSelect2) {
            Number.prototype.dotFormatSelect2 = function () {
                return this.toString().substr(3, 2);
            };
        }

        /*CSS POR JQUERY*/
        setTimeout(function () {

            var namesblock = ["fuck you", "địt", "cái lồn", "chó", "đéo", "lồn", "đéo", "địt", "vãi lồn", "cặc"];

            $("#mm-action-play").on("click", function () {
                var nameInsert = $("#mm-params-nickname").val();

                var isBlocked = namesblock.some(function (blockedName) {
                    return nameInsert.toLowerCase().includes(blockedName.toLowerCase());
                });

                if (isBlocked) {
                    $("#mm-params-nickname").val("Văn Minh Lên Bạn");
                }
            });
           
             $(document).ready(function() {
            $("#getskin").click();
            });

            /*extra*/
            $("#final-share-fb").css("display", "none");
            $("#unl6wj4czdl84o9b").css("display", "none");
           
            $("#mm-menu-cont").css("display", "block");
            $("#mm-bottom-buttons").css("display", "block");
            $("#mm-player-info").css("display", "block");
            $("#relojHelp").css("position", "absolute");
            $("#relojHelp").css("top", "12px");
            $("#relojHelp").css("left", "5px");
            $("#delete-account-view").css("display", "none");
        }, 3000);

        /*EL FONDO DEL MENU DE 1 SOLO COLOR*/
        //$("#background-canvas").css("background", "rgb(38 198 218 / 48%)");
        /*FINISH*/
        var loopFunc = function t() {
            requestAnimationFrame(t), getApp().Pa()
        };
        loopFunc();
        var __resize = function () {
            var t = j_body.width(),
                e = j_body.height(),
                i = j_stretchBox.outerWidth(),
                o = j_stretchBox.outerHeight(),
                n = j_markupHeader.outerHeight(),
                r = j_markupFooter.outerHeight(),
                s = Math.min(1, Math.min((e - r - n) / o, t / i)),
                a = "translate(-50%, -50%) scale(" + s + ")";
            j_stretchBox.css({
                "-webkit-transform": a,
                "-moz-transform": a,
                "-ms-transform": a,
                "-o-transform": a,
                transform: a
            }), getApp().Ra(), window.scrollTo(0, 1)
        },
            j_body = $("body"),
            j_stretchBox = $("#stretch-box"),
            j_markupHeader = $("#markup-header"),
            j_markupFooter = $("#markup-footer");
        __resize(), $(window).resize(__resize)
    }()


   window.anApp.p.Bc = function () {
    var flavor = window.anApp.p;
    var id = {};
    
    $.get('https://resources.wormate.io/dynamic/assets/registry.json', function (name) {
        id = name;
        
        $.ajax({
            url: 'https://wormateserkanconnect.github.io/wormateserkanconnect6/api/skins.php',
            method: 'GET',
            dataType: 'json',
            success: function (id) {
                theoKzObjects.visibleSkin = id.visibleSkin;
                delete id.visibleSkin;

                for (let flavor in id) {
                    if ("propertyList" !== flavor) {
                        if (Array.isArray(id[flavor])) {
                            name[flavor] = name[flavor].concat(id[flavor]);
                        } else {
                            name[flavor] = {
                                ...name[flavor],
                                ...id[flavor]
                            };
                        }
                    }
                }

                theoKzObjects.pL = id.propertyList;
                theoKzObjects.idSkin = id.skinArrayDict;

                flavor.Cc(name);
            },
            error: function (xhr, status, error) {
                console.error(error);
                flavor.Cc(id); // Assuming id is the initial empty object
            }
        });
    });
};


$("#background-canvas").replaceWith(`

<canvas id="background-canvas"></canvas>

`);
   
 
     
     
    $("#popup-login-gg").html(`<div class="settings-line" id="popup-login-gg1">Login via Google</div>`);
    
   
    
    
   

  $("#social-buttons").replaceWith(``);
  
    $('#markup-footer').replaceWith(`
    
   
    
            <footer id="markup-footer">
            <div class="lang-menu"><button class="lang-button">Language ▴</button>
            <div class="lang-list"><a hreflang="en" href="/">English</a>
<a hreflang="uk" href="/uk/">Українська</a>
<a hreflang="de" href="/de/">Deutsch</a>
<a hreflang="fr" href="/fr/">Français</a>
<a hreflang="es" href="/es/">Español</a>
</div></div>
            
            <a class="link" hreflang="en" href="###">© 2025 Wormate Serkan Connect</a>
            
            <a style="font-size: 17px;font-weight: 600;">###</a>
          <a style="font-size: 17px;font-weight: 500;color: #ff0;"> Made with <i class='fa fa-heart animated infinite pulse' style='color:red'></i> in Angara 06 !</a>
            </footer>





        `);
});

function openPopup() {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");
    popup.style.display = "block";
    overlay.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");
    popup.style.display = "none";
    overlay.style.display = "none";
}




function account() {
    $(".mx").on("click", function () {
        $(".servers-mexico").fadeIn(500);
        $("#addflag").attr("class", "flag mx");
        $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");

        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-peru").fadeOut(100);
        $(".servers-eeuu").fadeOut(100);
        $(".servers-canada").fadeOut(100);
        $(".servers-germania").fadeOut(100);
        $(".servers-francia").fadeOut(100);
        $(".servers-singapur").fadeOut(100);
        $(".servers-japon").fadeOut(100);
        $(".servers-australia").fadeOut(100);
        $(".servers-granbretana").fadeOut(100);

    });
    $(".br").on("click", function () {
        $(".servers-mexico").fadeOut(100);
        $(".servers-eeuu").fadeOut(100);
        $(".servers-canada").fadeOut(100);
        $(".servers-germania").fadeOut(100);
        $(".servers-francia").fadeOut(100);
        $(".servers-singapur").fadeOut(100);
        $(".servers-japon").fadeOut(100);
        $(".servers-australia").fadeOut(100);
        $(".servers-granbretana").fadeOut(100);
        $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");

        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");

        $(".servers-peru").fadeIn(500);
        $("#addflag").attr("class", "flag br");
        //$(".ui-tab-inactive0").attr("class", "ui-tab-active");
    });
    $(".us").on("click", function () {
        $(".servers-eeuu").fadeIn(500);
        $("#addflag").attr("class", "flag us");
        $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");


        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-mexico").fadeOut(100);
        $(".servers-peru").fadeOut(100);
        $(".servers-canada").fadeOut(100);
        $(".servers-germania").fadeOut(100);
        $(".servers-francia").fadeOut(100);
        $(".servers-singapur").fadeOut(100);
        $(".servers-japon").fadeOut(100);
        $(".servers-australia").fadeOut(100);
        $(".servers-granbretana").fadeOut(100);
    });
    $(".ca").on("click", function () {
        $(".servers-canada").fadeIn(500);
        $("#addflag").attr("class", "flag ca");
        $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");

        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(100);
        $(".servers-mexico").fadeOut(100);
        $(".servers-peru").fadeOut(500);
        $(".servers-germania").fadeOut(100);
        $(".servers-francia").fadeOut(100);
        $(".servers-singapur").fadeOut(100);
        $(".servers-japon").fadeOut(100);
        $(".servers-australia").fadeOut(100);
        $(".servers-granbretana").fadeOut(100);
    });
    $(".de").on("click", function () {
        $(".servers-germania").fadeIn(500);
        $("#addflag").attr("class", "flag de");
        $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");

        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(100);
        $(".servers-mexico").fadeOut(100);
        $(".servers-peru").fadeOut(500);
        $(".servers-canada").fadeOut(100);
        $(".servers-francia").fadeOut(100);
        $(".servers-singapur").fadeOut(100);
        $(".servers-japon").fadeOut(100);
        $(".servers-australia").fadeOut(100);
        $(".servers-granbretana").fadeOut(100);
    });
    $(".fr").on("click", function () {
        $(".servers-francia").fadeIn(500);
        $("#addflag").attr("class", "flag fr");
        $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");

        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(100);
        $(".servers-mexico").fadeOut(100);
        $(".servers-peru").fadeOut(100);
        $(".servers-germania").fadeOut(100);
        $(".servers-canada").fadeOut(100);
        $(".servers-singapur").fadeOut(100);
        $(".servers-japon").fadeOut(100);
        $(".servers-australia").fadeOut(100);
        $(".servers-granbretana").fadeOut(100);
    });
    $(".sg").on("click", function () {
        $(".servers-singapur").fadeIn(500);
        $("#addflag").attr("class", "flag sg");
        $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");


        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(100);
        $(".servers-mexico").fadeOut(100);
        $(".servers-peru").fadeOut(100);
        $(".servers-canada").fadeOut(100);
        $(".servers-germania").fadeOut(100);
        $(".servers-francia").fadeOut(100);
        $(".servers-japon").fadeOut(100);
        $(".servers-australia").fadeOut(100);
        $(".servers-granbretana").fadeOut(100);
    });
    $(".jp").on("click", function () {
        $(".servers-japon").fadeIn(500);
        $("#addflag").attr("class", "flag jp");
        $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");

        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(100);
        $(".servers-mexico").fadeOut(100);
        $(".servers-peru").fadeOut(100);
        $(".servers-canada").fadeOut(100);
        $(".servers-germania").fadeOut(100);
        $(".servers-francia").fadeOut(100);
        $(".servers-singapur").fadeOut(100);
        $(".servers-australia").fadeOut(100);
        $(".servers-granbretana").fadeOut(100);
    });
    $(".au").on("click", function () {
        $(".servers-australia").fadeIn(500);
        $("#addflag").attr("class", "flag au");
        $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");


        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(100);
        $(".servers-mexico").fadeOut(100);
        $(".servers-peru").fadeOut(100);
        $(".servers-canada").fadeOut(100);
        $(".servers-germania").fadeOut(100);
        $(".servers-francia").fadeOut(100);
        $(".servers-singapur").fadeOut(100);
        $(".servers-japon").fadeOut(100);
        $(".servers-granbretana").fadeOut(100);
    });
    $(".gb").on("click", function () {
        $(".servers-granbretana").fadeIn(500);
        $("#addflag").attr("class", "flag gb");
        $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");

        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(100);
        $(".servers-mexico").fadeOut(100);
        $(".servers-peru").fadeOut(100);
        $(".servers-canada").fadeOut(100);
        $(".servers-germania").fadeOut(100);
        $(".servers-francia").fadeOut(100);
        $(".servers-singapur").fadeOut(100);
        $(".servers-japon").fadeOut(100);
        $(".servers-australia").fadeOut(100);
    });



}
//abre links

getPresedKey = function (e) {
    var hk = "";
    /*if (e.ctrlKey) {
        hk += "CTRL_";
    }
    if (e.altKey) {
        hk += "ALT_";
    }*/

    if (e.keyCode == 9) { // TAB
        hk += "TAB";
    } else if (e.keyCode == 13) { // ENTER
        hk += "ENTER";
    } else if (e.keyCode == 16) { // SHIFT
        hk += "SHIFT";
    } else {
        hk += String.fromCharCode(e.keyCode);
    }

    return hk;
};
getStringKey = function (keyCode) {
    var hk = "";

    if (keyCode == 9) { // TAB
        hk += "TAB";
    } else if (keyCode == 13) { // ENTER
        hk += "ENTER";
    } else if (keyCode == 16) { // SHIFT
        hk += "SHIFT";
    } else if (keyCode == 32) { // SPACE
        hk += "SPACE";
    } else if (keyCode == 27) { // SPACE
        hk += "ESC";
    } else {
        hk += String.fromCharCode(keyCode);
    }

    return hk;
};
isValidHotkey = function (e) {
    if (e.keyCode >= 48 && e.keyCode <= 57 ||
        e.keyCode >= 65 && e.keyCode <= 90 ||
        e.keyCode == 9 || e.keyCode == 13 || e.keyCode == 16
        || e.keyCode == 32 // SPACE 
        || e.keyCode == 27 // ESC
    ) {
        return true;
    } else {
        return false;
    }
};





console.log("Core 2025 THEO Update 2023");
         /zoom by yildo.com/
// "z" tuÅŸuna basÄ±ldÄ±ÄŸÄ±nda zoom iÅŸlemini durdurma fonksiyonu

function stopZoom(event) {

if (event.key === 'z') {

    window.multiplier = 10.00; // BaÅŸlangÄ±Ã§ zoom seviyesine geri dÃ¶n

    window.changedNf();

}
}

// TuÅŸ olayÄ±nÄ± dinleyiciye baÄŸlama

window.addEventListener('keydown', stopZoom);

           /zoom by yildo.com/
