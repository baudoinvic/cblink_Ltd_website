interface ServiceObject {
    id: number,
    name: string,
    subheading: string,
    image: any,
    description: string;
}


const services: Array<ServiceObject> = [
    {
        id: Math.random(),
        name: 'Software Development',
        subheading: 'Expert in desktop apps',
        image: 'https://assets.rbl.ms/25591710/origin.jpg',
        description: 'Do you wish to develo an application that can work offline and secure your stuffs from public internet world, please do not hestate to corparate with us! '
    },
    {
        id: Math.random(),
        name: 'Web Development',
        subheading: 'Webapps, E-Commerce websites',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        description: 'Would you like to connect your business operations using web technologies, we are experts in web application development and ready to help you! '
    },
    {
        id: Math.random(),
        name: 'Mobile Application Development',
        subheading: 'Customizable mobile app',
        image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: ' Mobile phones are now comfirmed as the best tools to use in our daily life, thereafter mobile applications are vital apps to simplify our operations including business!'
    },
   
    {
        id: Math.random(),
        name: 'Web Hosting',
        subheading: 'Domain names and webhosting',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/b4873b133640599.61c23487d0810.png',
        description: ' We host client website at faster and efficient online servers with popular domain names! '
    },
    {
        id: Math.random(),
        name: 'IT Consulting',
        subheading: 'Advice on IT and internet tools use',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXQlMjBjb25zdWx0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: ' CB-LINK LTD is consulting business about the technologies to use including network, security, Software, Databases. '
    },
    {
        id: Math.random(),
        name: 'Hardware & Software Maintenance',
        subheading: 'Maintenance is impotant.',
        image: 'https://www.cgtechnologies.com/wp-content/uploads/2022/01/computer-education-training-class-picture-id1210738055-2.jpg',
        description: ' Your devices should be maintained to last longer and acquire speed efficience. We are here to help you maintaining your devices so that they can perform efficiently!'
    },
    
   
]

export default services
