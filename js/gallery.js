const api_key = "041ec0349b3802263ecaad5c6a16e623";
const user_id = decodeURIComponent("23054372%40N07");
const photoset_name = "calebzulawski.com";

render_gallery = function() {
    let url = "https://api.flickr.com/services/rest/?" + $.param({
        method: "flickr.photosets.getList",
        api_key: api_key,
        user_id: user_id,
        format: "json",
        nojsoncallback: 1
    });
    $.getJSON(url, function(data) {
        let photoset_id;
        for (let i = 0; i < data.photosets.photoset.length; i++) {
            if (data.photosets.photoset[i].title._content == photoset_name) {
                let url = "https://api.flickr.com/services/rest/?" + $.param({
                    method: "flickr.photosets.getPhotos",
                    api_key: api_key,
                    photoset_id: data.photosets.photoset[i].id,
                    format: "json",
                    nojsoncallback: 1
                });
                $.getJSON(url, function(data) {
                    gallery_html = "";
                    for (let i = 0; i < data.photoset.photo.length; i++) {
                        flickr_url = "https://www.flickr.com/photos/" + user_id + "/" + data.photoset.photo[i].id;
                        photo_url = "https://farm" + data.photoset.photo[i].farm + ".staticflickr.com/" + data.photoset.photo[i].server + "/" + data.photoset.photo[i].id + "_" + data.photoset.photo[i].secret + "_t.jpg";
                        photo_caption = data.photoset.photo[i].title;
                        gallery_html += "<a href=\"" + flickr_url + "\"><img alt=\"" + photo_caption + "\" src=\"" + photo_url + "\"/></a>";
                    }
                    $("#gallery").html(gallery_html);
                    $("#gallery").justifiedGallery({
                        rowHeight: 300,
                        sizeRangeSuffixes: {
                            100: '_t',
                            240: '_m',
                            320: '_n',
                            500: '',
                            640: '_z',
                            1024: '_b'
                        }
                    });
                });
                break;
            }
        }
    });
}

$(document).ready(render_gallery);
