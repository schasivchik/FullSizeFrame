var iframe = document.querySelector('iframe');

fullSizeIframe()

window.onresize = function(){
    fullSizeIframe();
}

function fullSizeIframe() {

    const parent = getComputedStyle(iframe.parentElement)

    var width = iframe.width,
        height = iframe.height,
        ratio = height / width;

    var parentWidth = parseFloat(parent.width) - (parseFloat(parent.paddingLeft) + parseFloat(parent.paddingRight));

    iframe.width = parentWidth;
    iframe.height = parentWidth * ratio;
}