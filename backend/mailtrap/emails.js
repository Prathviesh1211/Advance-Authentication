import { mailtrapClient, sender } from "./mailtrap.config.js";
import {PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE} from "./emailTemplate.js"

export const sendVerificationEmail=async(email,verificationToken)=>{

    const recipient=[{email}];

    try{

        const response=await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:'Verify your email',
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verification"
        });

        console.log("Email sent successfully",response);

    }catch(error){
        console.error(`Error sending Verification email`,error);
        throw new Error(`Error sending Verification email :${error}`)
    }
}

export const sendWelcomeEmail=async(email,name)=>{
    const recipient=[{email}];

    try{
        const response=await mailtrapClient.send({
            from:sender,
            to:recipient,
            template_uuid: "93aa7020-1f8b-4ea7-a53e-5682ce626238",
            template_variables: {
                "company_info_name": "Advance-Auth Comapany",
                "name":name            
            }
        })
        console.log(response);
    }catch(error){
        console.error('Error sending Welcome Email',error);
        throw new Error(`Error sending welcome email ${error}`)
    }
}

export const sendPasswordResetEmail=async (email,resetURL)=>{
    const recipient=[{email}]
    try{
        const response=await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
            category:"Password Reset"
        })


    }catch(error){
        console.error(`Error in sending password reset email`,error);
        throw new Error(`Error in sending password reset email :${error}`)
    }
}

export const sendResetSuccessEmail=async (email)=>{
    const recipient=[{email}];
    try{
        const result=await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Password reset successfully",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password Reset"
        })
        console.log(`Password reset email sent Successfully`);
    }catch(error){
        console.error(`Error sending password reset success email `,error);
        throw new Error(`Error sending password reset success email :${error}`)
    }
}