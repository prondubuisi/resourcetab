var _0x49e0=['initializeApp','onload','getElementById','myexform','ref','value','TDXBU','preventDefault','slice','length','toDateString','set','reset','href','./thankyou/index.html','AIzaSyCfYBAz9YWwz1JixjtyKIi25Oe78ODxB-w','tedxforms.firebaseapp.com','https://tedxforms.firebaseio.com','tedxforms','tedxforms.appspot.com','586448899666'];(function(_0x4d5dbf,_0x30a0f2){var _0x5963f1=function(_0x44329f){while(--_0x44329f){_0x4d5dbf['push'](_0x4d5dbf['shift']());}};_0x5963f1(++_0x30a0f2);}(_0x49e0,0x1dd));var _0x48da=function(_0x632961,_0x362365){_0x632961=_0x632961-0x0;var _0x40167d=_0x49e0[_0x632961];return _0x40167d;};var config={'apiKey':_0x48da('0x0'),'authDomain':_0x48da('0x1'),'databaseURL':_0x48da('0x2'),'projectId':_0x48da('0x3'),'storageBucket':_0x48da('0x4'),'messagingSenderId':_0x48da('0x5')};firebase[_0x48da('0x6')](config);window[_0x48da('0x7')]=function(){document[_0x48da('0x8')](_0x48da('0x9'))['addEventListener']('submit',submitnominateForm);};var nom_rec=firebase['database']()[_0x48da('0xa')]('external');function getInput(_0x465862){return document[_0x48da('0x8')](_0x465862)[_0x48da('0xb')];}var reg_no=_0x48da('0xc');function submitnominateForm(_0x34d31e){_0x34d31e[_0x48da('0xd')]();var _0x390264=getInput('q3');reg=reg_no+_0x390264[_0x48da('0xe')](_0x390264[_0x48da('0xf')]-0x5);saveNominateRec(new Date()[_0x48da('0x10')](),reg,getInput('q1'),getInput('q2'),getInput('q3'),getInput('q4'),getInput('q5'),getInput('q6'));recSaved();}function saveNominateRec(_0x164954,_0x5b9b0,_0x1b451c,_0x33f7e9,_0x5956bb,_0xc9caac,_0x3e4e61,_0x3703a8){var _0x6f78be=nom_rec['push']();_0x6f78be[_0x48da('0x11')]({'time':_0x164954,'reg_no':_0x5b9b0,'name':_0x1b451c,'email':_0x33f7e9,'phone':_0x5956bb,'size':_0xc9caac,'source':_0x3e4e61,'n_tickets':_0x3703a8});}function recSaved(){document[_0x48da('0x8')](_0x48da('0x9'))[_0x48da('0x12')]();location[_0x48da('0x13')]=_0x48da('0x14');}