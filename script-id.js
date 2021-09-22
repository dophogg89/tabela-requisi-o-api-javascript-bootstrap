
const url = 'https://60a973b520a641001730728d.mockapi.io/api/certificacao';
//requisição HTTP
fetch(url)
    .then(response => response.json())
    .then(install => {
        console.log(install);
        const listInstall = install;
        configInstall(listInstall);
    });
    
function configInstall(instalacao) {
    console.log(instalacao);
    setTimeout(() => { console.log("instalacao"); }, 2000);
    for (let i = 0; i < instalacao.length; i++) {
        document.querySelector("tbody").insertAdjacentHTML('beforeend', createLinha(instalacao[i]))
        console.log(instalacao[i]);
    }
}
function createLinha(install) {
    return `
    <tr>
        <td>
            ${install.instalacao}
        </td>
        <td>
            ${install.volumeCertificado.toFixed(2)}
        </td>
        <td>
            ${install.pcs.toFixed(2)}
        </td>
    </tr>`
}