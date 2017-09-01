// TUMBLR
// Store given consumer key for tumblr
var client =  'hTqVY9D2OGTUQOYP7TzJYbXachJOqdyYfMJmI2SdhRdleQQ9qF';
var win = $(window);

// Post # starting point
var limit = 12;
var offset = 0;

// For salvattore
var grid = document.querySelector('#fh5co-board');
var item = document.createElement('div');

$(document).ready(function() {

    // Tumblr
    $appelAjax = function(firstCall) {
        $.ajax({

            url: 'http://api.tumblr.com/v2/blog/grrgrr.tumblr.com/posts/photo?limit=' + limit + '&offset=' + offset, // Voir option -> https://www.tumblr.com/docs/en/api/v2#photo-posts
            method: 'get',
            // make sure to use jsonp. It is a requirement to consume the Tumblr api
            dataType: "jsonp",
            data: ({ api_key: client}),
            // upon sucess exceute the following code
            success: function(data){
                console.log(data);


                // variables to access the object returned
                var objectBlog = data.response.blog;
                var objectPosts = data.response.posts;

                if (firstCall) {
                    
                    // getting title of the tumblr
                    $('.title_tumblr').html(objectBlog.title);
                    // $('.title_tumblr').html(objectBlog.title + ' recent blog posts');
                    console.log(objectBlog.title);

                    // getting description of the tumblr
                    $('.tumblr_desc').html(objectBlog.description);
                    console.log(objectBlog.description);
                }

                // each loop to go through all the post
                $.each(objectPosts, function(key, value){
                //just retrieving post that have photos
                    if(value.type === "photo"){
                        // inner each loop to go through all the photos for each post
                        $.each(value.photos, function(k, v){
                        //append image




                        salvattore.appendElements(grid, [item]);
                        item.outerHTML = '<div class="item"><div class="animate-box animate-box bounceIn animated"><a href="' + v.original_size.url + '" class="image-popup fh5co-board-img"><img src="' + v.original_size.url + '" alt=""></a><div class="fh5co-desc"></div></div></div>';


                        });// end inner each

                        // caption for each post
                        // $('#tumblr_search').append(value.caption + '<hr />');
                    }
                });
                                
                console.log(offset);

            } // end success function
        }); // end ajax call
    }

    $appelAjax(true);



    // Each time the user scrolls
    win.scroll(function() {
        console.log(win.scrollTop())
               
        // End of the document reached?
        if ($(document).height() - win.height() == win.scrollTop()) {
            // $('#loading').show();
            offset += limit;

            //run ajax call and pass parameter from search
            $appelAjax(false);


            
        }

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