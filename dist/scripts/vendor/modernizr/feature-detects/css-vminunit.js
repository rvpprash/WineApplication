Modernizr.addTest("cssvminunit",function(){var n;return Modernizr.testStyles("#modernizr { width: 50vmin; }",function(t,e){var i=window.innerWidth/100,r=window.innerHeight/100,d=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);n=parseInt(50*Math.min(i,r),10)==d}),n});