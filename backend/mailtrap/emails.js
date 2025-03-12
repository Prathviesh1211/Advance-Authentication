import { mailtrapClient, sender } from "./mailtrap.config.js";
import {VERIFICATION_EMAIL_TEMPLATE} from "./emailTemplate.js"

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