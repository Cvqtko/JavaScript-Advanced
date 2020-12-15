function deleteByEmail() {
 let input = document.getElementsByName('email')[0].value.trim();
        let trs = document.getElementsByTagName('tr');
        let trToBeDeleted = '';
        let resultElement = document.getElementById('result');

        for (let tr of trs) {
            let td = tr.children[1];
            if(td.textContent === input){
                trToBeDeleted = tr;
                resultElement.innerText = 'Deleted.';
                trToBeDeleted.parentNode.removeChild(trToBeDeleted);
                return;
            }
        }

       resultElement.textContent = 'Not found.'
}