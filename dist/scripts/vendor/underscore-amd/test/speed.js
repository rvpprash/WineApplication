!function(){for(var t=[],n=0;n<1e3;n++)t.push(n);var u=_.map(t,function(t){return{num:t}}),e={};_.times(1e3,function(t){e["key"+t]=t});var r=_.sortBy(t,function(){return Math.random()}),i=_.map(_.range(100),function(){return _.range(1e3)});JSLitmus.test("_.each()",function(){var n=[];return _.each(t,function(t){n.push(2*t)}),n}),JSLitmus.test("_(list).each()",function(){var n=[];return _(t).each(function(t){n.push(2*t)}),n}),JSLitmus.test("jQuery.each()",function(){var n=[];return jQuery.each(t,function(){n.push(2*this)}),n}),JSLitmus.test("_.map()",function(){return _.map(u,function(t){return t.num})}),JSLitmus.test("jQuery.map()",function(){return jQuery.map(u,function(t){return t.num})}),JSLitmus.test("_.pluck()",function(){return _.pluck(u,"num")}),JSLitmus.test("_.uniq()",function(){return _.uniq(r)}),JSLitmus.test("_.uniq() (sorted)",function(){return _.uniq(t,!0)}),JSLitmus.test("_.sortBy()",function(){return _.sortBy(t,function(t){return-t})}),JSLitmus.test("_.isEqual()",function(){return _.isEqual(t,r)}),JSLitmus.test("_.keys()",function(){return _.keys(e)}),JSLitmus.test("_.values()",function(){return _.values(e)}),JSLitmus.test("_.intersection()",function(){return _.intersection(t,r)}),JSLitmus.test("_.range()",function(){return _.range(1e3)}),JSLitmus.test("_.flatten()",function(){return _.flatten(i)}),JSLitmus.test("_.flatten() (shallow)",function(){return _.flatten(i,!0)})}();