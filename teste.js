const timeStamp = '1644436524';
        const apiKey= 'da6937036acda18c39534eeb574e2548';
        const md5 = '2e1757d681e65f61b0e23f36a059cd91';
       
        fetch(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=6`
        ).then((response)=>{
            return response.json();
        }).then((jsonParsed)=>{
        const   divHero = document.querySelector('#herois')

            jsonParsed.data.results.forEach(element => {
                const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
                const nameHero = element.title

                createDivHero(srcImage,nameHero,divHero);
            });

            console.log(jsonParsed);
        })

        function createDivHero(srcImage,nameHero,divToAppend){
            const divPai = document.createElement('div');
            const divFilho = document.createElement('div');
            const textName = document.createElement('text');
            const img =document.createElement('img');

            textName.textContent = nameHero;

            img.src= srcImage


            divFilho.appendChild(img)
            divFilho.appendChild(textName)
            divPai.appendChild(divFilho)
            divToAppend.appendChild(divPai)

            divPai.classList.add("personagem")
        }
