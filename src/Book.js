function Book({ current }) {
    const imageDict = {
        "devyani": "https://garudabooks.com/cache/large/product/9742/Devyani-Front-cover.jpg",
        "azad": "https://garudabooks.com/cache/large/product/9805/s7E28kKSpzdBrx5OGANpqDqYYOnr1JjlxKYCSeo1.jpeg"
    };

    const textDict = {
        "devyani": "Devayani",
        "azad": "Azad, the Invincible"
    };

    const iconDict = {
        "devyani": [["https://garudabooks.com/storage/channel/1/jHoemh26D60GTrJRasT09EDv9aLHNPvSDyuHcnET.png", "https://garudabooks.com/devayani"],
                    ["https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png", "https://www.amazon.com/Devayani-Manjula-Tekal-ebook/dp/B091JGG7LQ/ref=sr_1_1?crid=3B7VEJJEZJNSD&keywords=devayani+by+manjula+tekal&qid=1640578653&sprefix=devayani%2Caps%2C70&sr=8-1"],
                    ["https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png", "https://www.amazon.in/Devayani-Manjula-Tekal/dp/1942426283/ref=sr_1_1?crid=3JN99BDOL5MT3&keywords=tekal+devayani&qid=1640578691&sprefix=devayani+te%2Caps%2C207&sr=8-1"]],
        "azad": [["https://garudabooks.com/storage/channel/1/jHoemh26D60GTrJRasT09EDv9aLHNPvSDyuHcnET.png", "https://garudabooks.com/azad-the-invincible"],
                 ["https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png", "https://www.amazon.in/Azad-Invincible-Babu-Krishnamurthy/dp/1942426666/ref=sr_1_1?crid=2SJ0ZPBJOV5GB&keywords=azad+the+invincible&qid=1640578719&sprefix=azad+the+%2Caps%2C228&sr=8-1"]]
    }

    return (
        <div class="slide center-book">
            <h1 class="book-title">{textDict[current]}</h1>
            <img class="book-single" src={imageDict[current]}/>
            <h4 class="book-title">Buy at...</h4>
            <div class="flexie">
                {iconDict[current].map((icon) => (
                    <a href={icon[1]}><img src={icon[0]} height="30"/></a>
                ))}
            </div>
        </div>
    )
}

export default Book;