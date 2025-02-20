exports.handler = async (event) => {
    const referer = event.headers.referer || "";

    let redirectUrl = "https://forumcommunity.net"; // Default

    if (referer.includes("legoforum.forumcommunity.net")) {
        redirectUrl = "";
    } else if (referer.includes("thesimsita.forumcommunity.net")) {
        redirectUrl = "https://thesimsita.forumcommunity.net/?t=63240797#lastpost";
    }

    return {
        statusCode: 302,
        headers: {
            Location: redirectUrl,
        },
        body: "",
    };
};
