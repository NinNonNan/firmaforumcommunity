exports.handler = async (event) => {
    const referer = event.headers.referer || "";

    // Default: solo immagine, senza link
    let imageUrl = "/lego2.png";
    let linkUrl = "";
    let showLink = false;

    if (referer.includes("legoforum.forumcommunity.net")) {
        imageUrl = "/lego.png";
        linkUrl = "https://legoforum.forumcommunity.net/tuo-post";
        showLink = true;
    } else if (referer.includes("thesimsita.forumcommunity.net")) {
        imageUrl = "/thesims.png";
        linkUrl = "https://thesimsita.forumcommunity.net/?t=63240797#lastpost";
        showLink = true;
    }

    // Pagina HTML generata dinamicamente
    const html = `
        <!DOCTYPE html>
        <html lang="it">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Firma</title>
        </head>
        <body style="margin: 0; padding: 0; text-align: center;">
            <img src="${imageUrl}" alt="Firma" style="display: block; border: none;">
            ${showLink ? `<br><a href="${linkUrl}" target="_blank">Visita il mio post!</a>` : ""}
        </body>
        </html>
    `;

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: html,
    };
};
