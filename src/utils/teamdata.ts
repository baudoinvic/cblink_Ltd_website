import precieux from './../assets/precieux.png';
import benoit from './../assets/benoit.jpg';
import phionah from './../assets/phionah.jpg';
import valantin from './../assets/valantin.jpeg';


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
        profileImage: valantin,
        name: 'Valantin',
        role: 'Developer',
        description: "",
        socialMedias: {
            instagram: "",
            linkedin: "https://www.linkedin.com/in/ishimwevalentin/",
            twitter: "",
        }
        
    }, {
        profileImage: phionah,
        name: 'phionah',
        role: 'Developer',
        description: "",
        socialMedias: {
            instagram: "",
            linkedin: "https://www.linkedin.com/in/phionah-kirabo-0488481b0/",
            twitter: "",
        }
    }, {
        profileImage: benoit,
        name: 'Benoit',
        role: 'Project Manager',
        description: "",
        socialMedias: {
            instagram: "",
            linkedin: "https://www.linkedin.com/in/beno%C3%AEt-nubahumpatse-65b136179/",
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


