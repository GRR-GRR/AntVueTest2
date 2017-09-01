// For salvattore
var grid = document.querySelector('#fh5co-board');
var item = document.createElement('div');

$(document).ready(function() {

    // Tumblr
    $appelAjax = function() {
        $.ajax({

            url: 'http://mgcitton.com/wp-json/wp/v2/posts',
            method: 'get',
            dataType: "json",

            success: function(data){

                // variables to access the object returned
                var objectContent = data;
                
                // each loop to go through all the post
                $.each(objectContent, function(key, value){
                    var id = value.featured_media;
                    var objectDesc = value.excerpt.rendered;
                    $.ajax({
                        
                        url: 'http://mgcitton.com/wp-json/wp/v2/media/'+id,
                        method: 'get',
                        dataType: "json",

                        success: function(data){
                        //just retrieving post that have photos
                            salvattore.appendElements(grid, [item]);
                            item.outerHTML = '<div class="item"><div class="animate-box animate-box bounceIn animated"><a href="" class="image-popup fh5co-board-img"><img src=' + data.media_details.sizes.full.source_url + ' alt=""></a><div class="fh5co-desc">' + objectDesc + '</div></div></div>';
                        }

                    })
                    
                });
                                
            } // end success function
        }); // end ajax call
    }

    $appelAjax(true);

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