import precieux from './../assets/precieux.png';

interface TeamMemberObject {
    profileImage: any,
    name: string,
    role: string,
    description: string,
    socialMedias: Object,
}

const teamData: Array<TeamMemberObject> = [
    {
        profileImage: "https://media.licdn.com/dms/image/C4D03AQFBNeF0uX6TOg/profile-displayphoto-shrink_800_800/0/1633197711145?e=1695859200&v=beta&t=tp5oSmI30CcRXflutZvfAoni0Wd8TfjztsbLq50O4M4",
        name: ' Santus',
        role: 'Chief Executive Officer',
        description: "",
        socialMedias: {
            instagram: "",
            linkedin: "https://www.linkedin.com/in/santus-habumugisha-517049191/",
            twitter: "",
            
        }
    },
    {
        profileImage: "https://media.licdn.com/dms/image/D4D03AQFmUucXvRfA9Q/profile-displayphoto-shrink_800_800/0/1681582490710?e=2147483647&v=beta&t=GOeXamSenYUZj0XrvCDJfRECOxQkdo6g3iQ4hnh7ttk",
        name: 'Cynthia',
        role: 'Marketing Officer',
        description: "",
        socialMedias: {
            instagram: "",
            linkedin: "",
            twitter: "",
        }
    }, {
        profileImage: precieux,
        name: 'Precieux',
        role: 'Developer',
        description: "",
        socialMedias: {
            instagram: "https://instagram.com/precieux_64",
            linkedin: "https://www.linkedin.com/in/mugisha-precieux-410336227/",
            website: "https://mprecieux.vercel.app",
            twitter: "https://twitter.com/Pre_mugisha",
        }
    }, {
        profileImage: "https://www.linkedin.com/dms/D4D06AQFAN0M84-nRlA/messaging-attachmentFile/0/1690454906129?m=AQJigQSPLOOTBwAAAYmW99pkTPZ2x62c-Npld_Okzkc3SM40j-4EXqk6HQ&ne=1&v=beta&t=rrHEt7Dom85n92hf8fHxF9KYQLAJBwiihQ6SEUGYdB8",
        name: 'Valantin',
        role: 'Developer',
        description: "",
        socialMedias: {
            instagram: "",
            linkedin: "https://www.linkedin.com/in/ishimwevalentin/",
            twitter: "",
        }
        
    }, {
        profileImage: "https://www.linkedin.com/dms/D4D06AQF0mQz5N3FO-w/messaging-attachmentFile/0/1690454640905?m=AQKrNrOlnQSB7AAAAYmW8ulTapeguNjVP9gAgDlfdageZKLEfyDXcRUTgA&ne=1&v=beta&t=IjhUuKYICEbq5-k_FrI1OAcs-nv53qsKIEUzH1VK7LM",
        name: 'phionah',
        role: 'Developer',
        description: "",
        socialMedias: {
            instagram: "",
            linkedin: "https://www.linkedin.com/in/phionah-kirabo-0488481b0/",
            twitter: "",
        }
    }, {
        profileImage: "https://www.linkedin.com/dms/D4D06AQFhxzT9tZDNZQ/messaging-attachmentFile/0/1690454912143?m=AQKAl1fRFIRYnAAAAYmW-IqGeTDl5bgZZd3TKzUlFfjn4h-ORQNWrLBTzw&ne=1&v=beta&t=oclnuLJrfZYGxg4ffEXHP-RT3IgiunEwWd1e70vgnHo",
        name: 'Benoit',
        role: 'Project Manager',
        description: "",
        socialMedias: {
            instagram: "",
            linkedin: "",
            twitter: "",
        }
    },
    {
        profileImage: "https://images.unsplash.com/photo-1662848586769-314289d4c8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        name: 'Agnes',
        role: 'Project Manager',
        description: "",
        socialMedias: {
            instagram: "",
            linkedin: "",
            twitter: "",
        }
    },
    {
        profileImage: "https://images.unsplash.com/photo-1663079974166-b154aac575d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        name: 'Fabrice',
        role: ' Developer',
        description: "",
        socialMedias: {
            instagram: "",
            linkedin: "",
            twitter: "",
        }
    },
]

export default teamData

//Profile image url from unsplash


