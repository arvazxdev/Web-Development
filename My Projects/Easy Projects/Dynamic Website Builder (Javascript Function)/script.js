function qs(e) {
    return document.querySelector(e);
}

function convertToShort(numberOfViews) {
    var suffixes = ["", "K", "M", "B", "T", "Qd", "Qt", "Sxt", "Spt", "Ot", "N", "D"];
    var suffixIndex = 0;
    while (numberOfViews >= 1000 && suffixIndex < suffixes.length - 1) {
        numberOfViews /= 1000;
        suffixIndex++;
    }

    return (numberOfViews) + suffixes[suffixIndex];
}

function card(img, duration, title, channelName, views, ago) {
    qs("img").setAttribute("src", img);
    qs(".duration").innerHTML = duration;
    qs(".title").innerHTML = title;
    qs(".channelName").innerHTML = channelName;
    qs(".views").innerHTML = convertToShort(views) + " views";
    qs(".ago").innerHTML = ago;
}

card("https://i.ytimg.com/vi/cckRWFTeR7E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1kBVcmJ7rbNTEQKMoRkZ1HpWb0w", "51:06", "THIS POKEMON IS VERY POWERFUL | PALWORLD GAMEPLAY #14", "PravejXLab", 32784913279, "1 day ago");