let names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
let uniqueNames = [];
$.each(names, function(_i, el){
    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
});
