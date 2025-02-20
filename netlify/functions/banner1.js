
exports.handler = async (event) => {
    const referer = event.headers.referer || "";
    
    let imageUrl = "/bannervuoto.png"; // Default image

    if (referer.includes("legoforum.forumcommunity.net")) {
        imageUrl = "/bannervuoto.png";
    } else if (referer.includes("thesimsita.forumcommunity.net")) {
        imageUrl = "/tllchallange.png";
    }

    return {
        statusCode: 302,
        headers: {
            Location: imageUrl,
        },
        body: "",
    };
};
