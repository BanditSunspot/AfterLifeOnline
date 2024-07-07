document.addEventListener('DOMContentLoaded', function () {
    const Temp = document.getElementById("MembersTemplate").content;
    const DevContainer = document.getElementById("Devs");
    const DesignerContainer = document.getElementById("Designers");
    const ModelisateurContainer = document.getElementById("Modelisateurs");

    class Member{
        constructor (Img, Name, Desc){
            this.img = Img;
            this.name = Name;
            this.desc = Desc;
        }
    }

    Devs = [];
    Designers = [];
    Modelisateurs = [];

    Devs.push(new Member("https://cdn.discordapp.com/avatars/349225287201980438/582cee0b85462a2d64f365e36d03d815.webp?size=128", "Furtif7", "Help join us on AfterLife Project"));
    Devs.push(new Member("https://cdn.discordapp.com/avatars/487668925484630031/9669aba25331e3c01a90e0edaa59154d.webp?size=128", "L'oricy", "▁▂▃▄▅▆▇█ 𝙇𝙤𝙖𝙙𝙞𝙣𝙜…</br>꧁｡ﾟWelcome L'oricy｡ﾟ꧂"));
    Devs.push(new Member("https://cdn.discordapp.com/avatars/230996019838582795/4dab43cf65f7412c21c291d25336524f.webp?size=128", "RoM", "💻 DevFullStack (JAVA, Python, GO, Angular, React)"));

    Designers.push(new Member("https://cdn.discordapp.com/avatars/551076883887030286/2ebeaa68535849b1daffb4f8c3c679c8.webp?size=128", "Kasper", "kasperpo"));
    Modelisateurs.push(new Member("https://cdn.discordapp.com/avatars/985150004282945547/fbae60d7da44bbc386c4d413f92d0d48.webp?size=128", "Constan57", ""));

    const AddDev = (member) => {
        const annonce = Temp.cloneNode(true);
        annonce.getElementById("ProfilPic").src = member.img;
        annonce.getElementById("ProfilName").innerHTML = member.name;
        annonce.getElementById("ProfilDesc").innerHTML = member.desc;
        DevContainer.appendChild(annonce);
    };

    Devs.forEach(dev => {
        AddDev(dev);
    });
    
    const AddDesigner = (member) => {
        const annonce = Temp.cloneNode(true);
        annonce.getElementById("ProfilPic").src = member.img;
        annonce.getElementById("ProfilName").innerHTML = member.name;
        annonce.getElementById("ProfilDesc").innerHTML = member.desc;
        DesignerContainer.appendChild(annonce);
    };

    Designers.forEach(designer => {
        AddDesigner(designer);
    });
    
    const AddModelisateur = (member) => {
        const annonce = Temp.cloneNode(true);
        annonce.getElementById("ProfilPic").src = member.img;
        annonce.getElementById("ProfilName").innerHTML = member.name;
        annonce.getElementById("ProfilDesc").innerHTML = member.desc;
        ModelisateurContainer.appendChild(annonce);
    };

    Modelisateurs.forEach(modelisateur => {
        AddModelisateur(modelisateur);
    });
});