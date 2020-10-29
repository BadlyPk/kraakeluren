// Using an array to store each song as an object
// In addition to obv title and lyrics, I assign a special id to each object (used later to target the correct lyrics-block)
const arrSongList = [
    {id: "s1", title:"1.1 Kråkevisa", lyrics:"Og mannen han gjekk seg i vedaskog,<br>hei, fara, i vedaskog.<br>Då sat der ei kråke i lunden og gol.<br><br>Ref:<br>Hei fara. Faltu riltu raltura.<br><br>Og mannen han tenkte med sjølve seg,<br>hei, fara, med sjølve seg;<br>Skal tru om den kråka vil drepa meg?<br><br>Og mannen han snudde om hesten sin,<br>hei, fara, om hesten sin,<br>så køyrde han heim att til gar‘en sin.<br><br>Å høyr, du min mann, kva eg spøre deg,<br>hei, fara, eg spøre deg;<br>Kvar vart det av ve‘en du køyrde til meg?<br><br>Eg køyrde no slett ingen ve‘ til deg,<br>hei, fara, ingen ve‘ til deg,<br>for kråka ho svor ho sku‘ drepa meg.<br><br>Å no har eg aldri høyrt større skam!<br>hei, fara, høyrt større skam!<br>Har du høyrt at ei kråke kan drepe ein mann?<br><br>Men kråka kom etter på taket og gol,<br>hei, fara, på taket og gol,<br>og mannen han opp gjennom ljoren for.<br><br>Og mannen han spente sin boge for kne,<br>hei, fara, sin boge for kne,<br>så skaut han den kråka, så ho datt ned.<br><br>Så spente han føre dei folane ti,<br>hei, fara, dei folane ti;<br>men kråka ho sprengde alle di.<br><br>Så spente han føre dei folane tolv,<br>hei, fara, dei folane tolv,<br>så køyrde han kråka på låvegolv.<br><br>Så flådde han kråka og lema ho sund,<br>hei, fara, og lema ho sund,<br>ho vog innpå seksten og tjue pund.<br><br>Av skinnet så gjorde han tolv par skor,<br>hei, fara, tolv par skor,<br>det fineste paret det gav han til mor.<br><br>Og munnen han brukte te mala korn,<br>hei, fara, te mala korn,<br>og øyro han gjorde til tutar-horn.<br><br>Og den som kje kråka kan nytta så,<br>hei, fara, kan nytta så,<br>han er ikkje verd ei kråke å få"},
    {id: "s2", title:"1.2 Nu klinger", lyrics:"Nu klinger igjennom den gamle stad, påny en studentersang,<br>og alle mann alle i rekker og rad, svinger opp under begerklang!<br>Og mens borgerne våkner i køia og hører det glade kang-kang,<br>stemmer alle mann, alle mann, alle mann, alle mann, alle mann, alle mann;<br><br>Refreng:<br>Studenter i den gamle stad, ta vare på byens ry!<br>(klapp x2)<br>Husk på at jenter, øl og dram var kjempenes meny.<br>Og faller I alle mann alle, skal det gjalle fra alle mot sky.<br>La’kke byen få ro, men la den få merke det er en studenterby!<br>Og øl og dram, og øl og dram, og øl og dram, og øl og dram.<br><br>I denne gamle staden satt så mangen en konge stor,<br>og hadde nok av øl fra fat og piker ved sitt bord.<br>De laga bøljer i gata når hjem ifra gildet de fór.<br>Og nu sitter de alle mann alle i valhall og traller til oss i kor:<br><br>Refreng:......<br><br>På Elgeseter var det liv i klosteret dag og natt!<br>Der hadde de sin kagge og der hadde de sin skatt.<br>De herjet i Nonnenes gate og rullet og tullet og datt.<br>Og nu skuer de fra himmelen og griper sin harpe fatt.<br><br>Refreng:....<br><br>(Adagio)<br>Når vi er vandret hen og staden hviler et øyeblikk,<br>(kraftig klapp x2)<br>så kommer våre sønner og tar opp den gamle skikk;<br>En lek mellom muntre butuljer, samt aldri så lit’ erotikk.<br><br>(Accelerando)<br>Også sitter vi i himmelen og stemmer i vår replikk;<br><br>Refreng:<br>(Tramp/klapp hele siste refreng)<br>Studenter i den gamle stad, ta vare på byens ry!<br>(markant klapp x2)<br>Husk på at jenter, øl og dram var kjempenes meny.<br>Og faller I alle mann alle, skal det gjalle fra alle mot sky.<br>Lakke byen få ro, men la den få merke det er en studenterby!<br>(INGEN ØL OG DRAM ETTER SISTE REFRENG! Men ofte utbrytes det i en Skål!)"},
    {id: "s3", title:"1.3 Skål kamerater", lyrics:"Skål kamerater, godt humør,<br>tidsnok kommer sorgen.<br>Full i dag og full i går, også full i morgen.<br>Datt ned fra gjerdet,<br>stein dau,<br>ompa, ompa, drikk deg i hjel.<br><i>*blblblblbl*</i><br>Hei, skål!"}
];

// Fetch the invisible div I want the songs to be in
const divSongList = document.getElementById("divSongList");

for (let i=0; i<arrSongList.length; i++) {
    // Iterate through the list and create a new div block per song
    let addSong = document.createElement("div");
    addSong.id = arrSongList[i].id;
    addSong.className = "songBox";
    addSong.innerHTML = "<h2><i>"+arrSongList[i].title+"</i></h2>";

    // The lyrics are added as an initially invisible paragraph within each song-div
    let addLyrics = document.createElement("p");
    addLyrics.innerHTML = arrSongList[i].lyrics;
    addLyrics.style.display = "none";
    // With their own id, which I'll fetch later
    addLyrics.id = arrSongList[i].id+"_lyr";

    addSong.append(addLyrics);
    divSongList.appendChild(addSong);
}

// Another array for the songBox div's themselves, which I'll need to...
const arrSongBox = document.getElementsByClassName("songBox");

// Need a function to make each songBox its own "button" to toggle its lyrics
function attachToggle(index) {
    arrSongBox[index].addEventListener("click", function(){
        // This will then find that corresponding lyric-paragraph (via the new array's index)
        let lyricPara = document.getElementById(arrSongBox[index].id+"_lyr");
        // and simply toggle the CSS display
        if (lyricPara.style.display === "none") {
            lyricPara.style.display = "block";
        }
        else {
            lyricPara.style.display = "none";
        }
    });
}

// Then we simply iterate this through all the songs
for (let i=0; i<arrSongBox.length; i++) {
    attachToggle(i);
}