!function(){function e(){try{var e=document.createElement("div"),t=document.createElement("span"),i=e.style,o=0,n=0,r=!1,a=document.body.firstElementChild||document.body.firstChild;return e.appendChild(t),t.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(e,a),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",o=t.offsetHeight,n=t.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+Modernizr._prefixes.join("hyphens:auto; "),r=t.offsetHeight!=o||t.offsetWidth!=n,document.body.removeChild(e),e.removeChild(t),r}catch(e){return!1}}function t(e,t){try{var i=document.createElement("div"),o=document.createElement("span"),n=i.style,r=0,a=!1,l=!1,d=!1,s=document.body.firstElementChild||document.body.firstChild;return n.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(o),document.body.insertBefore(i,s),o.innerHTML="mm",r=o.offsetHeight,o.innerHTML="m"+e+"m",l=o.offsetHeight>r,t?(o.innerHTML="m<br />m",r=o.offsetWidth,o.innerHTML="m"+e+"m",d=o.offsetWidth>r):d=!0,l===!0&&d===!0&&(a=!0),document.body.removeChild(i),i.removeChild(o),a}catch(e){return!1}}function i(e){try{var t,i=document.createElement("input"),o=document.createElement("div"),n="lebowski",r=!1,a=document.body.firstElementChild||document.body.firstChild;if(o.innerHTML=n+e+n,document.body.insertBefore(o,a),document.body.insertBefore(i,o),i.setSelectionRange?(i.focus(),i.setSelectionRange(0,0)):i.createTextRange&&(t=i.createTextRange(),t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select()),window.find)r=window.find(n+n);else try{t=window.self.document.body.createTextRange(),r=t.findText(n+n)}catch(e){r=!1}return document.body.removeChild(o),document.body.removeChild(i),r}catch(e){return!1}}return document.body?(Modernizr.addTest("csshyphens",function(){if(!Modernizr.testAllProps("hyphens"))return!1;try{return e()}catch(e){return!1}}),Modernizr.addTest("softhyphens",function(){try{return t("&#173;",!0)&&t("&#8203;",!1)}catch(e){return!1}}),void Modernizr.addTest("softhyphensfind",function(){try{return i("&#173;")&&i("&#8203;")}catch(e){return!1}})):void(window.console&&console.warn("document.body doesn't exist. Modernizr hyphens test needs it."))}();