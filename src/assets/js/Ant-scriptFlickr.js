//For Flickr
var apiurl, myresult, apiurl_size;
var selected_size = 800;
apiurl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=75339da571d41004ca62e8a46e0e5798&photoset_id=72157627176334991&user_id=21589489%40N04&media=photos&format=json&nojsoncallback=1";

//For salvattore
var grid = document.querySelector('#fh5co-board');
var item = document.createElement('div');

$(document).ready(function() {

    //Flickr
    $.getJSON(apiurl, function (json) {
        $.each(json.photoset.photo, function (i, myresult) {
            apiurl_size = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=75339da571d41004ca62e8a46e0e5798&photo_id=" + myresult.id + "&format=json&nojsoncallback=1"
            $.getJSON(apiurl_size, function (size) {
                $.each(size.sizes.size, function (i, myresult_size) {
                    if (myresult_size.width == selected_size) {
                        salvattore.appendElements(grid, [item]);
                        item.outerHTML = '<div class="item"><div class="animate-box animate-box bounceIn animated"><a href="' + myresult_size.source + '" class="image-popup fh5co-board-img"><img src="' + myresult_size.source + '" alt=""></a><div class="fh5co-desc"></div></div></div>';
                    }
                })
            })
        });
    });

    $('#fh5co-board').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            // options for gallery
            enabled: true
        }
    });


}); // end of document.ready

window.onload = function() {
    Particles.init({
        selector: '.background'
    });
};