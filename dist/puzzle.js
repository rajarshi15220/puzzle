define("arale/puzzle/1.0.0/puzzle",["$","./puzzle.css"],function(t,e,i){function n(t,e){this.obj=s(t),this.frequency=e}var s=t("$");t("./puzzle.css"),n.prototype={twinkle:function(t){return t?this.start():this.stop(),this},start:function(){var t=this;return clearInterval(this.interval),this.interval=setInterval(function(){t.obj.hasClass("underline")?t.obj.removeClass("underline"):t.obj.addClass("underline")},this.frequency/2),this},stop:function(){return clearInterval(this.interval),this.obj.addClass("underline"),this},show:function(){return this.obj.addClass("show"),this},hide:function(){return this.obj.removeClass("show"),this}};var o={arr:["a","r","a","l","e"],index:0,init:function(t){var e=this;this.list=[],t.each(function(t,i){e.list[t]=new n(i,500)}),this.list[this.index].twinkle(!0)},push:function(t){8===t&&this.index--,t=String.fromCharCode(t).toLowerCase(),t===this.arr[this.index]&&(this.list[this.index].twinkle(!1).show(),this.index===this.arr.length-1?this.complete():(this.index++,this.list[this.index].twinkle(!0)))},complete:function(){alert("That's Right!")}};i.exports=o}),define("arale/puzzle/1.0.0/puzzle.css",[],function(){seajs.importStyle('@font-face{font-family:Marcellus;font-style:normal;font-weight:400;src:local("Marcellus"),local("Marcellus-Regular"),url(http://aralejs.org/static/css/marcellus.woff) format("woff")}.message{font-size:20px;letter-spacing:20px;text-align:center;margin:50px auto;width:250px}.container{margin:0;height:240px;position:relative;font-family:Marcellus,sans-serif;font-size:80px}.container li{float:left;text-align:center;width:10%;margin:5%;overflow:hidden;text-indent:-200px}.container li.underline{border-bottom:10px solid #000}.container li.show{text-indent:0}.hint{cursor:pointer;position:absolute;top:80px;left:60%;display:none}.hint-popup{border:1px solid #ccc;padding:2px 5px;box-shadow:2px 2px 0 #CCC}.hint-popup:before{color:#ccc;font-size:12px;top:5px;left:-7px;position:absolute;content:\'◆\'}.hint-popup:after{color:#fff;font-size:10px;top:5px;left:-4px;position:absolute;content:\'◆\'}')});
