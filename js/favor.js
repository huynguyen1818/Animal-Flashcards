/* Add favorite*/

function handleFavor() {
    let favorWords = localStorage.getItem('favorWords') ? JSON.parse(localStorage.getItem('favorWords')) : [];
    console.log(favorWords);
    if (favorWords.length > 0) 
    {
        for (let i = 0; i < favorWords.length; i++)
        {
            if (cardNameEng.innerText === favorWords[i].cardNameEng) 
            {
                deleteCard(i);
                return 0;
            }
        }
        addFavor(favorWords);
    }
    else addFavor(favorWords);
}

function addFavor(favorWords) {
    console.log(favorWords);
    favorWords.push({
        cardNameEng: cardNameEng.innerText,
        cardNameVie: cardNameVie.innerText,
    });

    localStorage.setItem('favorWords', JSON.stringify(favorWords));
}

// Hiện danh sách từ yêu thích

function renderListCard() {
    let favorWords = localStorage.getItem('favorWords') ? JSON.parse(localStorage.getItem('favorWords')) : [];

    if (favorWords.length === 0) {
        document.getElementById('grid-cards').innerText = 'Không có từ yêu thích nào.';
        return false;
    }
    document.getElementById('list-card').style.display = 'block';

    let tableContent =
        `<tr>
        <td style = "width=20px"></td>
        <td style = "font-weight: bold;">Tiếng Anh</td>
        <td style = "font-weight: bold;">Tiếng Việt</td>
        <td></td>
      </tr>`;

      favorWords.forEach((favorWord, index) => {
        let cardId = index;
        index++;
        
        tableContent += 
        `<tr>
            <td>${index}</td>
            <td>${favorWord.cardNameEng}</td>
            <td>${favorWord.cardNameVie}</td>
            <td>
                <a href="#" class="btn btn-danger btn-sm" onclick="deleteCard(${cardId})">Xóa</a>
            </td>
        </tr>`;
    });

    document.getElementById('grid-cards').innerHTML = tableContent;
}

// Xóa từ yêu thích

function deleteCard(id){
    let favorWords = localStorage.getItem('favorWords') ? JSON.parse(localStorage.getItem('favorWords')) : [];
    favorWords.splice(id, 1);

    localStorage.setItem('favorWords', JSON.stringify(favorWords));
    renderListCard();
}
