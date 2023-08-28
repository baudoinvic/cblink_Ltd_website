import React, { useContext, createContext, useEffect, useState } from "react";
import { BASE_URL } from "../env";
import { uploadedFile, Values } from "../types";
const AdminContext = createContext({});

export const useAdmin = () => {
    return useContext(AdminContext);
};

export const AdminProvider = ({ children }: any) => {

    const newCompany = async (formData: Values) => {
        try {

            const res = await fetch(
                `${BASE_URL}/company/new`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            const data = await res.json();
            localStorage.setItem("companyId", data.company._id)
            return { status: true, data };
        } catch (error) {
            console.log(error)
            return { status: false, message: "Error registering company!!!" }
        }
    }
    
    const uploadFiles = async (files: uploadedFile[]) => {
        try {
            console.log(localStorage.getItem("companyId"));
            if (!localStorage.getItem("companyId")) return { status: false }
            const res = await fetch(
                `${BASE_URL}/company/files/upload/${localStorage.getItem("companyId")}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({files}),
                }
            );  
            const data = await res.json();
            return { status: true, data };
        } catch (error) {
            console.log(error)
            return { status: false }
        }
    }

    return (
        <AdminContext.Provider value={{ uploadFiles, newCompany }}>
            {children}
        </AdminContext.Provider>

    );
};
