exports.handler = async (event) => {
    const referer = event.headers.referer || "";
    
    let imageUrl = "/lego2.png"; // Default image

    if (referer.includes("legoforum.forumcommunity.net")) {
        imageUrl = "/lego.png";
    } else if (referer.includes("thesimsita.forumcommunity.net")) {
        imageUrl = "/thesims.png";
    }

    return {
        statusCode: 302,
        headers: {
            Location: imageUrl,
        },
        body: "",
    };
};
