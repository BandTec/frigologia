window.onload = changeTeam();
function changeTeam() {
    let sprint = Number(document.getElementById('sprint_team').value);
    let members = []; 
    let id_img_members = [];
    let id_name_members = [];
    let imgs_members_sprint_1 = ['david', 'dennis', 'felipe','gabriel','jose','lucas','renato'];
    let names_members_sprint_1 = ['David Rafael', 'Dennis Barbosa', 'Felipe Kling','Gabriel Alvares','José Fabiano','Lucas Ferreira','Renato Paulino'];
    let imgs_members_sprint_2 = ['alexandre', 'arthur', 'christian','david','dennis','gabriel-aguiar'];
    let names_members_sprint_2 = ['Alexandre Junior', 'Arthur Loureano', 'Christian Raines','David Rafael','Dennis Barbosa','Gabriel Aguiar'];
    
    for (let i = 0; i <= 7; i++) {
        members.push(document.getElementById('member'+i));
        id_img_members.push(document.getElementById('img_member'+i));
        id_name_members.push(document.getElementById('name_member'+i));
    }

    if (sprint === 1) {
        
        /** modify the layout */
        members[7].style.display= 'flex'; 
        members[4].style.marginTop = '0px';
        document.getElementById('details-team').style.maxWidth= '1225px';

        /** Updating source of images and name of the members */
        for(let i = 1, n = 0; i <= 7; i++, n++) {
            id_img_members[i].src = 'img/team-members/'+imgs_members_sprint_1[n]+'.jpeg';
            id_name_members[i].innerHTML = names_members_sprint_1[n];
        }
    } else if(sprint === 2) {

        /** modify the layout */
        members[7].style.display= 'none'; 
        members[4].style.marginTop = '15px';
        document.getElementById('details-team').style.maxWidth= '900px';

        /** Updating source of images and name of the members */
        for(let i = 1, n = 0; i <= 7; i++, n++) {
            id_img_members[i].src = 'img/team-members/'+imgs_members_sprint_2[n]+'.jpeg';
            id_name_members[i].innerHTML = names_members_sprint_2[n];
        }
    }

    

}