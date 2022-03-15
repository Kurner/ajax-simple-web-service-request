let poulet = document.getElementById('quote');
let img = document.getElementById('img');
let vache = document.getElementById('author');

let prout = new XMLHttpRequest;

prout.onload = function()
{
    if (this.status === 200)
    {
        console.log(JSON.parse(this.responseText));

        let canard = JSON.parse(prout.responseText)
        let quote = canard.quote;
        let author = canard.author.toUpperCase();
        let photo = canard.photo;

        console.log(quote);
        console.log(author);

        poulet.textContent = `"${quote}"`;
        
        if(photo == "")
        {
            img.src = "../ajax-simple-web-service-request/asset/ugly_doggy.png";
        }
        else
        {
            img.src = photo;
        }
        
        
        vache.textContent = `- ${author}`;
    }
}

prout.open('GET', 'https://thatsthespir.it/api', true)

prout.send();