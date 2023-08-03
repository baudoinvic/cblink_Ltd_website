export { };

declare global {
    interface Window {
        example: any;
    }
}


export interface Values {
    name: string
    tinNumber: string
    phoneNumber: string
    email: string,
    logoImageUrl: string,
    managerName: string
    managerPhone: number
    managerEmail: string
    address: AddressObject
    verificationCode: number
}

export interface AddressObject {
    cell: string,
    district: string,
    sector: string
}

export interface uploadedFile {
    name: string,
    url: string,
    size: number,
    type: string
}